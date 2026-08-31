"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonTestimonial from "@/components/common/CommonTestimonials";

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

const testimonialsData = [
  {
    image: "/images/research-services/RSNA-.png",
    quote:
      "Pubrica's expert research team played a vital role in refining my manuscript, which was later accepted by the Journal of Clinical Investigation. Their ability to interpret complex data and structure it for a high-impact journal made all the difference.",
    name: "DR. ANANYA R",
    designation: "Researcher",
    organization: "India",
    flag: "/images/editing-and-translation/flag.png",
  },
  {
    image: "/images/research-services/jama-oncology-journal.png",
    quote:
      "Thanks to Pubrica's comprehensive research support, my paper on epidemiological modelling was accepted in BMC Public Health. Their team ensured the manuscript met every editorial requirement, from statistical analysis to structured presentation.",
    name: "PROF. MICHAEL T",
    designation: "Academic Scholar",
    organization: "UK",
    flag: "/images/research-services/uk-flag-.png",
  },
  {
    image:
      "/images/research-services/international-journal-of-surgery-.png",
    quote:
      "Pubrica supported me with research documentation and statistical review for my oncology study, which was later published in the International Journal of Cancer Research and Treatment. Their domain expertise was key to the success of my submission.",
    name: "DR. RAVI K",
    designation: "Biomedical Scientist",
    organization: "Singapore",
    flag: "/images/research-services/singapore.png",
  },
];

export const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title = "Testimonials",
  description = "Researchers across domains rely on Pubrica's research services to transform intricate scientific ideas into well-structured, insightful deliverables that drive impact and advance scholarly communication. Here's what they experienced.",

}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  

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
    <CommonTestimonial
      title="Testimonials"
      description="Discover how Pubrica's Research Services have helped researchers and scholars refine manuscripts, strengthen research documentation, improve statistical analysis, and meet the requirements of high-impact journals."
      testimonials={testimonialsData}
    />
  );
};
