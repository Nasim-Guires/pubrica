import React from "react";

interface Specialty {
  name: string;
  iconKey: string;
}

interface StandardItem {
  name: string;
  logoText?: string;
}

interface PackageFeatureBlock {
  title: string;
  items: string[];
}

interface PackageData {
  id: string;
  badgeLetter: string;
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
  const specialties: Specialty[] = [
    { name: "Oncology", iconKey: "oncology" },
    { name: "Cardiology", iconKey: "cardiology" },
    { name: "Neurology", iconKey: "neurology" },
    { name: "Psychiatry", iconKey: "psychiatry" },
    { name: "Pulmonology", iconKey: "pulmonology" },
    { name: "Nephrology", iconKey: "nephrology" },
    { name: "Psychology", iconKey: "psychology" },
    { name: "Haematology", iconKey: "haematology" },
    { name: "Gastroenterology", iconKey: "gastroenterology" },
    { name: "Obstetrics & Gynaecology", iconKey: "obgyn" },
    { name: "Paediatrics", iconKey: "paediatrics" },
    { name: "Urology", iconKey: "urology" },
    { name: "General Medicine", iconKey: "general" },
    { name: "Rheumatology", iconKey: "rheumatology" },
    { name: "Dermatology", iconKey: "dermatology" },
    { name: "Orthopaedics", iconKey: "ortho" },
  ];

  // Compliance standards shown along the bottom row showcase splitters
  const standards: StandardItem[] = [
    { name: "Good Pharmacy Practice" },
    {
      name: "Consolidated Standards of Reporting Trials",
      logoText: "SPIRIT CONSORT",
    },
    { name: "International Council for Harmonisation" },
    { name: "Food and Drug Administration", logoText: "FDA" },
    {
      name: "International Committee of Medical Journal Editors",
      logoText: "ICMJE",
    },
  ];

  // Structured content for the Pricing Packages matching screenshots exactly
  const servicePackages: PackageData[] = [
    {
      id: "standard",
      badgeLetter: "S",
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
                <div className="w-16 h-16 rounded-full bg-[#112d35] flex items-center justify-center mb-3.5 shadow-sm text-white font-bold text-lg">
                  {specialty.name.charAt(0)}
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
            <a href="#" className="text-[#3b82f6] hover:underline">
              case report
            </a>
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
                  {standard.logoText ? (
                    <span className="text-[#1e40af] font-mono text-base md:text-lg font-extrabold tracking-tight">
                      {standard.logoText}
                    </span>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 font-mono text-xs">
                      LOGO
                    </div>
                  )}
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
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center relative select-none">
            <div className="w-full h-full rounded-full border-4 border-dashed border-[#5bb3e5] animate-[spin_120s_linear_infinite] absolute inset-0" />
            <div className="w-[88%] h-[88%] bg-[#4fa3d4] rounded-full flex flex-col items-center justify-center text-white p-2 text-center shadow-inner border border-sky-300">
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-90 leading-none mb-1">
                Satisfaction
              </span>
              <span className="text-xl md:text-2xl font-black tracking-tighter leading-none my-0.5">
                100%
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-90 leading-none mt-1">
                Guarantee
              </span>
            </div>
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
              <button className="bg-[#a80000] text-white text-xs md:text-sm font-bold tracking-wide px-7 py-3 rounded-md hover:bg-[#880000] transition-colors shadow-md">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Physician Writing Service Sample Work Block --- */}
      <section className="bg-[#f3faf7] py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-emerald-100/40 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-[260px] aspect-[4/5] bg-gray-50 rounded border border-gray-100 overflow-hidden flex-shrink-0 shadow-sm relative">
            <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply z-10" />
            <div className="w-full h-full bg-emerald-900/10 flex items-center justify-center text-emerald-800 text-xs font-mono">
              [Doctor Sample Clipboard Asset]
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-5">
            <div>
              <h3 className="text-black text-lg md:text-xl font-bold tracking-tight mb-2">
                Physician Writing Service Sample Work
              </h3>
              <button className="w-full max-w-lg bg-black text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded hover:bg-zinc-800 transition-colors tracking-wide text-center">
                Discover More
              </button>
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
              <button className="w-full max-w-lg bg-black text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded hover:bg-zinc-800 transition-colors tracking-wide text-center">
                Discover More
              </button>
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
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-sm ${pkg.theme.badgeBg}`}
                >
                  {pkg.badgeLetter}
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
