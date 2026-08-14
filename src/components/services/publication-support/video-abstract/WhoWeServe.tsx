"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const audienceData: AudienceCard[] = [
  {
    id: "researchers-academics",
    title: "Researchers and Academics",
    description:
      "PhD students, postdocs, and independent researchers who want to improve the visibility and impact of their published works.",
    imageSrc: "/images/publication-support/video-abstract/Researchers-and-Academics.jpg",
  },
  {
    id: "academic-institutions",
    title: "Academic Institutions",
    description:
      "Institutions are trying to promote faculty or student research output through engaging formats or for internal showcase, or public distribution.",
    imageSrc: "/images/publication-support/video-abstract/Academic-Institutions.jpg",
  },
  {
    id: "journal-publishers",
    title: "Journal Publishers and Editorial Boards",
    description:
      "Academic publishers are embracing multimedia abstracts to improve the discoverability of articles, user engagement with articles, and citation metrics.",
    imageSrc: "/images/publication-support/video-abstract/Journal-Publishers-and-Editorial-Boards.jpg",
  },
  {
    id: "funding-agencies",
    title: "Funding Agencies",
    description:
      "Organizations that fund research and seek concise visual summaries of project outcomes to share with stakeholders and policymakers.",
    imageSrc: "/images/publication-support/video-abstract/Funding-Agencies.jpg",
  },
  {
    id: "healthcare-professionals",
    title: "Healthcare Professionals",
    description:
      "Practitioners interested in concise, visual summaries of clinical trial findings and applied research.",
    imageSrc:
      "/images/publication-support/video-abstract/Healthcare-Professionals.jpg",
  },
  {
    id: "pharma-biotech-rd",
    title: "Nutraceutical, Pharma & Biotech R&D Teams",
    description:
      "Industry researchers evaluate published findings for product development and competitive analysis.",
    imageSrc: "/images/publication-support/video-abstract/Nutraceutical-Pharma-Biotech-RD-Teams.jpg",
  },
];

export default function WhoWeServe() {
  // Track active/hovered card ID for click or focus interactions on mobile/desktop
  const [activeCardId, setActiveCardId] = useState<string | null>(
    "researchers-academics",
  );

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
          Who We Serve
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl mb-8">
          We offer a video abstract service to assist researchers, authors, and
          institutions in turning published manuscripts into brief,
          journal-compliant audiovisual summaries to communicate key findings,
          increase the visibility of the research, and help satisfy
          dissemination criteria for high-impact academic publishers.
        </p>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((card) => {
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onClick={() => setActiveCardId(card.id)}
                className="relative w-full h-[220px] md:h-[240px] rounded-sm overflow-hidden cursor-pointer group shadow-sm transition-all duration-300"
              >
                {/* Active Dark Card State (Text Content Display) */}
                {isActive ? (
                  <div className="w-full h-full bg-black text-white p-6 flex flex-col justify-start transition-opacity duration-300">
                    <h3 className="text-sm md:text-base font-bold mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                ) : (
                  /* Inactive Card State (Image Background + Bottom Gradient Overlay) */
                  <div className="relative w-full h-full">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark Bottom Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5">
                      <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
