import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import ServiceBanner, { BannerProps } from "@/components/common/ServiceBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Specialty {
  name: string;
  iconSrc: string;
  url: string;
}

interface StandardItem {
  name: string;
  logoSrc: string;
  url: string;
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
  const serviceBannerData: BannerProps = {
    imageSrc:
      "/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp",
    imageAlt: "100% Satisfaction Guarantee",
    heading:
      "Empowering Practicing Physicians, Busy Surgeons, and Clinical Researchers",
    description:
      "An open-access publishing platform designed for healthcare professionals, including frontline clinicians, medical researchers, and those working in health, medical, and social care research—helping turn real-world clinical experience into impactful scientific publications.",
    showQuoteButton: true,
  };
  // Mapped list of 16 therapeutic areas explicitly matching the table rows
  const IMG = "/images/physician-writing-services";
  const specialties: Specialty[] = [
    { name: "Oncology", iconSrc: `${IMG}/Oncology-1-1.png`, url: "/subject-matter-experts/" },
    { name: "Cardiology", iconSrc: `${IMG}/Cardiology-1.png`, url: "/subject-matter-experts/cardiology/" },
    { name: "Neurology", iconSrc: `${IMG}/Neurology-1.png`, url: "/subject-matter-experts/neurology/" },
    { name: "Psychiatry", iconSrc: `${IMG}/Psychiatry-1.png`, url: "/subject-matter-experts/" },
    { name: "Pulmonology", iconSrc: `${IMG}/Pulmonology-1.png`, url: "/subject-matter-experts/" },
    { name: "Nephrology", iconSrc: `${IMG}/Nephrology-1.png`, url: "/subject-matter-experts/" },
    { name: "Psychology", iconSrc: `${IMG}/Psychology.png`, url: "/subject-matter-experts/" },
    { name: "Haematology", iconSrc: `${IMG}/Haematology-1.png`, url: "/subject-matter-experts/" },
    { name: "Gastroenterology", iconSrc: `${IMG}/Gastroenterology.png`, url: "/subject-matter-experts/" },
    { name: "Obstetrics & Gynaecology", iconSrc: `${IMG}/Obstetrics-Gynaecology-1.png`, url: "/subject-matter-experts/" },
    { name: "Paediatrics", iconSrc: `${IMG}/Paediatrics-1.png`, url: "/subject-matter-experts/" },
    { name: "Urology", iconSrc: `${IMG}/Urology-1.png`, url: "/subject-matter-experts/" },
    { name: "General Medicine", iconSrc: `${IMG}/General-Medicine-1-1.png`, url: "/subject-matter-experts/" },
    { name: "Rheumatology", iconSrc: `${IMG}/Rheumatology-1.png`, url: "/subject-matter-experts/" },
    { name: "Dermatology", iconSrc: `${IMG}/Dermatology.png`, url: "/subject-matter-experts/" },
    { name: "Orthopaedics", iconSrc: `${IMG}/Orthopaedics.png`, url: "/subject-matter-experts/" },
  ];

  const standards: StandardItem[] = [
    {
      name: "Good Pharmacy Practice",
      logoSrc: `${IMG}/GPP.png`,
      url: "https://ipapharma.org/wp-content/uploads/2019/02/gpp-manua-1.pdf",
    },
    {
      name: "Consolidated Standards of Reporting Trials",
      logoSrc: `${IMG}/Consolidated-Standards-of-Reporting-Trials.png`,
      url: "https://www.consort-spirit.org/",
    },
    {
      name: "International Council for Harmonisation",
      logoSrc: `${IMG}/International-Council-for-Harmonisation.png`,
      url: "https://www.ich.org/",
    },
    {
      name: "Food and Drug Administration",
      logoSrc: `${IMG}/FDA-.png`,
      url: "https://www.fda.gov/",
    },
    {
      name: "International Committee of Medical Journal Editors",
      logoSrc: "/images/publication-support/journal-selection/ICMJE.webp",
      url: "https://www.icmje.org/",
    },
  ];

