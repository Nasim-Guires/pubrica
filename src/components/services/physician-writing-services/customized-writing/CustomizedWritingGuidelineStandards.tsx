import React from "react";
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
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0a2e2b] tracking-tight">
              How Our Customized Medical Writing Services Work
            </h1>
            <p className="mt-2 text-base font-semibold text-[#1a4a45]">
              Step-by-Step Process Designed for Physicians
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our structured and collaborative workflow ensures that every
              document, be it a medical manuscript, thesis, clinical report, or
              grant proposal, is scientifically accurate, customized to your
              aims, and submission-ready.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative items-stretch">
            {PROCESS_STEPS.map((step) => {
              const IconComponent = step.icon;
              const isEven = step.stepNumber % 2 === 0;

              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col items-center group relative"
                >
                  {/* Step Number Badge (Top for Odds) */}
                  {!isEven && (
                    <div className="w-10 h-10 rounded-full bg-[#0088b2] text-white font-bold flex items-center justify-center text-sm mb-3 z-10 shadow-md">
                      {step.stepNumber}
                    </div>
                  )}

                  {/* Horizontal Line Accent */}
                  <div
                    className={`w-full h-1 bg-[#0088b2] mb-3 ${
                      isEven ? "order-2 mt-3 mb-0" : ""
                    }`}
                  />

                  {/* Step Card with Black Hover Effect */}
                  <div
                    className={`
                      w-full bg-slate-50 border border-gray-200 rounded-sm p-4 text-left flex-1
                      transition-all duration-300 ease-in-out cursor-pointer shadow-sm
                      hover:bg-[#333333] hover:text-white hover:shadow-xl hover:border-[#333333]
                      flex flex-col justify-start
                      ${isEven ? "order-1" : "order-3"}
                    `}
                  >
                    <div className="mb-3 text-gray-700 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-7 h-7 stroke-[1.5]" />
                    </div>

                    <h2 className="text-xs font-bold tracking-wider text-gray-900 group-hover:text-white transition-colors duration-300 uppercase mb-3 border-b border-gray-200 group-hover:border-gray-700 pb-2">
                      {step.title}
                    </h2>

                    <p className="text-[11px] leading-relaxed text-gray-600 group-hover:text-gray-200 transition-colors duration-300 mb-2">
                      {step.description}
                    </p>

                    {step.items && step.items.length > 0 && (
                      <ul className="space-y-1.5 text-[10px] text-gray-600 group-hover:text-gray-300 transition-colors duration-300 mt-2">
                        {step.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-1.5 leading-tight"
                          >
                            <span className="inline-block w-1 h-1 rounded-full bg-gray-500 group-hover:bg-white mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Step Number Badge (Bottom for Evens) */}
                  {isEven && (
                    <div className="w-10 h-10 rounded-full bg-[#0088b2] text-white font-bold flex items-center justify-center text-sm mt-3 z-10 shadow-md order-3">
                      {step.stepNumber}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CTA BANNER SECTION                                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="bg-[#03362a] text-white py-10 px-6 sm:px-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          {/* Badge */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-sky-300 bg-white text-[#0a2e2b] shadow-lg p-2 text-center flex items-center justify-center">
              <div className="text-xs font-black uppercase tracking-wider">
                <span className="block text-base tracking-normal">100%</span>
                Satisfaction
                <span className="block text-[9px] text-sky-600">Guarantee</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
              Advance Your Clinical and Research Impact with Customized Medical
              Writing for Physicians
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-3xl mb-6">
              Partner with domain-specific medical writing experts who deliver
              structured, evidence-based content tailored to your specialty.
              Whether you're preparing a manuscript, regulatory document, grant
              proposal, or CME material, we ensure your work meets the highest
              standards for submission, compliance, and professional credibility.
            </p>

            <GetFreeQuoteButton/>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. COMPLIANCE & GUIDELINE STANDARDS SECTION                */}
      {/* ========================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
      <section className="max-w-5xl mx-auto px-4 my-12">
        <div className="bg-[#f2faf7] py-10 px-6 sm:px-12 rounded-xl border border-emerald-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-xs h-72 relative rounded-md overflow-hidden shadow-md bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                  alt="Physician medical writing sample"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Blocks */}
            <div className="md:col-span-7 text-center md:text-left space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2e2b] mb-3">
                  Customized Medical Writing Service Sample Work
                </h3>
                <a
                  href="#discover-samples"
                  className="inline-block bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2.5 px-8 rounded-full transition-colors duration-200"
                >
                  Discover More
                </a>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2e2b] mb-2">
                  Download the full Report Now
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Explore our customized writing samples, meticulously crafted to
                  align with journal-specific guidelines, research objectives,
                  and academic or regulatory requirements, delivered within
                  defined timelines and backed by verified literature.
                </p>
                <a
                  href="#download-report"
                  className="inline-block bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2.5 px-8 rounded-full transition-colors duration-200"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. PACKAGES & ADD-ONS TABLE SECTION                       */}
      {/* ========================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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