"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiArrowRightCircle,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import CommonFAQ from "@/components/common/FAQ";

const IMG = "/images/editing-and-translation/scientific-editing";

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

// Sample Work
const sampleWorks = [
  {
    id: "dermatology",
    tabLabel: "Dermatology",
    imageSrc: `${IMG}/Editing-and-Translation-Services-sample-work-2.jpg`,
    altText: "Scientific editing sample for Dermatology research manuscript",
  },
  {
    id: "neuroscience",
    tabLabel: "Neuroscience and Neurology",
    imageSrc: `${IMG}/Editing-and-Translation-Services-sample-work-1-.jpg`,
    altText: "Scientific editing sample for Neuroscience research manuscript",
  },
];

// Top-Tier Journals Carousel
const journalCovers = [
  { id: "nature", title: "Nature", imageSrc: `${IMG}/1.jpg` },
  { id: "cell", title: "Cell", imageSrc: `${IMG}/2.jpg` },
  { id: "bmj", title: "BMJ", imageSrc: `${IMG}/Picture3.jpg` },
  {
    id: "protein-science",
    title: "Protein Science",
    imageSrc: `${IMG}/Picture4.jpg`,
  },
  {
    id: "translational-medicine",
    title: "Translational Medicine",
    imageSrc: `${IMG}/Picture5.jpg`,
  },
  {
    id: "biomaterials-science",
    title: "Biomaterials Science",
    imageSrc: `${IMG}/Picture6.jpg`,
  },
  { id: "nejm", title: "NEJM", imageSrc: `${IMG}/Picture7.jpg` },
  { id: "science", title: "Science", imageSrc: `${IMG}/Picture8.jpg` },
  {
    id: "nature-chemical-biology",
    title: "Nature Chemical Biology",
    imageSrc: `${IMG}/Picture9.jpg`,
  },
  {
    id: "acs-chemical-biology",
    title: "ACS Chemical Biology",
    imageSrc: `${IMG}/Picture10.jpg`,
  },
  {
    id: "acs-catalysis",
    title: "ACS Catalysis",
    imageSrc: `${IMG}/Picture11.jpg`,
  },
  {
    id: "healthcare-science",
    title: "Health Care Science",
    imageSrc: `${IMG}/Picture12.jpg`,
  },
];

