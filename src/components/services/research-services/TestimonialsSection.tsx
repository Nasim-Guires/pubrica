"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  journalCoverUrl: string;
  flagUrl: string;
  flagAlt: string;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Pubrica's expert research team played a vital role in refining my manuscript, which was later accepted by the Journal of Clinical Investigation. Their ability to interpret complex data and structure it for a high-impact journal made all the difference.",
    author: "DR. ANANYA R",
    role: "Researcher, India",
    journalCoverUrl: "/images/research-services/RSNA-.png",
    flagUrl: "/images/editing-and-translation/flag.png",
    flagAlt: "India",
  },
  {
    quote:
      "Thanks to Pubrica's comprehensive research support, my paper on epidemiological modelling was accepted in BMC Public Health. Their team ensured the manuscript met every editorial requirement, from statistical analysis to structured presentation.",
    author: "PROF. MICHAEL T",
    role: "Academic Scholar, UK",
    journalCoverUrl: "/images/research-services/jama-oncology-journal.png",
    flagUrl: "/images/research-services/uk-flag-.png",
    flagAlt: "United Kingdom",
  },
  {
    quote:
      "Pubrica supported me with research documentation and statistical review for my oncology study, which was later published in the International Journal of Cancer Research and Treatment. Their domain expertise was key to the success of my submission.",
    author: "DR. RAVI K",
    role: "Biomedical Scientist, Singapore",
    journalCoverUrl:
      "/images/research-services/international-journal-of-surgery-.png",
    flagUrl: "/images/research-services/singapore.png",
    flagAlt: "Singapore",
  },
];

export const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title = "Testimonials",
  description = "Researchers across domains rely on Pubrica's research services to transform intricate scientific ideas into well-structured, insightful deliverables that drive impact and advance scholarly communication. Here's what they experienced.",
  testimonials = DEFAULT_TESTIMONIALS,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileItem = testimonials[activeIndex];
  const desktopItems = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  const renderCard = (item: TestimonialItem, key: string) => (
    <div
      key={key}
      className="bg-white border-2 border-[#083c4c]/20 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-sm min-h-[340px]"
    >
      <div className="bg-[#cccccc]/40 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 flex-1 mb-5">
        <div className="relative w-full sm:w-[160px] h-[140px] flex-shrink-0 bg-white shadow-md border border-gray-200 overflow-hidden rounded">
          <Image
            src={item.journalCoverUrl}
            alt="Journal Publication Cover"
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-gray-800 text-sm leading-relaxed font-normal text-justify">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between w-full px-1">
        <div className="space-y-0.5">
          <h4 className="text-[#083c4c] font-extrabold text-sm tracking-wide">
            &mdash; {item.author}
          </h4>
          <p className="text-gray-500 text-xs italic font-medium">{item.role}</p>
        </div>
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
          <Image
            src={item.flagUrl}
            alt={item.flagAlt}
            fill
            className="object-cover scale-110"
            sizes="32px"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#f4f9fc] py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">
            {description.split("research services")[0]}
            <a href="#" className="text-[#3b82f6] hover:underline">
              research services
            </a>
            {description.split("research services")[1]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-8 lg:hidden">
          {renderCard(mobileItem, `mobile-${activeIndex}`)}
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-8">
          {desktopItems.map((item, idx) =>
            renderCard(item, `${activeIndex}-${idx}-${item.author}`),
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 transition-all focus:outline-none ${
                activeIndex === index
                  ? "bg-[#083c4c]"
                  : "border border-[#083c4c] bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
