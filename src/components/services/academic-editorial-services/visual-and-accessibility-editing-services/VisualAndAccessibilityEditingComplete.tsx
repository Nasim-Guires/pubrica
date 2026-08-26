'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import React, { useState } from 'react';

export const metadata = {
  title: 'Visual & Accessibility Editing Services | Pubrica',
  description:
    'Explore Pubrica’s Visual & Accessibility Editing Services, ensuring your scholarly documents, figures, tables, graphics, and layouts meet global accessibility standards.',
};

export default function VisualAndAccessibilityEditingComplete() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const processSteps = [
    {
      num: 1,
      title: 'INITIAL ASSESSMENT',
      desc: 'We begin by reviewing your document to understand its purpose, audience, and existing visual and accessibility challenges. This helps us create a tailored editing plan that meets compliance standards and improves overall readability.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Initial-Assessment.png',
    },
    {
      num: 2,
      title: 'VISUAL ENHANCEMENT',
      desc: 'Our experts optimize figures, tables, charts, and layout elements to ensure clarity and consistency. This includes adjusting color contrasts, font sizes, spacing, and alignment to make your content visually appealing and easy to navigate.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Visual-Enhancement.png',
    },
    {
      num: 3,
      title: 'ACCESSIBILITY CHECK',
      desc: 'We assess your document against accessibility standards (such as WCAG) to ensure it is usable by people with disabilities. This includes evaluating alt text for images, heading structures, keyboard navigation, and screen reader compatibility.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Accessibility-Check.png',
    },
    {
      num: 4,
      title: 'CONTENT OPTIMIZATION',
      desc: 'We refine the textual content for clarity, conciseness, and maintaining your original meaning. Our editors ensure that your manuscript is not only accessible but also professionally presented and easy to understand.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Content-Optimization.png',
    },
    {
      num: 5,
      title: 'REVIEW & QUALITY ASSURANCE',
      desc: 'Every document undergoes a meticulous quality check to verify that visual and accessibility standards are met. Feedback is incorporated, and final adjustments are made to ensure your content is fully polished and compliant.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Review-Quality-Assurance.png',
    },
    {
      num: 6,
      title: 'DELIVERY',
      desc: 'You receive a fully edited, visually optimized, and accessibility-compliant document, ready for publication, presentation, or distribution to a diverse audience.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Delivery.png',
    },
  ];

  const packages = [
    {
      badgeSrc: '/images/editing-and-translation/basic-pacakge.png',
      title: 'Basic Visual Clarity',
      idealFor: 'Researchers, students, and authors needing clean, consistent, and reader-friendly visuals.',
      included: [
        'Formatting and standardisation of figures, tables, charts, and images',
        'Basic readability enhancements for layout and structure',
        'Consistent typography, spacing, alignment, and colour usage',
        'Standard alt-text creation for essential images',
        'Correction of pixelation, sizing issues, and low-quality visuals',
        'Accessibility checks for headings, contrast, and legibility',
      ],
      turnaround: '3–5 business days',
      bestFor: 'Manuscripts, theses, short research assignments',
      borderColor: 'border-emerald-300',
      headerBg: 'bg-emerald-50',
    },
    {
      badgeSrc: '/images/publication-support/peer-review-pre-submission/advanced.webp',
      title: 'Advanced Accessibility & Visual Enhancement',
      idealFor: 'Authors submitting to journals or Institutions with strict accessibility guidelines.',
      included: [
        'All features from the Basic Package',
        'WCAG 2.1-aligned visual accessibility editing',
        'Comprehensive alt-text and long description development',
        'Colour-blind friendly palette optimisation',
        'Tagging, structuring, and semantic layering for PDFs',
        'Improved navigation structure, bookmarks, and logical reading order',
        'Enhancement of charts, diagrams, and illustrations for clarity and inclusivity',
        'Layout redesign for multi-device readability (desktop, tablet, mobile)',
      ],
      turnaround: '5–7 business days',
      bestFor: 'Journal articles, book chapters, institutional reports',
      borderColor: 'border-purple-300',
      headerBg: 'bg-purple-50',
    },
    {
      badgeSrc: '/images/editing-and-translation/translation-with-editing/pro.webp',
      title: 'Premium Visual Redesign & Full Accessibility Compliance',
      idealFor: 'Universities, publishers, NGOs, corporates, and large-scale projects requiring high-end visual and accessibility transformation.',
      included: [
        'Everything in the Advanced Package',
        'Complete visual redesign of the document',
        'Creation of accessibility-compliant PDFs (WCAG + Section 508 standards)',
        'Infographic re-creation, illustration enhancement, and figure re-drawing',
        'Data visualisation optimisation for clarity and scientific accuracy',
        'Style guide development for recurring materials',
        'Multi-format optimisation (PDF, EPUB, HTML)',
        'Expert QA review + final compliance validation report',
      ],
      turnaround: '7–10 business days',
      bestFor: 'Books, monographs, large reports, e-learning modules',
      borderColor: 'border-amber-300',
      headerBg: 'bg-amber-50',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER ------------------- */}
      <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
            Visual & Accessibility Editing Services at Pubrica
          </h2>
          <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            Our expert editors meticulously refine your manuscript’s visual elements and accessibility features, ensuring clarity, inclusivity, and compliance with accessibility standards, so your content is reader-friendly and publication-ready.
          </p>
        </div>
      </section>

      {/* ------------------- STEP-BY-STEP PROCESS ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
          How Our Visual and Accessibility Editing Service Works
        </h2>
        <p className="text-xs md:text-sm font-semibold text-gray-700 mb-6">Our Step-by-Step Process</p>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
          At Pubrica, we ensure that your documents, manuscripts, and publications are visually optimized and fully accessible to all readers. Our meticulous editing process focuses on clarity, readability, and compliance with accessibility standards. Here’s a step-by-step overview of how our service works:
        </p>

        {/* Alternating Zig-Zag Process Layout with Black Hover */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Connecting Timeline Bar */}
          <div className="hidden lg:block absolute top-[22px] left-12 right-12 h-1 bg-[#007791] z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {processSteps.map((step) => {
              const isEven = step.num % 2 === 0;
              const isHovered = activeStep === step.num;

              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setActiveStep(step.num)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className={`w-full flex flex-col items-center ${isEven ? 'lg:flex-col-reverse' : ''}`}>

                    {/* Content Card Box with Black Hover State */}
                    <div className={`w-full p-4 rounded transition-all duration-300 shadow-sm text-left flex flex-col justify-between h-[280px] border ${isHovered
                      ? 'bg-[#333333] text-white border-[#333333] shadow-lg scale-105 z-20'
                      : 'bg-white text-gray-800 border-gray-200'
                      }`}>
                      <div>
                        <div className={`w-8 h-8 relative mb-3 rounded-full flex items-center justify-center overflow-hidden ${isHovered ? 'bg-white' : ''}`}>
                          <Image src={step.iconSrc} alt="" fill className={`object-contain ${isHovered ? 'p-1' : ''}`} />
                        </div>
                        <h3 className={`text-[11px] font-bold mb-2 leading-snug ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-[10px] leading-relaxed line-clamp-6 ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Number Badge with Line connector */}
                    <div className="my-4 flex flex-col items-center relative">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-sm transition-colors duration-300 z-10 ${isHovered ? 'bg-[#333333]' : 'bg-[#007791]'
                        }`}>
                        {step.num}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------- SAMPLE WORK SECTION ------------------- */}
      <section className="py-14 px-4 bg-[#f4faf7] text-center" aria-labelledby="sample-heading">
        <div className="max-w-4xl mx-auto bg-white border border-emerald-100 rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Image Container */}
            <div className="bg-[#f0fdf4] p-4 rounded-lg flex justify-center items-center relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/academic-editorial-services/visual-and-accessibility-editing-services/Visual-Accessibility-Editing-Services-sample-work-.webp"
                alt="Visual and Accessibility Editing Services sample work"
                fill
                className="object-cover rounded-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Column: Content */}
            <div className="text-left flex flex-col justify-center">
              <h2 id="sample-heading" className="text-lg md:text-xl font-bold text-[#0b3b2c] mb-4">
                Visual and Accessibility Editing Services Sample Work
              </h2>

              <div className="mb-4">
                <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-8 rounded-full transition-colors shadow">
                  Discover More
                </button>
              </div>

              <h3 className="text-sm font-bold text-[#0b3b2c] mb-2">
                Download the full Report Now
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Explore our Visual and Accessibility Editing sample work, meticulously refined to meet rigorous scholarly standards, accessibility guidelines, and top-tier journal requirements. We ensure your manuscript is visually clear, universally accessible, and publication-ready, enhancing readability, inclusivity, and global research impact.
              </p>

              <div>
                <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-8 rounded-full transition-colors shadow">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- PACKAGES SECTION ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
            Visual and Accessibility Editing Service – Our Packages
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Our packages are designed to meet the diverse needs of researchers, universities, publishers, and organisations seeking visually optimised, accessible, and publication-ready documents. Each tier offers increasing depth of visual refinement, accessibility compliance, and editorial precision, ensuring your content is inclusive, compliant, and impactful across global platforms.
          </p>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white border-2 ${pkg.borderColor} rounded-xl shadow-sm overflow-hidden flex flex-col justify-between`}
            >
              {/* Card Header */}
              <div className={`${pkg.headerBg} p-6 border-b ${pkg.borderColor} text-center`}>
                <div className="relative w-10 h-10 mx-auto rounded-full bg-white shadow-sm mb-2 overflow-hidden">
                  <Image src={pkg.badgeSrc} alt={`${pkg.title} package`} fill className="object-contain p-1" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{pkg.title}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 text-xs">
                <div>
                  <span className="font-bold text-gray-900 block mb-1">➜ Ideal For:</span>
                  <p className="text-gray-600 leading-relaxed">{pkg.idealFor}</p>
                </div>

                <div>
                  <span className="font-bold text-gray-900 block mb-2">➜ What’s Included:</span>
                  <ul className="space-y-2">
                    {pkg.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span className="leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <p className="text-gray-700">
                    <strong className="text-gray-900">➜ Turnaround Time :</strong> {pkg.turnaround}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">➜ Best For :</strong> {pkg.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <GetFreeQuoteButton />
        </div>
      </section>
    </article>
  );
}