// Compliance Accordions
const standardsData = [
  {
    id: "ethical",
    title: "Ethical Standards",
    content: [
      {
        boldText: "COPE (Committee on Publication Ethics):",
        description:
          "We follow COPE guidelines to maintain transparency, originality, and ethical authorship practices.",
      },
      {
        boldText: "ICMJE (International Committee of Medical Journal Editors):",
        description:
          "Adherence to authorship and conflict-of-interest policies for biomedical and clinical research manuscripts.",
      },
      {
        boldText: "GPP (Good Publication Practice):",
        description:
          "Ensuring integrity in reporting and avoiding bias in industry-sponsored research.",
      },
    ],
  },
  {
    id: "editorial",
    title: "Editorial & Formatting Standards",
    content: [
      {
        boldText: "Journal-Specific Requirements:",
        description:
          "Manuscripts are tailored to the target journal's scope, instructions for authors, and formatting styles.",
      },
      {
        boldText: "Language & Style:",
        description:
          "Edited to meet AMA, APA, MLA, or Vancouver referencing guidelines as required.",
      },
      {
        boldText: "Clarity & Precision:",
        description:
          "Focused on improving readability, logical flow, and scientific accuracy without altering the author's intended meaning.",
      },
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory & Quality Standards",
    content: [
      {
        boldText: "ICMJE & CONSORT:",
        description:
          "Compliance with reporting standards for clinical trials and systematic reviews.",
      },
      {
        boldText: "PRISMA, STROBE, ARRIVE:",
        description:
          "Adherence to specialized guidelines for review articles, observational studies, and animal research.",
      },
      {
        boldText: "Data Integrity:",
        description:
          "All edits respect the accuracy of data, research outcomes, and authorial ownership.",
      },
    ],
  },
];

// Documents We Edit
const documentTypes = [
  {
    id: "journal-manuscripts",
    title: "Journal manuscripts",
    iconSrc: `${IMG}/Journal-manuscripts.png`,
  },
  {
    id: "grants",
    title: "Grants/NIH, NSF, and private foundation grants/grant revisions",
    iconSrc: `${IMG}/GrantsNIH-NSF-and-private-foundation-grantsgrant-revisions.png`,
  },
  {
    id: "proposals",
    title: "Proposals",
    iconSrc: `${IMG}/Proposals.png`,
  },
  {
    id: "ppt-slides",
    title: "PowerPoint slides",
    iconSrc: `${IMG}/PowerPoint-slides.png`,
  },
  {
    id: "theses",
    title: "Theses",
    iconSrc: `${IMG}/Theses.png`,
  },
  {
    id: "technical-docs",
    title: "Technical documents",
    iconSrc: `${IMG}/Technical-documents.png`,
  },
  {
    id: "abstracts",
    title: "Abstracts",
    iconSrc: `${IMG}/Abstracts.png`,
  },
  {
    id: "book-chapters",
    title: "Book chapters",
    iconSrc: `${IMG}/Book-chapters.png`,
  },
  {
    id: "medical-editing",
    title: "Medical editing",
    iconSrc: `${IMG}/Medical-editing.png`,
  },
  {
    id: "medical-proofreading",
    title: "Medical manuscript proofreading",
    iconSrc: `${IMG}/Medical-manuscript-proofreading.png`,
  },
  {
    id: "conference-posters",
    title: "Conference posters",
    iconSrc: `${IMG}/Conference-posters.png`,
  },
];

// Packages
const packages: PackageItem[] = [
  {
    icon:
      "/images/publication-support/responding-to-reviewers/standard-logo.png",
    title: "Standard",
    idealFor: "Early-stage manuscripts, pre-submission refinement.",
    includes: [
      "Grammar, punctuation, and spelling corrections",
      "Sentence restructuring for clarity and readability",
      "Basic adherence to journal formatting",
    ],
    turnaround: "5–7 business days",
    cardBgColor: "#e2e8f0",
    titleColor: "#b45309",
  },
  {
    icon: "/images/publication-support/journal-selection/advanced.webp",
    title: "Advanced",
    idealFor: "Manuscripts requiring in-depth scientific review.",
    includes: [
      "All features of the Standard Package",
      "Critical review of methodology, results, and discussion clarity",
      "Compliance with journal-specific guidelines and formatting",
      "Reference formatting and consistency checks",
    ],
    turnaround: "7–10 business days",
    cardBgColor: "#f3e8ff",
    titleColor: "#047857",
  },
  {
    icon: "/images/editing-and-translation/pro.webp",
    title: "Premium/Publication-Ready",
    idealFor: "High-impact journals and rigorous peer-review submissions.",
    includes: [
      "All features of the Advanced Package",
      "Comprehensive scientific content editing for logic and flow",
      "Technical accuracy verification",
      "Formatting for figures, tables, and references per journal requirements",
      "Response-to-reviewer support (optional add-on)",
    ],
    turnaround: "10–14 business days",
    cardBgColor: "#fef3c7",
    titleColor: "#0369a1",
  },
];

// Testimonials Data
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  field: string;
  country: string;
  journalImage: string;
  journalAlt: string;
  flagSrc: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Pubrica's scientific editing team transformed my manuscript. Their attention to detail and adherence to journal guidelines made the submission process seamless. I highly recommend their services to anyone aiming for high-impact publications.",
    author: "DR. PRIYA MENON",
    role: "Oncology Researcher",
    image: `${IMG}/testimonials-2.png`,
  },
  {
    id: 2,
    quote:
      "Pubrica's scientific editing service exceeded my expectations. From compliance with journal standards to meticulous proofreading, every aspect was handled professionally.",
    author: "DR. MICHAEL TAN",
    role: "Neuroscience",
    image: `${IMG}/testimonials-1.png`,
  },
  {
    id: 3,
    quote:
      "The editors improved clarity and flow of my paper. Their understanding of scientific nuances is exceptional. My paper was accepted in a top-tier journal within weeks.",
    author: "PROF. JAMES REYNOLDS",
    role: "Biochemistry",
    image: `${IMG}/testimonials-3.png`,
  },
];

