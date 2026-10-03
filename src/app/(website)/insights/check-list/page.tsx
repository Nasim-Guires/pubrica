import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { getPostSummaries } from "@/lib/payload/summaries";
import { constructMetadata } from "@/lib/metadata";
import HeroBanner from "@/components/common/HeroBanner";
import { CHECKLIST_CARD_ORDER, checklistCardTitle } from "../checklist/checklist-cards";

// Per-post thumbnail override, keyed by slug. The Payload CMS's heroImage field is
// wrong for most of these posts — 17 of the 25 point to a generic placeholder
// ("sample-workimage-for-sidebar.png") instead of each checklist's own thumbnail
// (confirmed by inspecting the raw CMS data). These are each post's real thumbnail,
// downloaded from the live pubrica.com page into public/images/insights/checklist/
// so this page doesn't depend on pubrica.com staying online. Page-local — doesn't
// touch the CMS data or any shared file.
const CHECKLIST_IMAGES: Record<string, string> = {
  "agree-ii-checklist": "/images/insights/checklist/agree-ii-checklist.webp",
  "srqr-checklist-introduction": "/images/insights/checklist/srqr-checklist-introduction.webp",
  "esmo-grow-checklist-introduction": "/images/insights/checklist/esmo-grow-checklist-introduction.png",
  "moose-checklist-meta-analysis-observational-studies":
    "/images/insights/checklist/moose-checklist-meta-analysis-observational-studies.webp",
  "evidence-based-practice-quality-improvement-checklist":
    "/images/insights/checklist/evidence-based-practice-quality-improvement-checklist.webp",
  "spirit-clinical-trial-protocol-checklist": "/images/insights/checklist/spirit-clinical-trial-protocol-checklist.webp",
  "coreq-qualitative-research-reporting-guideline":
    "/images/insights/checklist/coreq-qualitative-research-reporting-guideline.webp",
  "tidier-checklist-intervention-reporting": "/images/insights/checklist/tidier-checklist-intervention-reporting.webp",
  "prisma-2020-reporting-checklist": "/images/insights/checklist/prisma-2020-reporting-checklist.png",
  "strobe-observational-studies-checklist": "/images/insights/checklist/strobe-observational-studies-checklist.png",
  "preliminary-planning-meta-analysis-checklist":
    "/images/insights/checklist/preliminary-planning-meta-analysis-checklist.jpg",
  "conserve-2021-reporting-checklist": "/images/insights/checklist/conserve-2021-reporting-checklist.webp",
  "strobe-cohort-study-checklist": "/images/insights/checklist/strobe-cohort-study-checklist.png",
  "stard-2015-reporting-checklist": "/images/insights/checklist/stard-2015-reporting-checklist.png",
  "gwas-literature-review-checklist": "/images/insights/checklist/gwas-literature-review-checklist.jpg",
  "consort-2010-reporting-checklist": "/images/insights/checklist/consort-2010-reporting-checklist.png",
  "squire-quality-improvement-checklist": "/images/insights/checklist/squire-quality-improvement-checklist.webp",
  "strobe-cross-sectional-studies-checklist":
    "/images/insights/checklist/strobe-cross-sectional-studies-checklist.webp",
  "strobe-case-control-study-checklist": "/images/insights/checklist/strobe-case-control-study-checklist.webp",
  "agree-clinical-practice-guidelines-checklist":
    "/images/insights/checklist/agree-clinical-practice-guidelines-checklist.webp",
  "care-case-report-checklist": "/images/insights/checklist/care-case-report-checklist.png",
  "srqr-qualitative-research-checklist": "/images/insights/checklist/srqr-qualitative-research-checklist.webp",
  "cheers-health-economic-evaluation-checklist":
    "/images/insights/checklist/cheers-health-economic-evaluation-checklist.webp",
  "cochrane-dissemination-checklist": "/images/insights/checklist/cochrane-dissemination-checklist.webp",
  "arrive-animal-research-checklist": "/images/insights/checklist/arrive-animal-research-checklist.webp",
};

// Dedicated route for this exact (hyphenated) URL. It doesn't match any entry in
// src/lib/payload/insightHubs.ts (that file's real hub is slug "checklist", no
// hyphen — a separate, already-working page at /insights/checklist/, not touched
// here) or src/lib/insights/cardPages.ts, so the shared insights/[slug] route was
// falling through to its single-post-detail branch and rendering one unrelated
// CMS post (id 2838, literally titled "CHECK LIST") instead of a listing. Root
// cause: no dedicated page or hub entry exists for the "check-list" (hyphenated)
// slug specifically — it isn't a missing route so much as a slug that silently
// matched the wrong fallback branch of the shared template. Fixed with a static
// route here, which Next.js resolves ahead of the shared dynamic [slug] segment,
// so no other insights URL is affected.
//
// Content: all 25 real checklist posts in Payload (urlPath prefix "checklist/")
// match the live page's 25 cards 1:1 by title — fetched via the existing shared
// getPostSummaries helper (used read-only here, not modified).
export const revalidate = 300;

const CANONICAL_PATH = "/insights/check-list";

export const metadata: Metadata = constructMetadata({
  title: "Check List - Pubrica Insights",
  // Live pubrica.com page at this URL has no meta description tag, so this is
  // written from the page's own real content (its checklist listing).
  description: "Reporting checklists for research and publication: PRISMA, CONSORT, STROBE, ARRIVE, and more.",
  slug: CANONICAL_PATH,
});

export default async function CheckListPage() {
  const { docs: posts } = await getPostSummaries({
    source: "insights",
    urlPathPrefix: "checklist/",
    limit: 50,
  });

  // Live pubrica.com card order; unknown slugs go to the end.
  const cardRank = (slug: string) => {
    const i = CHECKLIST_CARD_ORDER.indexOf(slug);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#333333] font-sans pb-16">
      <HeroBanner title="Check List" headingAs="h1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...posts]
            .sort((a, b) => cardRank(a.slug) - cardRank(b.slug))
            .map((post) => {
            const image = CHECKLIST_IMAGES[post.slug] || "/images/academy/Forensics-2.webp";
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
                    {checklistCardTitle(post.slug, post.title)}
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
