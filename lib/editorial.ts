/** Atualização do texto e confirmação clínica são registros diferentes.
 * Preencher clinicalReviews por rota somente após a validação do doutor.
 * Exemplo: "cirurgia-de-siso": { date: "2026-09-15" }.
 */
export const clinicalReviews: Record<string, { date: string }> = {};
