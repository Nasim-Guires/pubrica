"use client";

import CommonPackages from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import React, { useState } from "react";

export default function PubricaPackagesAndFeedback() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonialSlides = [
    [
      {
        quote:
          "I had a strict deadline for the publication I needed for my grant proposal. Pubrica's journal selection service identified appropriate indexed fast-track journals. My manuscript was accepted within 7 weeks. Outstanding service.",
        name: "DR. DAVID MENSAH",
        role: "- Independent Researcher - Public Health",
        image:
          "/images/publication-support/journal-selection/book-01.jpg",
      },
      {
        quote:
          "Pubrica's journal discovery team helped me quickly identify journals aligned with the scope and significance of my manuscript. The database filtering and editorial insights saved months of guessing. I am now published in a Q2 Journal based on Scopus. Highly recommended!",
        name: "DR. ANJALI VERMA, PHD",
        role: "- Scholar - Life Sciences",
        image:
          "/images/publication-support/journal-selection/book-01.jpg", // Fixed image path to match the journal cover style
      },
    ],
    [
      {
        quote:
          "Thanks to Pubrica, I submitted to a high-impact open-access journal I would not have found on my own. Their review and selection based on rankings confirmed the journal was appropriate for my research goals.",
        name: "DR. FATIMA AL-NOURI",
        role: "- Postdoc Researcher - Medical Genetics",
        image:
          "/images/publication-support/journal-selection/scropt-2.jpg",
      },
    ],
  ];

  const publicationPackages = [
    {
      icon: "/images/publication-support/journal-selection/standard-logo-480x480.png",
      title: "Standard",
      subtitle: "High-End Publication Support + Rapid Technical Review",
      idealFor:
        "Authors seeking expert journal advice in determining the best fit for their manuscript.",
      includes: [
        "3 Curated Journal Recommendations (Scopus/SCI/PubMed aligned) based on your research scope and goals.",
        "Summary Report with journal aims, scope, acceptance rates, and author guidelines.",
      ],
      addOns: [
        "Impact Factor & Indexing.",
        "Open Access vs Subscription Journal Consultations.",
      ],
      turnaround: "5 working days.",
      cardBgColor: "rgba(194, 211, 205, 0.5)",
      titleColor: "#1e293b",
    },
    {
      icon: "/images/publication-support/journal-selection/advanced.webp",
      title: "Advanced",
      subtitle: "High-End Publication Support + Rapid Technical Review",
      idealFor:
        "Researchers who want the journal selection and the manuscript preparation for a clear and timely submission process.",
      includes: [
        "All deliverables provided in the Standard Package.",
        "Manuscript Formatting for the selected journal’s guidelines.",
        "Customized Cover Letter draft as per the journal guidelines.",
      ],
      addOns: [
        "Impact Factor & Indexing Analysis.",
        "Open Access vs Subscription Journal Consultation.",
        "Language Editing & Proofreading.",
      ],
      turnaround: "7–8 working days.",
      cardBgColor: "rgba(204, 174, 203, 0.5)",
      titleColor: "#1e293b",
    },
    {
      icon: "/images/publication-support/journal-selection/elite.webp",
      title: "Elite",
      subtitle: "High-End Publication Support + Rapid Technical Review",
      idealFor:
        "Authors requiring complete support from journal selection through to submission and peer review.",
      includes: [
        "All deliverables in the Advanced Package.",
        "Submission Support, including tracking and communication management.",
        "Peer-Review Rebuttal Support with expert response drafting.",
      ],
      addOns: [
        "Impact Factor & Indexing Analysis.",
        "Open Access vs Subscription Journal Consultation.",
        "Language Editing & Proofreading.",
      ],
      turnaround: "10–12 working days.",
      cardBgColor: "rgba(207, 178, 136, 0.5)",
      titleColor: "#1e293b",
    },
  ];
  const currentTestimonials = testimonialSlides[activeSlide];

  return (
    <div className="w-full font-sans ">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: OUR PACKAGES                              */}
      {/* ---------------------------------------------------- */}

      <section className="py-2 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-white">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-center mb-0">
          Our Packages
        </h2>

        <div>
          <CommonPackages
            packages={publicationPackages}
          />
        </div>

        {/* Pull button upwards into the remaining component margin */}
        <div className="mt-3 sm:mt-14 text-center relative ">
          <GetFreeQuoteButton />
        </div>
      </section>
      {/* ---------------------------------------------------- */}
      {/* SECTION 2: TESTIMONIALS                              */}
      {/* ---------------------------------------------------- */}

      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-left mb-8">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div
              key={`${activeSlide}-${testimonial.name}`}
              className="bg-[#1e4339] text-white p-6 sm:p-8 rounded-lg shadow-md flex justify-between gap-4 items-center"
            >
              <div className="space-y-4 flex-1">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-100 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div>
                  <p className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                    {testimonial.name}
                  </p>

                  <p className="text-[11px] text-slate-300 italic">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Individual Testimonial Image Container */}
              <div className="w-20 sm:w-24 h-28 sm:h-32 shrink-0 bg-white p-1 rounded shadow-sm border border-slate-200 flex items-center justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setActiveSlide(0)}
            aria-label="Show first testimonials"
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${activeSlide === 0
              ? "bg-slate-800"
              : "border border-slate-600 bg-transparent"
              }`}
          />

          <button
            type="button"
            onClick={() => setActiveSlide(1)}
            aria-label="Show second testimonials"
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${activeSlide === 1
              ? "bg-slate-800"
              : "border border-slate-600 bg-transparent"
              }`}
          />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: CLIENT FEEDBACK                           */}
      {/* ---------------------------------------------------- */}

      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0d3b44] text-left mb-3">
            Client Feedback
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
            We prioritize open, timely, and transparent communications to keep the
            client informed through every stage of their project. Using a
            quality-driven approach guarantees precise feedback with a collaborative
            support framework for their research to work!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Plagiarism Report */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full h-44 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/publication-support/journal-selection/Plar-REport-768x525.png"
                  alt="Plagiarism Report"
                  width={768}
                  height={525}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-3 font-semibold text-slate-800 text-xs sm:text-sm text-center">
                Plagiarism Report
              </p>
            </div>

            {/* Card 2: ERP System */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full h-44 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/publication-support/journal-selection/sample-ERP-QC-768x346.png"
                  alt="Communication through ERP system"
                  width={768}
                  height={346}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-3 font-semibold text-slate-800 text-xs sm:text-sm text-center">
                Communication through ERP system
              </p>
            </div>

            {/* Card 3: WhatsApp */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full h-44 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/publication-support/journal-selection/Whatsapp-group.png"
                  alt="Communication through Whatsapp"
                  width={768}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-3 font-semibold text-slate-800 text-xs sm:text-sm text-center">
                Communication through Whatsapp
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}