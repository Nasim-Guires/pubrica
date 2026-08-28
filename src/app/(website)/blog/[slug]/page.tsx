import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EnquireNowForm } from "@/components/common/EnquireNowForm";
import { getPostBySlug, getPosts, mediaUrl, getDescription } from "@/lib/payload";
import { LexicalRenderer } from "@/lib/payload/lexical";

export const revalidate = 300;

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "blog");
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "blog");
  if (!post) {
    notFound();
  }

  const { docs: otherPosts } = await getPosts({ source: "blog", limit: 6 });
  const otherBlogs = otherPosts.filter((p) => p.slug !== slug).slice(0, 5);
  const bannerImage = mediaUrl(post.heroImage) || "/images/blog/default.webp";

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      {/* Banner Header */}
      <div className="relative h-64 md:h-80 w-full bg-slate-900">
        <Image src={bannerImage} alt={post.title} fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="max-w-4xl text-center text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-snug">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-6">
              <span>📅 {formatDate(post.publishing?.publishedAt)}</span>
              {post.author && <span>✍️ {post.author}</span>}
            </div>

            <LexicalRenderer content={post.content} title={post.title} />

            {/* Categories / Tags */}
            {(post.categories?.length || post.tags?.length) && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {post.categories?.map((c) => (
                  <span
                    key={c.id}
                    className="text-[11px] font-semibold bg-emerald-50 text-[#004d40] px-2.5 py-1 rounded-full"
                  >
                    {c.name}
                  </span>
                ))}
                {post.tags?.map((t) => (
                  <span
                    key={t.id}
                    className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                  >
                    #{t.name}
                  </span>
                ))}
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Search Box */}
            <div className="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <span className="text-slate-400 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Enter your search"
                className="w-full bg-transparent text-sm outline-none text-slate-700"
              />
            </div>

            {/* Enquire Now Form */}
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-3">Enquire Now</h4>
              <EnquireNowForm />
            </div>

            {/* Interesting Blogs */}
            {otherBlogs.length > 0 && (
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                  Interesting Blogs
                </h4>
                <div className="flex flex-col gap-4">
                  {otherBlogs.map((b) => {
                    const thumb = mediaUrl(b.heroImage) || "/images/blog/default.webp";
                    return (
                      <Link key={b.id} href={`/blog/${b.slug}`} className="group flex gap-3 items-start">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image src={thumb} alt={b.title} fill className="object-cover" />
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-slate-800 group-hover:text-[#004d40] leading-snug line-clamp-2">
                            {b.title}
                          </h5>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            📅 {formatDate(b.publishing?.publishedAt)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
