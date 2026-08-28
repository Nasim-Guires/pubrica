import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";
import { constructMetadata } from "@/lib/metadata";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (its hero subheading).
export const metadata = constructMetadata({
  title: "Articles - Pubrica",
  description: "Guides, explainers, and research-writing resources from the Pubrica Academy.",
  slug: "/academy/articles",
});

export const revalidate = 300;

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function AcademyArticlesPage() {
  const { docs } = await getPosts({ source: "academy", limit: 60 });
  const articles = docs.filter((p) => p.urlPath?.includes("/"));

  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-6 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Academy Articles</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Guides, explainers, and research-writing resources from the Pubrica Academy.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/academy/Forensics-2.webp";
            const desc = getDescription(post);
            return (
              <Link
                key={post.id}
                href={`/academy/${post.urlPath}`}
                className="bg-white border border-gray-200/80 rounded-md overflow-hidden shadow-xs hover:shadow-md transition-shadow block"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <Image src={image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-gray-400 block mb-2 uppercase tracking-wide">
                    {post.categories?.[0]?.name || "Academy"}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-[#0b2825] leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{desc}</p>
                  <span className="text-[11px] text-gray-400">
                    {formatDate(post.publishing?.publishedAt)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
