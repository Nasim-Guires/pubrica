"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TargetAudience {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const audienceData: TargetAudience[] = [
  {
    id: 1,
    title: "PhD Scholars and Doctoral Candidates",
    description:
      "To ensure that thesis, dissertations, and manuscripts meet institutional and publication-level originality standards.",
    imageSrc: "/images/who-we-serve/phd-scholars.jpg",
    imageAlt: "PhD Scholars graduating",
  },
  {
    id: 2,
    title: "Academic Researchers and Scientists",
    description:
      "For checking journal articles, original research, case reports, and reviews before peer review submission.",
    imageSrc: "/images/who-we-serve/academic-researchers.jpg",
    imageAlt: "Academic researchers in a laboratory",
  },
  {
    id: 3,
    title: "Medical and Scientific Writers",
    description:
      "Specialists drafting clinical study reports, medical writing projects, and regulatory documents need plagiarism scrutiny.",
    imageSrc: "/images/who-we-serve/medical-writers.jpg",
    imageAlt: "Medical and scientific writer taking notes",
  },
  {
    id: 4,
    title: "Medical Communication and CRO Firms",
    description:
      "For plagiarism and AI content review of deliverables like meta-analyses, systematic reviews, and regulatory documentation.",
    imageSrc: "/images/who-we-serve/cro-firms.jpg",
    imageAlt: "Medical communication team meeting",
  },
  {
    id: 5,
    title: "Journal Editors and Publishers",
    description:
      "Editorial boards seek to maintain publication ethics by screening submitted manuscripts for plagiarism.",
    imageSrc: "/images/who-we-serve/journal-publishers.jpg",
    imageAlt: "Publishing contract document and fountain pen",
  },
  {
    id: 6,
    title: "Research Institutions and Universities",
    description:
      "Offering institutional-level screening support for student theses, faculty publications, and funded research.",
    imageSrc: "/images/who-we-serve/universities.jpg",
    imageAlt: "University campus building",
  },
];

export default function PlagiarismWhoWeServe() {
  // Track hovered card ID (Default to null, or set to 1 to default open first card)
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header Title & Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
          Who We Serve
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-10 max-w-5xl">
          We offer text originality and automated authorship analysis for
          researchers, writers, and academics to assist with the originality and
          ethical requirements of their manuscripts for high-impact academic
          journals. Our goal will be to help you submit articles faster and with
          less risk of rejection due to plagiarism issues.
        </p>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-64 sm:h-72 w-full rounded-sm overflow-hidden shadow-md cursor-pointer transition-all duration-300"
              >
                {/* DEFAULT STATE: Background Image with Gradient Overlay & Bottom Title */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                  {/* Dark Overlay Gradient for text readability at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-base md:text-lg leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* HOVER / ACTIVE STATE: Solid Black Card with White Text */}
                <div
                  className={`absolute inset-0 bg-black p-6 flex flex-col justify-start transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
