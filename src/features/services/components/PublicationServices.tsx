import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages from "@/components/common/CommonPackages";

export interface PackageItem {
  // --- Standard Header & Icon Properties ---
  title: string;
  subtitle?: string;
  icon: string; // Path to image icon (e.g., "/icons/standard-s.svg")
  letter?: string; // Optional letter badge fallback (e.g., "S", "A", "E")

  // --- Core Package Information ---
  idealFor: string;
  includes: string[];
  addons?: string[];
  turnaround?: string;
  bestFor?: string;
  popular?: boolean;

  // --- Dynamic Color & Styling Properties ---
  cardBgColor?: string; // Hex color string (e.g., "#e2ebea")
  titleColor?: string; // Hex color string (e.g., "#1e3a8a")
  badgeBg?: string; // Tailwind class for letter badge (e.g., "bg-slate-200 text-slate-800")
  colorClass?: string; // Tailwind gradient/text classes
  accentBorder?: string; // Tailwind accent border classes
  iconColor?: string; // Tailwind icon color classes
}

export default function PublicationServices() {
  const complianceFrameworks = [
    {
      prefix: "ICMJE (International Committee of ",
      linkText: "Medical Journal",
      suffix: " Editors) Recommendations",
    },
    {
      prefix: "COPE (",
      boldText: "Committee on Publication Ethics",
      suffix: ") Guidelines",
    },
    {
      prefix: "Good Publication Practice (GPP) Guidelines",
    },
    {
      prefix: "GDPR (",
      boldText: "General Data Protection Regulation",
      suffix: ")",
    },
    {
      linkText: "HIPAA",
      suffix: " (",
      boldText: "Health Insurance Portability and Accountability Act",
      tailSuffix: ")",
    },
    {
      prefix: "World Association of Medical Editors (WAME) Policies",
    },
  ];

  const publishingPackages: PackageItem[] = [
    {
      icon: "/images/icons/S.png",
      title: "Standard",
      subtitle: "Baseline Support for Journal Submission",
      idealFor:
        "Early-career researchers, postgraduate students, or first-time authors needing baseline support for journal submission.",
      includes: [
        "Journal recommendation assessing scope, indexing, and impact.",
        "Formatting manuscript as per the target journal's requirements.",
        "In-text citation and references styling and conventions (APA, AMA, Vancouver, etc.).",
        "Plagiarism check and summary report.",
        "Draft cover letter as per the journal editor's requirements.",
      ],
      turnaround: "7 - 10 business days.",
      cardBgColor: "#e2ebea",
      titleColor: "#1e3a8a",
    },
    {
      icon: "/images/icons/advanced.webp",
      title: "Advanced",
      subtitle: "Moderate Support for Scopus/PubMed Journals",
      idealFor:
        "Researchers targeting Scopus or PubMed-indexed journals with a moderate level of editorial and submission support.",
      includes: [
        "All features of the Standard Package.",
        "Full journal submission support (one journal).",
        "Technical editing from subject-matter experts (SMEs).",
        "Comprehensive plagiarism review and limited rewriting, Peer-review readiness assessment (scope match, coherence, scientific merit).",
        "Formatting of figures and tables (up to 3 items).",
      ],
      turnaround: "10 - 15 business days.",
      cardBgColor: "#dfd1e3",
      titleColor: "#6b21a8",
    },
    {
      icon: "/images/icons/elite.webp",
      title: "Elite",
      subtitle: "End-to-End Support for High-Impact Journals",
      idealFor:
        "Researching for SCI, SCIE, or Q1 journals seeking comprehensive end-to-end publishing support.",
      includes: [
        "All features of the Advanced Package.",
        "Complete manuscript rewriting and enhancement.",
        "Drafting of reviewer responses and complete revision support (up to 2 cycles).",
        "Post-submission tracking and follow-up with the journal.",
        "Submission to two journals in the event of rejection from the first journal.",
        "Advanced figure and table design/redesign (up to 6 visuals).",
        "Compliance review with COPE, ICMJE, and journal-specific policies.",
        "Complete journal submission package.",
      ],
      turnaround: "15 - 20 business days.",
      cardBgColor: "#d4c097",
      titleColor: "#78350f",
    },
  ];

  const ROUTE_MAP: Record<string, string> = {
    "best publication support services":
      "https://pubrica.com/services/publication-support/journal-selection/incidence-cardiovascular-diseases-india-global/",
    "Medical Journal":
      "/services/publication-support/journal-submission/complete-guide-to-writing-cover-letter-for-medical-journals/",
    "HIPAA":
      "/services/publication-support/hipaa-compliance-complete-overview/",
  };

  return (
    <section className="bg-[#f2f4f3] py-7 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* ================= COMPLIANCE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a3847] leading-snug">
              Certified Excellence. Global Compliance. Trusted Integrity
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At Pubrica, we provide{" "}
              <a
                href={ROUTE_MAP["best publication support services"]}
                className="text-blue-600 font-normal no-underline hover:no-underline cursor-pointer inline"
              >
                best publication support services
              </a>{" "}
              that meet the highest international standards of scientific
              writing, manuscript preparation, and editorial assistance. Our
              professional team and stringent processes comply with
              international ethical codes and regulatory procedures, which
              allows your research manuscripts to be accurate, compliant, and
              publication-ready in reputable journals worldwide.
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-[#0a3847] mb-4">
                Regulatory frameworks we comply With
              </h3>
              <ul className="flex flex-col space-y-2.5">
                {complianceFrameworks.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base leading-snug">
                    <span className="text-[#e11d48] mt-1 shrink-0 text-xs">●</span>
                    <div className="text-slate-800">
                      {item.prefix && <span>{item.prefix}</span>}
                      {item.linkText && (
                        <Link
                          href={ROUTE_MAP[item.linkText]}
                          className="text-blue-600 no-underline hover:no-underline inline"
                        >
                          {item.linkText}
                        </Link>
                      )}
                      {item.suffix && <span>{item.suffix}</span>}
                      {item.boldText && (
                        <span className="font-semibold text-slate-900">
                          {item.boldText}
                        </span>
                      )}
                      {item.tailSuffix && <span>{item.tailSuffix}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-sm overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/images/publication-support/Regulatory-frameworks-we-comply-With.jpg"
                alt="Scientists and data analysts collaborating over scientific compliance checklists"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRICING & PACKAGES SECTION ================= */}
      <div className="w-full bg-transparent py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0d4f60] mb-6">
            Our Packages
          </h2>
          <CommonPackages
            title=""
            subtitle=""
            description=""
            packages={publishingPackages}
            buttonText="Request Package Info"
          />
          <div className="text-center mt-6">
            <GetFreeQuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
}