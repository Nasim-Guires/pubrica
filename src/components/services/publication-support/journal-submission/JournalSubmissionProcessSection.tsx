"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Who We Serve Cards Data (5 Cards for this page layout)
const whoWeServeData = [
  {
    title: "Academic Researchers & Scientists",
    image: "/images/publication-support/journal-submission/Academic-Researchers-Scientists.jpg",
  },
  {
    title: "Clinical Trial Teams & CROs",
    image: "/images/publication-support/journal-submission/Clinical-Trial-Teams-CROs.jpg",
  },
  {
    title: "Pharmaceutical & Biotech Companies",
    image: "/images/publication-support/journal-submission/Pharmaceutical-Biotech-Companies.jpg",
  },
  {
    title: "Medical Device & Diagnostics Companies",
    image: "/images/publication-support/journal-submission/Medical-Device-Diagnostics-Companies.jpg",
  },
  {
    title: "Universities, Hospitals & Research Institutions",
    image: "/images/publication-support/journal-submission/Universities-Hospitals-Research-Institutions.jpg",
  },
];

// 2. Step-by-Step Process Data (Alternating Layout)
const processSteps = [
  {
    number: "1",
    title: "SHARE YOUR MANUSCRIPT & REQUIREMENTS",
    description:
      "Begin by submitting your finished manuscript. Tell us where you would like the paper submitted (journal(s)) and any submission guidelines, timelines, or ethical declaration that you would like us to keep in mind.",
    icon: "/images/publication-support/journal-submission/scopeofthejournal.webp",
    position: "bottom", // Rendered below horizontal line
  },
  {
    number: "2",
    title: "RECEIVE A PROFESSIONALLY DRAFTED COVER LETTER",
    description:
      "We format your manuscript according to the target journal’s guidelines and craft a compelling cover letter journal submission that highlights the significance of your research and its alignment with the journal’s scope.",
    icon: "/images/publication-support/journal-submission/target-readership.webp",
    position: "top", // Rendered above horizontal line
  },
  {
    number: "3",
    title: "JOURNAL ACCOUNT SETUP & SUBMISSION PREP",
    description:
      "Our professionals will set up and/or manage your submission account to ensure that all necessary metadata, declarations, and documents are complete. We will work with you for the needed information and follow journal submission practices.",
    icon: "/images/publication-support/journal-submission/timecost.webp",
    position: "bottom", // Rendered below horizontal line
  },
  {
    number: "4",
    title: "MANUSCRIPT SUBMISSION & PROOF OF COMPLETION",
    description:
      "We will submit your manuscript on your behalf and send you a PDF proof of the submission for your record. Our team will continue to monitor the progress and can assist you if you ever have questions about your post-submission communications.",
    icon: "/images/publication-support/journal-submission/visibilityquality.webp",
    position: "top", // Rendered above horizontal line
  },
];

export default function JournalSubmissionProcessSection() {
  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: WHO WE SERVE                   */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-3">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-5xl">
            Our{" "}
            <Link href="/services/publication-support/journal-submission" className="text-[#0082a6] hover:underline font-medium">
              journal submission service
            </Link>{" "}
            ensures a seamless and compliant submission process that meets the
            technical and editorial guidelines of your selected journals. This
            service is available to researchers, clinicians, and academic
            authors, offering an all-inclusive package that includes formatting
            your article to technical specifications, adding metadata, and
            uploading associated documents.
          </p>
        </div>

        {/* 5 Cards Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {whoWeServeData.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-56 rounded-sm overflow-hidden shadow-md cursor-pointer transition-all duration-300 "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent " />
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <h3 className="text-white font-bold text-xs sm:text-sm leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: HOW OUR SERVICE WORKS           */}
      {/* ========================================== */}
      <section className="bg-[#f0f2f2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Titles */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-2">
              How Our Journal Article Submission Service Works
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#0c3547] mb-4">
              Our step-by-Step Process
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Publishing research in high-impact journals is a critical process
              to communicate science and develop an academic career. At Pubrica,
              we understand the challenges of{" "}
              <a
                href="/services/publication-support"
                className="text-[#0082a6] hover:underline font-medium"
              >
                publication support
              </a>{" "}
              and strive to support the researcher through every step of the
              publication process.
            </p>
          </div>

          {/* Alternating Step-by-Step Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {processSteps.map((step, idx) => {
              const isTop = step.position === "top";

              return (
                <div key={idx} className="flex flex-col items-center w-full">
                  {/* UPPER LEVEL: Badge (for odd steps) OR Card (for even steps) */}
                  {!isTop ? (
                    <div className="flex flex-col items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#0082a6] text-white flex items-center justify-center font-bold text-base shadow-sm">
                        {step.number}
                      </div>
                      <div className="w-0.5 h-6 bg-red-300 my-1" />
                    </div>
                  ) : (
                    <StepCard step={step} />
                  )}

                  {/* MIDDLE LEVEL: Horizontal Teal Line */}
                  <div className="w-full h-3 bg-[#0082a6] my-2 rounded-sm hidden lg:block" />

                  {/* LOWER LEVEL: Card (for odd steps) OR Badge (for even steps) */}
                  {!isTop ? (
                    <StepCard step={step} />
                  ) : (
                    <div className="flex flex-col items-center mt-3">
                      <div className="w-0.5 h-6 bg-red-300 my-1" />
                      <div className="w-10 h-10 rounded-full bg-[#0082a6] text-white flex items-center justify-center font-bold text-base shadow-sm">
                        {step.number}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Step Card Component with Dark Hover State
function StepCard({ step }: { step: (typeof processSteps)[0] }) {
  return (
    <div className="group w-full bg-white rounded-sm p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#505050] hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer min-h-[290px] justify-start">
      {/* Icon with white invert on hover */}
      <div className="w-12 h-12 relative mb-4 transition-all group-hover:brightness-0 group-hover:invert">
        <Image
          src={step.icon}
          alt={step.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Card Title */}
      <h3 className="font-bold text-xs sm:text-sm tracking-wide text-gray-900 group-hover:text-white mb-3 uppercase leading-snug">
        {step.title}
      </h3>

      {/* Card Description */}
      <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
