import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ClipboardDocumentCheckIcon,
  UserIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import CustomizedWritingServiceWork from "./CustomizedWritingServiceWork";
import ServiceBanner from "@/components/common/ServiceBanner";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";

// --- Next.js SEO Metadata ---
export const metadata: Metadata = {
  title: "Customized Medical Writing Services for Physicians | Pubrica",
  description:
    "Explore our medical writing compliance, process workflow, samples, and package pricing tailored for physicians. Adhering to ICMJE, CONSORT, APA, AMA, and FDA/EMA standards.",
  keywords: [
    "Customized Medical Writing",
    "Physician Writing Services",
    "Medical Guidelines Compliance",
    "ICMJE Guidelines",
    "Medical Manuscript Preparation",
    "Clinical Writing Packages",
  ],
  alternates: {
    canonical:
      "https://pubrica.com/services/physician-writing-services/customized-writing/",
  },
  openGraph: {
    title: "Customized Medical Writing Services for Physicians | Pubrica",
    description:
      "Expert medical writing tailored for physicians with strict adherence to global publication and ethical guidelines.",
    url: "https://pubrica.com/services/physician-writing-services/customized-writing/",
    siteName: "Pubrica",
    type: "website",
  },
};

// --- Interfaces ---
interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  items?: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ComplianceCard {
  id: number;
  title: string;
  borderColor: string;
  items: string[];
}

interface PackageTier {
  tier: string;
  inclusions: string[];
  bestFor: string;
  startingPrice: string;
}

// --- Data ---
const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "REQUIREMENT COLLECTION",
    description: "We begin by gathering comprehensive project details, including:",
    items: [
      "Document type (e.g., research article, case report, thesis, grant)",
      "Target journal or institution guidance",
      "Formatting style (e.g., Vancouver, APA, Harvard)",
      "Word count, deadline, and any special instructions",
    ],
    icon: ClipboardDocumentCheckIcon,
  },
  {
    stepNumber: 2,
    title: "EXPERT ASSIGNMENT",
    description:
      "A domain-specific medical writer or researcher with relevant clinical or academic expertise is matched to your project. We ensure alignment with your specialty (e.g., cardiology, surgery, oncology) and the intended purpose (publication, CME, regulatory use).",
    icon: UserIcon,
  },
  {
    stepNumber: 3,
    title: "INITIAL DRAFTING",
    description: "Our expert drafts the document based on:",
    items: [
      "Verified and peer-reviewed literature",
      "Your data or research protocols",
      "Compliance with global publication and ethical standards (ICMJE, GPP3, etc.)",
    ],
    icon: DocumentTextIcon,
  },
  {
    stepNumber: 4,
    title: "INTERNAL REVIEW & QUALITY CHECK",
    description:
      "Every draft goes through a multi-level internal review that includes:",
    items: [
      "Technical review by a senior editor",
      "Language and grammar revision",
      "Formatting review for journal/institutional compliance",
      "Plagiarism review with Turnitin/iThenticate",
    ],
    icon: CheckBadgeIcon,
  },
  {
    stepNumber: 5,
    title: "CLIENT REVIEW & REVISIONS",
    description:
      "We share the draft with you for feedback. Revisions are handled promptly while ensuring:",
    items: [
      "Scientific integrity is preserved",
      "Requested changes are fully addressed",
      "Content remains consistent with the target audience and publication goals",
    ],
    icon: UserGroupIcon,
  },
  {
    stepNumber: 6,
    title: "FINAL DELIVERY",
    description: "The final version is delivered along with:",
    items: [
      "Reference list (formatted)",
      "Plagiarism/similarity report",
      "Formatting checklist or journal compliance sheet",
      "Ready for journal submission, university defense, regulatory filing, or CME use",
    ],
    icon: PaperAirplaneIcon,
  },
];

