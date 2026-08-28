"use client";

import Image from "next/image";
import React, { useState } from "react";

// --- Types ---
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
  journalCoverUrl: string;
  journalName: string;
  flagUrl?: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica's Research Impact Service significantly enhanced the visibility of our oncology study published in the Journal of Clinical Oncology, helping us engage with key stakeholders beyond academia.",
    author: "DR. RAJESH KUMAR",
    role: "Clinical Oncology",
    location: "India",
    journalCoverUrl:
      "/images/research-impact/journal-of-clinical-oncology.png",
    journalName: "Journal of Clinical Oncology",
    flagUrl: "/images/editing-and-translation/flag.png",
  },
  {
    id: 2,
    quote:
      '"The infographic and social media package significantly improved the outreach of our cancer biomarker study published in The Lancet Oncology. We observed a marked increase in citations within two months."',
    author: "DR. EMILY THOMPSON",
    role: "Oncology Research",
    location: "United Kingdom",
    journalCoverUrl:
      "/images/research-impact/the-lancet-of-oncolgy-.png",
    journalName: "The Lancet Oncology",
    flagUrl: "/images/research-impact/Engineering-Technology.png",
  },
  {
    id: 3,
    quote:
      '"The video narrative and press releases generated tremendous interest in our neuroimaging findings published in JNeurosci, allowing us to connect with both industry experts and clinical researchers effectively."',
    author: "DR. ANA MORALES",
    role: "Neuroscience",
    location: "Spain",
    journalCoverUrl:
      "/images/research-impact/journal-of-neuroscience-.png",
    journalName: "JNeurosci",
    flagUrl: "/images/editing-and-translation/manuscript-editing/spain.png",
  },
];

export default function TestimonialsCarousel(): React.ReactElement {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className="w-full font-sans bg-[#f5f7f7] text-slate-800 py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e]">
            Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            Researchers across disciplines trust Pubrica’s scientific news
            report services to translate complex findings into clear,
            high-impact narratives. Here’s what they shared:
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden py-4">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeSlide * 340}px)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[320px] sm:w-[380px] md:w-[460px] flex-shrink-0 bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                {/* Gray Quote Inner Box */}
                <div className="bg-[#dcdcdc] rounded-lg p-4 sm:p-5 flex gap-4 items-start min-h-[160px]">
                  {/* Journal Cover Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 rounded bg-slate-900 overflow-hidden shadow-inner border border-slate-300 relative">
                    <Image
                      src={item.journalCoverUrl}
                      alt={item.journalName}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-medium">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom Author Info & Flag */}
                <div className="mt-6 flex items-end justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#09322e] uppercase tracking-wide">
                      — {item.author},
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 italic">
                      {item.role}, {item.location}
                    </p>
                  </div>

                  {item.flagUrl ? (
                  <div className="w-6 h-4 rounded overflow-hidden shadow-sm flex-shrink-0 mb-0.5 relative">
                    <Image
                      src={item.flagUrl}
                      alt={item.location}
                      fill
                      className="object-cover"
                      sizes="24px"
                    />
                  </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 transition-colors ${
                activeSlide === index
                  ? "bg-[#09322e]"
                  : "border border-[#09322e] bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
