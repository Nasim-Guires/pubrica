"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiBook,
  FiFileText,
  FiLayers,
  FiTv,
  FiEdit,
  FiSettings,
  FiCheckSquare,
  FiBookOpen,
  FiCrosshair,
  FiSearch,
  FiGrid,
  FiArrowRightCircle,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

// Sample Work
const sampleWorks = [
  {
    id: "dermatology",
    tabLabel: "Dermatology",
    imageSrc: "/images/samples/sample-dermatology.png",
    altText: "Scientific editing sample for Dermatology research manuscript",
  },
  {
    id: "neuroscience",
    tabLabel: "Neuroscience and Neurology",
    imageSrc: "/images/samples/sample-neuroscience.png",
    altText: "Scientific editing sample for Neuroscience research manuscript",
  },
];

// Top-Tier Journals Carousel
const journalCovers = [
  {
    id: "plos",
    title: "PLOS Biology",
    imageSrc: "/images/journals/plos-biology.jpg",
  },
  {
    id: "diabetes",
    title: "Diabetes Care",
    imageSrc: "/images/journals/diabetes-care.jpg",
  },
  {
    id: "healthcare",
    title: "Health Care Science",
    imageSrc: "/images/journals/healthcare-science.jpg",
  },
  { id: "science", title: "Science", imageSrc: "/images/journals/science.jpg" },
  {
    id: "acs",
    title: "ACS Chemical Biology",
    imageSrc: "/images/journals/acs-chem-bio.jpg",
  },
  { id: "nature", title: "Nature", imageSrc: "/images/journals/nature.jpg" },
  { id: "cell", title: "Cell", imageSrc: "/images/journals/cell.jpg" },
  { id: "bmj", title: "BMJ", imageSrc: "/images/journals/bmj.jpg" },
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
    icon: <FiBook className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "grants",
    title: "Grants/NIH, NSF, and private foundation grants/grant revisions",
    icon: <FiFileText className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "proposals",
    title: "Proposals",
    icon: <FiLayers className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "ppt-slides",
    title: "PowerPoint slides",
    icon: <FiTv className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "theses",
    title: "Theses",
    icon: <FiEdit className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "technical-docs",
    title: "Technical documents",
    icon: <FiSettings className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "abstracts",
    title: "Abstracts",
    icon: <FiCheckSquare className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "book-chapters",
    title: "Book chapters",
    icon: <FiBookOpen className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "medical-editing",
    title: "Medical editing",
    icon: <FiCrosshair className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "medical-proofreading",
    title: "Medical manuscript proofreading",
    icon: <FiSearch className="w-7 h-7 text-indigo-900" />,
  },
  {
    id: "conference-posters",
    title: "Conference posters",
    icon: <FiGrid className="w-7 h-7 text-indigo-900" />,
  },
];

// Packages
const packages = [
  {
    id: "standard",
    badgeLetter: "S",
    name: "Standard",
    bgColor: "bg-slate-200/80 border-slate-300",
    headerBadgeBg: "bg-amber-100 text-amber-700 border-amber-300",
    idealFor: "Early-stage manuscripts, pre-submission refinement.",
    includes: [
      "Grammar, punctuation, and spelling corrections",
      "Sentence restructuring for clarity and readability",
      "Basic adherence to journal formatting",
    ],
    turnaroundTime: "5–7 business days",
  },
  {
    id: "advanced",
    badgeLetter: "A",
    name: "Advanced",
    bgColor: "bg-purple-100/70 border-purple-200",
    headerBadgeBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
    idealFor: "Manuscripts requiring in-depth scientific review.",
    includes: [
      "All features of the Standard Package",
      "Critical review of methodology, results, and discussion clarity",
      "Compliance with journal-specific guidelines and formatting",
      "Reference formatting and consistency checks",
    ],
    turnaroundTime: "7–10 business days",
  },
  {
    id: "premium",
    badgeLetter: "P",
    name: "Premium/Publication-Ready",
    bgColor: "bg-amber-100/60 border-amber-200",
    headerBadgeBg: "bg-sky-100 text-sky-700 border-sky-300",
    idealFor: "High-impact journals and rigorous peer-review submissions.",
    includes: [
      "All features of the Advanced Package",
      "Comprehensive scientific content editing for logic and flow",
      "Technical accuracy verification",
      "Formatting for figures, tables, and references per journal requirements",
      "Response-to-reviewer support (optional add-on)",
    ],
    turnaroundTime: "10–14 business days",
  },
];

// Testimonials Data
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  field: string;
  country: string;
  countryCode: string;
  journalImage: string;
}

const testimonials: Testimonial[][] = [
  // Slide 1
  [
    {
      id: "1",
      quote:
        "Pubrica's scientific editing service exceeded my expectations. From compliance with journal standards to meticulous proofreading, every aspect was handled professionally.",
      author: "DR. MICHAEL TAN",
      field: "Neuroscience",
      country: "Singapore",
      countryCode: "sg",
      journalImage: "/images/testimonials/bmc-journal.jpg",
    },
    {
      id: "2",
      quote:
        "The editors improved clarity and flow of my paper. Their understanding of scientific nuances is exceptional. My paper was accepted in a top-tier journal within weeks.",
      author: "PROF. JAMES REYNOLDS",
      field: "Biochemistry",
      country: "USA",
      countryCode: "us",
      journalImage: "/images/testimonials/lancet-journal.jpg",
    },
  ],
  // Slide 2
  [
    {
      id: "3",
      quote:
        "The technical precision applied to our manuscript was impressive. References and figures aligned perfectly with our target publication's strict guidelines.",
      author: "DR. ELENA ROSTOVA",
      field: "Molecular Biology",
      country: "Germany",
      countryCode: "de",
      journalImage: "/images/testimonials/nature-journal.jpg",
    },
    {
      id: "4",
      quote:
        "Extremely thorough language and logic editing. Their support during the response-to-reviewers phase made a significant difference in final acceptance.",
      author: "DR. AHMED AL-MANSOORI",
      field: "Clinical Medicine",
      country: "UAE",
      countryCode: "ae",
      journalImage: "/images/testimonials/cell-journal.jpg",
    },
  ],
];

