"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface AccordionItem {
  id: string;
  title: string;
  points: string[];
}

const accordionData: AccordionItem[] = [
  {
    id: "academic",
    title: "Academic Researchers & Scholars",
    points: [
      "Ensure visual assets comply (TIFF, EPS, high-res JPEG formats).",
      "Transform data and plans into publication-ready illustrations.",
      "Guidance on how to create figures compatible with journal scopes and visual guidelines.",
      "Avoid technical rejections caused by poor figure formatting or visual clarity.",
    ],
  },
  {
    id: "medical",
    title: "Medical and Clinical Professionals",
    points: [
      "Medical-grade images for case reports, clinical trials, and review articles.",
      "Clear articulation of diagnostic images, anatomical structures, and therapies.",
      "Custom infographics to convey clinical outcomes.",
      "Complies with patients privacy and image integrity standards.",
    ],
  },
  {
    id: "corporate",
    title: "Corporate R&D Teams",
    points: [
      "Mechanism of action (MoA) and product-development graphics with visual accuracy.",
      "Improves patent submission, internal documentation, and investment presentations.",
      "Follows regulatory and documentation standards.",
      "Creates confidential internal figures for sensitive data.",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Submission Professionals",
    points: [
      "Visuals designed for clinical trial submissions (FDA/EMA/CDSCO).",
      "Ultra-high-definition data figures and annotated study visuals.",
      "Adheres to ICH, GCP, and regional documentation specifications.",
      "Decreases risk of rejection for lack-of-compliance on illustrations.",
    ],
  },
  {
    id: "publishers",
    title: "Journal Publishers and Editors",
    points: [
      "Ready-to-publish figures that meet resolution and layout requirements.",
      "Assistance in correcting author-submitted artwork pre-publication.",
      "Maintains consistency in line weights, fonts, and image compression.",
      "Reduces editorial workload and accelerates production timelines.",
    ],
  },
  {
    id: "agencies",
    title: "Medical Communication Agencies",
    points: [
      "Custom design figures for CME materials, e-learning, and newsletters and brochures.",
      "Quick turnaround times for slide decks and scientific content.",
      "Collaboration with in-house teams for branding and compliance.",
      "Precise visuals aligned with therapeutic area and audience level.",
    ],
  },
];

export default function WhoWeServeArtwork() {
  const [openId, setOpenId] = useState<string>("academic");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 font-sans text-[#1a1a1a]">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading & Intro */}
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-bold text-[#0c373b]">
            Who We Serve
          </h2>
          <p className="max-w-5xl text-sm md:text-base leading-relaxed text-[#333333]">
            Our artwork preparation service offers assistance for researchers,
            authors and manufacturers to ensure that figures, illustrations and
            graphical elements meet the precise technical requirements of target
            journals to help streamline the submission process and improve
            acceptance rates in high-impact academic journals.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left Side: Image & Free Quote Button */}
          <div className="flex flex-col items-start lg:col-span-6">
            <div className="relative mb-6 h-[280px] sm:h-[350px] w-full overflow-hidden rounded-sm border border-gray-100 shadow-sm">
              <Image
                src="/images/artwork-preparation.jpg"
                alt="Who We Serve - Artwork Preparation"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <GetFreeQuoteButton/>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-6">
            <div className="border-t border-slate-200">
              {accordionData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="border-b border-slate-200">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="flex w-full items-center justify-between py-3.5 text-left font-bold text-[#0c373b] transition-colors hover:text-black"
                    >
                      <span className="text-sm md:text-base">{item.title}</span>
                      <span className="ml-2 text-lg font-semibold leading-none text-[#0c373b]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 pt-1 pl-1 text-xs md:text-sm leading-relaxed text-[#4a4a4a]">
                        <ul className="list-disc space-y-2 pl-5">
                          {item.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
