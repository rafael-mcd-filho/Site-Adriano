// Runs the actual server action against a loopback webhook; never sends a lead externally.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import vm from 'node:vm';
import ts from 'typescript';

function loadTs(file, imports, env) {
  const output = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loaded = { exports: {} };
  vm.runInNewContext(output, {
    exports: loaded.exports, module: loaded,
    require: (name) => { if (!(name in imports)) throw Error('Unexpected import: ' + name); return imports[name]; },
    process: { env }, URL, FormData, crypto: globalThis.crypto, fetch,
    AbortSignal, console: { error() {} },
  }, { filename: file });
  return loaded.exports;
}

(async () => {
  const received = [];
  let responseCode = 200;
  const server = createServer(async (request, response) => {
    let body = '';
    for await (const chunk of request) body += chunk;
    received.push({ method: request.method, body: JSON.parse(body) });
    response.writeHead(responseCode).end();
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const env = { FORM_WEBHOOK_URL: `http://127.0.0.1:${server.address().port}/lead` };
  try {
    const attribution = loadTs('lib/contact-attribution.ts', {}, env);
    const { submitContact } = loadTs('app/actions.ts', {
      'next/navigation': { redirect: url => { throw new Error('REDIRECT:' + url); } },
      '@/lib/contact-attribution': attribution,
      '@/lib/site': { siteConfig: { url: 'https://dradrianorgermano.com.br' } },
    }, env);
    function form(overrides = {}) {
      const data = new FormData();
      for (const [key, value] of Object.entries({
        name: 'Teste local', whatsapp: '(83) 99999-0000', message: 'Horários de consulta?',
        page: 'apneia-do-sono', consent: 'yes', ...overrides,
      })) data.set(key, value);
      return data;
    }
    const campaign = attribution.captureContactAttribution(
      'https://dradrianorgermano.com.br/apneia-do-sono?utm_source=google&utm_campaign=sono&email=privado@example.com',
      'https://example.com/pagina?token=privado#fragmento',
    );
    assert.equal(campaign.referrerOrigin, 'https://example.com');
    assert.equal(campaign.utm.utm_campaign, 'sono');
    await assert.rejects(submitContact({}, form({ attribution: JSON.stringify(campaign) })), /REDIRECT:\/obrigado\?origem=apneia-do-sono/);
    assert.equal(received.length, 1);
    const payload = received[0].body;
    assert.equal(received[0].method, 'POST');
    assert.equal(payload.pagePath, '/apneia-do-sono');
    assert.equal(payload.whatsapp, '83999990000');
    assert.equal(payload.message, 'Horários de consulta?');
    assert.equal(payload.formId, 'contato-apneia-do-sono');
    assert.equal(payload.schemaVersion, 2);
    assert.equal(payload.attribution.utm.utm_source, 'google');
    assert.ok(payload.submissionId && !Number.isNaN(Date.parse(payload.submittedAt)));
    assert.ok(!JSON.stringify(payload).includes('privado'));
    for (const invalid of [{ consent: '' }, { name: 'A' }, { whatsapp: '123' }, { message: 'x'.repeat(1001) }, { page: '../externo' }, { company: 'spam' }]) {
      assert.equal((await submitContact({}, form(invalid))).status, 'error');
    }
    assert.equal(received.length, 1, 'Invalid requests must not reach webhook');
    env.FORM_WEBHOOK_URL = '';
    assert.equal((await submitContact({}, form())).status, 'configuration');
    env.FORM_WEBHOOK_URL = `http://127.0.0.1:${server.address().port}/lead`;
    responseCode = 500;
    assert.equal((await submitContact({}, form())).status, 'error');
    responseCode = 200;
    await assert.rejects(submitContact({}, form({ message: '', attribution: '{invalid' })), /REDIRECT:/);
    assert.equal(received.at(-1).body.message, '');
    assert.deepEqual(received.at(-1).body.attribution, { referrerOrigin: null, utm: {} });
    const unsafe = attribution.parseContactAttribution(JSON.stringify({ referrerOrigin: 'javascript:alert(1)', utm: { utm_source: 'lead@example.com', utm_medium: '83999990000' } }));
    assert.equal(JSON.stringify(unsafe), JSON.stringify({ referrerOrigin: null, utm: {} }));
    console.log('Contact checks passed: delivery, attribution, validation, unavailable webhook and failure response.');
  } finally {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
