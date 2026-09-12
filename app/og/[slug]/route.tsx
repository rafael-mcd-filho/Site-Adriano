import { ogCards, renderOgImage, type OgSlug } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(ogCards).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const card = ogCards[slug as OgSlug] ?? ogCards.home;
  return renderOgImage(card);
}
