"use client";

import React from "react";
import Image from "next/image";

const targetAudiences = [
  {
    id: 1,
    title: "Academia & Researchers",
    image: "/images/ai-ml-support/Academia-Researchers.webp",
    alt: "Researchers looking over desk documentation",
  },
  {
    id: 2,
    title: "Healthcare & Life Sciences",
    image: "/images/ai-ml-support/Healthcare-Life-Sciences.webp",
    alt: "Doctor holding DNA strand visualization",
  },
  {
    id: 3,
    title: "Biotechnology & Pharmaceuticals",
    image: "/images/ai-ml-support/Biotechnology-Pharmaceuticals.webp",
    alt: "Scientist examining flask in laboratory",
  },
  {
    id: 4,
    title: "Business & Industry",
    image: "/images/ai-ml-support/Business-Industry.webp",
    alt: "Skyscrapers with connected digital network overlay",
  },
  {
    id: 5,
    title: "Government & Policy Makers",
    image: "/images/ai-ml-support/Government-Policy-Makers.webp",
    alt: "Magnifying glass examining policy book",
  },
  {
    id: 6,
    title: "Technology & Software Companies",
    image: "/images/ai-ml-support/Technology-Software-Companies.webp",
    alt: "Developer writing software code on laptop",
  },
];

export default function WhoWeServeSection() {
  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-4">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At Pubrica, our AI and Machine Learning services are designed to
            empower diverse stakeholders across industries and research domains.
            We collaborate with clients who require data-driven insights,
            intelligent automation, and innovative solutions to transform their
            operations and research outcomes.
          </p>
        </div>

        {/* 6-Card Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {targetAudiences.map((item) => (
            <div
              key={item.id}
              className="relative group h-48 sm:h-56 rounded-md overflow-hidden shadow-sm border border-slate-200"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Typography Clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Bottom Title Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          At Pubrica, our AI & ML expertise bridges the gap between complex data
          and real-world applications, serving those who seek precision,
          reliability, and innovation.
        </p>
      </div>
    </section>
  );
}
