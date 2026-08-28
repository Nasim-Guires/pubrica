import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Manuscript Guidelines - Pubrica Academy",
  description: "Guidance on manuscript preparation — copyediting, peer review, rejection reasons, reporting guidelines, and submission best practices.",
  alternates: {
    canonical: "https://pubrica.com/academy/manuscript-guidelines/",
  },
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ManuscriptGuidelinesPage() {
  const { docs } = await getPosts({ source: "academy", urlPathPrefix: "manuscript-guidelines/", limit: 20 });
  const articles = docs.filter((post) => post.urlPath !== "manuscript-guidelines" && post.heroImage);

  return (
    <section className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8">
          Manuscript Guidelines
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
            return (
              <Link
                key={post.id}
                href={`/academy/manuscript-guidelines/${post.slug}`}
                className="group block bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative w-full h-44 bg-gray-200 overflow-hidden">
                  <Image
                    src={image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <span className="text-xs text-gray-400 font-medium mb-1">
                    {formatDate(post.publishing?.publishedAt)}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 line-clamp-3 transition-colors duration-200 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{getDescription(post)}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {articles.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-6">No manuscript guideline articles found.</p>
        )}
      </div>
    </section>
  );
}
