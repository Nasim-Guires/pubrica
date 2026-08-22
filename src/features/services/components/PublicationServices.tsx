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
      prefix: "HIPAA (",
      boldText: "Health Insurance Portability and Accountability Act",
      suffix: ")",
    },
    {
      prefix: "World Association of Medical Editors (WAME) Policies",
    },
  ];

  const packages = [
    {
      name: "Standard",
      letter: "S",
      colorClass: "from-slate-100 to-slate-200 border-slate-300 text-slate-700",
      badgeBg: "bg-slate-200 text-slate-800",
      accentBorder: "border-t-slate-400",
      iconColor: "text-slate-600",
      bgColor: "bg-[#e2ebea]", // Matching the muted grey-teal background
      idealFor:
        "Early-career researchers, postgraduate students, or first-time authors needing baseline support for journal submission.",
      includes: [
        "Journal recommendation assessing scope, indexing, and impact.",
        "Formatting manuscript as per the target journal's requirements.",
        "In-text citation and references styling and conventions (APA, AMA, Vancouver, etc.).",
        "Plagiarism check and summary report.",
        "Draft cover letter as per the journal editor's requirements.",
      ],
      addons: [
        "Journal submission support (single submission)",
        "Draft the response to reviewer comments (one response cycle)",
        "Language editing (basic grammar and clarity)",
        "Establishment of ORCID iD and author profile.",
      ],
      turnaround: "7 - 10 business days.",
    },
    {
      name: "Advanced",
      letter: "A",
      colorClass:
        "from-purple-100 to-purple-200 border-purple-300 text-purple-700",
      badgeBg: "bg-purple-200 text-purple-800",
      accentBorder: "border-t-purple-400",
      iconColor: "text-purple-600",
      bgColor: "bg-[#dfd1e3]", // Matching the muted lavender background
      idealFor:
        "Researchers targeting Scopus or PubMed-indexed journals with a moderate level of editorial and submission support.",
      includes: [
        "All features of the Standard Package.",
        "Full journal submission support (one journal).",
        "Technical editing from subject-matter experts (SMEs).",
        "Comprehensive plagiarism review and limited rewriting, Peer-review readiness assessment (scope match, coherence, scientific merit).",
        "Formatting of figures and tables (up to 3 items).",
      ],
      addons: [
        "Reviewer comment drafting (up to 2 response cycles).",
        "Minor manuscript revisions and updates.",
        "Submission to an alternative journal after rejection.",
        "Pre-submission inquiry to journal editor.",
      ],
      turnaround: "10 - 15 business days.",
    },
    {
      name: "Elite",
      letter: "E",
      colorClass: "from-amber-100 to-amber-200 border-amber-300 text-amber-700",
      badgeBg: "bg-amber-200 text-amber-800",
      accentBorder: "border-t-amber-400",
      iconColor: "text-amber-700",
      bgColor: "bg-[#d4c097]", // Matching the muted gold/tan background
      popular: true,
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
      addons: [
        "End-to-end support until full acceptance.",
        "Scientific editing with a senior PhD expert consultation.",
        "Outreach material: press release or plain-language summary.",
        "Journal cover page design recommendations and artwork.",
      ],
      turnaround: "15 - 20 business days.",
    },
  ];

  const ROUTE_MAP: Record<string, string> = {
    "best publication support services":
      "/insights/sample-work/incidence-cardiovascular-diseases-india-global/",
    "Medical Journal":
      "/services/publication-support/journal-submission/complete-guide-to-writing-cover-letter-for-medical-journals/",
  };

  return (
    <section className="bg-[#f2f4f3] py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* ================= COMPLIANCE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a3847] leading-snug">
              Certified Excellence. Global Compliance. Trusted Integrity
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At Pubrica, we provide{" "}
              <Link
                href={ROUTE_MAP["best publication support services"]}
                className="text-sky-600 font-normal no-underline hover:underline cursor-pointer inline"
              >
                best publication support services
              </Link>{" "}
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
                      <span>{item.prefix}</span>
                      {item.linkText && (
                        <Link
                          href={ROUTE_MAP[item.linkText]}
                          className="text-sky-600 hover:underline inline"
                        >
                          {item.linkText}
                        </Link>
                      )}
                      {item.boldText && (
                        <span className="font-semibold text-slate-900">
                          {item.boldText}
                        </span>
                      )}
                      {item.suffix && <span>{item.suffix}</span>}
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

        {/* ================= PRICING & PACKAGES SECTION ================= */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0d4f60] mt-3">
            Our Packages
          </h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">
            Tailored editorial programs engineered to guide your work from raw
            draft to final published journal index.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full max-w-7xl mx-auto p-4 font-sans">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-sm overflow-hidden shadow-md bg-white text-[#2d2d2d]"
            >
              {/* Top White Header Section */}
              <div className="py-6 px-4 bg-white flex items-center justify-center gap-3 border-b border-gray-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${pkg.badgeBg}`}>
                  {pkg.letter}
                </div>
                <h3 className={`font-bold text-xl ${pkg.colorClass.includes('purple') ? 'text-[#6b21a8]' : pkg.colorClass.includes('amber') ? 'text-[#78350f]' : 'text-[#1e3a8a]'}`}>
                  {pkg.name}
                </h3>
              </div>

              {/* Colored Content Body */}
              <div className={`p-6 flex-1 flex flex-col justify-between ${pkg.bgColor}`}>
                <div className="space-y-4">
                  {/* Ideal For */}
                  {pkg.idealFor && (
                    <div className="text-xs md:text-sm leading-relaxed">
                      <span className="font-bold inline-flex items-center gap-1 mr-1">
                        <span className="text-[10px]">➔</span> Ideal For:
                      </span>
                      <span>{pkg.idealFor}</span>
                    </div>
                  )}

                  {/* Services Include */}
                  {pkg.includes && pkg.includes.length > 0 && (
                    <div className="text-xs md:text-sm">
                      <div className="font-bold mb-2 flex items-center gap-1">
                        <span className="text-[10px]">➔</span> Services Include:
                      </div>
                      <ul className="list-disc list-inside space-y-1.5 pl-1 opacity-95">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="leading-snug">
                            <span className="-ml-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Turnaround Section */}
                {pkg.turnaround && (
                  <div className="mt-8 pt-4 border-t border-black/10 text-xs md:text-sm font-bold flex items-center gap-1">
                    <span className="text-[10px]">➔</span> Turnaround Time : {pkg.turnaround}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= GLOBAL CALL TO ACTION ================= */}
        <div className="text-center">
          <GetFreeQuoteButton />
        </div>
      </div>
    </section>
  );
}