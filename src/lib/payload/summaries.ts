import { PAYLOAD_URL, type GetPostsParams } from "./client";
import { getDescription } from "./lexical";
import type { PayloadListResponse, PayloadPost, PostSource } from "./types";

/**
 * Lean Payload reads for the Insights and Academy routes.
 *
 * Same queries as getPosts/getPostBySlug in ./client, with two differences:
 *  - they hit "/api/posts/" directly (the un-slashed path 308-redirects there,
 *    costing an extra round-trip per request);
 *  - list queries `select` only the fields card grids render, instead of every
 *    post's full rich-text body (e.g. /academy's 40-post list: 1.4 MB -> ~46 KB).
 *
 * Kept separate from ./client so other pages using getPosts are unaffected.
 */

const REVALIDATE_SECONDS = 300;

/** Fields rendered by post cards / recent-post lists (id is always returned). */
const SUMMARY_FIELDS = ["title", "slug", "urlPath", "heroImage", "seo", "publishing"] as const;

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

/**
 * Card-sized version of getPosts: identical filters, sort, pagination and field
 * values, minus the post body. Posts whose SEO description is empty (so
 * getDescription would fall back to the body) get their `content` fetched in
 * one follow-up request, keeping card descriptions exactly as before.
 */
export async function getPostSummaries({
  source,
  page = 1,
  limit = 12,
  categorySlug,
  tagSlug,
  urlPathPrefix,
}: GetPostsParams): Promise<PayloadListResponse<PayloadPost>> {
  const params: Record<string, string | number> = {
    "where[source][equals]": source,
    "where[publishing.status][equals]": "published",
    page,
    limit,
    sort: "-publishing.publishedAt",
    depth: 1,
  };
  if (categorySlug) params["where[categories.slug][equals]"] = categorySlug;
  if (tagSlug) params["where[tags.slug][equals]"] = tagSlug;
  if (urlPathPrefix) params["where[urlPath][like]"] = urlPathPrefix;
  for (const field of SUMMARY_FIELDS) params[`select[${field}]`] = "true";

  const result = await payloadGet<PayloadListResponse<PayloadPost>>(params);

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

  return result;
}

/** Same as getPostBySlug in ./client (full post, depth 2), without the redirect hop. */
export async function getPostDetail(slug: string, source: PostSource): Promise<PayloadPost | null> {
  const result = await payloadGet<PayloadListResponse<PayloadPost>>({
    "where[slug][equals]": slug,
    "where[source][equals]": source,
    depth: 2,
    limit: 1,
  });
  return result.docs[0] ?? null;
}
