import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getPosts, mediaUrl, getDescription } from "@/lib/payload";
import { LexicalRenderer } from "@/lib/payload/lexical";
import { getInsightHub, getStaticInsightHub } from "@/lib/payload/insightHubs";
import { infographics, storyboards, factSheets } from "@/lib/data-insight";
import ImageLightboxGrid from "@/components/insight/ImageLightboxGrid";

const STATIC_HUB_ITEMS: Record<string, { title: string; img?: string; description?: string; pdfUrl?: string }[]> = {
  infographics,
  storyboard: storyboards,
  "fact-sheet": factSheets,
};

export const revalidate = 300;

const HUB_PAGE_SIZE = 12;

interface InsightRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: InsightRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getInsightHub(slug);
  if (hub) {
    return { title: `${hub.label} | Pubrica Insights`, description: hub.description };
  }
  const staticHub = getStaticInsightHub(slug);
  if (staticHub) {
    return { title: `${staticHub.label} | Pubrica Insights`, description: staticHub.description };
  }
  const post = await getPostBySlug(slug, "insights");
  if (!post) return {};
  return {
    title: post.seo?.metaTitle || post.title,
    description: getDescription(post),
  };
}

export default async function InsightRoutePage({ params, searchParams }: InsightRouteProps) {
  const { slug } = await params;
  const hub = getInsightHub(slug);

  if (hub) {
    const { page: pageParam } = await searchParams;
    const page = Math.max(1, Number(pageParam) || 1);
    const { docs: posts, hasNextPage, hasPrevPage } = await getPosts({
      source: "insights",
      urlPathPrefix: `${hub.slug}/`,
      page,
      limit: HUB_PAGE_SIZE,
    });

    return (
      <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
        <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{hub.label}</h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">{hub.description}</p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <Link href="/insights" className="text-xs font-semibold text-slate-500 hover:text-[#004d40]">
              &larr; Back to Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => {
              const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
              const desc = getDescription(post);
              return (
                <Link
                  key={post.id}
                  href={`/insights/${post.slug}`}
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

          {posts.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-6">No entries found in this section yet.</p>
          )}

          {(hasPrevPage || hasNextPage) && (
            <div className="flex justify-center items-center gap-3 mt-10">
              <Link
                href={`/insights/${hub.slug}?page=${page - 1}`}
                className={`px-4 py-2 rounded text-xs font-semibold border transition-colors ${
                  hasPrevPage
                    ? "border-slate-200 text-slate-700 hover:border-[#004d40] hover:text-[#004d40]"
                    : "border-slate-100 text-slate-300 pointer-events-none"
                }`}
              >
                &larr; Previous
              </Link>
              <Link
                href={`/insights/${hub.slug}?page=${page + 1}`}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                  hasNextPage
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

  const staticHub = getStaticInsightHub(slug);
  if (staticHub) {
    const items = STATIC_HUB_ITEMS[staticHub.slug] ?? [];
    return (
      <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
        <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{staticHub.label}</h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">{staticHub.description}</p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <Link href="/insights" className="text-xs font-semibold text-slate-500 hover:text-[#004d40]">
              &larr; Back to Insights
            </Link>
          </div>

          <ImageLightboxGrid items={items} />
        </section>
      </div>
    );
  }

  // Not a hub — treat as a single insight post detail page.
  const post = await getPostBySlug(slug, "insights");
  if (!post) {
    notFound();
  }

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

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-5">
        <main className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-snug">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-6">
            <span>📅 {formatDate(post.publishing?.publishedAt)}</span>
            {post.author && <span>✍️ {post.author}</span>}
          </div>

          <LexicalRenderer content={post.content} title={post.title} />

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
      </div>
    </div>
  );
}
