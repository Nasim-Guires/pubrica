"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// --- Interface Definitions ---
interface StepItem {
  id: number;
  title: string;
  description: React.ReactNode;
  iconSrc: string;
  position: 'top' | 'bottom';
}

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ComprehensiveFeature {
  id: number;
  text: React.ReactNode;
}

// --- Static Data Definitions ---
const STEP_ITEMS: StepItem[] = [
  {
    id: 1,
    title: "CONSULTATION & REQUIREMENT GATHERING",
    description: "We begin by understanding your research goals, study design, and data sources.",
    iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Consultation-Requirement-Gathering.png",
    position: 'top',
  },
  {
    id: 2,
    title: "DATA ANALYSIS & INTERPRETATION",
    description: (
      <>
        Our <span className="text-teal-600 font-medium group-hover:text-teal-400">subject matter experts</span> and statisticians work together to derive meaningful insights from your raw datasets.
      </>
    ),
    iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Data-Analysis-Interpretation.png",
    position: 'bottom',
  },
  {
    id: 3,
    title: "DRAFTING THE REPORT",
    description: "We create structured reports that include methodology, findings, discussions, and conclusions in compliance with journal or regulatory guidelines.",
    iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Drafting-the-Report.png",
    position: 'top',
  },
  {
    id: 4,
    title: "DESIGNING VISUAL OUTPUTS",
    description: "We create customised visual graphs, dashboards, tables, and infographics tailored for your target audience.",
    iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Designing-Visual-Outputs.png",
    position: 'bottom',
  },
  {
    id: 5,
    title: "REVIEW & FINALISATION",
    description: (
      <>
        A thorough <span className="text-teal-600 font-medium group-hover:text-teal-400">peer review</span> ensures accuracy, readability, and alignment with your objectives before delivery.
      </>
    ),
    iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Review-Finalisation.png",
    position: 'top',
  },
];

const COMPREHENSIVE_FEATURES: ComprehensiveFeature[] = [
  {
    id: 1,
    text: "Storyboard creation, plus designing new, customized templates and graphs.",
  },
  {
    id: 2,
    text: "Posting/tabulating charts, modifying existing data visualisations, and producing reports/presentations in PPT, Word, or PDF formats.",
  },
  {
    id: 3,
    text: "Automated, macro-driven charting and reporting to streamline repetitive work.",
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-semibold text-slate-800">Expert team:</span> data scientists and researchers who interpret data meaningfully to align with your domain (medical, clinical research, etc.).
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-semibold text-slate-800">Strong guarantees:</span> timely delivery (sometimes in as fast as 8 hours), security via strict NDAs, and quality assurance.
      </>
    ),
  },
];

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'ethical-compliance',
    title: 'Ethical and Regulatory Compliance',
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Adherence to <span className="text-teal-600 font-medium">ICMJE</span>, EQUATOR, CONSORT, PRISMA, STROBE, and <span className="text-teal-600 font-medium">COPE</span> guidelines. Compliance with Good Clinical Practice (GCP) and Good Publication Practice (GPP 2022). Protection of intellectual property, confidentiality, and data integrity.
      </p>
    ),
  },
  {
    id: 'visualisation-standards',
    title: 'Visualisation Best Practices',
    content: (
      <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
        <p>Data visualisations designed for clarity, accuracy, and impact.</p>
        <p>Use of standardised graphical representation methods (CONSORT diagrams, Kaplan–Meier curves, forest plots, heatmaps, dashboards, etc.).</p>
        <p>Compliance with journal and regulatory submission standards for graphical abstracts and infographics.</p>
      </div>
    ),
  },
  {
    id: 'transparent-reporting',
    title: 'Transparent Reporting Standards',
    content: (
      <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
        <p>Structured presentation aligned with journal, regulatory, and funding body requirements.</p>
        <p>Use of standardized frameworks such as ICD, MeSH, and WHO classifications where applicable.</p>
        <p>Ensuring traceability of data sources for verification and reproducibility.</p>
      </div>
    ),
  },
];

