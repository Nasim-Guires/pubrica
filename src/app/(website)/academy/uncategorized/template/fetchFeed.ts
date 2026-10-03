import { PAYLOAD_URL } from "@/lib/payload/client";
import { getDescription } from "@/lib/payload/lexical";
import type { PayloadListResponse, PayloadPost, PostSource } from "@/lib/payload/types";

/**
 * Page-local Payload reader for this page only — a copy of
 * src/lib/payload/summaries.ts's getPostSummaries with one addition: it also
 * selects `categories`, which that shared helper omits. This page's cards span
 * two different real categories ("Research Impact" insights posts and
 * "Research Writing" academy posts) and must show each post's own badge, so the
 * shared helper isn't reused here — per this task's instruction to create a
 * page-specific version rather than edit the shared one. Deliberately a
 * standalone copy, not a shared import from the sibling
 * academy/study-guide/editing-and-proof-reading/ page, which has the same
 * underlying live-content composition but must not be modified or imported from.
 */

const REVALIDATE_SECONDS = 300;
const FIELDS = ["title", "slug", "urlPath", "heroImage", "seo", "publishing", "categories"] as const;

async function payloadGet<T>(searchParams: Record<string, string | number | undefined>): Promise<T> {
  const url = new URL("/api/posts/", PAYLOAD_URL);
  for (const [key, value] of Object.entries(searchParams)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Payload request failed (${res.status}): ${url.toString()}`);
  }

  return res.json() as Promise<T>;
}

export interface FetchCategoryFeedParams {
  source: PostSource;
  categorySlug: string;
  limit?: number;
}

export async function fetchCategoryFeed({
  source,
  categorySlug,
  limit = 50,
}: FetchCategoryFeedParams): Promise<PayloadPost[]> {
  const params: Record<string, string | number> = {
    "where[source][equals]": source,
    "where[categories.slug][equals]": categorySlug,
    "where[publishing.status][equals]": "published",
    sort: "-publishing.publishedAt",
    limit,
    depth: 1,
  };
  for (const field of FIELDS) params[`select[${field}]`] = "true";

  const result = await payloadGet<PayloadListResponse<PayloadPost>>(params);

  // Same excerpt-body fallback as the shared helper: posts with no SEO
  // description need their body fetched once more to build a card excerpt.
  const needsBody = result.docs.filter((post) => getDescription(post) === "");
  if (needsBody.length > 0) {
    const bodies = await payloadGet<PayloadListResponse<Pick<PayloadPost, "id" | "content">>>({
      "where[id][in]": needsBody.map((post) => post.id).join(","),
      "select[content]": "true",
      depth: 1,
      limit: needsBody.length,
    });
    const contentById = new Map(bodies.docs.map((doc) => [doc.id, doc.content]));
    for (const post of needsBody) post.content = contentById.get(post.id);
  }

  return result.docs;
}
