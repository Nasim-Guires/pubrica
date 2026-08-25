import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";

export const revalidate = 300;

const PAGE_SIZE = 12;

export const metadata: Metadata = {
  title: "Journal Templates | Pubrica Academy",
  description: "Formatting templates for leading academic and medical journals.",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface JournalTemplatesPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function JournalTemplatesPage({ searchParams }: JournalTemplatesPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const { docs: posts, hasNextPage, hasPrevPage } = await getPosts({
    source: "academy",
    urlPathPrefix: "journals-templates/",
    page,
    limit: PAGE_SIZE,
  });

  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Journal Templates</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Formatting templates and submission guidance for leading academic and medical journals.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/academy" className="text-xs font-semibold text-slate-500 hover:text-emerald-700">
            &larr; Back to Academy
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
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

        {(hasPrevPage || hasNextPage) && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <Link
              href={`/academy/journal-templates?page=${page - 1}`}
              className={`px-4 py-2 rounded text-xs font-semibold border transition-colors ${
                hasPrevPage
                  ? "border-slate-200 text-slate-700 hover:border-emerald-700 hover:text-emerald-700"
                  : "border-slate-100 text-slate-300 pointer-events-none"
              }`}
            >
              &larr; Previous
            </Link>
            <Link
              href={`/academy/journal-templates?page=${page + 1}`}
              className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                hasNextPage
                  ? "bg-[#0b2825] text-white hover:bg-[#123633]"
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
