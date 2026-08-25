import { SERVICES_DATA, TESTIMONIALS_DATA, Service, Blog, Testimonial } from './constants';
import { getPosts, getPostBySlug, mediaUrl } from './payload/client';
import { extractExcerpt, getDescription } from './payload/lexical';
import type { PayloadPost } from './payload/types';

/**
 * Synchronous mock fetches for Pubrica data to prevent unhandled promise hangs in Next.js Server Components.
 */

export function getServices(): Service[] {
  return Object.values(SERVICES_DATA);
}

export function getServiceBySlug(slug: string): Service | null {
  const service = SERVICES_DATA[slug];
  if (!service) return null;
  return service;
}

function estimateReadTime(post: PayloadPost): string {
  const text = extractExcerpt(post.content, 100000, post.title);
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function toBlog(post: PayloadPost): Blog {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: getDescription(post),
    content: extractExcerpt(post.content, 100000, post.title),
    date: post.publishing?.publishedAt
      ? new Date(post.publishing.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "",
    readTime: estimateReadTime(post),
    category: post.categories?.[0]?.name || "Blog",
    image: mediaUrl(post.heroImage) || "/images/blog/default.webp",
    author: {
      name: post.author || "Pubrica",
      role: "Editorial Team",
    },
  };
}

export async function getBlogs(limit = 6): Promise<Blog[]> {
  const { docs } = await getPosts({ source: "blog", limit });
  return docs.map(toBlog);
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const post = await getPostBySlug(slug, "blog");
  return post ? toBlog(post) : null;
}

export function getTestimonials(): Testimonial[] {
  return TESTIMONIALS_DATA;
}
