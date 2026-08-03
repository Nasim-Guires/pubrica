'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
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
      description: 'We refine the overall layout of your documents, including headings, subheadings, tables, and images, to create a consistent structure.',
      icon: '📄',
    },
    {
      title: 'Color & Contrast Optimization',
      description: 'Our experts adjust color schemes, contrasts, and highlights to improve visibility and readability for individuals with visual impairments.',
      icon: '🎨',
    },
    {
      title: 'Image & Graphics Enhancement',
      description: 'We enhance figures, images, and diagrams to ensure clarity, correct labelling, and compliance with accessibility guidelines.',
      icon: '🖼️',
    },
    {
      title: 'Text Readability & Typography',
      description: 'We improve font choices, sizes, spacing, and alignment to enhance readability. Our editing ensures that content is accessible across all devices.',
      icon: '✍️',
    },
    {
      title: 'Compliance with Accessibility Standards',
      description: 'Our team ensures that your content complies with international accessibility guidelines such as WCAG 2.1, Section 508, and ADA.',
      icon: '📋',
    },
    {
      title: 'Interactive & Multimedia Content Accessibility',
      description: 'For presentations, e-learning modules, or digital publications, we optimize multimedia elements with captions, transcripts, and accessible tags.',
      icon: '💻',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER SECTION ------------------- */}
      <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
            Visual & Accessibility Editing Services
          </h1>
          <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            Pubrica’s Visual & Accessibility Editing Services refine your scholarly documents, figures, tables, graphics, and layouts to meet global accessibility standards, ensuring your research is inclusive, impactful, and publication-ready.
          </p>
        </div>
      </section>

      {/* ------------------- INTRODUCTION & ENSURES SECTION ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-4">
            Enhance Readability. Ensure Accessibility. Elevate Your Research.
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left mb-4">
            In today’s rapidly evolving academic and scientific publishing ecosystem, visual clarity and accessibility are no longer optional; they are essential. Researchers, journals, and institutions must ensure that manuscripts, visuals, and digital content comply with accessibility guidelines such as WCAG, ADA, Section 508, and publisher-specific standards. At Pubrica, we bridge the gap between high-quality research and universally accessible communication.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left">
            Our visual & accessibility editing services focus on enhancing the readability, structure, and accessibility of visual and text-based elements. From optimising tables and figures to ensuring screen-reader compatibility and alternative text descriptions, we make your content clear, compliant, and inclusive for diverse audiences. Whether you are preparing a research manuscript, thesis, digital module, or institutional report, Pubrica provides meticulous editing that ensures accuracy, usability, and accessibility across platforms.
          </p>
        </div>

        {/* Content Layout with List and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Pubrica’s Visual and Accessibility Editing ensures:
            </h3>
            <ul className="space-y-3">
              {ensuresList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-0.5">▪</span>
                  <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Side Decorative Box / Image Mockup container */}
          <div className="bg-[#0b3b2c] p-4 rounded-xl shadow-lg flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-inner w-full flex flex-col items-center justify-center min-h-[280px]">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0b3b2c] flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
                ♿
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">Universal Design & Compliance</h4>
              <p className="text-xs text-gray-600 text-center max-w-xs leading-relaxed">
                Transforming complex data visualizations and academic manuscripts into fully accessible formats for every reader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- TYPES OF VISUAL & ACCESSIBILITY EDITING ------------------- */}
      <section className="py-14 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
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
                <div className="absolute top-6 right-6 text-xl">{type.icon}</div>
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