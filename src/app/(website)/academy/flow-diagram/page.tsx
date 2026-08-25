import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { flowDiagrams } from "@/lib/data-insight";
import ImageLightboxGrid from "@/components/insight/ImageLightboxGrid";

export const metadata: Metadata = {
  title: "Flow Diagram | Pubrica Academy",
  description: "Flow diagram templates for research and reporting standards (PRISMA, CONSORT, TRIPOD, CARE, STARD).",
};

export default function FlowDiagramPage() {
  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Flow Diagram</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Flow diagram templates for common research and reporting standards.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/academy" className="text-xs font-semibold text-slate-500 hover:text-emerald-700">
            &larr; Back to Academy
          </Link>
        </div>

        <ImageLightboxGrid items={flowDiagrams} actionLabel="View Diagram" />
      </section>
    </div>
  );
}
