"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  id: string;
  title: string;
  content: string[];
}

const accordionData: AccordionItem[] = [
  {
    id: "phd-scholars",
    title: "PhD Scholars & Early-Career Researchers",
    content: [
      "Poster creation (scientific and academic) for conferences",
      "Poster abstract content summaries based on the full thesis or manuscript",
      "Scientific and medical image resolution",
      "Poster layout following conference or institutional templates",
      "Presentable files (PDF/PNG) created for print/digital display",
    ],
  },
  {
    id: "clinical-researchers",
    title: "Clinical Researchers & Healthcare Professionals",
    content: [
      "Poster creation for medical and clinical conferences",
      "Visualizing case studies, clinical trials, and treatment pathways",
      "Integration of figures, charts, and other data from their clinical research",
      "Follow specialty-specific design guidelines (i.e., oncology, cardiology, etc.)",
      "Poster creation for medical and clinical conferences",
      "Visualizing case studies, clinical trials, and treatment pathways",
      "Integration of figures, charts, and other data from their clinical research",
      "Follow specialty-specific design guidelines (i.e., oncology, cardiology, etc.)",
    ],
  },
  {
    id: "academic-faculties",
    title: "Academic Faculties & Research Institutes",
    content: [
      "Professional poster preparation for research grants and funding bodies",
      "Collaborating with multi-author institutional projects",
      "Custom branding with institutional logos and uniform colour schemes",
      "Designing bilingual or multilingual posters for international events",
      "Professional poster preparation for research grants and funding bodies",
      "Collaborating with multi-author institutional projects",
      "Custom branding with institutional logos and uniform colour schemes",
      "Designing bilingual or multilingual posters for international events",
    ],
  },
  {
    id: "pharma-industry",
    title: "Life Sciences & Pharma Industry Researchers",
    content: [
      "Poster construction for regulatory submissions, product R&D, and industry exhibits",
      "Data visualization for preclinical and translational research",
      "Design integration of drug discovery pipelines and trial findings",
      "Support poster construction from white papers or technical reports",
    ],
  },
];

export default function WhoWeServeSection() {
  // Track open accordion panel; defaults to the first item ('phd-scholars')
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full font-sans text-gray-800 bg-white pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-4">
          Who We Serve
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 max-w-5xl">
          Our academic and{" "}
          <Link
            href="/academy/poster-preparation/maximize-research-impact-professional-poster-preparation-services"
            className="text-blue-600 hover:underline"
          >
            scientific poster design and creation service
          </Link>{" "}
          provides an academic poster scientifically accurate, professional, and
          visually appealing for successful presentations at academic
          conferences or other institutional standards. This service is designed
          specifically for researchers, clinicians, and academic authors as a
          comprehensive service that includes scientific content organization,
          poster layout and design development, integration of figures and
          tables, and preparation for print or online distribution.
        </p>

        {/* Content Grid: Accordion Left + Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-7 border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.id} className="bg-white">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-[#0c3830] font-bold text-base hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.title}</span>
                    <span className="text-xl font-bold leading-none ml-4 text-[#0c3830]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 bg-white">
                      <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm">
                        {item.content.map((point, i) => (
                          <li key={i} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Graphic / Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full h-[340px] md:h-[400px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/images/publication-support/poster-preparation/Our-academic-and-scientific-poster-design-and-creation-service-provides-min.jpg"
                alt="Researcher working on scientific presentation on computer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Banner */}
      <div className="bg-[#05231c] text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            Focus on Your Research — We&apos;ll Handle the Poster
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            With Pubrica, you get a professional, polished, and compliant
            scientific poster without the hassle. From content refinement to
            final delivery, we support you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}