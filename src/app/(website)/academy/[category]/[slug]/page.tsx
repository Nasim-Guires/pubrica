import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getDescription } from "@/lib/payload";
import { LexicalRenderer } from "@/lib/payload/lexical";

export const revalidate = 300;

interface AcademyArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: AcademyArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "academy");
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

export default async function AcademyArticlePage({ params }: AcademyArticlePageProps) {
  const { category, slug } = await params;
  const post = await getPostBySlug(slug, "academy");

  // Guard against stale/incorrect category segments in a URL — only serve
  // the post at its real urlPath, not any category prefix paired with the slug.
  if (!post || post.urlPath !== `${category}/${slug}`) {
    notFound();
  }

  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
            {post.categories?.[0]?.name || "Academy"}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mt-2">{post.title}</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <main className="bg-white p-6 md:p-10 rounded-md border border-gray-200/80 shadow-xs">
          <Link
            href="/academy/articles"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to articles
          </Link>

          <div className="flex items-center gap-3 text-xs text-slate-400 mb-6">
            <span>📅 {formatDate(post.publishing?.publishedAt)}</span>
            {post.author && <span>✍️ {post.author}</span>}
          </div>

          <LexicalRenderer content={post.content} title={post.title} />
        </main>
      </div>
    </div>
  );
}
