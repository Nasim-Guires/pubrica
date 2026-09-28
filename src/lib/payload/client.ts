import type {
  PayloadListResponse,
  PayloadPost,
  PayloadCategory,
  PayloadTag,
  PayloadMedia,
  PostSource,
} from "./types";

export const PAYLOAD_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "https://pubrica-blog.vercel.app";

/** Revalidate Payload data every 5 minutes (ISR) */
const REVALIDATE_SECONDS = 300;

async function payloadFetch<T>(path: string, searchParams?: Record<string, string | number | undefined>): Promise<T> {
  const url = new URL(path, PAYLOAD_URL);
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Payload request failed (${res.status}): ${url.toString()}`);
  }

  return res.json() as Promise<T>;
}

/** Resolve a Payload media object/url into an absolute URL usable by next/image */
export function mediaUrl(media?: PayloadMedia | string | null): string | null {
  if (!media) return null;
  const raw = typeof media === "string" ? media : media.url;
  if (!raw) return null;
  if (raw.startsWith("http")) return raw;
  return `${PAYLOAD_URL}${raw}`;
}

/** Base route for each post source — academy links use the post's full urlPath, everything else uses its bare slug. */
const SOURCE_BASE_PATH: Record<PostSource, string> = {
  blog: "/blog",
  academy: "/academy",
  insights: "/insights",
  career: "/careers",
  "call-for-papers": "/call-for-papers",
};

/** The canonical detail-page URL for a post, routed by its source. */
export function postHref(post: Pick<PayloadPost, "source" | "slug" | "urlPath">): string {
  const base = SOURCE_BASE_PATH[post.source] ?? "/blog";
  const path = post.source === "academy" ? post.urlPath || post.slug : post.slug;
  return `${base}/${path}`;
}

export interface GetPostsParams {
  source: PostSource;
  page?: number;
  limit?: number;
  categorySlug?: string;
  tagSlug?: string;
  /** Filter to posts whose urlPath starts with this prefix (e.g. "sample-work/") — used for hub/section listings. */
  urlPathPrefix?: string;
}

export async function getPosts({
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

  return payloadFetch<PayloadListResponse<PayloadPost>>("/api/posts", params);
}

export interface SearchPostsParams {
  q: string;
  page?: number;
  limit?: number;
}

/** Site-wide title search across every published post, used by the header search bar. */
export async function searchPosts({ q, page = 1, limit = 12 }: SearchPostsParams): Promise<PayloadListResponse<PayloadPost>> {
  return payloadFetch<PayloadListResponse<PayloadPost>>("/api/posts", {
    "where[title][like]": q,
    "where[publishing.status][equals]": "published",
    sort: "-publishing.publishedAt",
    depth: 1,
    page,
    limit,
  });
}

export async function getPostBySlug(
  slug: string,
  source: PostSource
): Promise<PayloadPost | null> {
  const result = await payloadFetch<PayloadListResponse<PayloadPost>>("/api/posts", {
    "where[slug][equals]": slug,
    "where[source][equals]": source,
    depth: 2,
    limit: 1,
  });
  return result.docs[0] ?? null;
}

export async function getCategories(limit = 100): Promise<PayloadCategory[]> {
  const result = await payloadFetch<PayloadListResponse<PayloadCategory>>("/api/categories", { limit });
  return result.docs;
}

export async function getTags(limit = 100): Promise<PayloadTag[]> {
  const result = await payloadFetch<PayloadListResponse<PayloadTag>>("/api/tags", { limit });
  return result.docs;
}
