import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { searchPosts, mediaUrl, postHref, getDescription } from "@/lib/payload";
import type { PostSource } from "@/lib/payload/types";

export const revalidate = 0;

const PAGE_SIZE = 12;

const SOURCE_LABELS: Record<PostSource, string> = {
  blog: "Blog",
  academy: "Academy",
  insights: "Insights",
  career: "Careers",
  "call-for-papers": "Call for Papers",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return { title: q ? `Search results for "${q}" | Pubrica` : "Search | Pubrica" };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, page: pageParam } = await searchParams;
  const query = (q ?? "").trim();
  const page = Math.max(1, Number(pageParam) || 1);

  const results = query
    ? await searchPosts({ q: query, page, limit: PAGE_SIZE })
    : null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-16">
      <section className="bg-[#0b2825] text-white py-10 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          {query ? `Search results for "${query}"` : "Search"}
        </h1>
        {results && (
          <p className="text-gray-300 text-sm">
            {results.totalDocs} {results.totalDocs === 1 ? "result" : "results"} found
          </p>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!query && (
          <p className="text-sm text-slate-500 text-center py-10">
            Enter a search term to find articles across our blog, academy, and insights.
          </p>
        )}

        {query && results && results.docs.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-10">
            No results found for &ldquo;{query}&rdquo;. Try a different search term.
          </p>
        )}

        {results && results.docs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.docs.map((post) => {
              const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
              const desc = getDescription(post);
              return (
                <Link
                  key={`${post.source}-${post.id}`}
                  href={postHref(post)}
                  className="group flex flex-col border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
                >
                  <div className="h-44 overflow-hidden relative">
                    <Image
                      src={image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wide bg-[#004d40] text-white px-2 py-1 rounded">
                      {SOURCE_LABELS[post.source]}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-[#004d40]">
                        {post.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 block">
                        📅 {formatDate(post.publishing?.publishedAt)}
                      </span>
                      <p className="text-xs text-slate-500 line-clamp-2">{desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {results && (results.hasPrevPage || results.hasNextPage) && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <Link
              href={`/search?q=${encodeURIComponent(query)}&page=${page - 1}`}
              className={`px-4 py-2 rounded text-xs font-semibold border transition-colors ${results.hasPrevPage
                ? "border-slate-200 text-slate-700 hover:border-[#004d40] hover:text-[#004d40]"
                : "border-slate-100 text-slate-300 pointer-events-none"
                }`}
            >
              &larr; Previous
            </Link>
            <Link
              href={`/search?q=${encodeURIComponent(query)}&page=${page + 1}`}
              className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${results.hasNextPage
                ? "bg-[#004d40] text-white hover:bg-[#00332a]"
                : "bg-slate-100 text-slate-300 pointer-events-none"
                }`}
            >
              Next &rarr;
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
