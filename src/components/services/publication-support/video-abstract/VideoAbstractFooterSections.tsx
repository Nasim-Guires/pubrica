"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import CommonFAQ from "@/components/common/FAQ";

// --- Pricing Types & Data ---
type PricingTab = "illustration" | "artwork";

interface PricingPlan {
  services: string[];
  delivery: string;
  fees: string;
}

const pricingPlans: Record<PricingTab, PricingPlan> = {
  illustration: {
    services: [
      "A 1-minute infographic video.",
      "Images, graphs, and figures.",
      "Background music.",
      "English captions.",
    ],
    delivery: "2-3 WEEKS",
    fees: "$499",
  },
  artwork: {
    services: [
      "A 2–3 minute animated video.",
      "Smart animations with graphs and figures.",
      "Background music and voiceover.",
      "English captions.",
      "PowerPoint presentation.",
      "Prepared video script for presentations.",
    ],
    delivery: "4-5 weeks",
    fees: "$1000",
  },
};

// --- Testimonials Data ---
const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "The quality and clarity of the video abstract by Pubrica for our paper in Frontiers in Neuroscience exceeded expectations. It was an excellent tool for conference presentations and online dissemination, enhancing the overall impact of our research.",
    author: "DR. VIKRAM PATEL",
    role: "Neuroscience",
    image:
      "/images/publication-support/video-abstract/neuroscience-.jpg",
  },
  {
    id: 2,
    quote:
      "Pubrica's video abstract perfectly complemented our article published in The Lancet Oncology. Their team delivered a professionally formatted, engaging video that helped us present our research to peers and stakeholders efficiently, saving time and increasing outreach.",
    author: "DR. NEHA SINGH",
    role: "Oncology Research Group",
    image:
      "/images/publication-support/video-abstract/the-lancet-of-oncolgy-.jpg",
  },
  {
    id: 3,
    quote:
      "The video abstract created by Pubrica for our manuscript in Nature Communications was expertly produced, capturing the essence of our study without losing scientific rigor. It simplified complex data into an accessible format, facilitating better communication with a wider audience.",
    author: "PROF. RAJESH KUMAR",
    role: "Institute of Molecular Biology",
    image:
      "/images/publication-support/video-abstract/natural-of-communication-.jpg",
  },
];
// --- FAQ Data ---
const faqData = [
  {
    question: "1. How do I create a video abstract for my research article?",
    answer:
      "Create a video abstract by preparing a script for your research goals, methods, findings, and conclusions and then editing the script into a video with appropriate visuals and narration for easier comprehension and understanding.",
  },
  {
    question:
      "2. What should be included in a scientific video abstract?",
    answer:
      "The scientific video abstract should include the research background, goals, methods, findings, conclusions, and significance. The information should be clearly explained with appropriate visuals and narration for easier comprehension and understanding.",
  },
  {
    question: "3. How long should a video abstract for a research paper be?",
    answer:
      "The research video abstract should be approximately 1–3 minutes long and should include the research goals, methods, findings, and conclusions. The information included should be precise and clearly highlight the research.",
  },
  {
    question:
      "4. How can a video abstract increase citations and research impact?",
    answer:
      "The video abstract will help the research gain more visibility by making the research more easily discoverable, understandable, and shareable. This will generate more interest among the academic community for the research.",
  },
];

export default function VideoAbstractFooterSections() {
  const [activePricingTab, setActivePricingTab] =
    useState<PricingTab>("illustration");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  const currentPlan = pricingPlans[activePricingTab];

  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ==================== 1. QUICK PRICING SECTION ==================== */}
      <section className="max-w-6xl mx-auto py-6 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-2">
          Quick Pricing
        </h2>
        <p className="text-xs md:text-sm text-slate-600 mb-8">
          Buy the video abstract service as part of our publication support
          packs and ensure a worry-free submission journey.
        </p>

        {/* Dynamic Pricing Toggle Switch */}
        <div className="w-full bg-[#115b5b] rounded-full p-1 max-w-4xl mx-auto mb-10 flex items-center">
          <button
            onClick={() => setActivePricingTab("illustration")}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${activePricingTab === "illustration"
              ? "bg-[#093536] text-[#22c55e] shadow-md"
              : "text-white hover:text-slate-200"
              }`}
          >
            Illustration Creation
          </button>
          <button
            onClick={() => setActivePricingTab("artwork")}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${activePricingTab === "artwork"
              ? "bg-[#093536] text-[#22c55e] shadow-md"
              : "text-white hover:text-slate-200"
              }`}
          >
            Artwork Enhancement
          </button>
        </div>

        {/* Pricing Content Box */}
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-sm">
          <h3 className="text-base md:text-lg font-bold text-slate-900 mb-6">
            Services Included
          </h3>

          {/* Services Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-10">
            {currentPlan.services.map((service, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <FiCheck className="w-4 h-4 text-slate-800 mt-1 flex-shrink-0 stroke-[3]" />
                <span className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Delivery, Fees, and CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-100 gap-6 sm:gap-4">
            <div className="flex items-center space-x-8 w-full sm:w-auto justify-around sm:justify-start">
              {/* Delivery */}
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-100 rounded-md">
                  <Image
                    src="/images/publication-support/video-abstract/delivery.png"
                    alt="Delivery"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                    DELIVERY
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-900">
                    {currentPlan.delivery}
                  </span>
                </div>
              </div>

              {/* Fees */}
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-100 rounded-md">
                  <Image
                    src="/images/publication-support/video-abstract/fees.png"
                    alt="Fees"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                    FEES
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-900">
                    {currentPlan.fees}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/order-now"
              className="inline-block w-full sm:w-auto text-center bg-[#0b3c3d] hover:bg-[#072829] text-white font-bold text-xs md:text-sm px-10 py-3 rounded-full transition-colors duration-300 shadow-sm"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 2. TESTIMONIALS SECTION ==================== */}
      <section className="bg-[#f8faf9] py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-8">
            Testimonials
          </h2>

          <MovingTestimonials
            data={testimonialsData}
            autoSlideInterval={5000}
          />
        </div>
      </section>

      {/* ==================== 3. FAQ ACCORDION SECTION ==================== */}
    
      

        <CommonFAQ
          title="Frequently Asked Questions – Video Abstract Service"
          faqs={faqData}
        />
    </div>
  );
}
