'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface ProcessStep {
  id: number;
  title: string;
  iconSrc: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'CONSULTATION & REQUIREMENT GATHERING',
    iconSrc: '/images/icons/consultation.svg',
    description:
      'We begin by understanding your research goals, target audience, and specific communication needs, whether it\'s for journals, regulators, clinicians, or patients.',
  },
  {
    id: 2,
    title: 'CONTENT DEVELOPMENT',
    iconSrc: '/images/icons/content-dev.svg',
    description:
      'Our subject matter experts, medical writers, and editors draft scientifically accurate and well-structured documents such as manuscripts, clinical study reports, abstracts, or educational content.',
  },
  {
    id: 3,
    title: 'SCIENTIFIC REVIEW & VALIDATION',
    iconSrc: '/images/icons/review.svg',
    description:
      'Each document undergoes expert review for scientific accuracy, consistency, and adherence to international guidelines (ICMJE, GPP, CONSORT, etc.).',
  },
  {
    id: 4,
    title: 'DESIGN & VISUALIZATION',
    iconSrc: '/images/icons/design.svg',
    description:
      'To enhance clarity and impact, we integrate data visualization, infographics, and graphical summaries that simplify complex findings.',
  },
  {
    id: 5,
    title: 'COMPLIANCE & QUALITY CHECK',
    iconSrc: '/images/icons/compliance.svg',
    description:
      'We ensure your communication meets journal standards, regulatory requirements, and ethical guidelines while maintaining high editorial quality.',
  },
  {
    id: 6,
    title: 'DELIVERY & FEEDBACK',
    iconSrc: '/images/icons/delivery.svg',
    description:
      'Final drafts are shared for your review. Based on feedback, we refine and finalize content for submission, publication, or distribution.',
  },
];

interface BenefitItem {
  id: string;
  title: string;
  iconSrc: string;
  bgColor: string; // Background circle color for icons
}

const benefitsData: BenefitItem[] = [
  { id: '1', title: 'Expertise in Scientific Communication', iconSrc: '/images/icons/benefit-1.svg', bgColor: 'bg-purple-100' },
  { id: '2', title: 'Time and Resource Efficiency', iconSrc: '/images/icons/benefit-2.svg', bgColor: 'bg-amber-100' },
  { id: '3', title: 'Innovation and Technology', iconSrc: '/images/icons/benefit-3.svg', bgColor: 'bg-purple-100' },
  { id: '4', title: 'Tailored Strategies', iconSrc: '/images/icons/benefit-4.svg', bgColor: 'bg-amber-100' },
  { id: '5', title: 'Enhanced Research Impact', iconSrc: '/images/icons/benefit-5.svg', bgColor: 'bg-purple-100' },
  { id: '6', title: 'Continuous Improvement', iconSrc: '/images/icons/benefit-6.svg', bgColor: 'bg-amber-100' },
  { id: '7', title: 'Scalability and Flexibility', iconSrc: '/images/icons/benefit-7.svg', bgColor: 'bg-purple-100' },
  { id: '8', title: 'Diverse Channels', iconSrc: '/images/icons/benefit-8.svg', bgColor: 'bg-amber-100' },
];

interface RegulatoryItem {
  id: string;
  title: string;
  iconSrc?: string;
  content: string;
}

const globalRegulations: RegulatoryItem[] = [
  { id: 'fda', title: 'FDA Regulations (USA)', iconSrc: '/images/icons/fda.svg', content: 'Compliance with U.S. Food and Drug Administration guidelines for clinical data and medical communication.' },
  { id: 'ema', title: 'EMA Regulations (Europe)', iconSrc: '/images/icons/ema.svg', content: 'Adherence to European Medicines Agency standards for safety reporting and product information.' },
  { id: 'hc', title: 'Health Canada Regulations', iconSrc: '/images/icons/health-canada.svg', content: 'Fulfillment of Canadian regulatory submission requirements and healthcare communications.' },
  { id: 'tga', title: 'TGA Regulations (Australia)', iconSrc: '/images/icons/tga.svg', content: 'Therapeutic Goods Administration compliance for medical technology and pharmaceuticals.' },
  { id: 'pmda', title: 'PMDA Regulations (Japan)', iconSrc: '/images/icons/pmda.svg', content: 'Pharmaceuticals and Medical Devices Agency regulatory standards for Japanese medical publishing.' },
];

