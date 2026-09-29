import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPosts, mediaUrl } from "@/lib/payload";

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
  // Fetch up to 8 items or adjust limit as needed
  const { docs } = await getPosts({ source: "academy", urlPathPrefix: "manuscript-guidelines/", limit: 8 });

  // Sort descending (latest date first)
  const articles = docs
    .filter((post) => post.urlPath !== "manuscript-guidelines" && post.heroImage)
    .sort((a, b) => {
      const dateA = new Date(a.publishing?.publishedAt || a.createdAt).getTime();
      const dateB = new Date(b.publishing?.publishedAt || b.createdAt).getTime();
      return dateB - dateA;
    })
    .slice(0, 8); // Ensure exactly 8 items

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
            return (
              <Link
                key={post.id}
                href={`/academy/manuscript-guidelines/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-gray-300 transition-all duration-200"
              >
                {/* Image Container */}
                <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                  <Image
                    src={image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 pt-3 flex flex-col justify-start">
                  <span className="text-[11px] text-gray-400 font-normal mb-1.5">
                    {formatDate(post.publishing?.publishedAt || post.createdAt)}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 line-clamp-3 leading-snug">
                    {post.title}
                  </h3>
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