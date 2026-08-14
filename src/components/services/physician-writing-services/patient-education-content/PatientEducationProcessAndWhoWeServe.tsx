"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PatientEducationProcessAndWhoWeServe() {
  // Step-by-step process data
  const steps = [
    {
      number: 1,
      icon: (
        <svg
          className="w-10 h-10 text-slate-700 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      description:
        "We begin by understanding your requirements, target audience, and the specific medical information you aim to communicate.",
    },
    {
      number: 2,
      icon: (
        <svg
          className="w-10 h-10 text-slate-700 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "Our expert team conducts comprehensive research and crafts clear, concise, and accurate patient education content tailored to your audience's needs.",
    },
    {
      number: 3,
      icon: (
        <svg
          className="w-10 h-10 text-slate-700 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "You'll have the opportunity to review the content draft and provide feedback. We refine the material based on your input to ensure it meets your expectations and aligns with medical guidelines.",
    },
    {
      number: 4,
      icon: (
        <svg
          className="w-10 h-10 text-slate-700 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      description:
        "Upon final approval, we deliver the finished patient education materials in your preferred format and provide ongoing support to address any further inquiries or modifications.",
    },
  ];

  // Who we serve grid items
  const whoWeServe = [
    { title: "Hospitals & Clinics", image: "/images/physician-writing-services/patient-education-content/Hospitals-Clinics.jpg" },
    {
      title: "Pharmaceutical & Biotech Companies",
      image: "/images/physician-writing-services/patient-education-content/Pharmaceutical-Biotech-Companies.jpg",
    },
    {
      title: "Medical Device Manufacturers",
      image: "/images/physician-writing-services/patient-education-content/Medical-Device-Manufacturers.jpg",
    },
    {
      title: "Contract Research Organizations",
      image: "/images/physician-writing-services/patient-education-content/Contract-Research-Organizations.jpg",
    },
    {
      title: "Public Health Authorities & NGOs",
      image: "/images/physician-writing-services/patient-education-content/Public-Health-Authorities-NGOs.jpg",
    },
    { title: "Digital Health Platforms", image: "/images/physician-writing-services/patient-education-content/Digital-Health-Platforms.jpg" },
  ];

  return (
    <div className="w-full bg-[#f8fcfb] text-slate-800 font-sans py-12">
      {/* --- Section 1: Commitment to Accuracy & Trust --- */}
      <section
        aria-label="Commitment to Accuracy & Trust"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] mb-4">
          Commitment to Accuracy & Trust
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          We use these sources to verify that all patient-facing materials are
          based upon current best practices, are consistent with medical
          standards, and are updated as clinical guidelines evolve.
        </p>
      </section>

      {/* --- Section 2: Who We Serve --- */}
      <section
        aria-label="Who We Serve"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] mb-3">
          Who We Serve
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
          Pubrica&apos;s{" "}
          <Link href="#" className="text-[#0a66bc] hover:underline">
            patient education content
          </Link>{" "}
          service delivers medically accurate, reader-friendly educational
          materials that empower patients to understand, manage, and participate
          actively in their healthcare journey.
        </p>

        {/* Card Grid with Gradient Text Overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServe.map((item, index) => (
            <div
              key={index}
              className="relative group h-64 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Bottom Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: How Service Works (Step-by-Step Process) --- */}
      <section
        aria-label="How Service Works"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
            How a Patient Education Content Development Service Works
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Our step-by-step Process
          </p>
          <p className="text-slate-700 text-sm sm:text-base max-w-4xl mx-auto pt-2 leading-relaxed">
            With Pubrica&apos;s{" "}
            <Link href="#" className="text-[#0a66bc] hover:underline">
              patient education content
            </Link>{" "}
            service, our medical experts and{" "}
            <Link href="#" className="text-[#0a66bc] hover:underline">
              scientific writing
            </Link>{" "}
            team work together to develop clear, accurate, and
            guideline-compliant educational materials that are tailored to
            specific patient needs and aligned with healthcare communication
            standards.
          </p>
        </div>

        {/* Timeline Grid (4 Steps) */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 pt-8">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[110px] left-0 right-0 h-1 bg-[#008ba3] z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center z-10"
            >
              {/* Step Card 1 & 3: Card Top, Number Bottom | Step Card 2 & 4: Number Top, Card Bottom */}
              {step.number % 2 !== 0 ? (
                <>
                  {/* Card with Black Hover Effect */}
                  <div className="group w-full min-h-[220px] bg-white hover:bg-[#525252] border border-slate-200 p-6 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start space-y-3 cursor-pointer">
                    <div className="p-2 bg-slate-50 group-hover:bg-transparent rounded-sm transition-colors duration-300">
                      {step.icon}
                    </div>
                    <p className="text-slate-700 group-hover:text-white text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-base shadow-md mt-6">
                    {step.number}
                  </div>
                </>
              ) : (
                <>
                  {/* Step Number Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-base shadow-md mb-6">
                    {step.number}
                  </div>

                  {/* Card with Black Hover Effect */}
                  <div className="group w-full min-h-[220px] bg-white hover:bg-[#525252] border border-slate-200 p-6 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start space-y-3 cursor-pointer">
                    <div className="p-2 bg-slate-50 group-hover:bg-transparent rounded-sm transition-colors duration-300">
                      {step.icon}
                    </div>
                    <p className="text-slate-700 group-hover:text-white text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