  // Structured content for the Pricing Packages matching screenshots exactly
  const packages: PackageItem[] = [
    {
      icon: "/images/publication-support/poster-preparation/S.png",
      title: "Standard",
      subtitle: "Budget-Friendly Choice",
      idealFor:
        "Early-career physicians submitting short clinical communications, letters to editors, or case reports.",
      includes: [
        "Manuscript writing (up to 1500 words)",
        "Journal-specific formatting",
        "Basic language editing (grammar, punctuation, syntax)",
        "Referencing in preferred style (e.g., Vancouver, AMA)",
        "1 revision cycle",
      ],
      addOns: [
        "Plagiarism check with Turnitin",
        "Journal selection support",
        "ORCID registration assistance",
      ],
      turnaround: "7–10 business days",
      cardBgColor: "#cbd5e1",
      titleColor: "#d4af37",
    },
    {
      icon:
        "/images/publication-support/peer-review-pre-submission/advanced.webp",
      title: "Advanced",
      subtitle: "Most Popular",
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
      addOns: [
        "Cover letter drafting",
        "Response-to-reviewer preparation",
        "CME or CPD credit eligibility advisory",
      ],
      turnaround: "10–12 business days",
      cardBgColor: "#e9d5ff",
      titleColor: "#16a34a",
    },
    {
      icon: "/images/physician-writing-services/ELITE-LOGO.png",
      title: "Elite",
      subtitle: "Comprehensive & Premium",
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
      addOns: [
        "Medical illustration or graphical abstract design",
        "Journal submission and correspondence",
        "Peer-review response preparation",
        "Pre-submission technical review",
      ],
      turnaround: "12–15 business days",
      cardBgColor: "#fef08a",
      titleColor: "#dc2626",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-left text-gray-800">
      {/* --- Section 1: Therapeutic Areas Cover Grid --- */}
      <section className="py-6 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
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
          {specialties.map((specialty, index) => (
            <Link
              key={index}
              href={specialty.url}
              className="flex flex-col items-center justify-center p-6 text-center border-b border-r border-gray-100 transition-colors bg-white hover:bg-green-100 "
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
            </Link>
          ))}
        </div>
      </section>
      {/* --- Section 2: Compliance Guidelines Showcase Banner --- */}
      <section className="bg-[#f8f9fa] border-t border-gray-200/60 py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold leading-tight tracking-tight mb-4">
            Our Compliance and Guideline Standards
          </h2>

          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-12 max-w-6xl">
            At Pubrica, our physician writing service guarantees that any
            clinical manuscript,{" "}
            <Link href="/services/physician-writing-services/case-report" className="text-blue-600 no-underline hover:no-underline">
              case report
            </Link>
            , or regulatory document we provide complies with international
            medical writing standards and the guidelines for a target journal or
            institution.
          </p>

          <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-y-8 lg:gap-y-0 text-center">
            {standards.map((standard, idx) => (
              <a
                key={idx}
                href={standard.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-1/3 lg:w-1/5 px-4 flex flex-col items-center justify-between border-l border-gray-300 first:border-l-0 hover:opacity-80 transition-opacity"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Deep Green Satisfaction & Empowering Banner --- */}
      <ServiceBanner {...serviceBannerData} />

      {/* --- Section 4: Physician Writing Service Sample Work Block --- */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/physician-writing-services/Physician-Writing-Service-Sample-Work.jpg",
          alt: "Physician Writing Service Sample Work",
          width: 600,
          height: 750,
        }}
        sections={[
          {
            heading: "Physician Writing Service Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/assessing-evidence-based-practice-in-physical-therapy/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our diverse portfolio of physician-focused writing services, including manuscripts, regulatory documents, slide decks, clinical summaries, CME content, and more—crafted by medical experts for accuracy, clarity, and publication success.",
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

      {/* --- Section 5: NEW - Physician Writing Service Packages --- */}
      <CommonPackages
        title="Physician Writing Service Packages"
        description="Comprehensive service packages are designed to assist healthcare professionals in developing clinically accurate, ethically compliant, and publication-ready medical documents."
        packages={packages}
      />
      <GetFreeQuoteButton />
    </div>
  );
};
