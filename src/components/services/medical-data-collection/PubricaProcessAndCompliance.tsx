"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Interfaces for type safety
interface ProcessStep {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface WhyChooseItem {
  title: string;
  iconSrc: string;
}

interface ComplianceItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const bulletList = "list-disc pl-5 space-y-1.5 marker:text-emerald-700";
const nestedBulletList = "list-disc pl-5 mt-1.5 space-y-1";

// Data for "How Do Healthcare Data Collection Services Work?" Accordion
const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    title: "Understanding Research Objectives",
    content: (
      <p>
        We begin by collaborating with researchers, clinicians, CROs, and
        institutions to define the study goals, data requirements, and
        compliance needs. Whether it&apos;s clinical trial data, patient
        health records, or biological datasets, we align the data strategy
        with your research objectives.
      </p>
    ),
  },
  {
    id: "step-2",
    title: "Choosing the Right Data Collection Approach",
    content: (
      <>
        <p>
          Depending on the scope, we implement primary or secondary data
          collection methods:
        </p>
        <ul className={bulletList}>
          <li>
            Primary Data Collection: Includes direct data collection from
            patients, healthcare professionals, or environments using:
            <ul className={nestedBulletList}>
              <li>Surveys, interviews, and focus groups</li>
              <li>Clinical observations and fieldwork</li>
              <li>Physiological measurements (e.g., blood pressure, lab tests)</li>
              <li>Mobile and sensor-based data</li>
              <li>Controlled experiments and case studies</li>
            </ul>
          </li>
          <li>
            Secondary Data Extraction: Involves the extraction of existing
            data from:
            <ul className={nestedBulletList}>
              <li>Electronic Health Records (EHRs) and clinical trial reports</li>
              <li>Research publications, registries, and administrative databases</li>
              <li>Medical images (MRI, CT scans), video/audio files</li>
              <li>Web mining and online content analysis</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "step-3",
    title: "Data Cleaning, Structuring, and Management",
    content: (
      <>
        <p>Once data is collected or extracted, our team of experts performs:</p>
        <ul className={bulletList}>
          <li>Data validation and de-identification</li>
          <li>Standardization and formatting for interoperability (e.g., HL7, CDISC)</li>
          <li>Metadata tagging and coding for accurate classification</li>
          <li>Secure storage and access control, ensuring regulatory compliance (GDPR, HIPAA)</li>
        </ul>
      </>
    ),
  },
  {
    id: "step-4",
    title: "Advanced Data Analysis and Integration",
    content: (
      <>
        <p>Our data scientists and medical writers leverage data analytics tools to:</p>
        <ul className={bulletList}>
          <li>Analyse clinical, observational, or real-world evidence data</li>
          <li>Perform statistical analysis, data modeling, and hypothesis testing</li>
          <li>Integrate multi-modal data sources (e.g., genomic + clinical data)</li>
          <li>Generate research insights and visualizations for reporting</li>
        </ul>
      </>
    ),
  },
  {
    id: "step-5",
    title: "Quality Assurance and Compliance",
    content: (
      <>
        <p>At every stage, we ensure:</p>
        <ul className={bulletList}>
          <li>Ethical data collection under IRB and regulatory guidelines</li>
          <li>High data integrity, accuracy, and reproducibility</li>
          <li>Compliance with international standards (ICH-GCP, FDA, EMA)</li>
        </ul>
      </>
    ),
  },
  {
    id: "step-6",
    title: "Delivery & Ongoing Support",
    content: (
      <>
        <p>We provide:</p>
        <ul className={bulletList}>
          <li>Clean, structured datasets ready for analysis or submission</li>
          <li>Full documentation for traceability and regulatory review</li>
          <li>Ongoing support for data updates, corrections, or meta-analyses</li>
        </ul>
      </>
    ),
  },
];

// Data for "Why Choose Pubrica?" Cards
const whyChooseUsData: WhyChooseItem[] = [
  {
    title: "Domain experts in medical, clinical, and life science research",
    iconSrc: "/images/medical-writing/icon-1.png",
  },
  {
    title: "End-to-end data lifecycle support",
    iconSrc: "/images/medical-writing/icon-2.png",
  },
  {
    title: "Ethical, compliant, and high-quality data practices",
    iconSrc: "/images/medical-writing/icon-3.png",
  },
  {
    title: "Scalable for academic and industry needs",
    iconSrc: "/images/medical-writing/icon-4.png",
  },
];

