"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Plus,
  Minus,
  ArrowRightCircle,
} from "lucide-react";

// Data structure for Cards
interface ServiceCard {
  id: string;
  badgeText: string;
  badgeSubtext: string;
  badgeIconSrc: string;
  bgColor: string;
  borderColor: string;
  offers: string[];
}

const serviceCards: ServiceCard[] = [
  {
    id: "help",
    badgeText: "TO HELP YOU",
    badgeSubtext: "Engage With Your Peers",
    badgeIconSrc: "/images/research-impact/Help.svg",
    bgColor: "bg-[#cfdede]/60",
    borderColor: "border-[#b1c7c7]",
    offers: [
      "Shareable Research Summary",
      "Research Impact Infographic",
      "Smart Poster",
    ],
  },
  {
    id: "need",
    badgeText: "WHEN YOU NEED",
    badgeSubtext: "To Communicate Your Work With The Media",
    badgeIconSrc: "/images/research-impact/need.svg",
    bgColor: "bg-[#e2e6c8]/60",
    borderColor: "border-[#ccd1a5]",
    offers: [
      "Press Note",
      "Global Media Distribution",
      "Media Impact Infographic",
    ],
  },
  {
    id: "plan",
    badgeText: "WHEN YOU PLAN",
    badgeSubtext: "To Get The Right Funding",
    badgeIconSrc: "/images/research-impact/plan.svg",
    bgColor: "bg-[#dbd1d0]/60",
    borderColor: "border-[#c2b2b1]",
    offers: [
      "Executive Summary",
      "Grant Proposal Infographic",
      "2-minute Funder Impact Video",
    ],
  },
];

// Data structure for FAQs
interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question:
      "1. Should I purchase the Research Impact services only after my paper is accepted by a journal?",
    answer:
      "While many researchers opt to publicize their manuscripts only after journal acceptance, we recommend starting Research Impact services once you receive preliminary acceptance and your manuscript is in production. This ensures your promotional material is ready in time for online publication.",
  },
  {
    id: 2,
    question:
      "2. What information is typically needed from authors for Research Impact services?",
    answer:
      "We generally require your accepted manuscript, high-resolution figures/graphics, brief summary notes or key takeaways, and any specific target audience preferences you might have.",
  },
  {
    id: 3,
    question:
      "3. What kind of content do you develop in Research Impact Services?",
    answer:
      "We develop shareable research summaries, press notes, infographics, smart posters, executive summaries, grant proposal infographics, and short impact videos tailored for funders and media.",
  },
  {
    id: 4,
    question:
      "4. Will the copyright of the delivered visual material, be it video, abstract, or cover art, fully belong to me?",
    answer:
      "Yes, all custom visual materials created for your research belong entirely to you upon final delivery and sign-off.",
  },
  {
    id: 5,
    question:
      "5. Can you help communicate my research to non-academic audiences?",
    answer:
      "Yes, our services are specifically designed to translate complex scientific/academic findings into engaging, lay-friendly formats suitable for media, industry stakeholders, and the public.",
  },
];

export default function ResearchImpactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(1); // FAQ 1 open by default

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question.replace(/^\d+\.\s*/, ""), // Clean numbers for SEO
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer || faq.question,
      },
    })),
  };

  return (
    <section className="w-full bg-white text-slate-800 font-sans py-6 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Schema.org FAQ SEO Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] tracking-tight mb-4">
          With You on Your Research Impact Journey
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
          Explore our tiered research impact service packages that cater to a
          variety of needs from individual researchers to larger institutions,
          ensuring effective communication, visibility, and trackable impact of
          your research.
        </p>
      </div>

      {/* Tiered Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {serviceCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} ${card.borderColor} border rounded-lg p-5 shadow-sm flex flex-col justify-between`}
          >
            {/* Top Badge Card Header */}
            <div className="bg-white rounded-md p-4 mb-6 shadow-sm border border-gray-100 flex items-center gap-3 min-h-[96px]">
              <div className="flex-shrink-0 relative w-8 h-8">
                <Image src={card.badgeIconSrc} alt="" fill className="object-contain" sizes="32px" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide">
                  {card.badgeText}
                </h3>
                <p className="text-xs text-slate-700 font-medium leading-tight">
                  {card.badgeSubtext}
                </p>
              </div>
            </div>

            {/* Offerings List */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRightCircle className="w-5 h-5 text-black" />
                <span className="font-bold text-sm text-slate-900">
                  We offer:
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-800 pl-2">
                {card.offers.map((offer, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-xs font-bold leading-5">•</span>
                    <span className="font-medium text-slate-800 leading-tight">
                      {offer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0d3b44]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion FAQ Component */}
      <div className="border border-gray-200 rounded-sm bg-white overflow-hidden shadow-sm">
        {faqData.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold text-slate-800 hover:bg-slate-50 transition-colors text-sm md:text-base focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="ml-4 flex-shrink-0 text-slate-700">
                  {isOpen ? (
                    <Minus className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  )}
                </span>
              </button>

              {isOpen && faq.answer && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed font-normal bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