const keyStandards: RegulatoryItem[] = [
  { id: 'gpp', title: 'Good Publication Practice (GPP)', content: 'Ethical guidelines for company-sponsored medical research publications.' },
  { id: 'cope', title: 'Committee on Publication Ethics (COPE)', content: 'Code of conduct and best practices for academic editor and author ethics.' },
  { id: 'wame', title: 'World Association of Medical Editors (WAME)', content: 'Editorial standards to facilitate global research sharing.' },
  { id: 'prisma', title: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA)', content: 'Evidence-based minimum set of items for reporting in systematic reviews and meta-analyses.' },
  { id: 'icmje', title: 'International Committee of Medical Journal Editors (ICMJE) Guidelines', content: 'Standardized recommendations for conduct, reporting, editing, and publication of scholarly work.' },
  { id: 'consort', title: 'Consolidated Standards of Reporting Trials (CONSORT) Guidelines', content: 'Framework for improving the reporting of randomized controlled trials.' },
  { id: 'fda-edu', title: 'FDA Guidance on Industry-Sponsored Scientific and Educational Activities (USA)', content: 'Regulatory boundaries regarding independent medical education and scientific exchange.' },
  { id: 'phrma', title: 'PhRMA Code on Interactions with Healthcare Professionals', content: 'Ethical criteria governing relationships between pharmaceutical companies and healthcare pros.' },
  { id: 'advamed', title: 'AdvaMed Code of Ethics on Interactions with Healthcare Professionals', content: 'Ethical guidelines specific to medical device manufacturers and healthcare providers.' },
];

// ==========================================
// COMPONENT
// ==========================================

export default function ScientificCommunicationWorkflow() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ==========================================
            SECTION 1: HOW OUR SERVICE WORKS
        ========================================== */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-2">
            How Our Scientific Medical Communication Service Works
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-[#0d3b44] mb-4">
            Our Step-by-Step Process
          </h3>
          <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            At Pubrica, we follow a structured and collaborative approach to ensure your research is communicated with accuracy, clarity, and impact. Our process is designed to align with your objectives, meet global compliance standards, and engage the right audience.
          </p>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center group cursor-pointer">
                
                {/* Step Badge / Line Connector */}
                <div className="w-full flex flex-col items-center mb-4">
                  {step.id % 2 !== 0 ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-[#0082a6] text-white font-bold flex items-center justify-center text-base shadow-sm z-10 mb-2">
                        {step.id}
                      </div>
                      <div className="w-full h-1 bg-[#0082a6]" />
                    </>
                  ) : (
                    <>
                      <div className="w-full h-1 bg-[#0082a6] mb-2" />
                      <div className="w-10 h-10 rounded-full bg-[#0082a6] text-white font-bold flex items-center justify-center text-base shadow-sm z-10">
                        {step.id}
                      </div>
                    </>
                  )}
                </div>

                {/* Card with Uniform Dark Hover Overlay */}
                <div className="relative bg-white border border-gray-200 rounded-md p-5 min-h-[280px] w-full flex flex-col justify-start items-center shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  
                  {/* Default Un-hovered View */}
                  <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-10">
                    <div className="w-12 h-12 relative mb-3 opacity-80">
                      <Image src={step.iconSrc} alt={step.title} fill className="object-contain" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Dark Hover Overlay State (Active for ALL Cards) */}
                  <div className="absolute inset-0 bg-[#595a5c] text-white p-5 flex flex-col items-center text-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-10 h-10 relative mb-2 filter brightness-200">
                      <Image src={step.iconSrc} alt={step.title} fill className="object-contain" />
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-200 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 2: BENEFITS OF PARTNERING
        ========================================== */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-3 text-left">
            Benefits of Partnering with Our Service Provider
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
            Partnering with a medical and scientific communications service provider offers numerous benefits that enhance information dissemination, research outcomes, and healthcare practices. Here's how:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-14 h-14 rounded-full ${benefit.bgColor} flex items-center justify-center mb-4`}>
                  <div className="w-7 h-7 relative">
                    <Image src={benefit.iconSrc} alt={benefit.title} fill className="object-contain" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: COMPLIANCE & GUIDELINE STANDARDS
        ========================================== */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-3">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
            In medical and scientific communications, adherence to regulatory frameworks is paramount to ensure the dissemination of accurate and ethical information. Below, we outline the key aspects of regulations governing these communications:
          </p>

          {/* Subsection A: Global Regulatory Landscape */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#0d3b44] mb-4">
              Global Regulatory Landscape
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {globalRegulations.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#f0f9f6] border border-emerald-100 rounded-md overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.iconSrc && (
                        <div className="w-6 h-6 relative flex-shrink-0">
                          <Image src={item.iconSrc} alt="" fill className="object-contain" />
                        </div>
                      )}
                      <span className="text-xs md:text-sm font-bold text-slate-800">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-emerald-700 font-bold text-lg">
                      {openAccordion === item.id ? '−' : '+'}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div className="px-4 pb-4 text-xs text-gray-600 bg-emerald-50/30 border-t border-emerald-100 pt-2">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Subsection B: Key Regulatory Guidelines and Standards */}
          <div>
            <h3 className="text-lg font-bold text-[#0d3b44] mb-4">
              Key Regulatory Guidelines and Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {keyStandards.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#f0f9f6] border border-emerald-100 rounded-md overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors"
                  >
                    <span className="text-xs md:text-sm font-bold text-slate-800 pr-2">
                      {item.title}
                    </span>
                    <span className="text-emerald-700 font-bold text-lg flex-shrink-0">
                      {openAccordion === item.id ? '−' : '+'}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div className="px-4 pb-4 text-xs text-gray-600 bg-emerald-50/30 border-t border-emerald-100 pt-2">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}