// Data for "Our Compliance and Guideline Standards" Grid
const complianceItems: ComplianceItem[] = [
  {
    id: "compliance-1",
    title: "Ethical Compliance and Informed Consent",
    content: (
      <ul className={bulletList}>
        <li>
          We strictly adhere to internationally recognized ethical
          guidelines, including the Declaration of Helsinki and ICH-GCP
          (Good Clinical Practice), to uphold the rights, safety, and
          well-being of research participants.
        </li>
        <li>
          Mandatory Institutional Review Board (IRB) or Ethics Committee
          (EC) approvals are secured before initiating any data collection
          involving human subjects.
        </li>
        <li>
          A transparent, documented informed consent process is
          implemented, ensuring participants fully understand:
          <ul className={nestedBulletList}>
            <li>The study&apos;s purpose and procedures</li>
            <li>How their data will be used and stored</li>
            <li>Their rights, including voluntary participation and withdrawal</li>
          </ul>
        </li>
        <li>
          Special considerations and additional safeguards are applied when
          working with vulnerable populations, such as minors, pregnant
          women, or individuals with cognitive impairments.
        </li>
      </ul>
    ),
  },
  {
    id: "compliance-2",
    title: "Data Privacy and Confidentiality",
    content: (
      <>
        <ul className={bulletList}>
          <li>
            Our data handling practices comply with HIPAA (Health Insurance
            Portability and Accountability Act, USA) and GDPR (General Data
            Protection Regulation, EU), allowing for the strong protection
            of personal health information (PHI) and personally
            identifiable information.
          </li>
          <li>
            Anonymization and pseudonymization techniques are utilized to
            reduce the risk of re-identification.
          </li>
        </ul>
        <p className="mt-2">We implement:</p>
        <ul className={bulletList}>
          <li>Data minimization: Collecting only what is necessary</li>
          <li>Secure storage protocols with encryption</li>
          <li>Role-based access controls and audit trails</li>
          <li>
            User rights enforcement, including the right to access, rectify,
            or erase data, in line with GDPR provisions.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "compliance-3",
    title: "Data Sharing and Transparency Policies",
    content: (
      <ul className={bulletList}>
        <li>
          We comply with the data sharing policies set by regulatory
          authorities, ethical committees, and funding agencies.
        </li>
        <li>
          This includes alignment with:
          <ul className={nestedBulletList}>
            <li>NIH Data Sharing Policy (USA)</li>
            <li>ICMR Clinical Trial Registry (CTRI) (India)</li>
            <li>European Open Science Cloud and other open data initiatives</li>
          </ul>
        </li>
        <li>
          When sharing data, we ensure that it is fully de-identified and
          shared through secure, compliant channels to maintain
          confidentiality.
        </li>
      </ul>
    ),
  },
  {
    id: "compliance-4",
    title: "Regulatory Standards and Country-Specific Guidelines",
    content: (
      <>
        <p>
          Pubrica operates in full compliance with regional and global
          regulatory frameworks, including:
        </p>
        <ul className={bulletList}>
          <li>ICMR – Indian Council of Medical Research Guidelines (India)</li>
          <li>FDA – Food and Drug Administration Regulations (USA)</li>
          <li>EMA – European Medicines Agency Guidelines (Europe)</li>
          <li>MHRA – Medicines and Healthcare products Regulatory Agency (UK)</li>
          <li>PMDA – Pharmaceuticals and Medical Devices Agency (Japan)</li>
          <li>TGA – Therapeutic Goods Administration (Australia)</li>
          <li>Health Canada – Regulatory standards for Canadian research</li>
        </ul>
        <p className="mt-2">
          We also stay up-to-date with local data protection laws, including
          data localization mandates where applicable.
        </p>
      </>
    ),
  },
];

export default function PubricaProcessAndCompliance() {
  const [openProcess, setOpenProcess] = useState<string | null>(null);
  const [openCompliance, setOpenCompliance] = useState<string | null>(null);

  const toggleProcess = (id: string) => {
    setOpenProcess((prev) => (prev === id ? null : id));
  };

  const toggleCompliance = (id: string) => {
    setOpenCompliance((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      {/* SECTION 1: How Services Work */}
      <section
        aria-labelledby="process-heading"
        className="bg-[#f2f4f4] py-7 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h2
              id="process-heading"
              className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4 leading-tight"
            >
              How Do Healthcare, Medical, and Life Science Data Collection and
              Extraction Services Work at Pubrica?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
              At Pubrica, our healthcare, medical, and life sciences{" "}
              <a
                href="/services/medical-data-collection"
                className="text-cyan-700 hover:underline font-medium decoration-cyan-700"
              >
                data collection and extraction services
              </a>{" "}
              are designed to provide accurate, ethical, and research-ready data
              sets for clinical studies, academic research, and scientific
              innovation. This is how the process works:
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overlapping Image Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-6">
              <div className="relative w-full max-w-md h-[320px] sm:h-[380px]">
                {/* Back Image */}
                <div className="absolute left-0 top-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/images/medical-writing/What-We-Do-medical-data-collection.webp"
                    alt="Scientist conducting laboratory research with a microscope"
                    fill
                    sizes="(max-width: 768px) 70vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Accordion Process List */}
            <div className="lg:col-span-7 space-y-2">
              {processSteps.map((step) => {
                const isOpen = openProcess === step.id;
                return (
                  <article
                    key={step.id}
                    className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden"
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`process-body-${step.id}`}
                        onClick={() => toggleProcess(step.id)}
                        className="w-full flex items-center justify-between px-6 py-3.5 text-left text-[#082e2b] hover:bg-gray-50 font-medium text-sm sm:text-base transition-colors duration-150"
                      >
                        <span>{step.title}</span>
                        <span
                          className="text-lg font-bold text-[#082e2b] ml-4 select-none"
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`process-body-${step.id}`}
                        className="px-6 pb-4 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 space-y-2"
                      >
                        {step.content}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: End-to-End Banner Callout */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[#082e2b] text-white py-6 px-4 sm:px-6 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <h2
            id="cta-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
          >
            End-to-End Medical Data Collection with Precision and Compliance
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We deliver precise, validated data for CROs, healthcare providers,
            researchers, and pharma companies, ensuring every project meets
            regulatory standards with confidence.
          </p>
          <div className="pt-2">
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Pubrica? */}
      <section
        aria-labelledby="why-choose-heading"
        className="py-7 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto"
      >
        <header className="mb-10">
          <h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl font-bold text-[#082e2b]"
          >
            Why Choose Pubrica?
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, index) => (
            <article
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center justify-center min-h-[180px]"
            >
              <div className="mb-4 relative w-12 h-12 flex items-center justify-center">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 4: Compliance & Guidelines */}
      <section
        aria-labelledby="compliance-heading"
        className="py-6 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto"
      >
        <header className="mb-8">
          <h2
            id="compliance-heading"
            className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4"
          >
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
            At Pubrica, we adhere to stringent regulatory and ethical standards
            when collecting, handling, and managing medical data. Our protocols
            ensure compliance with national and international guidelines,
            maintaining the integrity, confidentiality, and reliability of
            collected data.
          </p>
        </header>

        {/* 2x2 Grid for Compliance Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {complianceItems.map((item) => {
            const isOpen = openCompliance === item.id;
            return (
              <article
                key={item.id}
                className="bg-[#f4fcf7] border border-emerald-100 rounded-md overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`compliance-body-${item.id}`}
                    onClick={() => toggleCompliance(item.id)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-[#082e2b] hover:bg-emerald-100/50 transition-colors"
                  >
                    <span>{item.title}</span>
                    <span
                      className="text-base font-bold ml-2 select-none"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`compliance-body-${item.id}`}
                    className="px-4 pb-4 pt-1 text-xs text-gray-700 leading-relaxed border-t border-emerald-100 space-y-2"
                  >
                    {item.content}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* SECTION 5: Sample Work & Download Callout */}
        <div className="bg-[#f0fdf4] rounded-2xl p-6 sm:p-10 border border-emerald-100">
          <header className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#082e2b]">
              Our Commitment
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-2">
              At Pubrica, ethical behaviour, participant privacy, and regulatory
              compliance are not just requirements, but the very foundation of
              our services. Our frameworks ensure your data is collected
              ethically, stored securely, and presented in a scientific and
              legally compliant manner.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-8">
            {/* Left Image */}
            <div className="md:col-span-5 flex justify-center items-center p-6 bg-[#f4fbf6]">
              <div className="relative aspect-[3/4] w-full max-w-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/medical-writing/Medical-Data-Collection-Sample-Work.webp"
                  alt="Medical researcher working on laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Right CTAs */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#082e2b] mb-3">
                  Medical Data Collection Sample Work
                </h3>
                <Link
                  href="/insights/medical-data-collection-on-interstitial-cysts-and-drug-uracysts"
                  className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors"
                >
                  Discover More
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#082e2b] mb-2">
                  Download the full Report Now
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Explore our medical data collection sample work, accurately
                  designed to meet research protocols, comply with regulatory
                  standards, and deliver accurate, validated data for impactful
                  clinical and academic research outcomes.
                </p>
                <Link
                  href="/insights/sample-work"
                  className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}