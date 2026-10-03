import type { Metadata } from "next";
import AcademyArticlePage, { generateMetadata as articleMetadata } from "../page";

export const revalidate = 300;

interface AcademyNestedArticlePageProps {
  params: Promise<{ category: string; slug: string; rest: string[] }>;
}

// Some academy posts live three or more segments deep (e.g. study-guide/research-writing/<slug>).
// The article page only checks that `category` + `slug` rebuild the post's urlPath, so the leading
// segments are folded into `category` and the last one is the slug.
async function toArticleParams(params: AcademyNestedArticlePageProps["params"]) {
  const { category, slug, rest } = await params;
  const segments = [category, slug, ...rest];
  return {
    category: segments.slice(0, -1).join("/"),
    slug: segments[segments.length - 1],
  };
}

export async function generateMetadata({ params }: AcademyNestedArticlePageProps): Promise<Metadata> {
  return articleMetadata({ params: toArticleParams(params) });
}

export default async function AcademyNestedArticlePage({ params }: AcademyNestedArticlePageProps) {
  return AcademyArticlePage({ params: toArticleParams(params) });
}
