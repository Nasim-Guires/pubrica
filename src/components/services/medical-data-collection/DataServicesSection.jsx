"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Data structure for accordion services
const servicesData = [
  {
    id: "primary-data",
    title: "Primary Data Collection Services",
    content:
      "Designing and executing primary research protocols including surveys, patient registries, observational studies, and real-world evidence (RWE) gathering to collect pristine field data.",
  },
  {
    id: "secondary-data",
    title: "Secondary Data Extraction",
    content:
      "Systematic literature reviews, extraction from medical records, clinical trial registries, and healthcare databases structured to extract actionable insights efficiently.",
  },
  {
    id: "advanced-analytics",
    title: "Advanced Data Handling and Analytics",
    content:
      "Standardizing, cleaning, and synthesizing complex datasets using statistical modeling, NLP, and machine learning techniques tailored for healthcare compliance.",
  },
];

// Data structure for "Who We Serve" cards
const clientsData = [
  {
    title: "Contract Research Organizations (CROs)",
    description:
      "Outsourced data extraction and collection solutions to accelerate clinical trial phases and reporting timelines.",
    image:
      "/images/medical-writing/Contract-Research-Organizations-CROs-1.webp",
    alt: "Researcher reviewing paper clinical data and documents",
  },
  {
    title: "Pharmaceutical & Biotech Companies",
    description:
      "Comprehensive data support for drug discovery, safety monitoring, and regulatory compliance submissions.",
    image:
      "/images/medical-writing/Pharmaceutical-Biotech-Companies.webp",
    alt: "Laboratory scientist conducting biotech research",
  },
  {
    title: "Academic and Research Institutions",
    description:
      "Rigorous secondary data synthesis and primary survey tools designed to support peer-reviewed publishing.",
    image:
      "/images/medical-writing/Academic-and-Research-Institutions-1.webp",
    alt: "Academic research library with books and literature databases",
  },
  {
    title: "Healthcare Providers & Hospitals",
    description:
      "Patient outcome data tracking, operational analytics, and clinical workflow evaluation frameworks.",
    image:
      "/images/medical-writing/Healthcare-Providers-Hospitals.webp",
    alt: "Healthcare providers and medical staff collaborating in a hospital",
  },
  {
    title: "Medical Device Companies",
    description:
      "Collecting regulatory-compliant data for device trials, usability studies, and post-market surveillance.",
    image:
      "/images/medical-writing/Medical-Device-Companies-1.webp",
    alt: "Medical device testing and clinical trial equipment",
  },
  {
    title: "Public Health Organizations & NGOs",
    description:
      "Epidemiological data mining, community health assessment tools, and global health research support.",
    image:
      "/images/medical-writing/Public-Health-Organizations-NGOs.webp",
    alt: "Clipboard with NGO public health planning documents",
  },
  {
    title: "Independent Researchers & Consultants",
    description:
      "Tailored analytical support, systematic reviews, and targeted data gathering for independent projects.",
    image:
      "/images/medical-writing/Independent-Researchers-Consultants.webp",
    alt: "Independent consultant conducting research on a digital tablet",
  },
];

export default function DataServicesSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <main className="w-full bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto font-sans">
      {/* Semantic Header Section */}
      <header className="mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#082e2b] mb-4 tracking-tight leading-snug">
          Comprehensive Data Collection and Extraction Services for Healthcare,
          Medical, and Life Science Research by Pubrica
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
          Pubrica’s team of experts excels in the systematic collection and
          extraction of diverse data types for healthcare, medical, and life
          science research. Our services are meticulously designed to handle
          both primary and secondary data sources, ensuring comprehensive
          support for data-intensive studies across various domains.
        </p>
      </header>

      {/* Semantic Section for Accordion Services */}
      <section aria-label="Core Services" className="space-y-3 mb-16">
        {servicesData.map((item) => {
          const isOpen = openAccordion === item.id;
          return (
            <article
              key={item.id}
              className="rounded-sm overflow-hidden shadow-sm"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-start gap-4 px-6 py-3.5 bg-[#082e2b] hover:bg-[#0f3835] text-white font-semibold text-sm sm:text-base transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <span
                    className="text-lg font-bold leading-none select-none"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                  <span>{item.title}</span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`accordion-body-${item.id}`}
                  className="p-5 bg-emerald-50/50 border-x border-b border-emerald-100 text-gray-700 text-sm leading-relaxed"
                >
                  <p>{item.content}</p>
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Semantic Section for Target Audiences */}
      <section aria-labelledby="who-we-serve-heading">
        <header className="mb-8">
          <h2
            id="who-we-serve-heading"
            className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4"
          >
            Who We Serve
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            At Pubrica, our medical{" "}
            <Link
              href="/services/medical-data-collection"
              title="Learn more about Pubrica medical data collection services"
              className="text-cyan-700 hover:underline font-medium decoration-cyan-700"
            >
              data collection services
            </Link>{" "}
            cater to a wide spectrum of stakeholders in the clinical and
            healthcare research ecosystem, including:
          </p>
        </header>

        {/* Semantic Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientsData.map((card, index) => (
            <article
              key={index}
              className="group relative h-64 sm:h-72 w-full overflow-hidden rounded-md shadow-md cursor-pointer bg-black"
            >
              {/* Next.js Optimized Image Component */}
              <div className="relative h-full w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-30 opacity-80"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              {/* Default State: Dark Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden="true"
              />

              {/* Default Title View */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 group-hover:translate-y-full">
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug drop-shadow-md">
                  {card.title}
                </h3>
              </div>

              {/* Hover State View */}
              <div className="absolute inset-0 bg-[#082e2b]/95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 border-b border-emerald-500/30 pb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
