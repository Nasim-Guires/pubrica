import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getDescription } from "@/lib/payload";
import { getPostDetail } from "@/lib/payload/summaries";
import { newsIndustryPage } from "@/lib/insights/cardPages";
import InsightPostDetail from "@/components/insight/InsightPostDetail";
import { NewsIndustryCardPage } from "@/components/insight/InsightCardPages";

export const revalidate = 300;

interface NestedInsightProps {
  params: Promise<{ slug: string; child: string }>;
}

/** The All News "News & Industry" card page lives at this nested path on pubrica.com. */
const NEWS_INDUSTRY_PATH = "news-and-industry/news";

/** Nested paths pubrica.com redirects elsewhere (linked from the News & Industry sidebar). */
const REDIRECTS: Record<string, string> = {
  "categories/news": "/insights/news-and-industry/news/",
};

export async function generateMetadata({ params }: NestedInsightProps): Promise<Metadata> {
  const { slug, child } = await params;
  const path = `${slug}/${child}`;
  if (path === NEWS_INDUSTRY_PATH) {
    return { title: { absolute: newsIndustryPage.docTitle }, description: newsIndustryPage.description };
  }
  const post = await getPostDetail(child, "insights");
  if (!post || post.urlPath !== path) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

/**
 * Insights articles addressed by their section, e.g.
 * /insights/research-services/quantitative-synthesis/ — the URL format used by
 * the live site's card pages. The post's Payload urlPath must match exactly.
 */
export default async function NestedInsightPage({ params }: NestedInsightProps) {
  const { slug, child } = await params;
  const path = `${slug}/${child}`;

  if (path === NEWS_INDUSTRY_PATH) return <NewsIndustryCardPage page={newsIndustryPage} />;
  if (REDIRECTS[path]) permanentRedirect(REDIRECTS[path]);

  return <InsightPostDetail slug={child} urlPath={path} />;
}