// FAQ Items Data


const faqs = [
  {
    question: "What is scientific editing for research manuscripts?",
    answer:
      "Scientific editing is a process that refines research manuscripts by enhancing clarity, structure, language, consistency, format, and overall presentation of research manuscripts to fit journal requirements.",
  },
  {
    question:
      "What is the difference between scientific editing and proofreading?",
    answer:
      "Scientific editing involves improvements in structure, clarity, and flow of the research, as well as the quality of the content. On the other hand, proofreading involves the correction of grammatical errors and minor formatting issues.",
  },
  {
    question:
      "How does language editing help increase journal acceptance chances?",
    answer:
      "Language editing improves clarity, readability, grammar, and overall flow of the text, making it easy for the reviewer to comprehend the research without any difficulties or misunderstandings.",
  },
  {
    question:
      "What types of editing are required before submitting a research paper?",
    answer:
      "Before submission, it is necessary that the manuscript undergoes structural editing, language editing, formatting checks, reference correction, technical editing, and finally proofreading.",
  },
  {
    question: "What is included in a scientific manuscript editing service?",
    answer:
      "A scientific editing service involves language refinement, structural refinement, grammatical correction, formatting, reference checking, clarity improvement, and optimization of quality for journal submission.",
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
// ==========================================
// 2. MAIN COMPONENT DEFINITION
// ==========================================

export default function ScientificPackageDetails() {
  // State 1: Active Sample Work Tab
  const [activeTab, setActiveTab] = useState<string>("dermatology");

  // State 2: Accordions (Compliance Standards)
  const [openAccordions, setOpenAccordions] = useState<string[]>([
    "ethical",
    "editorial",
    "regulatory",
  ]);

  // State 3: Testimonials carousel index
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // State 4: FAQ Accordion Active Item ID (null = none open, number = open ID)
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const activeSample =
    sampleWorks.find((s) => s.id === activeTab) || sampleWorks[0];

  // const mobileItem = testimonials[activeIndex];
  // const desktopItems = [
  //   testimonials[activeIndex],
  //   testimonials[(activeIndex + 1) % testimonials.length],
  // ];

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================== */}
      {/* SECTION 1: SAMPLE WORK SHOWCASE                            */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] tracking-tight mb-3">
            Scientific Editing Services Sample Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pubrica's Scientific Editing service ensures impeccable manuscripts
            by refining clarity, grammar, and structure while preserving
            scientific rigor. Trust our experienced editors to elevate your
            research with precise language and adherence to publication
            standards.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center border-b border-slate-200 mb-6">
          <div className="inline-flex space-x-2">
            {sampleWorks.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-md transition-all duration-200 ${isActive
                    ? "bg-indigo-100/70 text-indigo-900 border-b-2 border-indigo-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sample Image Card */}
        <div className="border border-dashed border-indigo-200 rounded-lg p-2 sm:p-4 bg-slate-50/50 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-md bg-white border border-slate-200 shadow-inner">
            <Image
              src={activeSample.imageSrc}
              alt={activeSample.altText}
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="text-center mt-3">
            <p className="text-[11px] text-slate-400">
              Copyright © 2026 pubrica. No part of this document may be
              published without permission of the author.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 2: TOP-TIER JOURNALS (INFINITE CAROUSEL)           */}
      {/* ========================================================== */}
      <section className="py-6 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c373b] mb-2 tracking-tight">
            Pubrica Have Been Published in Top-Tier Journals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            Publishing your manuscripts in peer-reviewed journals such as PLOS,
            Wiley, Elsevier, etc., may be a daunting task; however, with the
            help of Pubrica's scientific editing services, you not only improve
            the quality of your work but also have a higher chance of publishing
            your manuscript.
          </p>
        </div>

        {/* Auto Marquee Carousel */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex space-x-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...journalCovers, ...journalCovers, ...journalCovers].map(
              (journal, idx) => (
                <div
                  key={`${journal.id}-${idx}`}
                  className="flex-none w-40 sm:w-48 h-56 sm:h-64 relative rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
                >
                  <Image
                    src={journal.imageSrc}
                    alt={journal.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 3: COMPLIANCE & GUIDELINE STANDARDS               */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 border-t border-slate-100">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c373b] mb-3 tracking-tight">
            Our Compliance and Guideline Standards for Scientific Editing
            Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            At Pubrica, we uphold the highest ethical, editorial, and regulatory
            standards to ensure your manuscript is accurate, credible, and ready
            for publication in high-impact journals. Our scientific editing
            services comply with globally recognized guidelines and best
            practices, ensuring both quality and integrity in research
            communication.
          </p>
        </div>

        <div className="space-y-4">
          {standardsData.map((item) => {
            const isOpen = openAccordions.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-sm overflow-hidden border border-[#0a2e32] shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full bg-[#0c373b] hover:bg-[#09292c] text-white px-5 py-3.5 flex items-center justify-between transition-colors duration-200 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-base sm:text-lg w-4">
                      {isOpen ? "–" : "+"}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </button>

                {isOpen && (
                  <div className="bg-white p-5 sm:p-6 border-t border-slate-100 animate-fadeIn">
                    <ul className="space-y-3">
                      {item.content.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-slate-700 leading-relaxed"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 mr-3 shrink-0" />
                          <span>
                            <strong className="font-bold text-slate-900 mr-1.5">
                              {point.boldText}
                            </strong>
                            {point.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 4: WHAT TYPES OF DOCUMENTS DO WE EDIT?             */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 border-t border-slate-100 cursor-default">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] text-center mb-10 tracking-tight cursor-default">
          What Types of Documents Do We Edit?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 cursor-default">
          {documentTypes.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center select-none cursor-default hover:cursor-default"
            >
              <div className="mb-4 pointer-events-none">
                <Image
                  src={doc.iconSrc}
                  alt={doc.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug cursor-default">
                {doc.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ========================================================== */}
      {/* SECTION 5: OUR PACKAGES                                   */}
      {/* ========================================================== */}
      <CommonPackages
        title="Scientific Editing Services – Our Packages"
        description="At Pubrica, we offer comprehensive scientific editing packages designed to enhance the clarity, accuracy, and impact of your manuscript. Whether you are preparing for submission to a high-impact journal or refining a thesis, our expert editors ensure your work meets international standards."
        packages={packages}
      />

      {/* ========================================================== */}
      {/* SECTION 6: TESTIMONIALS                                    */}
      {/* ========================================================== */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] mb-3 tracking-tight">
          Testimonials
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
          Learn how Pubrica&apos;s Scientific Editing Services have empowered
          researchers and authors to refine their manuscripts, enhance clarity, and
          meet journal-specific standards. Our expert editors help improve
          readability, ensure precision, and strengthen the impact of research,
          increasing the chances of publication in high-impact journals. Here is
          what our clients say:
        </p>
      </div>

      <MovingTestimonials
        data={testimonialsData}
        autoSlideInterval={5000}
      />

      {/* ========================================================== */}
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQ)               */}
      {/* ========================================================== */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      {/* Tailwind Infinite Marquee & Animation CSS Rules */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white border border-slate-300 rounded-lg p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="bg-slate-200/80 rounded-md p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <div className="relative w-28 h-24 shrink-0 border border-slate-300 rounded bg-white overflow-hidden shadow-xs">
          <Image
            src={item.journalImage}
            alt={item.journalAlt}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed text-center sm:text-left">
          &quot;{item.quote}&quot;
        </p>
      </div>

      <div className="flex items-center justify-between px-1">
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide">
            — {item.author}
          </h4>
          <p className="text-[11px] sm:text-xs text-slate-500 italic">
            {item.field}, {item.country}
          </p>
        </div>

        <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 shadow-xs flex items-center justify-center shrink-0 relative">
          <Image
            src={item.flagSrc}
            alt={item.country}
            width={24}
            height={24}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
