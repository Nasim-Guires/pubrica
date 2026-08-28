'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PAGE_IMAGES = '/images/publication-support/poster-preparation';

interface StepItem {
  number: number;
  title: string;
  isTopCircle: boolean; // true for 1, 3, 5 | false for 2, 4, 6
  icon: string;
  content: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: 1,
    title: 'SUBMIT YOUR REQUEST',
    isTopCircle: true,
    icon: `${PAGE_IMAGES}/submit-your-request-.png`,
    content: (
      <>
        <p className="mb-2">Provide your manuscript</p>
        <ul className="list-disc pl-3 space-y-1 text-[11px] leading-tight">
          <li>Link to the conference website and/or specific poster submission guidelines</li>
          <li>Figures/graphics in high-resolution image format (JPEG, TIFF) or editable/vector files</li>
        </ul>
      </>
    ),
  },
  {
    number: 2,
    title: 'MATERIAL REVIEW & ORDER CONFIRMATION',
    isTopCircle: false,
    icon: `${PAGE_IMAGES}/material-review-and-order-confirmation-.png`,
    content: (
      <p className="text-[11px] leading-relaxed">
        Our team examines the content you submitted and confirms your order. We may contact you for clarification of details or to request anything missing from your content before proceeding.
      </p>
    ),
  },
  {
    number: 3,
    title: 'SCIENTIFIC CONTENT EDITING',
    isTopCircle: true,
    icon: `${PAGE_IMAGES}/scientific-content-editing-.png`,
    content: (
      <>
        <p className="mb-2">A domain-specific content expert edits the provided text for:</p>
        <ul className="list-disc pl-3 space-y-1 text-[11px] leading-tight">
          <li>Language accuracy</li>
          <li>Clarity and brevity suited to poster formats</li>
          <li>Alignment with scientific tone and target audience</li>
        </ul>
      </>
    ),
  },
  {
    number: 4,
    title: 'POSTER DESIGN & LAYOUT DRAFT',
    isTopCircle: false,
    icon: `${PAGE_IMAGES}/poster-design-layout-.png`,
    content: (
      <>
        <p className="mb-2">Our design team creates a structured, visually appealing draft, customized to:</p>
        <ul className="list-disc pl-3 space-y-1 text-[11px] leading-tight">
          <li>Conference-specific layout and formatting guidelines</li>
          <li>Effective scientific visualization with appropriate graphics and infographics</li>
        </ul>
      </>
    ),
  },
  {
    number: 5,
    title: 'REVISION & FINALIZATION',
    isTopCircle: true,
    icon: `${PAGE_IMAGES}/Revision-and-finalization-.png`,
    content: (
      <>
        <p className="mb-2">We incorporate your suggestions and make refinements. Our team re-checks the file for:</p>
        <ul className="list-disc pl-3 space-y-1 text-[11px] leading-tight">
          <li>Visual consistency</li>
          <li>Scientific accuracy</li>
          <li>Design compliance</li>
        </ul>
      </>
    ),
  },
  {
    number: 6,
    title: 'FINAL DELIVERY',
    isTopCircle: false,
    icon: `${PAGE_IMAGES}/final-delivery-.png`,
    content: (
      <>
        <p className="mb-2">The finalized poster is delivered in:</p>
        <ul className="list-disc pl-3 space-y-1 text-[11px] leading-tight">
          <li>High-resolution PDF (suitable for print)</li>
          <li>Editable PPT file (for digital display or last-minute edits)</li>
        </ul>
      </>
    ),
  },
];

export default function PosterProcessExactDesign() {
  return (
    <section className="w-full bg-[#f3f4f6] py-7 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">
          How the Poster Preparation Service Works
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-[#334155] mb-4">
          Our step-by-Step Process
        </h3>
        <p className="text-gray-600 text-xs md:text-sm max-w-4xl mx-auto mb-16 leading-relaxed">
          Our{' '}
          <Link
            href="/services/publication-support/poster-preparation"
            className="text-[#0284c7] hover:underline font-medium"
          >
            poster preparation
          </Link>{' '}
          process is designed to convert complicated research into a visually
          stimulating and scientifically compliant conference poster. Each step
          will ensure clarity, technical accuracy, and visual consistency that
          suits both your discipline and the target audience.
        </p>

        {/* Workflow Diagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 items-stretch max-w-6xl mx-auto relative min-h-[480px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between h-full cursor-pointer select-none"
            >
              {/* TOP CIRCLE & LINE (for steps 1, 3, 5) */}
              {step.isTopCircle ? (
                <div className="flex flex-col items-center justify-end h-16 w-full z-10">
                  <div className="w-9 h-9 rounded-full bg-[#0b7c99] text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>
                  <div className="w-[1.5px] h-7 bg-[#a31252] opacity-70"></div>
                </div>
              ) : (
                /* Empty spacer to align cards correctly */
                <div className="h-12 w-full"></div>
              )}

              {/* HORIZONTAL TEAL ACCENT BAR ABOVE ODD CARDS */}
              {step.isTopCircle && (
                <div className="w-full h-3.5 bg-[#0b7c99] mb-0.5"></div>
              )}

              {/* MAIN CONTENT CARD - WITH GREY HOVER EFFECT FOR ALL CARDS */}
              <div
                className="flex-1 bg-white border border-gray-200 p-3.5 text-left flex flex-col justify-start transition-all duration-200 ease-in-out
                  group-hover:bg-[#7f7f7f] group-hover:border-[#7f7f7f] group-hover:text-white shadow-sm"
              >
                {/* Icon */}
                <div className="relative w-10 h-10 mx-auto mb-3">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="font-bold text-[11px] text-[#1e293b] text-center uppercase tracking-tight mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h4>

                {/* Content */}
                <div className="text-gray-600 text-xs leading-normal group-hover:text-white transition-colors">
                  {step.content}
                </div>
              </div>

              {/* HORIZONTAL TEAL ACCENT BAR BELOW EVEN CARDS */}
              {!step.isTopCircle && (
                <div className="w-full h-3.5 bg-[#0b7c99] mt-0.5"></div>
              )}

              {/* BOTTOM CIRCLE & LINE (for steps 2, 4, 6) */}
              {!step.isTopCircle ? (
                <div className="flex flex-col items-center justify-start h-16 w-full z-10">
                  <div className="w-[1.5px] h-7 bg-[#a31252] opacity-70"></div>
                  <div className="w-9 h-9 rounded-full bg-[#0b7c99] text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>
                </div>
              ) : (
                /* Empty spacer to align cards correctly */
                <div className="h-12 w-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}