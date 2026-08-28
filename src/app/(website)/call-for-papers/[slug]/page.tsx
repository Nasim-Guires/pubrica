import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getDescription, mediaUrl } from "@/lib/payload";
import { LexicalRenderer } from "@/lib/payload/lexical";

export const revalidate = 300;

interface CallForPaperPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CallForPaperPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "call-for-papers");
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

export default async function CallForPaperPage({ params }: CallForPaperPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "call-for-papers");
  if (!post) {
    notFound();
  }

  const bannerImage = mediaUrl(post.heroImage);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <div className="relative h-56 md:h-72 w-full bg-[#0b2825]">
        {bannerImage && (
          <Image src={bannerImage} alt={post.title} fill className="object-cover opacity-35" priority />
        )}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="max-w-4xl text-center text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-5">
        <main className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
          <Link
            href="/call-for-papers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#004d40] mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Call for Papers
          </Link>

          <LexicalRenderer content={post.content} title={post.title} />
        </main>
      </div>
    </div>
  );
}
