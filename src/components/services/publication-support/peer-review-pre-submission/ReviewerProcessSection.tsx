'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection';

// 1. Who We Serve Cards Data
const whoWeServeData = [
  { title: 'PhD Scholars', image: '/images/publication-support/peer-review-pre-submission/PhD-Scholars-1.jpg' },
  { title: 'Early-Career Researchers', image: '/images/publication-support/peer-review-pre-submission/Early-Career-Researchers-1.jpg' },
  { title: 'Academic Faculty and Professors', image: '/images/publication-support/peer-review-pre-submission/Academic-Faculty-and-Professors.jpg' },
  { title: 'Independent Researchers', image: '/images/publication-support/peer-review-pre-submission/Independent-Researchers-1.jpg' },
  { title: 'Medical Device manufacturers', image: '/images/publication-support/peer-review-pre-submission/Medical-Device-manufacturers-1.jpg' },
  { title: 'Pharmaceutical Companies', image: '/images/publication-support/peer-review-pre-submission/Pharmaceutical-Companies-1.jpg' },
  { title: 'Life Science & Biotechnology Companies', image: '/images/publication-support/peer-review-pre-submission/Life-Science-Biotechnology-Companies.jpg' },
];

const standards = [
  {
    title: "CONSORT",
    subtitle: "Consolidated Standards of Reporting Trials (CONSORT)",
    imageSrc: "/images/publication-support/peer-review-pre-submission/Consort-Logo.webp",
    alt: "SPIRIT CONSORT",
    url: "https://www.consort-spirit.org/",
  },
  {
    title: "PRISMA",
    subtitle: "Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA)",
    imageSrc: "/images/publication-support/peer-review-pre-submission/prisma_logo.png",
    alt: "PRISMA",
    url: "https://www.prisma-statement.org/",
  },
  {
    title: "STROBE",
    subtitle: "Strengthening the Reporting of Observational Studies in Epidemiology (STROBE)",
    imageSrc: "/images/publication-support/peer-review-pre-submission/Strengthening-the-Reporting-of-Observational-Studies-in-Epidemiology.png",
    alt: "STROBE",
    url: "https://www.strobe-statement.org/",
  },
];

// 2. Process Steps Data
const processSteps = [
  {
    stepNumber: 1,
    title: "UPLOAD YOUR MANUSCRIPT",
    description:
      "The process begins by submitting your manuscript and any specific guidelines for the journal or instructions from your institution. This helps us align our review with your publication objectives.",
    iconSrc:
      "/images/publication-support/peer-review-pre-submission/scopeofthejournal.webp",
    position: "bottom" as const,
  },
  {
    stepNumber: 2,
    title: "TECHNICAL REVIEW",
    description:
      "Pubrica's peer review pre-submission service raises the impact and compliance of your research with industry publication expectations.",
    iconSrc:
      "/images/publication-support/peer-review-pre-submission/target-readership.webp",
    position: "top" as const,
  },
  {
    stepNumber: 3,
    title: "EXPERT SCIENTIFIC FEEDBACK",
    description:
      "Following a comprehensive technical review, Pubrica's editors highlight gaps and provide feedback on the most important elements, ensuring ethical compliance.",
    iconSrc:
      "/images/publication-support/peer-review-pre-submission/timecost.webp",
    position: "bottom" as const,
  },
  {
    stepNumber: 4,
    title: "MULTIPLE ROUNDS OF REVIEW",
    description:
      "Following your revisions, Pubrica provides one complimentary re-review by a subject matter expert to ensure that the revision reflects the original recommendations and the journal's expectations.",
    iconSrc:
      "/images/publication-support/peer-review-pre-submission/visibilityquality.webp",
    position: "top" as const,
  },
];

export default function ReviewerProcessSection() {
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
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
            Our peer review pre-submission service provides important feedback to improve the scientific quality, clarity, and publication readiness of your manuscript. Designed for researchers, clinicians, and academics, the service provides multiple levels of support based on journal expectations and reviewer criteria.
          </p>
        </div>

        {/* First Row (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {whoWeServeData.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="group relative h-48 rounded-md overflow-hidden 1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row (3 Centered Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {whoWeServeData.slice(4).map((item, idx) => (
            <div
              key={idx}
              className="group relative h-48 rounded-md overflow-hidden shadow-md "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: OUR REVIEWER COMMENTS PROCESS  */}
      {/* ========================================== */}
      <EditorialWorkflowSection
        heading="Our Reviewer Comments Process"
        subheading=''
        steps={processSteps}
      />

      {/* ========================================== */}
      {/* SECTION 3: SATISFACTION BANNER             */}
      {/* ========================================== */}
      <section className="w-full bg-[#032d20] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          {/* Badge Image - Increased size to match screenshot balance */}
          <div className="w-36 h-36 sm:w-40 sm:h-40 relative shrink-0">
            <Image
              src="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              fill
              className="object-contain"
            />
          </div>

          {/* Banner Copy */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Speed up your Journey to Publication with Pubrica
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-2xl">
              Accelerate your path to publication with Pubrica&apos;s expert guidance and streamlined processes.
              Gain the advantage of efficient manuscript handling and editorial support today.
            </p>
          </div>
        </div>
      </section>
      {/* Compliance Standards Section */}
      <section className="w-full bg-gray-50/50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Our Compliance and guideline Standards
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {standards.map((standard, index) => (
              <Link
                key={index}
                href={standard.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between transition-all hover:shadow-md hover:border-gray-200 group"
              >
                {/* Logo Graphic Container */}
                <div className="w-full h-24 relative mb-4 flex items-center justify-center">
                  <Image
                    src={standard.imageSrc}
                    alt={standard.alt}
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Card Subtitle/Description */}
                <p className="text-xs text-gray-600 font-medium leading-snug mt-2 group-hover:text-gray-900">
                  {standard.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Process Card with Black Hover State
function ProcessCard({ step }: { step: (typeof processSteps)[0] }) {
  return (
    <div className="group w-full bg-white rounded-md p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#505050] hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
      {/* Icon with white invert on hover */}
      <div className="w-12 h-12 relative mb-4 transition-all group-hover:brightness-0 group-hover:invert">
        <Image
          src={step.iconSrc}
          alt={step.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Card Title */}
      <h3 className="font-bold text-xs sm:text-sm tracking-wider text-gray-900 group-hover:text-white mb-3 uppercase">
        {step.title}
      </h3>

      {/* Card Description */}
      <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}