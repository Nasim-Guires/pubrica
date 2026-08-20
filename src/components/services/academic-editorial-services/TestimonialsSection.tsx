"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: string;
  journalCover: string;
  quote: string;
  author: string;
  title: string;
  flagSrc?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    journalCover: "/images/academic-editorial-services/journal-of-neuroscience-.png",
    quote:
      '"Pubrica\'s editorial team elevated the quality of my manuscript with incredible precision and academic clarity."',
    author: "— Dr. Aisha Rahman",
    title: "PhD in Public Health, Malaysia",
    flagSrc: "/images/academic-editorial-services/Malaysia-.png",
  },
  {
    id: "2",
    journalCover:
      "/images/academic-editorial-services/journal-of-clinical-epidemiology.png",
    quote:
      '"Working with Pubrica was a smooth and professional experience with excellent editing quality."',
    author: "— Prof. Daniel Thompson",
    title: "Research Scientist, USA",
    flagSrc: "/images/research-services/systematic-review/united-kingdom-.png",
  },
  {
    id: "3",
    journalCover: "/images/academic-editorial-services/jama-oncology-journal.png",
    quote:
      '"Exceptional editorial assistance improved readability and academic accuracy throughout."',
    author: "— Maria Fernandes",
    title: "MSc Biotechnology, Portugal",
    flagSrc: "/images/academic-editorial-services/Portugal-.png",
  },
];

export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Logic to show 2 cards per slide group
  const cardsPerPage = 2;
  const totalSlides = Math.ceil(testimonialsData.length / cardsPerPage);
  const displayedTestimonials = testimonialsData.slice(
    activeSlide * cardsPerPage,
    (activeSlide + 1) * cardsPerPage
  );

  return (
    <section className="w-full bg-[#f8fafc] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl">
            At Pubrica, our Academic Editorial Services are designed to elevate
            scholarly work to its highest standard. From manuscripts and theses
            to research reports, we refine language, structure, and
            subject-specific terminology to ensure clarity, academic rigor, and
            publication readiness. Here’s what our clients have to say about our
            services:
          </p>
        </div>

        {/* Testimonial Cards Grid (Shows 2 cards per view) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-300 p-6 shadow-sm flex flex-col justify-between space-y-6 relative"
            >
              {/* Top Quote Box with Journal Cover */}
              <div className="bg-[#d1d5db] rounded-lg p-5 flex flex-col sm:flex-row gap-5 items-center sm:items-start min-h-[160px]">
                <div className="relative w-28 h-36 shrink-0 rounded border border-gray-400 overflow-hidden shadow-inner bg-white">
                  <Image
                    src={item.journalCover}
                    alt="Journal Cover"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-medium">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Info */}
              <div className="flex justify-between items-end pt-2">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 tracking-wide uppercase">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-600 italic">{item.title}</p>
                </div>
                {item.flagSrc ? (
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
                    <Image
                      src={item.flagSrc}
                      alt="Country flag"
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-sm transition-all ${
                activeSlide === index
                  ? "bg-[#0d3b44]"
                  : "border border-[#0d3b44] bg-transparent"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}