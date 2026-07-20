"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  italicJournalName: string;
  quoteEnd: string;
  author: string;
  role: string;
  location: string;
  flagUrl: string;
  journalCoverUrl: string;
  journalAlt: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "With Pubrica's AI-driven analytics, I was able to extract meaningful insights from large genomic datasets. Their end-to-end support, from data preprocessing to model validation, helped me align with the scope of the ",
    italicJournalName: "Journal of Bioinformatics and Computational Biology.",
    quoteEnd: '"',
    author: "DR. DAVID CHEN",
    role: "Research Scientist",
    location: "Singapore",
    flagUrl: "https://flagcdn.com/w40/sg.png",
    journalCoverUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=300",
    journalAlt: "Journal of Bioinformatics and Computational Biology Cover",
  },
  {
    id: 2,
    quote:
      "Pubrica's ML solutions helped streamline my clinical imaging research. The precision of their algorithms and the clarity in their documentation ensured that my work was accepted by the ",
    italicJournalName: "IEEE Journal of Biomedical and Health Informatics",
    quoteEnd: ' without major revisions."',
    author: "DR. LAURA MARTÍNEZ",
    role: "Biomedical Engineer",
    location: "Spain",
    flagUrl: "https://flagcdn.com/w40/es.png",
    journalCoverUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300",
    journalAlt: "IEEE Journal of Biomedical and Health Informatics Cover",
  },
];

export default function TestimonialsSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section className="w-full bg-[#f8f9f9] py-16 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-4">
            Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Discover how Pubrica’s AI and ML services empower researchers to
            build accurate, data-driven models that deliver actionable insights,
            foster innovation, and accelerate research outcomes. Our solutions
            enhance decision-making, ensure scalability, and strengthen academic
            and industry visibility. Here is what our clients say:
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-300 rounded-xl p-5 shadow-sm flex flex-col justify-between"
            >
              {/* Inner Light Grey Quote Box */}
              <div className="bg-[#dcdcdc] rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-6">
                {/* Journal Cover Thumbnail */}
                <div className="relative w-24 h-32 shrink-0 border border-slate-400/50 shadow-sm rounded overflow-hidden bg-slate-900">
                  <Image
                    src={item.journalCoverUrl}
                    alt={item.journalAlt}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  "{item.quote}
                  <span className="italic font-medium">
                    {item.italicJournalName}
                  </span>
                  {item.quoteEnd}
                </p>
              </div>

              {/* Author Details & Country Flag */}
              <div className="flex items-end justify-between px-2 pb-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-wide">
                    — {item.author}
                  </h3>
                  <p className="text-xs text-slate-600 italic">
                    {item.role}, {item.location}
                  </p>
                </div>

                {/* Country Flag Badge */}
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                  <Image
                    src={item.flagUrl}
                    alt={`${item.location} flag`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            aria-label="Slide 1"
            className={`w-3 h-3 border border-slate-800 transition-colors ${
              activeIndex === 0 ? "bg-slate-800" : "bg-transparent"
            }`}
          />
          <button
            type="button"
            onClick={() => setActiveIndex(1)}
            aria-label="Slide 2"
            className={`w-3 h-3 border border-slate-800 transition-colors ${
              activeIndex === 1 ? "bg-slate-800" : "bg-transparent"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
