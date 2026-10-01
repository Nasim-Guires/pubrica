import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ImageLightboxGrid from "@/components/insight/ImageLightboxGrid";
import HeroBanner from "@/components/common/HeroBanner";

export const metadata: Metadata = {
  title: { absolute: "Flow Diagram Services for Research Accuracy | Pubrica" },
  description: "Flow diagram templates for research and reporting standards (PRISMA, CONSORT, TRIPOD, CARE, STARD).",
};

// Page-local copy of the shared data-insight.ts flowDiagrams list — the shared file
// isn't modified (its PAYLOAD_MEDIA_URL const isn't exported, so the base URL is
// inlined here too). The 5 PDFs below are downloaded into public/upload/diagram/
// (same order as the live pubrica.com page) instead of linking to pubrica.com's
// WordPress media server, matching the reference site's content exactly while
// removing the cross-origin dependency.
const PAYLOAD_MEDIA_URL = "https://pubrica-blog.vercel.app/api/media/file";

const flowDiagrams = [
  {
    title: "CARE Flow Diagram",
    img: `${PAYLOAD_MEDIA_URL}/care-flow-diagram-rk5hjc79in6e54sbsryg92ssv7niu75z8yor8huv7g.webp`,
    pdfUrl: "/upload/diagram/care-flow-diagram.pdf",
  },
  {
    title: "PRISMA 2020 Flow Diagram",
    img: `${PAYLOAD_MEDIA_URL}/PRISMA-2020-flow-diagram-rfvznu38kyy33dw721fq98zkcxplujvz1fvdz1kvp8.png`,
    pdfUrl: "/upload/diagram/prisma-2020-flow-diagram.pdf",
  },
  {
    title: "TRIPOD Statement",
    img: `${PAYLOAD_MEDIA_URL}/TRIPOD-STATEMENT-rhb0s0bhdodqvhev99ivhilqcexklyws93ryvetev0.webp`,
    pdfUrl: "/upload/diagram/tripod-statement-flow-diagram.pdf",
  },
  {
    title: "CONSORT 2025 Flow Diagram",
    img: `${PAYLOAD_MEDIA_URL}/CONSORT-2025-Flow-Diagram-rfze5uhr5hx3xq3uosht2wcppvbsc8broywrzct8xo.png`,
    pdfUrl: "/upload/diagram/consort-2025-flow-diagram.pdf",
  },
  {
    title: "STARD 2015 Flow Diagram",
    img: `${PAYLOAD_MEDIA_URL}/stard-2015-flow-diagram-rjo32hcmve0lik2in6hdv7nmpjtbyfvxuooilh7bek.webp`,
    pdfUrl: "/upload/diagram/stard-2015-flow-diagram.pdf",
  },
];

export default function FlowDiagramPage() {
  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans pb-10">
      <HeroBanner
        title="Flow Diagram"
        description=""
        headingAs="h1"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <Link href="/academy" className="text-xs font-semibold text-blue-600 no-underline hover:no-underline">
            &larr; Back to Academy
          </Link>
        </div>

        <ImageLightboxGrid items={flowDiagrams} actionLabel="View Diagram" />
      </section>
    </div>
  );
}
