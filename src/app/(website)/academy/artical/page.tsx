import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Academy Articles - Pubrica",
  description: "Writing and grammar guidance for researchers — parallel construction, tense, phrasing, and more from Pubrica Academy.",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ArticalIndexPage() {
  const { docs } = await getPosts({ source: "academy", urlPathPrefix: "artical/", limit: 20 });
  // One post's slug carries a malformed unicode hyphen upstream in Payload and 404s on this route; exclude rather than link to a dead page.
  const articles = docs.filter((post) => post.heroImage && !post.slug.includes("‐"));

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Articles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((post) => {
          const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
          return (
            <Link
              key={post.id}
              href={`/academy/artical/${post.slug}`}
              className="group block bg-white overflow-hidden"
            >
              <div className="relative w-full h-44 bg-gray-100 mb-3 rounded overflow-hidden">
                <Image
                  src={image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block mb-1">
                  {formatDate(post.publishing?.publishedAt)}
                </span>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 leading-snug line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{getDescription(post)}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {articles.length === 0 && (
        <p className="text-sm text-slate-500 text-center py-12">No articles found.</p>
      )}
    </section>
  );
}