const COMPLIANCE_DATA: ComplianceCard[] = [
  {
    id: 1,
    title: "Clinical and Medical Guidelines",
    borderColor: "border-purple-300",
    items: [
      "ICMJE (International Committee of Medical Journal Editors)",
      "CONSORT (Randomized Trials)",
      "PRISMA (Systematic Reviews)",
      "STROBE (Observational Studies)",
      "CARE (Case Reports)",
      "GRADE (Evidence-Based Recommendations)",
      "EQUATOR Network",
    ],
  },
  {
    id: 2,
    title: "Academic Style Guidelines",
    borderColor: "border-orange-300",
    items: [
      "APA (American Psychological Association)",
      "MLA (Modern Language Association)",
      "Harvard Referencing",
      "Chicago Manual of Style",
      "Vancouver",
    ],
  },
  {
    id: 3,
    title: "Journal-Specific Author Guidelines",
    borderColor: "border-yellow-300",
    items: ["Elsevier", "Springer", "Wiley", "BMJ Group", "Taylor & Francis"],
  },
  {
    id: 4,
    title: "Regulatory and Ethical Standards",
    borderColor: "border-teal-300",
    items: [
      "ICH-GCP (International Council for Harmonisation – Good Clinical Practice)",
      "FDA/EMA Documentation Compliance",
      "Declaration of Helsinki (Ethical Principles)",
      "GDPR & HIPAA (Data Protection & Patient Confidentiality)",
      "GPP3, COPE, ISMPP",
      "Institutional Review Board (IRB) & Ethics Committee Templates",
    ],
  },
];

const PACKAGES: PackageTier[] = [
  {
    tier: "Essential",
    inclusions: [
      "Single document (e.g., case report, abstract, SOP)",
      "Domain-specific expert writer",
      "Standard formatting & plagiarism check",
    ],
    bestFor: "Individual physicians with straightforward writing needs",
    startingPrice: "$300+",
  },
  {
    tier: "Professional",
    inclusions: [
      "One comprehensive document (e.g., research article, thesis chapter, grant)",
      "Literature review & structured writing",
      "Journal/university formatting",
      "1 revision cycle",
    ],
    bestFor: "Physician-researchers, early-career academics",
    startingPrice: "$700+",
  },
  {
    tier: "Advanced",
    inclusions: [
      "Full manuscript/thesis/CME module Visuals: tables, graphs, references",
      "Reviewer comment handling",
      "Up to 2 revisions",
      "Similarity report included",
    ],
    bestFor: "Mid-level to senior clinicians and faculty",
    startingPrice: "$1200+",
  },
  {
    tier: "Complete Support",
    inclusions: [
      "Multi-document support (e.g., manuscript + grant + slides)",
      "End-to-end publication planning",
      "Dedicated medical writer + editor",
      "Unlimited revisions within the project scope",
      "Priority delivery",
    ],
    bestFor: "KOLs, academic physicians, and institutional clients",
    startingPrice: "Custom Quote",
  },
];

const ADD_ONS = [
  "Journal selection and submission support",
  "Rapid delivery (48–72 hours)",
  "Visual abstract or infographic creation",
  "Translation and localization (for non-English speakers)",
];

