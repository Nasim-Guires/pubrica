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
    <section className="mb-16 relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-3">
          {heading}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {subheading}
        </p>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <article
            key={expert.id}
            className="bg-white border border-slate-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col justify-between"
          >
            <div>
              {/* Profile Avatar & Country Flag */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={expert.avatarUrl}
                  alt={`${expert.name} - ${expert.title}`}
                  fill
                  sizes="80px"
                  className="rounded-full object-cover border-2 border-slate-100"
                />
                <div className="absolute bottom-0 right-0 w-6 h-4 overflow-hidden rounded shadow-sm">
                  <Image
                    src={expert.flagUrl}
                    alt={`${expert.name}'s region flag`}
                    width={24}
                    height={16}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Expert Info */}
              <h3 className="text-lg font-bold text-slate-900">{expert.name}</h3>
              <p className="text-xs font-semibold text-slate-600 mt-1">
                {expert.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">{expert.institution}</p>
            </div>

            {/* Footer Stats & Modal Trigger */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-600 font-medium flex justify-around mb-4">
                <span>{expert.experience}</span>
                <span className="text-slate-300" aria-hidden="true">|</span>
                <span>{expert.papersEdited}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedExpert(expert)}
                aria-haspopup="dialog"
                className="text-xs font-bold text-slate-800 hover:text-cyan-700 transition-colors cursor-pointer"
              >
                Read More
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity"
          onClick={() => setSelectedExpert(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setSelectedExpert(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column (Meta Summary) */}
              <div className="md:col-span-5 pr-0 md:pr-4 md:border-r border-slate-200 text-left">
                <div className="relative w-16 h-16 mb-3">
                  <Image
                    src={selectedExpert.avatarUrl}
                    alt={selectedExpert.name}
                    fill
                    sizes="64px"
                    className="rounded-full object-cover border-2 border-slate-100"
                  />
                </div>
                <h3
                  id="expert-modal-title"
                  className="text-base sm:text-lg font-bold text-slate-900 leading-tight"
                >
                  {selectedExpert.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  {selectedExpert.title}
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {selectedExpert.institution}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-700 font-medium">
                  <p>
                    <strong className="text-slate-900">
                      {selectedExpert.experience.split(" ")[0]}
                    </strong>{" "}
                    {selectedExpert.experience.split(" ").slice(1).join(" ")}
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      {selectedExpert.papersEdited.split(" ")[0]}
                    </strong>{" "}
                    {selectedExpert.papersEdited.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              </div>

              {/* Right Column (Detailed Bio & Expertise) */}
              <div className="md:col-span-7 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                <p>{selectedExpert.bio}</p>
                <p>
                  <strong className="text-slate-800">Subject Matter Expertise:</strong>{" "}
                  {selectedExpert.expertise}
                </p>
                <p>
                  <strong className="text-slate-800">Journals Submitted To:</strong>{" "}
                  {selectedExpert.journals}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}