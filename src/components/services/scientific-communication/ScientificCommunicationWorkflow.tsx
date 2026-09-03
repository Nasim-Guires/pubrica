'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface ProcessStep {
  id: number;
  title: string;
  iconSrc: string;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "CONSULTATION & REQUIREMENT GATHERING",
    description:
      "We begin by understanding your research goals, target audience, and specific communication needs, whether it's for journals, regulators, clinicians, or patients.",
    iconSrc:
      "/images/scientific-communication/Consultation-Requirement-Gathering.webp",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "CONTENT DEVELOPMENT",
    description:
      "Our subject matter experts, medical writers, and editors draft scientifically accurate and well-structured documents such as manuscripts, clinical study reports, abstracts, or educational content.",
    iconSrc:
      "/images/scientific-communication/Content-Development.webp",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "SCIENTIFIC REVIEW & VALIDATION",
    description:
      "Each document undergoes expert review for scientific accuracy, consistency, and adherence to international guidelines (ICMJE, GPP, CONSORT, etc.).",
    iconSrc:
      "/images/scientific-communication/Scientific-Review-Validation.webp",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "DESIGN & VISUALIZATION",
    description:
      "To enhance clarity and impact, we integrate data visualization, infographics, and graphical summaries that simplify complex findings.",
    iconSrc:
      "/images/scientific-communication/Design-VisualizationReview-Validation.webp",
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "COMPLIANCE & QUALITY CHECK",
    description:
      "We ensure your communication meets journal standards, regulatory requirements, and ethical guidelines while maintaining high editorial quality.",
    iconSrc:
      "/images/scientific-communication/Compliance-Quality-Check.webp",
    position: "top",
  },
  {
    stepNumber: 6,
    title: "DELIVERY & FEEDBACK",
    description:
      "Final drafts are shared for your review. Based on feedback, we refine and finalize content for submission, publication, or distribution.",
    iconSrc:
      "/images/scientific-communication/Delivery-Feedback.webp",
    position: "bottom",
  },
];

interface BenefitItem {
  id: string;
  title: string;
  iconSrc: string;
  bgColor: string;
}

const benefitsData: BenefitItem[] = [
  { id: '1', title: 'Expertise in Scientific Communication', iconSrc: '/images/scientific-communication/Expertise-in-Scientific-Communication.webp', bgColor: 'bg-purple-100' },
  { id: '2', title: 'Time and Resource Efficiency', iconSrc: '/images/scientific-communication/Time-and-Resource-Efficiency.webp', bgColor: 'bg-amber-100' },
  { id: '3', title: 'Innovation and Technology', iconSrc: '/images/scientific-communication/Innovation-and-Technology.webp', bgColor: 'bg-purple-100' },
  { id: '4', title: 'Tailored Strategies', iconSrc: '/images/scientific-communication/Tailored-Strategies.webp', bgColor: 'bg-amber-100' },
  { id: '5', title: 'Enhanced Research Impact', iconSrc: '/images/scientific-communication/Enhanced-Research-Impact.webp', bgColor: 'bg-purple-100' },
  { id: '6', title: 'Continuous Improvement', iconSrc: '/images/scientific-communication/Continuous-Improvement.webp', bgColor: 'bg-amber-100' },
  { id: '7', title: 'Scalability and Flexibility', iconSrc: '/images/scientific-communication/Scalability-and-Flexibility.webp', bgColor: 'bg-purple-100' },
  { id: '8', title: 'Diverse Channels', iconSrc: '/images/scientific-communication/Diverse-Channels.webp', bgColor: 'bg-amber-100' },
];

interface RegulatoryItem {
  id: string;
  title: string;
  iconSrc?: string;
  content: string;
}

const globalRegulations: RegulatoryItem[] = [
  { id: 'fda', title: 'FDA Regulations (USA)', iconSrc: '/images/scientific-communication/FDA-Regulations-USA.webp', content: 'The Food and Drug Administration (FDA) oversees medical communications related to drugs, biologics, medical devices, and dietary supplements. Regulations such as the Prescription Drug Marketing Act (PDMA) and the Food, Drug, and Cosmetic Act (FD&C Act) govern the promotion and advertising of medical products, ensuring that they are truthful and not misleading.' },
  { id: 'ema', title: 'EMA Regulations (Europe)', iconSrc: '/images/scientific-communication/EMA-Regulations-Europe.webp', content: 'The European Medicines Agency (EMA) regulates medical communications within the European Union. Directives such as Directive 2001/83/EC and Regulation (EC) No 1901/2006 establish rules for the marketing authorization of medicinal products and regulate promotional activities.' },
  { id: 'hc', title: 'Health Canada Regulations', iconSrc: '/images/scientific-communication/Health-Canada-Regulations.webp', content: 'Health Canada oversees medical communications in Canada, ensuring compliance with regulations such as the Food and Drugs Act and the Food and Drug Regulations. These regulations aim to safeguard public health by controlling the advertising and promotion of drugs and medical devices. The PAAB Code sets standards for the review of advertising and promotional content for prescription drugs.' },
  { id: 'tga', title: 'TGA Regulations (Australia)', iconSrc: '/images/scientific-communication/TGA-Regulations-Australia.webp', content: 'The Therapeutic Goods Administration (TGA) regulates therapeutic goods in Australia. The Therapeutic Goods Act 1989 and associated regulations govern the advertising and promotion of medicines, medical devices, and other therapeutic products.' },
  { id: 'pmda', title: 'PMDA Regulations (Japan)', iconSrc: '/images/scientific-communication/PMDA-Regulations-JapanRegulations-Australia.webp', content: 'In Japan, the Pharmaceuticals and Medical Devices Agency (PMDA) regulates medical communications. The Pharmaceutical Affairs Law and related ordinances control the promotion and advertising of pharmaceuticals and medical devices.' },
];