export default function CustomizedWritingGuidelineStandards() {
  // --- JSON-LD Schema for SEO ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Customized Medical Writing Services for Physicians",
    provider: {
      "@type": "Organization",
      name: "Pubrica",
      url: "https://pubrica.com",
    },
    serviceType: "Medical Writing",
    url: "https://pubrica.com/services/physician-writing-services/customized-writing/",
    description:
      "Structured and collaborative medical writing services for physicians adhering to strict compliance and ethical standards.",
  };

  return (
    <main className="w-full bg-slate-50 text-gray-800">
      {/* Structured Data Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================= */}
      {/* 1. PROCESS SECTION: HOW OUR SERVICES WORK                 */}
      {/* ========================================================= */}
      <CustomizedWritingServiceWork />

      {/* ========================================================= */}
      {/* 2. CTA BANNER SECTION                                     */}
      {/* ========================================================= */}
      <ServiceBanner
        imageSrc="/images/publication-support/journal-selection/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Advance Your Clinical and Research Impact with Customized Medical Writing for Physicians"
        description="Partner with domain-specific medical writing experts who deliver structured, evidence-based content tailored to your specialty. Whether you're preparing a manuscript, regulatory document, grant proposal, or CME material, we ensure your work meets the highest standards for submission, compliance, and professional credibility."
        showQuoteButton={true}
      />

      {/* ========================================================= */}
      {/* 3. COMPLIANCE & GUIDELINE STANDARDS SECTION                */}
      {/* ========================================================= */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2e2b] tracking-tight">
            Our Compliance and Guideline Standards
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Our medical writing adheres to globally recognized standards to
            ensure scientific accuracy, ethical integrity, and compliance with
            publication, clinical, and regulatory expectations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_DATA.map((card) => (
            <div
              key={card.id}
              className={`
                group relative bg-white rounded-lg p-6 
                border-t-4 ${card.borderColor} shadow-sm border-x border-b border-gray-200
                transition-all duration-300 ease-in-out cursor-pointer
                hover:bg-[#333333] hover:text-white hover:shadow-xl hover:border-t-[#333333]
                flex flex-col justify-between
              `}
            >
              <div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4 border-b border-gray-100 pb-2 group-hover:border-gray-700">
                  {card.title}
                </h3>

                <ul className="space-y-2.5 text-xs text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-white mt-1 shrink-0 transition-colors duration-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SAMPLE WORK & REPORT DOWNLOAD CTA                     */}
      {/* ========================================================= */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/physician-writing-services/customized-writing/Customized-Medical-Writing-Service-Sample-Work.jpg",
          alt: "Physician medical writing sample",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading: "Customized Medical Writing Service Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our customized writing samples, meticulously crafted to align with journal-specific guidelines, research objectives, and academic or regulatory requirements, delivered within defined timelines and backed by verified literature.",
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

      {/* ========================================================= */}
      {/* 5. PACKAGES & ADD-ONS TABLE SECTION                       */}
      {/* ========================================================= */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2e2b]">
            Customized Clinical and Medical Writing Packages
          </h2>
          <p className="text-sm font-semibold text-[#1a4a45] mt-2">
            Flexible, Specialty-Aligned Solutions for Physicians
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl mx-auto">
            We offer tiered packages that can be tailored to your clinical,
            academic, or regulatory writing needs.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 mb-10 bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#133e38] text-white text-xs font-semibold uppercase tracking-wider">
                <th className="py-4 px-6 border-r border-[#1e524a] w-1/5">
                  Package Tier
                </th>
                <th className="py-4 px-6 border-r border-[#1e524a] w-2/5">
                  Inclusions
                </th>
                <th className="py-4 px-6 border-r border-[#1e524a] w-1/4">
                  Best For
                </th>
                <th className="py-4 px-6 text-center w-1/6">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs text-gray-700">
              {PACKAGES.map((pkg, index) => {
                const isEven = index % 2 === 1;
                return (
                  <tr
                    key={pkg.tier}
                    className={isEven ? "bg-[#eaf4f3]" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-bold text-gray-900 border-r border-gray-200 align-top">
                      {pkg.tier}
                    </td>

                    <td className="py-4 px-6 border-r border-gray-200 align-top">
                      <ul className="space-y-2">
                        {pkg.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="py-4 px-6 border-r border-gray-200 align-top text-gray-600">
                      {pkg.bestFor}
                    </td>

                    <td className="py-4 px-6 font-bold text-center align-top text-gray-900">
                      {pkg.startingPrice}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Optional Add-ons */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Optional Add-ons
          </h3>
          <ul className="space-y-2 text-xs text-gray-600">
            {ADD_ONS.map((addon, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-1 shrink-0" />
                <span>{addon}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}