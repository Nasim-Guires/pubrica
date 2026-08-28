import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Specialty {
  name: string;
  iconSrc: string;
}

interface StandardItem {
  name: string;
  logoSrc: string;
}

interface PackageFeatureBlock {
  title: string;
  items: string[];
}

interface PackageData {
  id: string;
  badgeLetter: string;
  badgeSrc: string;
  badgeTitle: string;
  badgeSubtitle: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaround: string;
  theme: {
    badgeBg: string;
    cardBg: string;
    borderColor: string;
    textColor: string;
  };
}

export const TherapeuticAndComplianceSpecialties: React.FC = () => {
  // Mapped list of 16 therapeutic areas explicitly matching the table rows
  const IMG = "/images/physician-writing-services";
  const specialties: Specialty[] = [
    { name: "Oncology", iconSrc: `${IMG}/Oncology-1-1.png` },
    { name: "Cardiology", iconSrc: `${IMG}/Cardiology-1.png` },
    { name: "Neurology", iconSrc: `${IMG}/Neurology-1.png` },
    { name: "Psychiatry", iconSrc: `${IMG}/Psychiatry-1.png` },
    { name: "Pulmonology", iconSrc: `${IMG}/Pulmonology-1.png` },
    { name: "Nephrology", iconSrc: `${IMG}/Nephrology-1.png` },
    { name: "Psychology", iconSrc: `${IMG}/Psychology.png` },
    { name: "Haematology", iconSrc: `${IMG}/Haematology-1.png` },
    { name: "Gastroenterology", iconSrc: `${IMG}/Gastroenterology.png` },
    { name: "Obstetrics & Gynaecology", iconSrc: `${IMG}/Obstetrics-Gynaecology-1.png` },
    { name: "Paediatrics", iconSrc: `${IMG}/Paediatrics-1.png` },
    { name: "Urology", iconSrc: `${IMG}/Urology-1.png` },
    { name: "General Medicine", iconSrc: `${IMG}/General-Medicine-1-1.png` },
    { name: "Rheumatology", iconSrc: `${IMG}/Rheumatology-1.png` },
    { name: "Dermatology", iconSrc: `${IMG}/Dermatology.png` },
    { name: "Orthopaedics", iconSrc: `${IMG}/Orthopaedics.png` },
  ];

  const standards: StandardItem[] = [
    { name: "Good Pharmacy Practice", logoSrc: `${IMG}/GPP.png` },
    {
      name: "Consolidated Standards of Reporting Trials",
      logoSrc: `${IMG}/Consolidated-Standards-of-Reporting-Trials.png`,
    },
    {
      name: "International Council for Harmonisation",
      logoSrc: `${IMG}/International-Council-for-Harmonisation.png`,
    },
    {
      name: "Food and Drug Administration",
      logoSrc: `${IMG}/FDA-.png`,
    },
    {
      name: "International Committee of Medical Journal Editors",
      logoSrc: "/images/publication-support/journal-selection/ICMJE.webp",
    },
  ];

  // Structured content for the Pricing Packages matching screenshots exactly
  const servicePackages: PackageData[] = [
    {
      id: "standard",
      badgeLetter: "S",
      badgeSrc: "/images/publication-support/poster-preparation/S.png",
      badgeTitle: "Standard",
      badgeSubtitle: "Budget-Friendly Choice",
      idealFor:
        "Early-career physicians submitting short clinical communications, letters to editors, or case reports.",
      includes: [
        "Manuscript writing (up to 1500 words)",
        "Journal-specific formatting",
        "Basic language editing (grammar, punctuation, syntax)",
        "Referencing in preferred style (e.g., Vancouver, AMA)",
        "1 revision cycle",
      ],
      optionalAddOns: [
        "Plagiarism check with Turnitin",
        "Journal selection support",
        "ORCID registration assistance",
      ],
      turnaround: "7–10 business days",
      theme: {
        badgeBg: "bg-[#fbeed3] text-[#d4af37]",
        cardBg: "bg-[#cbd5e1]/40",
        borderColor: "border-slate-300",
        textColor: "text-slate-800",
      },
    },
    {
      id: "advanced",
      badgeLetter: "A",
      badgeSrc: "/images/publication-support/peer-review-pre-submission/advanced.webp",
      badgeTitle: "Advanced",
      badgeSubtitle: "Most Popular",
      idealFor:
        "Practicing clinicians preparing full-length clinical manuscripts or original research articles for indexed journals.",
      includes: [
        "Manuscript writing (up to 3000 words)",
        "In-depth literature review and clinical data integration",
        "Advanced language editing and clarity enhancement",
        "Journal formatting and reference validation",
        "Plagiarism screening report",
        "Up to 2 revision cycles",
      ],
      optionalAddOns: [
        "Cover letter drafting",
        "Response-to-reviewer preparation",
        "CME or CPD credit eligibility advisory",
      ],
      turnaround: "10–12 business days",
      theme: {
        badgeBg: "bg-[#dcfce7] text-[#16a34a]",
        cardBg: "bg-[#e9d5ff]/40",
        borderColor: "border-purple-300",
        textColor: "text-purple-950",
      },
    },
    {
      id: "elite",
      badgeLetter: "E",
      badgeSrc: "/images/physician-writing-services/ELITE-LOGO.png",
      badgeTitle: "Elite",
      badgeSubtitle: "Comprehensive & Premium",
      idealFor:
        "Senior consultants, physician-researchers, or academicians targeting high-impact journals (Scopus, SCI, PubMed-indexed).",
      includes: [
        "Manuscript development (up to 5000 words)",
        "Full clinical data interpretation and integration",
        "Scientific and statistical content validation (if required)",
        "Premium editing (native-level clarity, tone, structure)",
        "Journal formatting, referencing, and ethical compliance",
        "Unlimited revisions for 30 days",
      ],
      optionalAddOns: [
        "Medical illustration or graphical abstract design",
        "Journal submission and correspondence",
        "Peer-review response preparation",
        "Pre-submission technical review",
      ],
      turnaround: "12–15 business days",
      theme: {
        badgeBg: "bg-[#fee2e2] text-[#dc2626]",
        cardBg: "bg-[#fef08a]/30",
        borderColor: "border-yellow-600/30",
        textColor: "text-amber-950",
      },
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-left text-gray-800">
      {/* --- Section 1: Therapeutic Areas Cover Grid --- */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold leading-tight tracking-tight mb-4">
          Our Therapeutic Area We Cover
        </h2>

        <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-10 max-w-6xl text-justify">
          Pubrica's physician-led medical writing team provides domain-specific
          expertise across a wide range of therapeutic areas, offering
          high-quality scientific and medical writing services tailored to each
          medical specialty. Our team of expert medical writers, including
          physicians and scientific professionals, specialize in therapeutic
          areas such as oncology, cardiology, neurology, infectious diseases,
          endocrinology, and more. Pubrica ensures each project is backed by
          accurate, evidence-based, and publication-ready scientific and medical
          writing.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-100">
          {specialties.map((specialty, index) => {
            const isNephrology = specialty.name === "Nephrology";
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 text-center border-b border-r border-gray-100 transition-colors ${
                  isNephrology ? "bg-[#f4faf8]" : "bg-white hover:bg-gray-50/50"
                }`}
              >
                <div className="relative w-16 h-16 mb-3.5">
                  <Image
                    src={specialty.iconSrc}
                    alt={specialty.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-[#0f172a] text-sm md:text-[15px] font-semibold tracking-wide">
                  {specialty.name}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Section 2: Compliance Guidelines Showcase Banner --- */}
      <section className="bg-[#f8f9fa] border-t border-gray-200/60 py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold leading-tight tracking-tight mb-4">
            Our Compliance and Guideline Standards
          </h2>

          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-12 max-w-6xl">
            At Pubrica, our physician writing service guarantees that any
            clinical manuscript,{" "}
            <Link href="/services/physician-writing-services/case-report" className="text-[#3b82f6] hover:underline">
              case report
            </Link>
            , or regulatory document we provide complies with international
            medical writing standards and the guidelines for a target journal or
            institution.
          </p>

          <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-y-8 lg:gap-y-0 text-center">
            {standards.map((standard, idx) => (
              <div
                key={idx}
                className="w-1/2 sm:w-1/3 lg:w-1/5 px-4 flex flex-col items-center justify-between border-l border-gray-300 first:border-l-0"
              >
                <div className="h-16 flex items-center justify-center mb-4 px-2">
                  <div className="relative w-14 h-14">
                    <Image
                      src={standard.logoSrc}
                      alt={standard.name}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                </div>
                <p className="text-[#083c4c] text-xs md:text-sm font-bold leading-snug tracking-wide max-w-[160px] mt-auto">
                  {standard.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Deep Green Satisfaction & Empowering Banner --- */}
      <section className="w-full bg-[#05261e] py-10 px-6 md:px-12 lg:px-24 border-t border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-white text-base md:text-lg lg:text-xl font-bold tracking-tight">
              Empowering Practicing Physicians, Busy Surgeons, and Clinical
              Researchers
            </h3>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed max-w-4xl font-light">
              An open-access publishing platform designed for healthcare
              professionals, including frontline clinicians, medical
              researchers, and those working in health, medical, and social care
              research—helping turn real-world clinical experience into
              impactful scientific publications.
            </p>
            <div className="pt-2">
              <GetFreeQuoteButton/>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Physician Writing Service Sample Work Block --- */}
      <section className="bg-[#f3faf7] py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-emerald-100/40 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-full md:w-[260px] aspect-[4/5] bg-gray-50 rounded border border-gray-100 overflow-hidden flex-shrink-0 shadow-sm">
            <Image
              src="/images/physician-writing-services/Physician-Writing-Service-Sample-Work.jpg"
              alt="Physician Writing Service Sample Work"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-5">
            <div>
              <h3 className="text-black text-lg md:text-xl font-bold tracking-tight mb-2">
                Physician Writing Service Sample Work
              </h3>
              <Link href="/insights/sample-work" className="w-full max-w-lg bg-black text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded hover:bg-zinc-800 transition-colors tracking-wide text-center inline-block">
                Discover More
              </Link>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-black text-base md:text-17px font-bold tracking-tight">
                Download the full Report Now
              </h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-justify font-normal max-w-xl">
                Explore our diverse portfolio of physician-focused writing
                services, including manuscripts, regulatory documents, slide
                decks, clinical summaries, CME content, and more—crafted by
                medical experts for accuracy, clarity, and publication success.
              </p>
              <Link href="/insights/sample-work" className="w-full max-w-lg bg-black text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded hover:bg-zinc-800 transition-colors tracking-wide text-center inline-block">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: NEW - Physician Writing Service Packages --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-black text-xl md:text-2xl lg:text-[26px] font-bold leading-tight tracking-tight mb-3">
          Physician Writing Service Packages
        </h2>
        <p className="text-gray-600 text-xs md:text-sm lg:text-[15px] leading-relaxed mb-12 max-w-5xl">
          Comprehensive service packages are designed to assist healthcare
          professionals in developing clinically accurate, ethically compliant,
          and publication-ready medical documents.
        </p>

        {/* 3-Column Tier Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col rounded-md border ${pkg.theme.borderColor} ${pkg.theme.cardBg} overflow-hidden shadow-sm`}
            >
              {/* Card Header Frame */}
              <div className="bg-white p-5 border-b border-inherit flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={pkg.badgeSrc}
                    alt={`${pkg.badgeTitle} package`}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">
                    {pkg.badgeTitle}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {pkg.badgeSubtitle}
                  </p>
                </div>
              </div>

              {/* Card Main Information Body */}
              <div className="p-6 flex-1 flex flex-col space-y-6 text-xs md:text-sm text-slate-800">
                {/* Ideal For Segment */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm mt-0.5">
                      ➔
                    </span>
                    <div>
                      <h5 className="font-extrabold text-black tracking-wide">
                        Ideal for:
                      </h5>
                      <p className="text-gray-700 leading-relaxed mt-1 text-justify">
                        {pkg.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Includes Segment */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm mt-0.5">
                      ➔
                    </span>
                    <div className="w-full">
                      <h5 className="font-extrabold text-black tracking-wide mb-2">
                        Includes:
                      </h5>
                      <ul className="space-y-2 text-gray-700 pl-1">
                        {pkg.includes.map((inc, i) => (
                          <li
                            key={i}
                            className="leading-relaxed text-left break-words"
                          >
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Optional Add-ons Segment */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm mt-0.5">
                      ➔
                    </span>
                    <div className="w-full">
                      <h5 className="font-extrabold text-black tracking-wide mb-2">
                        Optional Add-ons:
                      </h5>
                      <ul className="space-y-2 text-gray-700 pl-1">
                        {pkg.optionalAddOns.map((addon, i) => (
                          <li
                            key={i}
                            className="leading-relaxed text-left break-words"
                          >
                            {addon}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Turnaround Time Flag - Pushed to structural bottom */}
                <div className="mt-auto pt-4 border-t border-gray-300/40">
                  <div className="flex items-center gap-2.5">
                    <span className="text-black font-bold text-sm">➔</span>
                    <p className="text-slate-900 font-extrabold tracking-wide">
                      Turnaround:{" "}
                      <span className="font-normal text-gray-700">
                        {pkg.turnaround}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
