"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  id: string;
  title: string;
  description: React.ReactNode;
  imageUrl: string;
}

export default function WhoWeServe() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cards: CardData[] = [
    {
      id: "academicians",
      title: "Researchers & Academicians",
      description:
        "Supporting university faculty, PhD scholars, and independent researchers in conducting systematic reviews and meta-analyses for academic publication and thesis submission.",
      imageUrl:
        "/images/research-services/meta-analysis/Researchers-Academicians.png",
    },
    {
      id: "medical",
      title: "Medical & Clinical Professionals",
      description:
        "Assisting clinicians, hospital researchers, and healthcare practitioners with clinical meta-analyses and evidence-based research to inform patient care and treatment guidelines.",
      imageUrl:
        "/images/research-services/meta-analysis/Medical-Clinical-Professionals.png",
    },
    {
      id: "pharma",
      title: "Pharmaceutical & Biotech Companies",
      description:
        "Providing comprehensive meta-analytic support for drug development, clinical trials, and regulatory submissions.",
      imageUrl:
        "/images/research-services/meta-analysis/Pharmaceutical-Biotech-Companies-2.png",
    },
    {
      id: "ngos",
      title: "Public Health Organizations & NGOs",
      description:
        "Delivering data-driven insights for health policy planning, epidemiological studies, and global health initiatives through robust meta-analytical evidence.",
      imageUrl:
        "/images/research-services/meta-analysis/Public-Health-Organizations-NGOs.png",
    },
    {
      id: "publishers",
      title: "Scientific Publishers & Journals",
      description:
        "Enhancing manuscript quality with statistically sound meta-analyses that meet journal-specific publication standards.",
      imageUrl:
        "/images/research-services/meta-analysis/Scientific-Publishers-Journals.png",
    },
    {
      id: "cros",
      title: "CROs & Research Consultants",
      description: (
        <span>
          Enabling Contract Research Organizations and consultants to outsource high-quality meta-analyses backed by compliance with{" "}
          <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
            PRISMA
          </a>{" "}
          and MARS guidelines.
        </span>
      ),
      imageUrl:
        "/images/research-services/meta-analysis/CROs-Research-Consultants.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0f2c3a] mb-4">
          Who We Serve
        </h2>

        <p className="text-gray-700 text-base leading-relaxed mb-10 max-w-5xl">
          At Pubrica, our{" "}
          <Link
            href="/services/research-services/meta-analysis"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            meta-analysis writing services
          </Link>{" "}
          cater to a diverse range of clients in the academic, clinical, and{" "}
          <Link
            href="/Industries/pharmaceutical"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            pharmaceutical
          </Link>{" "}
          research domains. Whether you&apos;re conducting a systematic review, submitting to a high-impact journal, or preparing evidence for regulatory approval, our professional meta-analysis experts provide end-to-end support.
        </p>

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
                <div
                  className={`absolute inset-0 transition-transform duration-500 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                >
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>

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
