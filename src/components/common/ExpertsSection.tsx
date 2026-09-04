"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface Expert {
  id: string;
  name: string;
  title: string;
  institution: string;
  experience: string;
  papersEdited: string;
  avatarUrl: string;
  flagUrl: string;
  bio: string;
  expertise: string;
  journals: string;
}

interface ExpertsSectionProps {
  heading?: string;
  subheading?: string;
  experts: Expert[];
}

export default function ExpertsSection({
  heading = "Meet Our Thesis Editing Experts",
  subheading = "We will match you with the best editing expert to meet your needs based on your field of study, selected service, and preferences.",
  experts,
}: ExpertsSectionProps) {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  // Generate Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: experts.map((expert, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: expert.name,
        jobTitle: expert.title,
        worksFor: {
          "@type": "Organization",
          name: expert.institution,
        },
        description: expert.bio,
        image: expert.avatarUrl,
      },
    })),
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-normal text-[#003B46] mb-3">
          {heading}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {subheading}
        </p>
      </div>

      {/* Grid Display with proper centering and safe side padding */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch max-w-6xl mx-auto">
        {experts.map((expert) => (
          <article
            key={expert.id}
            className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Minimal Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-[#003B46] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Profile Avatar & Country Flag */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                <Image
                  src={expert.avatarUrl}
                  alt={`${expert.name} - ${expert.title}`}
                  fill
                  sizes="96px"
                  className="rounded-full object-cover ring-4 ring-slate-50 group-hover:ring-cyan-50 transition-all duration-300 shadow-sm"
                />
                <div className="absolute bottom-0 right-1 w-7 h-5 overflow-hidden rounded shadow-sm ring-2 ring-white">
                  <Image
                    src={expert.flagUrl}
                    alt={`${expert.name}'s region flag`}
                    width={28}
                    height={20}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Expert Info */}
              <div className="text-center">
                <h3 className="text-lg font-normal text-slate-900 group-hover:text-[#003B46] transition-colors">
                  {expert.name}
                </h3>
                <span className="inline-block text-xs font-normal text-cyan-800 bg-cyan-50/80 border border-cyan-100/50 py-1 px-3 rounded-full mt-1.5 shadow-2xs">
                  {expert.title}
                </span>
                <p className="text-xs text-slate-500 mt-2.5 font-normal line-clamp-1">
                  {expert.institution}
                </p>
              </div>
            </div>

            {/* Footer Stats & Modal Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100/80 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2 text-center bg-slate-50/80 rounded-2xl py-3 px-3 border border-slate-100">
                <div className="border-r border-slate-200/80 pr-2">
                  <span className="block text-[10px] uppercase font-normal tracking-wider text-slate-400 mb-0.5">
                    Experience
                  </span>
                  <span className="text-xs font-normal text-slate-800">
                    {expert.experience}
                  </span>
                </div>
                <div className="pl-2">
                  <span className="block text-[10px] uppercase font-normal tracking-wider text-slate-400 mb-0.5">
                    Completed
                  </span>
                  <span className="text-xs font-normal text-slate-800">
                    {expert.papersEdited}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedExpert(expert)}
                aria-haspopup="dialog"
                className="w-full py-3 px-4 bg-slate-900 hover:bg-[#003B46] text-white text-xs font-normal rounded-xl transition-all duration-200 shadow-sm hover:shadow cursor-pointer flex items-center justify-center gap-2 group/btn"
              >
                <span>Read More</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedExpert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="expert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          onClick={() => setSelectedExpert(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setSelectedExpert(null)}
              aria-label="Close details"
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column (Meta Summary) */}
              <div className="md:col-span-5 pr-0 md:pr-4 md:border-r border-slate-200 text-left">
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={selectedExpert.avatarUrl}
                    alt={selectedExpert.name}
                    fill
                    sizes="80px"
                    className="rounded-full object-cover ring-2 ring-slate-100 shadow-sm"
                  />
                </div>
                <h3
                  id="expert-modal-title"
                  className="text-base sm:text-lg font-normal text-slate-900 leading-tight"
                >
                  {selectedExpert.name}
                </h3>
                <p className="text-xs text-cyan-700 font-normal mt-1">
                  {selectedExpert.title}
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {selectedExpert.institution}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <p>
                    <span className="text-slate-900 font-normal">
                      {selectedExpert.experience.split(" ")[0]}
                    </span>{" "}
                    {selectedExpert.experience.split(" ").slice(1).join(" ")}
                  </p>
                  <p>
                    <span className="text-slate-900 font-normal">
                      {selectedExpert.papersEdited.split(" ")[0]}
                    </span>{" "}
                    {selectedExpert.papersEdited.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              </div>

              {/* Right Column (Detailed Bio & Expertise) */}
              <div className="md:col-span-7 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                <p className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-slate-700">
                  {selectedExpert.bio}
                </p>
                <p>
                  <span className="text-slate-900 block mb-1 font-normal">Subject Matter Expertise:</span>
                  <span className="text-slate-600">{selectedExpert.expertise}</span>
                </p>
                <p>
                  <span className="text-slate-900 block mb-1 font-normal">Journals Submitted To:</span>
                  <span className="text-slate-600">{selectedExpert.journals}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}