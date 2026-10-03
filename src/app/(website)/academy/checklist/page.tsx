import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { mediaUrl } from "@/lib/payload";
import { getPostSummaries } from "@/lib/payload/summaries";
import { constructMetadata } from "@/lib/metadata";
import HeroBanner from "@/components/common/HeroBanner";

// Dedicated route for this exact URL. /academy/checklist/ is a single path segment
// under /academy/, so without this file it was handled by the shared
// academy/[category]/page.tsx template, which looks up a Payload post with
// urlPath === "checklist" — no such post exists (confirmed against the CMS), so
// notFound() fired and the page genuinely 404'd. Fixed with a static route here,
// which Next.js resolves ahead of that dynamic segment, so no other academy URL
// is affected.
//
// Content: the live pubrica.com page at this URL is the same 25-item checklist
// listing already fixed at /insights/check-list/ (same cards, same hrefs,
// republished at this second URL). This file is a standalone copy — it does not
// import from or modify that page, per this task's instructions.
export const revalidate = 300;

const CANONICAL_PATH = "/academy/checklist";

export const metadata: Metadata = constructMetadata({
  title: "Check List - Pubrica Academy",
  // Live pubrica.com page at this URL has no meta description tag, so this is
  // written from the page's own real content (its checklist listing).
  description: "Reporting checklists for research and publication: PRISMA, CONSORT, STROBE, ARRIVE, and more.",
  slug: CANONICAL_PATH,
});

export default async function AcademyChecklistPage() {
  const { docs: posts } = await getPostSummaries({
    source: "insights",
    urlPathPrefix: "checklist/",
    limit: 50,
  });

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#333333] font-sans pb-16">
      <HeroBanner title="Check List" headingAs="h1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/academy/Forensics-2.webp";
            const href = `/insights/${post.urlPath}/`;
            return (
              <div
                key={post.id}
                className="bg-white border border-gray-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <Link href={href} className="relative w-full aspect-[16/10] bg-gray-100 block">
                  <Image
                    src={image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </Link>
                <div className="p-5 flex flex-col gap-2.5">
                  <h2 className="text-sm font-bold text-[#0b2825] leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <Link
                    href={href}
                    className="text-xs font-semibold text-blue-600 no-underline hover:underline w-fit"
                  >
                    View Checklist
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom contact CTA — matches the live page's closing section */}
        <div className="bg-[#0d3b36] text-white rounded-xl p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-base md:text-lg font-semibold leading-relaxed max-w-xl text-center md:text-left">
            Whether you&apos;re stuck or just want some tips on where to start, hit up our experts
            anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex flex-col gap-2 text-sm text-gray-100">
              <a href="tel:+919884350006" className="flex items-center gap-2 hover:underline">
                <Phone className="w-4 h-4 shrink-0" /> India +91 9884350006
              </a>
              <a href="tel:+19725029262" className="flex items-center gap-2 hover:underline">
                <Phone className="w-4 h-4 shrink-0" /> US +1-972-502-9262
              </a>
              <a
                href="https://wa.me/919884350006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
              </a>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-white text-[#0d3b36] font-bold text-xs uppercase tracking-wide rounded-md px-6 py-3 hover:bg-gray-100 transition-colors no-underline"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
