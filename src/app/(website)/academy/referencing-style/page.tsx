import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Referencing Style - Pubrica Academy",
  description: "Citation and referencing style guidance for researchers from Pubrica Academy.",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ReferencingStylePage() {
  const { docs } = await getPosts({ source: "academy", urlPathPrefix: "referencing-style/", limit: 20 });
  const articles = docs.filter((post) => post.heroImage);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Referencing Style</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
            return (
              <Link
                key={post.id}
                href={`/academy/referencing-style/${post.slug}`}
                className="group block bg-white rounded overflow-hidden"
              >
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden mb-3 rounded">
                  <Image
                    src={image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block mb-1">
                    {formatDate(post.publishing?.publishedAt)}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 leading-snug">
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
      </div>
    </section>
  );
}
