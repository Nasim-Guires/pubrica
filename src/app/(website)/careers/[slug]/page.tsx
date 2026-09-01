import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getDescription } from "@/lib/payload";
import { LexicalRenderer } from "@/lib/payload/lexical";

export const revalidate = 300;

interface CareerPostingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CareerPostingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "career");
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

export default async function CareerPostingPage({ params }: CareerPostingPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "career");

  // Only serve flat career postings here (e.g. "freelance-...-writer-in-x");
  // nested "job-posting/x" postings are handled by their own route.
  if (!post || post.urlPath !== slug) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-slate-900 text-white py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {post.jobType && post.jobType.length > 0 && (
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
              {post.jobType.join(" / ")}
            </span>
          )}
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mt-2">{post.title}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-5">
        <main className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
          <Link
            href="/careers/job-posting"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 mb-6 no-underline hover:no-underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Job Postings
          </Link>

          <LexicalRenderer content={post.content} title={post.title} />
        </main>
      </div>
    </div>
  );
}