// FAQ Items Data
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: 1,
    question: "What is scientific editing for research manuscripts?",
    answer:
      "Scientific editing is a process that refines research manuscripts by enhancing clarity, structure, language, consistency, format, and overall presentation of research manuscripts to fit journal requirements.",
  },
  {
    id: 2,
    question:
      "What is the difference between scientific editing and proofreading?",
    answer:
      "Scientific editing involves improvements in structure, clarity, and flow of the research, as well as the quality of the content. On the other hand, proofreading involves the correction of grammatical errors and minor formatting issues.",
  },
  {
    id: 3,
    question:
      "How does language editing help increase journal acceptance chances?",
    answer:
      "Language editing improves clarity, readability, grammar, and overall flow of the text, making it easy for the reviewer to comprehend the research without any difficulties or misunderstandings.",
  },
  {
    id: 4,
    question:
      "What types of editing are required before submitting a research paper?",
    answer:
      "Before submission, it is necessary that the manuscript undergoes structural editing, language editing, formatting checks, reference correction, technical editing, and finally proofreading.",
  },
  {
    id: 5,
    question: "What is included in a scientific manuscript editing service?",
    answer:
      "A scientific editing service involves language refinement, structural refinement, grammatical correction, formatting, reference checking, clarity improvement, and optimization of quality for journal submission.",
  },
];

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

  // State 3: Testimonials Active Slide Index
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================== */}
      {/* SECTION 1: SAMPLE WORK SHOWCASE                            */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
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
                  className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-md transition-all duration-200 ${
                    isActive
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
      <section className="py-12 bg-white overflow-hidden border-t border-slate-100">
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] text-center mb-10 tracking-tight">
          What Types of Documents Do We Edit?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {documentTypes.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {doc.icon}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0c373b] transition-colors leading-snug">
                {doc.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 5: OUR PACKAGES                                   */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
        <div className="max-w-4xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] mb-3 tracking-tight">
            Scientific Editing Services – Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At Pubrica, we offer comprehensive scientific editing packages
            designed to enhance the clarity, accuracy, and impact of your
            manuscript. Whether you are preparing for submission to a
            high-impact journal or refining a thesis, our expert editors ensure
            your work meets international standards.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg border p-6 flex flex-col justify-between shadow-xs transition-shadow duration-300 hover:shadow-md ${pkg.bgColor}`}
            >
              <div>
                <div className="bg-white rounded-md p-3 mb-6 shadow-xs flex items-center space-x-3 border border-slate-200">
                  <div
                    className={`w-9 h-9 rounded-full font-extrabold flex items-center justify-center text-lg border ${pkg.headerBadgeBg}`}
                  >
                    {pkg.badgeLetter}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900">
                    {pkg.name}
                  </h3>
                </div>

                <div className="mb-6 flex items-start space-x-2">
                  <FiArrowRightCircle className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                    <strong className="font-bold">Ideal For:</strong>{" "}
                    {pkg.idealFor}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <FiArrowRightCircle className="w-5 h-5 text-slate-800 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      Includes:
                    </span>
                  </div>
                  <ul className="space-y-2.5 pl-7">
                    {pkg.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-700 leading-snug list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-300/60 flex items-start space-x-2">
                <FiArrowRightCircle className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-900">
                  <strong className="font-bold">Turnaround Time:</strong>{" "}
                  {pkg.turnaroundTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Free Quote Button */}
        <div className="w-full flex justify-center">
          <Link
            href="/get-quote"
            className="w-full sm:w-auto min-w-[320px] text-center bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 6: TESTIMONIALS                                    */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] mb-3 tracking-tight">
            Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            Learn how Pubrica's Scientific Editing Services have empowered
            researchers and authors to refine their manuscripts, enhance
            clarity, and meet journal-specific standards. Our expert editors
            help improve readability, ensure precision, and strengthen the
            impact of research, increasing the chances of publication in
            high-impact journals. Here is what our clients say:
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials[currentSlide].map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-300 rounded-lg p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Inner Gray Quote Box */}
              <div className="bg-slate-200/80 rounded-md p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="relative w-28 h-24 shrink-0 border border-slate-300 rounded bg-white overflow-hidden shadow-xs">
                  <Image
                    src={item.journalImage}
                    alt="Journal sample"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed text-center sm:text-left">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide">
                    — {item.author}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 italic">
                    {item.field}, {item.country}
                  </p>
                </div>

                {/* Country Flag Badge */}
                <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                  <img
                    src={`https://flagcdn.com/w40/${item.countryCode}.png`}
                    alt={item.country}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex justify-center items-center space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 transition-all duration-200 border border-[#0c373b] ${
                currentSlide === idx ? "bg-[#0c373b]" : "bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQ)               */}
      {/* ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0c373b] mb-6 tracking-tight">
          Frequently Asked Questions – Scientific Editing Services
        </h2>

        <div className="border border-slate-200 rounded-sm divide-y divide-slate-200 bg-white shadow-2xs">
          {faqList.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-900 pr-4 leading-snug">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="text-slate-700 shrink-0 font-bold text-base">
                    {isOpen ? (
                      <FiMinus className="w-4 h-4" />
                    ) : (
                      <FiPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

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
