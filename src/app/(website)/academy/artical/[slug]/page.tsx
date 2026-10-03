import type { Metadata } from "next";
import AcademyArticlePage, { generateMetadata as articleMetadata } from "../../[category]/[slug]/page";

export const revalidate = 300;

interface Props {
  params: Promise<{ slug: string }>;
}

// This folder is static, so it shadows the generic academy/[category]/[slug] route for its posts.
async function toArticleParams(params: Props["params"]) {
  const { slug } = await params;
  return { category: "artical", slug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return articleMetadata({ params: toArticleParams(params) });
}

export default async function Page({ params }: Props) {
  return AcademyArticlePage({ params: toArticleParams(params) });
}
