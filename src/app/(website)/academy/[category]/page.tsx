import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, MessageSquare, Mail, Calendar, User, ChevronRight } from "lucide-react";
import { getPostBySlug, getDescription } from "@/lib/payload";
import { LexicalRenderer } from "@/lib/payload/lexical";

export const revalidate = 300;

interface AcademyFlatArticlePageProps {
  params: Promise<{ category: string }>;
  searchParams?: Promise<{ page?: string }>;
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: AcademyFlatArticlePageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const post = await getPostBySlug(slug, "academy");
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

export default async function AcademyFlatArticlePage({
  params,
  searchParams,
}: AcademyFlatArticlePageProps) {
  const { category: slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentPage = Number(resolvedSearchParams.page) || 1;

  const post = await getPostBySlug(slug, "academy");

  if (!post || post.urlPath !== slug) {
    notFound();
  }

  const categories = post.categories?.map((cat: any) => cat.name) || ["Insights", "news", "Research Impact"];
  const formattedDate = formatDate(post.publishing?.publishedAt);
  const pageHeaderTitle = post.categories?.[0]?.name || "Examples";

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#333333] font-sans pb-16">

      {/* TOP HERO BANNER */}
      <section className="relative w-full h-56 sm:h-64 bg-[#0d3b36] overflow-hidden flex items-center justify-center border-b border-teal-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2f2b] via-[#0d3b36] to-[#0a2f2b] opacity-90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
            {pageHeaderTitle}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-[1340px] mx-auto pt-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">

        {/* LEFT SIDEBAR - FILTER BY: SERVICES & RESOURCES */}
        <aside className="w-full md:w-[280px] shrink-0 space-y-6">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
            FILTER BY: SERVICES
          </h2>

          {/* Study Guide Box */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-gray-800 text-base mb-4">Study Guide</h3>
            <ul className="space-y-3.5 text-sm text-gray-600 font-medium list-none p-0">
              {[
                "Research Writing",
                "Scientific Writing",
                "Health Medical Writing",
                "Editing and Proofreading",
                "Publications",
                "Research Impact",
                "Medical Communication",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Box */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-gray-800 text-base mb-4">Resources</h3>
            <ul className="space-y-3.5 text-sm text-gray-600 font-medium list-none p-0">
              {["Template", "Checklist", "Guidelines", "Q&A", "Factsheet"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-0 cursor-pointer"
                />
                <span className="text-blue-600 font-bold">Examples</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* MAIN ARTICLE CONTENT & PAGINATION */}
        <main className="flex-1 min-w-0 flex flex-col justify-between">
          <article className="bg-white border border-gray-200/80 rounded-xl overflow-hidden shadow-xs p-8 sm:p-12 mb-8">

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category: string, index: number) => (
                <span
                  key={index}
                  className="bg-[#0d3b36] text-white text-xs px-3 py-1 rounded-md font-semibold tracking-wide uppercase"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium mb-8 pb-6 border-b border-gray-100">
              {formattedDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-teal-700" />
                  {formattedDate}
                </span>
              )}
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-teal-700" />
                  Source: {post.author}
                </span>
              )}
            </div>

            {/* Article Content Area */}
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-6 [&_ol]:list-none [&_ol]:p-0 [&_ul]:list-none [&_ul]:p-0">
              <LexicalRenderer content={post.content} title={post.title} />
            </div>
          </article>

          {/* HORIZONTAL BOXED PAGINATION BAR (Outside Content Card) */}
          <div className="flex items-center justify-center gap-1 pt-2">
            {[1, 2, 3].map((page) => {
              const isActive = currentPage === page;
              return (
                <Link
                  key={page}
                  href={`/academy/${slug}/?page=${page}`}
                  className={`w-9 h-9 flex items-center justify-center font-medium text-sm border transition-colors ${isActive
                      ? "bg-[#3182ce] text-white border-[#3182ce]"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                    }`}
                >
                  {page}
                </Link>
              );
            })}
            <Link
              href={`/academy/${slug}/?page=${Math.min(currentPage + 1, 3)}`}
              className="w-9 h-9 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100 font-medium text-sm border border-gray-300 transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </main>

        {/* FLOATING ACTION BUTTONS */}
   
      </div>
    </div>
  );
}