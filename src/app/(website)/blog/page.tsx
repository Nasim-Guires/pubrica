import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Tips for Research, Writing & Publication | Pubrica Blog",
  description:
    "Explore Pubrica Blog for expert tips, guides, and insights on research, writing, and publication to boost your academic and scientific success.",
  slug: "/blog",
});

export const revalidate = 300;

const PAGE_SIZE = 9;

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogSectionProps {
  searchParams?: Promise<{ page?: string }>;
}

export default async function BlogSection({ searchParams }: BlogSectionProps = {}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const page = Math.max(1, Number(resolvedParams?.page) || 1);
  const { docs: allPosts, hasNextPage, hasPrevPage } = await getPosts({
    source: "blog",
    page,
    limit: PAGE_SIZE,
  });
  // Exclude migrated section-index pages (e.g. slug "blog" with no urlPath) — not real articles.
  const posts = allPosts.filter((p) => p.urlPath);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-12">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4 w-full">
          <h2 className="text-xl font-bold text-slate-900">Blog</h2>
          <div className="h-[1px] flex-grow bg-slate-200" />
        </div>
        <Link
          href="/blog"
          className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors"
        >
          Explore More &rarr;
        </Link>
      </div>

      <p className="text-xs text-slate-500 mb-6">
        Stay updated with Pubrica&apos;s latest insights, tips, and expert advice on
        publishing guidelines and procedures.
      </p>

      <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        {posts.map((post) => {
          const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
          const desc = getDescription(post);

          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50"
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

      {(hasPrevPage || hasNextPage) && (
        <div className="flex justify-center items-center gap-3 mt-6">
          <Link
            href={`/blog?page=${page - 1}`}
            aria-disabled={!hasPrevPage}
            className={`px-4 py-2 rounded text-xs font-semibold border transition-colors ${
              hasPrevPage
                ? "border-slate-200 text-slate-700 hover:border-[#004d40] hover:text-[#004d40]"
                : "border-slate-100 text-slate-300 pointer-events-none"
            }`}
          >
            &larr; Previous
          </Link>
          <Link
            href={`/blog?page=${page + 1}`}
            aria-disabled={!hasNextPage}
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
  );
}
