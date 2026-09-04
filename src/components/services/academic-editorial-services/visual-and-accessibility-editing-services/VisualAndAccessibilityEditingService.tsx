'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Image from 'next/image';
import React, { useState } from 'react';

export const metadata = {
  title: 'Visual & Accessibility Editing Services | Pubrica',
  description:
    'Explore Pubrica’s Visual & Accessibility Editing Services, ensuring your scholarly documents, figures, tables, graphics, and layouts meet global accessibility standards.',
};

export default function VisualAndAccessibilityEditingService() {
  const [activeTab, setActiveTab] = useState<'Medicine' | 'Science' | 'Engineering'>('Medicine');

  const ensuresList = [
    'Clear visual presentation and consistent document structure',
    'Accurate and meaningful image descriptions (alt-text)',
    'WCAG-compliant colour contrasts',
    'Proper heading hierarchy for navigation',
    'Tagged PDFs for journal submission',
    'Accessibility-friendly diagrams and tables',
    'Typography and layout optimized for readability',
    'Journal-specific formatting and style compliance',
  ];

  const editingTypes = [
    {
      title: 'Document Layout & Formatting',
      description: 'We refine the overall layout of your documents, including headings, subheadings, tables, and images, to create a visually coherent structure. This ensures better readability and a professional presentation, making it easier for all readers, including those using assistive technologies, to navigate your content.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Document-Layout-Formatting.png',
    },
    {
      title: 'Color & Contrast Optimization',
      description: 'Our experts adjust color schemes, contrasts, and highlights to improve visibility and readability for individuals with visual impairments. This includes creating charts, graphs, and text that are accessible to users with color blindness or low vision.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Color-Contrast-Optimization.png',
    },
    {
      title: 'Image & Graphics Enhancement',
      description: 'We enhance figures, images, and diagrams to ensure clarity, correct labelling, and compliance with accessibility standards. This includes providing descriptive alt text for images, improving resolution, and optimizing layouts for both digital and print formats.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Image-Graphics-Enhancement.png',
    },
    {
      title: 'Text Readability & Typography',
      description: 'We improve font choices, sizes, spacing, and alignment to enhance readability. Our editing ensures that content is legible, visually balanced, and compliant with accessibility guidelines, thereby reducing strain for all readers.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Text-Readability-Typography.png',
    },
    {
      title: 'Compliance with Accessibility Standards',
      description: 'Our team ensures that your content complies with international accessibility guidelines such as WCAG 2.1 and ADA standards, making your documents inclusive and universally readable.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Compliance-with-Accessibility-Standards.png',
    },
    {
      title: 'Interactive & Multimedia Content Accessibility',
      description: 'For presentations, e-learning modules, or digital publications, we optimize multimedia elements, including videos, animations, and interactive graphics, ensuring captions, transcripts, and audio descriptions are properly included.',
      iconSrc: '/images/academic-editorial-services/visual-and-accessibility-editing-services/Interactive-Multimedia-Content-Accessibility.png',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER SECTION ------------------- */}
      <HeroBanner
        title="Visual & Accessibility Editing Services"
        description="Pubrica’s Visual & Accessibility Editing Services refine your scholarly documents, figures, tables, graphics, and layouts to meet global accessibility standards, ensuring your research is inclusive, impactful, and publication-ready."
        headingAs="h1"
      />
      {/* ------------------- INTRODUCTION & ENSURES SECTION ------------------- */}
      {/* ------------------- INTRODUCTION & ENSURES SECTION ------------------- */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-[#0e2a22] mb-5 leading-tight">
          Enhance Readability. Ensure Accessibility. Elevate Your Research.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side Content & Bullet Points */}
          <div className="lg:col-span-7 text-xs md:text-sm text-gray-700 space-y-4 leading-relaxed">
            <p>
              In today’s rapidly evolving academic and scientific publishing ecosystem, visual clarity and accessibility are no longer optional; they are essential. Researchers, journals, and institutions must ensure that manuscripts, visuals, and digital content comply with accessibility guidelines such as WCAG, ADA, Section 508, and publisher-specific standards. At Pubrica, we bridge the gap between high-quality research and universally accessible communication.
            </p>

            <p>
              Our visual & accessibility editing services focus on enhancing the readability, structure, and accessibility of visual and text-based elements. From optimising tables and figures to ensuring screen-reader compatibility and alternative text descriptions, we make your content clear, compliant, and inclusive for diverse audiences. Whether you are preparing a research manuscript, thesis, digital module, or institutional report, Pubrica provides meticulous editing that ensures accuracy, usability, and accessibility across platforms.
            </p>

            <p className="font-bold text-black pt-2">
              Pubrica’s Visual and Accessibility Editing ensures:
            </p>

            <ul className="space-y-2 pt-1 text-gray-700">
              {ensuresList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Side Image Frame Container with Offset Dark Background */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative w-full aspect-[4/3] max-w-[440px] mx-auto">
              {/* Offset Dark Green Frame Layer */}
              <div className="absolute inset-0  transform -translate-x-5 translate-y-5"></div>

              {/* Main Photo Card Layer */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/academic-editorial-services/visual-and-accessibility-editing-services/Visual-Accessibility-Editing-Services.webp"
                  alt="Visual and Accessibility Editing Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- TYPES OF VISUAL & ACCESSIBILITY EDITING ------------------- */}
      <section className="py-6 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 id="types-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
              Types of Visual and Accessibility Editing We Offer
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, we understand that clear, accessible, and visually appealing content is crucial for reaching a wider audience. Our Visual & Accessibility Editing services ensure that your documents, presentations, and research materials are not only polished but also inclusive, adhering to the latest accessibility standards. We offer a range of specialized editing services tailored to meet diverse needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {editingTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between relative">
                <div className="absolute top-6 right-6 w-10 h-10">
                  <Image src={type.iconSrc} alt="" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 pr-8">{type.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}