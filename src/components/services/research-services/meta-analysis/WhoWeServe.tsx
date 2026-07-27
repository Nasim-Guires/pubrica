"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CardData {
  id: string;
  title: string;
  description: React.ReactNode;
  imageUrl: string;
}

export default function WhoWeServe() {
  // Track hovered/selected card index (defaults to 0 or null depending on preference)
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cards: CardData[] = [
    {
      id: "academicians",
      title: "Researchers & Academicians",
      description:
        "Supporting university faculty, PhD scholars, and independent researchers in conducting systematic reviews and meta-analyses for academic publication and thesis submission.",
      imageUrl:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "medical",
      title: "Medical & Clinical Professionals",
      description:
        "Assisting clinicians, hospital researchers, and healthcare practitioners with clinical meta-analyses and evidence-based research to inform patient care and treatment guidelines.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "pharma",
      title: "Pharmaceutical & Biotech Companies",
      description:
        "Providing comprehensive meta-analytic support for drug development, clinical trials, and regulatory submissions.",
      imageUrl:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ngos",
      title: "Public Health Organizations & NGOs",
      description:
        "Delivering data-driven insights for health policy planning, epidemiological studies, and global health initiatives through robust meta-analytical evidence.",
      imageUrl:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "publishers",
      title: "Scientific Publishers & Journals",
      description:
        "Enhancing manuscript quality with statistically sound meta-analyses that meet journal-specific publication standards.",
      imageUrl:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "cros",
      title: "CROs & Research Consultants",
      description: (
        <span>
          Enabling Contract Research Organizations and consultants to outsource high-quality meta-analyses backed by compliance with{" "}
          <Link href="#" className="text-blue-400 underline hover:text-blue-300">
            PRISMA
          </Link>{" "}
          and MARS guidelines.
        </span>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#0f2c3a] mb-4">
          Who We Serve
        </h2>

        {/* Intro Description */}
        <p className="text-gray-700 text-base leading-relaxed mb-10 max-w-5xl">
          At Pubrica, our{" "}
          <Link
            href="/services/meta-analysis-writing-services"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            meta-analysis writing services
          </Link>{" "}
          cater to a diverse range of clients in the academic, clinical, and{" "}
          <Link
            href="/services/pharmaceutical-research"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            pharmaceutical
          </Link>{" "}
          research domains. Whether you&apos;re conducting a systematic review, submitting to a high-impact journal, or preparing evidence for regulatory approval, our professional meta-analysis experts provide end-to-end support.
        </p>

        {/* Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isHovered = activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="relative h-64 rounded-none overflow-hidden cursor-pointer transition-all duration-300 shadow-md"
              >
                {/* Background Image Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Default State Overlay (Dark Gradient at bottom with Title) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Active/Hover State Overlay (Full Black Box with Title & Text) */}
                <div
                  className={`absolute inset-0 bg-black p-6 flex flex-col justify-start transition-opacity duration-300 ${
                    isHovered ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-white font-bold text-lg mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <div className="text-gray-200 text-sm leading-relaxed">
                    {card.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}