const keyStandards: RegulatoryItem[] = [
  { id: 'gpp', title: 'Good Publication Practice (GPP)', content: 'GPP guidelines provide principles for the ethical dissemination of research results, ensuring transparency, accuracy, and integrity in publications.' },
  { id: 'cope', title: 'Committee on Publication Ethics (COPE)', content: 'It offers guidelines on ethical publishing practices, handling publication issues, retraction policies, authorship disputes, and maintaining research integrity.' },
  { id: 'wame', title: 'World Association of Medical Editors (WAME)', content: 'WAME provides guidelines on ethical editorial practices for medical journal editors, emphasizing peer review, editorial independence, and conflict of interest management.' },
  { id: 'prisma', title: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA)', content: 'The PRISMA guidelines aim to enhance the transparency and reproducibility of systematic reviews and meta-analyses by providing a detailed checklist for reporting methodology, results, and conclusions.' },
  { id: 'icmje', title: 'International Committee of Medical Journal Editors (ICMJE) Guidelines', content: 'ICMJE guidelines set forth standards for the conduct and reporting of research, including guidelines for authorship and conflicts of interest disclosure.' },
  { id: 'consort', title: 'Consolidated Standards of Reporting Trials (CONSORT) Guidelines', content: 'It aims to enhance the reporting of randomized controlled trials (RCTs) by providing a checklist and flow diagram for transparent and complete reporting.' },
  { id: 'fda-edu', title: 'FDA Guidance on Industry-Sponsored Scientific and Educational Activities (USA)', content: 'It provides the distinction between promotional and non-promotional activities, emphasizing that industry-sponsored events must be objective, balanced, and free from commercial influence.' },
  { id: 'phrma', title: 'PhRMA Code on Interactions with Healthcare Professionals', content: 'The Pharmaceutical Research and Manufacturers of America (PhRMA) Code outlines ethical principles for interactions between pharmaceutical companies and healthcare professionals, including guidelines on promotional activities and gifts.' },
  { id: 'advamed', title: 'AdvaMed Code of Ethics on Interactions with Healthcare Professionals', content: 'The Advanced Medical Technology Association (AdvaMed) Code provides ethical guidelines for interactions between medical device companies and healthcare professionals, emphasizing transparency and integrity.' },
];

// ==========================================
// COMPONENT
// ==========================================

export default function ScientificCommunicationWorkflow() {
  // Array state to manage multiple open accordions concurrently
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* SECTION 1: HOW OUR SERVICE WORKS */}
        <EditorialWorkflowSection
          heading="How Our Scientific Medical Communication Service Works"
          subheading="Our Step-by-Step Process"
          description="At Pubrica, we follow a structured and collaborative approach to ensure your research is communicated with accuracy, clarity, and impact. Our process is designed to align with your objectives, meet global compliance standards, and engage the right audience."
          steps={steps}
        />

        {/* SECTION 2: BENEFITS OF PARTNERING */}
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
                <div className={`w-16 h-16 rounded-full ${benefit.bgColor} flex items-center justify-center mb-4`}>
                  <div className="w-9 h-9 relative">
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

        {/* SECTION 3: COMPLIANCE & GUIDELINE STANDARDS */}
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
            {/* items-start prevents cards in the same row from stretching when one opens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {globalRegulations.map((item) => {
                const isOpen = openAccordions.includes(item.id);
                return (
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
                        <span className="text-sm md:text-base font-medium text-slate-900">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-emerald-700 font-bold text-lg">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-sm md:text-base text-gray-700 bg-emerald-50/30 border-t border-emerald-100 pt-3 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subsection B: Key Regulatory Guidelines and Standards */}
          <div>
            <h3 className="text-lg font-bold text-[#0d3b44] mb-4">
              Key Regulatory Guidelines and Standards
            </h3>
            {/* items-start prevents cards in the same row from stretching when one opens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {keyStandards.map((item) => {
                const isOpen = openAccordions.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-[#f0f9f6] border border-emerald-100 rounded-md overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors"
                    >
                      <span className="text-sm md:text-base font-medium text-slate-900 pr-2">
                        {item.title}
                      </span>
                      <span className="text-emerald-700 font-bold text-lg flex-shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-sm md:text-base text-gray-700 bg-emerald-50/30 border-t border-emerald-100 pt-3 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}