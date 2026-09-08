"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const IMG = "/images/editing-and-translation/scientific-editing";

interface AudienceCard {
  id: string;
  title: string;
  imageSrc: string;
  description: React.ReactNode;
}

const audiences: AudienceCard[] = [
  {
    id: "researchers",
    title: "Researchers & Academics",
    imageSrc: `${IMG}/Researchers-Academics.png`,
    description: (
      <>
        Individual scholars, early-career researchers, and senior academics seeking to refine manuscripts, theses, or dissertations for{" "}
        <Link
          href="/services/publication-support/journal-submission"
          className="text-blue-600 no-underline hover:no-underline"
        >
          journal submission
        </Link>{" "}
        or academic recognition.
      </>
    ),
  },
  {
    id: "pharma",
    title: "Pharmaceutical & Biotech Companies",
    imageSrc: `${IMG}/Pharmaceutical-Biotech-Companies.png`,
    description: (
      <>
        Organizations involved in drug discovery, clinical trials, and product development that require clear, regulatory-compliant manuscripts, technical reports, and publications.
      </>
    ),
  },
  {
    id: "medical",
    title: "Medical & Healthcare Professionals",
    imageSrc: `${IMG}/Medical-Healthcare-Professionals.png`,
    description: (
      <>
        Clinicians, surgeons, and healthcare practitioners aiming to publish clinical research, case studies, and{" "}
        <Link
          href="/services/research-services/systematic-review"
          className="text-blue-600 no-underline hover:no-underline"
        >
          systematic reviews
        </Link>{" "}
        in leading journals.
      </>
    ),
  },
  {
    id: "universities",
    title: "Universities & Research Institutions",
    imageSrc: `${IMG}/Universities-Research-Institutions.png`,
    description: (
      <>
        Departments, research groups, and institutions strive to maintain publication excellence and enhance the global visibility of their scientific output.
      </>
    ),
  },
  {
    id: "publishers",
    title: "Publishers & Journals",
    imageSrc: `${IMG}/Publishers-Journals.png`,
    description: (
      <>
        Academic publishers and journal editorial teams need professional editing to ensure manuscripts meet editorial standards and formatting requirements.
      </>
    ),
  },
  {
    id: "students",
    title: "Students & Doctoral Candidates",
    imageSrc: `${IMG}/Students-Doctoral-Candidates.png`,
    description: (
      <>
        Master's and PhD candidates preparing theses, dissertations, or research papers to align with academic and institutional submission guidelines.
      </>
    ),
  },
];

export default function ScientificWhoWeServe() {
  // Track the active card ID for mobile/touch clicks
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    // Toggle active state: if clicked again, close it; otherwise open it and close others
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-7xl mx-auto py-6 md:py-7 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header */}
      <div className="max-w-5xl mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] tracking-tight mb-3">
          Who We Serve
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          At Pubrica, our{" "}
          <Link
            href="/academy/scientific-editing/scientific-vs-language-editing-high-quality-publications"
            className="text-blue-600 no-underline hover:no-underline"
          >
            scientific research paper editing services
          </Link>{" "}
          are designed to support a wide spectrum of researchers, institutions, and professionals across disciplines. We understand the unique challenges of publishing in high-impact journals and ensure that your work meets international standards of clarity, precision, and credibility. We Serve:
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((item) => {
          const isOpen = activeCard === item.id;

          return (
            <div
              key={item.id}
              tabIndex={0}
              onClick={() => handleCardClick(item.id)}
              className="group relative h-64 sm:h-72 rounded-sm overflow-hidden shadow-sm cursor-pointer w-full focus:outline-none"
            >
              {/* Normal State (Image) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Dark gradient overlay for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hovered/Tapped State (Desktop hover OR Mobile state controlled) */}
              <div
                className={`absolute inset-0 w-full h-full bg-black text-white p-6 flex flex-col justify-start space-y-4 transition-opacity duration-300 ease-in-out z-10 ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto"
                  }`}
              >
                <h3 className="text-base sm:text-lg font-bold tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Text */}
      <div className="mt-10 max-w-5xl">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Our services also extend to{" "}
          <Link
            href="/services/editing-and-translation/manuscript-editing"
            className="text-blue-600 no-underline hover:no-underline"
          >
            academic writing and editing
          </Link>
          , offering comprehensive assistance in drafting, revising, and polishing research manuscripts to align with journal expectations and academic excellence.
        </p>
      </div>
    </section>
  );
}