// --- Component Definition ---
export const ProcessAndComplianceSection: React.FC = () => {
  // Accordion state: NULL means NO cards/accordions are opened by default
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string): void => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= 1. STEP-BY-STEP PROCESS ================= */}
        <section className="space-y-12 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
              How Our Interpretation, Reporting, and Visualisation Service Works
            </h2>
            <p className="mt-2 text-lg text-slate-600 font-medium">
              Our Step-by-Step Process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {STEP_ITEMS.map((step) => {
              return (
                <div key={step.id} className="flex flex-col items-center group relative">
                  {step.position === 'top' && (
                    <div className="mb-4 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#00809d] text-white flex items-center justify-center font-semibold text-lg shadow-md z-10">
                        {step.id}
                      </div>
                      <div className="w-[2px] h-6 bg-pink-400"></div>
                    </div>
                  )}

                  {/* Card turns black/dark on hover */}
                  <div 
                    className="
                      w-full min-h-[300px] p-6 rounded-sm bg-white border border-gray-100 shadow-sm 
                      flex flex-col items-center text-center transition-all duration-300 cursor-pointer
                      group-hover:bg-[#28292c] group-hover:text-white group-hover:shadow-xl
                    "
                  >
                    <div className="w-full h-1 bg-[#00809d] mb-6"></div>

                    <div className="mb-4 relative w-10 h-10">
                      <Image src={step.iconSrc} alt="" fill className="object-contain" />
                    </div>

                    <h3 className="font-bold text-sm tracking-wide text-slate-800 group-hover:text-white uppercase mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-500 group-hover:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {step.position === 'bottom' && (
                    <div className="mt-4 flex flex-col items-center">
                      <div className="w-[2px] h-6 bg-pink-400"></div>
                      <div className="w-10 h-10 rounded-full bg-[#00809d] text-white flex items-center justify-center font-semibold text-lg shadow-md z-10">
                        {step.id}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 2. COMPREHENSIVE INTERPRETATION SECTION ================= */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b36]">
              Our Comprehensive Interpretation, Reporting, And Visualisation
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pubrica&apos;s professional <span className="text-teal-600 font-medium">interpretation, reporting, and visualization services to enhance your insights</span>. With our expert guidance, your data presentation is poised to maximize clarity and drive impactful outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Column: Image */}
            <div className="md:col-span-5">
              <div className="relative w-full h-56 overflow-hidden rounded-sm shadow-md">
                <Image
                  src="/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Our-Comprehensive-Interpretation-Reporting-and-Visualisation.webp"
                  alt="Data analysis and reporting work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Column: Bulleted List */}
            <div className="md:col-span-7">
              <ul className="space-y-4">
                {COMPREHENSIVE_FEATURES.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="inline-block w-2 h-2 rounded-full bg-slate-800 mt-1.5 shrink-0"></span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 3. COMPLIANCE & GUIDELINE ACCORDIONS ================= */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#0b3b36]">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Pubrica, we maintain the highest standards of compliance and ethical practice in delivering interpretation, reporting, and visualisation services. Our processes are guided by international best practices, regulatory frameworks, and discipline-specific standards to ensure that every output is accurate, transparent, and tailored to client needs.
            </p>
          </div>

          {/* Accordions List (None open by default) */}
          <div className="space-y-3">
            {ACCORDION_ITEMS.map((item) => {
              const isOpen = openAccordionId === item.id;

              return (
                <div 
                  key={item.id} 
                  className="border border-teal-900/10 rounded-xs overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-5 py-3.5 bg-[#0b3b36] text-white flex items-center justify-between text-left hover:bg-[#082e2a] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm tracking-wide">
                      {item.title}
                    </span>
                    <span className="text-lg font-mono font-bold leading-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-gray-100">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 4. SAMPLE WORK & REPORT DOWNLOAD CTA ================= */}
        <section className="max-w-5xl mx-auto bg-[#f2f8f5] p-6 sm:p-10 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="md:col-span-5">
              <div className="relative w-full h-64 overflow-hidden rounded-sm shadow-sm bg-white">
                <Image
                  src="/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Interpretation-Reporting-and-Visualisation-Sample-Work.webp"
                  alt="Interpretation sample work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Interpretation, Reporting and Visualisation Sample Work
                </h3>
                <button 
                  type="button"
                  className="px-8 py-2.5 bg-black hover:bg-slate-800 text-white font-medium text-xs rounded-full transition-colors duration-200"
                >
                  Discover More
                </button>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-slate-800">
                  Download the full Report Now
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explore our interpretation, reporting, and visualisation sample work, meticulously crafted to adhere to journal-specific formatting guidelines, robust methodological standards (e.g., PRISMA, CONSORT, STROBE), and project timelines, ensuring accurate, publication-ready, and visually compelling insights for research, clinical, or business applications.
                </p>
                <div className="pt-1">
                  <button 
                    type="button"
                    className="px-8 py-2.5 bg-black hover:bg-slate-800 text-white font-medium text-xs rounded-full transition-colors duration-200"
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProcessAndComplianceSection;