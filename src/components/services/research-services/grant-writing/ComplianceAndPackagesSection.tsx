"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import CommonTestimonial from "@/components/common/CommonTestimonials";

// Image Paths
const GW_IMG = "/images/research-services/grant-writing";

// Testimonials Data
export const grantWritingTestimonials = [
  {
    image: `${GW_IMG}/Indian-council-of-medical-research.png`,
    quote:
      "With Pubrica's guidance, we successfully submitted our proposal to the Indian Council of Medical Research (ICMR). Their knowledge of the Indian funding landscape and medical writing standards ensured our grant stood out among hundreds of applicants.",
    name: "Dr. Nishant Reddy",
    designation: "Director",
    organization: "Biomedical Research Lab – India",
    flag: "/images/editing-and-translation/flag.png",
  },
  {
    image: `${GW_IMG}/horizon-grant-application-journal.png`,
    quote:
      "We collaborated with Pubrica on a complex Horizon Europe grant application. Their writers demonstrated a strong grasp of EU requirements and delivered a thoroughly compliant, reviewer-ready document.",
    name: "Dr. Elena Petrova",
    designation: "EU Research Coordinator",
    organization: "Germany",
    flag: "/images/editing-and-translation/germany-1-1.png",
  },
  {
    image: `${GW_IMG}/national-institute-of-health-journal.png`,
    quote:
      "Pubrica's grant writing support was instrumental in helping us secure funding through the NIH (National Institutes of Health). Their clarity in writing, adherence to US federal guidelines, and ability to present our research impact convincingly were outstanding.",
    name: "Dr. Aarti Menon",
    designation: "Principal Investigator",
    organization: "Clinical Research Institute – USA",
    flag: `${GW_IMG}/usa-1-1.png`,
  },
];

// Types
interface ComplianceItem {
  id: string;
  title: string;
  iconSrc: string;
  content: React.ReactNode;
}



export default function ComplianceAndPackagesSection() {
  // Accordion State
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  // Testimonials Carousel State
  const [current, setCurrent] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (id: string) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

  const maxSlide = mobile
    ? grantWritingTestimonials.length - 1
    : grantWritingTestimonials.length - 2;

  const next = () => {
    if (current >= maxSlide) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current === 0) {
      setCurrent(maxSlide);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  // 1. Compliance Data
  const complianceData: ComplianceItem[] = [
    {
      id: "funding",
      title: "Funding Agency Guidelines",
      iconSrc: `${GW_IMG}/Funding-Agency-Guidelines.png`,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <p>
            We follow the specific formats, templates, and submission protocols
            mandated by:
          </p>
          <ul className="space-y-2 list-none pl-1">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                <Link
                  href="https://www.nih.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-bold"
                >
                  NIH
                </Link>
                , NSF, DBT, DST,{" "}
                <Link
                  href="https://www.icmr.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-bold"
                >
                  ICMR
                </Link>
                ,{" "}
                <Link
                  href="https://www.birac.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-bold"
                >
                  BIRAC
                </Link>
                , CSIR
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                <Link
                  href="https://www.who.int/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-bold"
                >
                  WHO
                </Link>
                , UNDP, Gates Foundation, Horizon Europe
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                CSR compliance under Section 135 of the Indian Companies Act
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>SBIR/STTR, ERC, and other global funding frameworks</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "ethics",
      title: "Ethical and Scientific Integrity",
      iconSrc: `${GW_IMG}/Ethical-and-Scientific-Integrity.png`,
      content: (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Our writing complies with ethical standards in research proposal
          development, such as{" "}
          <Link
            href="https://www.icmje.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            ICMJE
          </Link>{" "}
          and{" "}
          <Link
            href="https://publicationethics.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            COPE
          </Link>{" "}
          guidelines.
        </p>
      ),
    },
    {
      id: "budget",
      title: "Budgetary and Financial Accuracy",
      iconSrc: `${GW_IMG}/Budgetary-and-Financial-Accuracy.png`,
      content: (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Adhere to Uniform Guidance (21 CFR 200) for U.S. federal grants and
          standard global costing principles.
        </p>
      ),
    },
  ];

  // 2. Packages Data
  const packages: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic",
      subtitle: "Grant Proposal Review & Editing",
      idealFor:
        "Clients who already have a draft proposal and need expert refinement.",
      includes: [
        "Structural and language editing",
        "Formatting as per funder guidelines",
        "Compliance check (NIH, EU, ICMR, etc.)",
        "Reviewer feedback integration",
      ],
      cardBgColor: "#dbe7e4",
      titleColor: "#0e3b38",
    },
    {
      icon:
        "/images/publication-support/responding-to-reviewers/standard-logo.png",
      title: "Standard",
      subtitle: "Grant Proposal Writing",
      idealFor:
        "Clients with research objectives and data ready for proposal development.",
      includes: [
        "Full proposal drafting",
        "Executive summary, aims, and methodology",
        "Budget justification and timeline",
        "Formatting and compliance assurance",
        "One round of revisions",
      ],
      cardBgColor: "#e2d8e8",
      titleColor: "#6b2d82",
    },
    {
      icon: "/images/editing-and-translation/pro.webp",
      title: "Premium",
      subtitle: "End-To-End Grant Support",
      idealFor:
        "First-time applicants or large funding programs needing comprehensive support from concept to submission.",
      includes: [
        "Research idea conceptualization",
        "Literature background and need assessment",
        "Full proposal writing + all annexures",
        "Budget planning, Gantt chart, logic model",
        "Submission guidance and revision support",
        "Post-submission consultation (if required)",
      ],
      cardBgColor: "#e8d8be",
      titleColor: "#805826",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      {/* ========================================================= */}
      {/* SECTION 1: COMPLIANCE AND GUIDELINE STANDARDS             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            At Pubrica, we adhere strictly to global and agency-specific
            compliance standards to ensure your grant proposals meet the highest
            standards of credibility, accuracy, and funding success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {complianceData.map((item) => {
            const isOpen = openCardId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleCard(item.id)}
                  className="w-full bg-[#e6f4f1] p-4 flex items-center justify-between gap-3 text-left hover:bg-[#d8ece8] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={35}
                        height={35}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-bold text-[#0e3b38] text-sm sm:text-base">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-slate-600 font-bold text-lg select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-slate-200 bg-white animate-fadeIn">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SAMPLE WORK BANNER                             */}
      {/* ========================================================= */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: `${GW_IMG}/Grant-Writing-Services-Sample-Work.png`,
          alt: "Hand holding fountain pen writing grant proposal",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading: "Grant Writing Services Sample Work",
            headingTag: "h3",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            headingTag: "h3",
            descriptionSegments: [
              {
                text: "Explore our grant writing sample work, meticulously crafted to align with funder-specific guidelines, compliance standards (e.g., NIH, Horizon Europe), and submission deadlines to enhance your chances of securing funding for academic, clinical, or nonprofit projects.",
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
      {/* SECTION 3: OUR PACKAGES SECTION                           */}
      {/* ========================================================= */}
      <section className="flex flex-col items-center mb-4">
        <CommonPackages
          title="Grant Writing Service – Our Packages"
          description={
            <>
              At Pubrica, we offer flexible and customizable{" "}
              <Link
                href="/academy/grant-writing/communicating-research-impact-grant-applications"
                className="text-blue-600"
              >
                grant writing
              </Link>{" "}
              packages tailored to meet the needs of academic researchers, healthcare
              professionals, nonprofits, and institutions seeking funding. Each package
              is designed to align with funder-specific guidelines, compliance
              requirements, and submission deadlines.
            </>
          }
          packages={packages}
        />

        {/* Negative top margin pulls the button closer to the cards above */}
        <div className="-mt-8 mb-4">
          <GetFreeQuoteButton />
        </div>
      </section>
      {/* ===============
      ========================================== */}
      {/* SECTION 4: TESTIMONIALS SLIDER                            */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b2c]">
          Testimonials
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-700 max-w-5xl leading-relaxed">
          Learn how Pubrica's{" "}
          <Link
            href="/academy/grant-writing/confidentiality-in-grant-writing-proposals/"
            className="text-blue-600"
          >
            grant writing service
          </Link>{" "}
          has empowered researchers and institutions to secure competitive
          funding by delivering well-structured, compelling proposals that meet
          agency standards and advance impactful research. Here is what our
          clients say:
        </p>

        <CommonTestimonial
          title=""
          description=""
          testimonials={grantWritingTestimonials}
        />
      </section>
    </div>
  );
}