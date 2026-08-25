import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPosts, mediaUrl } from "@/lib/payload";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "Explore Pubrica's open calls for papers across therapeutic areas and research fields.",
};

// The Payload "call-for-papers" source also includes a bare index stub
// (slug "call-for-papers", no urlPath) — exclude it, it isn't a real topic.
const INDEX_SLUG = "call-for-papers";

export default async function CallForPapersPage() {
  const { docs } = await getPosts({ source: "call-for-papers", limit: 50 });
  const topics = docs.filter((post) => post.slug !== INDEX_SLUG);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Call for Papers</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Explore Pubrica&apos;s open calls for papers across therapeutic areas and research fields.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
            return (
              <Link
                key={post.id}
                href={`/call-for-papers/${post.slug}`}
                className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
              >
                <div className="h-40 overflow-hidden relative bg-[#0b2825]">
                  <Image
                    src={image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between gap-3">
                  <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-3">{post.title}</h3>
                  <span className="text-xs font-semibold text-[#004d40] group-hover:text-[#00332a]">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {topics.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-12">No open calls for papers right now.</p>
        )}
      </section>
    </div>
  );
}
