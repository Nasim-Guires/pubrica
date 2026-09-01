import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { EnquireNowForm } from "@/components/common/EnquireNowForm";
import { getPostBySlug, getPosts, mediaUrl, getDescription, getFaqQuestionOverrides } from "@/lib/payload";
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

  const { docs: otherPosts } = await getPosts({ source: "academy", limit: 6 });
  const recentPosts = otherPosts.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
            {post.categories?.[0]?.name || "Academy"}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mt-2">{post.title}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-md border border-gray-200/80 shadow-xs">
            <Link
              href="/academy/articles"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 mb-6 no-underline hover:no-underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to articles
            </Link>

            <div className="flex items-center gap-3 text-xs text-slate-400 mb-6">
              <span>📅 {formatDate(post.publishing?.publishedAt)}</span>
              {post.author && <span>✍️ {post.author}</span>}
            </div>

            <LexicalRenderer
              content={post.content}
              title={post.title}
              faqQuestions={getFaqQuestionOverrides(post.urlPath)}
            />
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

            {/* Recent Posts */}
            {recentPosts.length > 0 && (
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                  Recent Posts
                </h4>
                <div className="flex flex-col gap-4">
                  {recentPosts.map((p) => {
                    const thumb = mediaUrl(p.heroImage) || "/images/blog/default.webp";
                    return (
                      <Link
                        key={p.id}
                        href={`/academy/${p.urlPath || p.slug}`}
                        className="group flex gap-3 items-start"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image src={thumb} alt={p.title} fill className="object-cover" />
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-slate-800 group-hover:text-[#004d40] leading-snug line-clamp-2">
                            {p.title}
                          </h5>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            📅 {formatDate(p.publishing?.publishedAt)}
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
