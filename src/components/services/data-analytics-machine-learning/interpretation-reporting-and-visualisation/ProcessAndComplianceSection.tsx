"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceBanner from '@/components/common/ServiceBanner';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';

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
const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "CONSULTATION & REQUIREMENT GATHERING",
    description:
      "We begin by understanding your research goals, study design, and data sources.",
    iconSrc:
      "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Consultation-Requirement-Gathering.png",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "DATA ANALYSIS & INTERPRETATION",
    description: (
      <>
        Our{" "}
        <Link href="/subject-matter-experts/" className="text-blue-600">
          subject matter experts
        </Link>{" "}
        and statisticians work together to derive meaningful insights from your
        raw datasets.
      </>
    ),
    iconSrc:
      "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Data-Analysis-Interpretation.png",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "DRAFTING THE REPORT",
    description:
      "We create structured reports that include methodology, findings, discussions, and conclusions in compliance with journal or regulatory guidelines.",
    iconSrc:
      "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Drafting-the-Report.png",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "DESIGNING VISUAL OUTPUTS",
    description:
      "We create customised visual graphs, dashboards, tables, and infographics tailored for your target audience.",
    iconSrc:
      "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Designing-Visual-Outputs.png",
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "REVIEW & FINALISATION",
    description: (
      <>
        A thorough{" "}
        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600">
          peer review
        </Link>{" "}
        ensures accuracy, readability, and alignment with your objectives before
        delivery.
      </>
    ),
    iconSrc:
      "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Review-Finalisation.png",
    position: "top",
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
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      {/* Service Banner placed outside constrained container to hit left and right edges */}
      <ServiceBanner
        imageSrc="/images/icons/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Interpretation, Reporting and Visualisation"
        description="Pubrica provides comprehensive interpretation, reporting, and visualization services, transforming data into actionable insights through clear analysis and visually engaging presentations for informed decision-making."
        showQuoteButton={true}
      />

      <div className="max-w-7xl mx-auto space-y-20 px-4 sm:px-6 lg:px-8 pt-10">
        {/* ================= 1. STEP-BY-STEP PROCESS ================= */}
        <EditorialWorkflowSection
          heading="How Our Interpretation, Reporting, and Visualisation Service Works"
          subheading="Our Step-by-Step Process"
          steps={steps}
        />

        {/* ================= 2. COMPREHENSIVE INTERPRETATION SECTION ================= */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b36]">
              Our Comprehensive Interpretation, Reporting, And Visualisation
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pubrica&apos;s professional <span className="">interpretation, reporting, and visualization services to enhance your insights</span>. With our expert guidance, your data presentation is poised to maximize clarity and drive impactful outcomes.
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
        <PubricaSampleWorkCard
          bookCoverImage={{
            src: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Interpretation-Reporting-and-Visualisation-Sample-Work.webp",
            alt: "Interpretation sample work",
            width: 600,
            height: 400,
          }}
          sections={[
            {
              heading: "Interpretation, Reporting and Visualisation Sample Work",
              button: {
                label: "Discover More",
                url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
              },
            },
            {
              heading: "Download the full Report Now",
              descriptionSegments: [
                {
                  text: "Explore our interpretation, reporting, and visualisation sample work, meticulously crafted to adhere to journal-specific formatting guidelines, robust methodological standards (e.g., PRISMA, CONSORT, STROBE), and project timelines, ensuring accurate, publication-ready, and visually compelling insights for research, clinical, or business applications.",
                },
              ],
              button: {
                label: "Discover More",
                url: "/insights/sample-work",
              },
            },
          ]}
          footerDisclaimerSegments={[]}
        />

      </div>
    </div>
  );
};

export default ProcessAndComplianceSection;