"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ServeItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const EditingTranslationBookEditingWhoWeServe: React.FC = () => {
  // Store hovered card ID for desktop interaction (defaults to first card if desired, or null)
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const audienceList: ServeItem[] = [
    {
      id: "academic",
      title: "Academic Authors & Researchers",
      description:
        "Scholars preparing textbooks, reference books, or edited volumes in the sciences, engineering, medicine, and social sciences.",
      imageSrc:
        "/images/editing-and-translation/book-editing/Academic-Authors-Researchers.png",
    },
    {
      id: "phd",
      title: "PhD Scholars & Postdoctoral Researchers",
      description:
        "Converting dissertations and theses into publishable academic books or monographs.",
      imageSrc:
        "/images/editing-and-translation/book-editing/PhD-Scholars-Postdoctoral-Researchers.png",
    },
    {
      id: "independent",
      title: "Independent Authors & Professionals",
      description:
        "Writers seeking editing support for nonfiction, technical, or professional books.",
      imageSrc:
        "/images/editing-and-translation/book-editing/Independent-Authors-Professionals.png",
    },
    {
      id: "medical",
      title: "Medical & Scientific Experts",
      description:
        "Clinicians, scientists, and specialists compile handbooks, clinical guides, or academic resources.",
      imageSrc:
        "/images/editing-and-translation/book-editing/Medical-Scientific-Experts.png",
    },
    {
      id: "publishers",
      title: "Publishers & Editors",
      description:
        "Partnering with publishing houses to deliver editorially polished, market-ready book content.",
      imageSrc:
        "/images/editing-and-translation/book-editing/Publishers-Editors.png",
    },
    {
      id: "universities",
      title: "Universities & Research Institutions",
      description:
        "Supporting institutional publications, edited series, and collaborative works.",
      imageSrc:
        "/images/editing-and-translation/book-editing/Universities-Research-Institutions-1.png",
    },
  ];

  return (
    <section className="w-full bg-white py-6 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
          Who We Serve
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-5xl mb-8 leading-relaxed">
          At Pubrica, our professional Book Editing Services are designed to
          support a wide spectrum of authors, researchers, and professionals who
          aim to publish impactful works with clarity, precision, and
          excellence. Our expert editors collaborate with:
        </p>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceList.map((item) => {
            const isFlipped = activeCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() =>
                  setActiveCard(activeCard === item.id ? null : item.id)
                }
                className="relative h-60 rounded-lg overflow-hidden cursor-pointer shadow-sm border border-slate-100 group transition-all duration-300"
              >
                {/* Default Card State (Image background with overlay text) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Bottom Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5">
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Hover / Active Card State (Full Black Background with Text Description) */}
                <div
                  className={`absolute inset-0 bg-black p-6 flex flex-col justify-start transition-opacity duration-300 ${
                    isFlipped
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-sm sm:text-base font-bold text-white mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
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
};
