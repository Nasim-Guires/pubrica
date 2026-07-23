"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";

interface AccordionItem {
  id: string;
  title: string;
  bullets: React.ReactNode[];
}

const leftServices: AccordionItem[] = [
  {
    id: "dev-editing",
    title: "Developmental Editing",
    bullets: [
      "Focuses on the structure and content of a document, helping authors develop their manuscript from initial concept to complete draft.",
      "This type of editing addresses big-picture aspects such as organization, coherence, research argument strength, and overall narrative flow.",
    ],
  },
  {
    id: "line-editing",
    title: "Line Editing",
    bullets: [
      "Concentrates on sentence- and paragraph-level clarity, enhancing tone, readability, and logical flow.",
      "It involves eliminating jargon, refining word choice, and smoothing language usage without a complete rewrite.",
    ],
  },
  {
    id: "copyediting",
    title: "Copyediting",
    bullets: [
      "Ensures correctness, consistency, and accuracy in grammar, vocabulary, punctuation, and syntax.",
      "Copyediting also involves checking for style guide compliance (APA, AMA, Chicago, Vancouver, etc.) and maintaining uniform terminology.",
    ],
  },
  {
    id: "proofreading",
    title: "Proofreading",
    bullets: [
      "The final review stage focuses on catching surface errors such as misspellings, typographical mistakes, and basic grammar issues.",
      "Proofreading is the last step before submission or publication.",
    ],
  },
  {
    id: "content-editing",
    title: "Content Editing",
    bullets: [
      "Examines the accuracy, consistency, and relevance of content, ensuring the document fulfills its purpose.",
      "May include fact-checking, refining arguments, and restructuring for better readability and impact.",
    ],
  },
  {
    id: "structural-editing",
    title: "Structural Editing",
    bullets: [
      "Assesses and reshapes the document structure, ensuring that ideas are logically organized and presented coherently.",
      "May involve reordering chapters, sections, or arguments for maximum impact.",
    ],
  },
  {
    id: "substantive-editing",
    title: "Substantive Editing",
    bullets: [
      "A deep editing process involving extensive revisions, including rewriting, reordering, and suggestions for additional content.",
      "It ensures the manuscript meets journal expectations and significantly enhances readability.",
    ],
  },
];

const rightServices: AccordionItem[] = [
  {
    id: "technical-editing",
    title: "Technical Editing",
    bullets: [
      "Reviews documents for technical accuracy, completeness, and adherence to industry or scientific standards.",
      "Ensures terminology, data, and references meet field-specific requirements.",
    ],
  },
  {
    id: "manuscript-editing",
    title: "Manuscript Editing",
    bullets: [
      "Tailored for academic authors submitting to journals or book publishers, focusing on both language use and publisher guidelines.",
      "Helps improve acceptance chances in high-impact journals.",
    ],
  },
  {
    id: "formatting-style",
    title: "Formatting & Style Editing",
    bullets: [
      <>
        Ensures journal-specific{" "}
        <Link
          href="/services/publication-support/formatting"
          className="text-cyan-700 hover:underline"
        >
          formatting
        </Link>{" "}
        (references, tables, figures, word limits) and style guide compliance
        (APA, AMA, Vancouver, MLA, Chicago).
      </>,
    ],
  },
  {
    id: "reviewer-response",
    title: "Reviewer Response Editing",
    bullets: [
      "Helps authors refine and polish responses to peer reviewer comments.",
      "Improves clarity, professionalism, and alignment with journal requirements.",
    ],
  },
  {
    id: "plagiarism-ethical",
    title: "Plagiarism Check & Ethical Editing",
    bullets: [
      <>
        Provides{" "}
        <Link
          href="/services/publication-support/plagiarism-check"
          className="text-cyan-700 hover:underline"
        >
          plagiarism
        </Link>{" "}
        screening and ensures manuscripts meet ethical publishing standards by
        improving originality, paraphrasing, and citation accuracy.
      </>,
    ],
  },
  {
    id: "language-polishing",
    title: "Language Polishing (ESL Support)",
    bullets: [
      "Specialized service for non-native English authors, improving clarity, grammar, and flow while retaining author intent.",
    ],
  },
];

export default function TypesOfEditing() {
  // Allow toggling open state for left and right columns independently
  const [openLeft, setOpenLeft] = useState<string | null>("dev-editing");
  const [openRight, setOpenRight] = useState<string | null>(
    "technical-editing",
  );

  const toggleLeft = (id: string) => {
    setOpenLeft((prev) => (prev === id ? null : id));
  };

  const toggleRight = (id: string) => {
    setOpenRight((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] tracking-tight mb-4">
          Types of Scientific Editing We Offer
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          At Pubrica, our{" "}
          <Link
            href="/services/editing-and-translation/scientific-editing"
            className="text-cyan-700 hover:underline font-medium"
          >
            science editing services for scientists
          </Link>{" "}
          are designed to enhance the clarity, accuracy, and overall quality of
          your research manuscripts. We offer a range of{" "}
          <Link
            href="/services/editing-and-translation/scientific-editing"
            className="text-cyan-700 hover:underline font-medium"
          >
            science editing services for academics
          </Link>{" "}
          to cater to the specific needs of authors, ensuring that their
          research communicates effectively to the target audience.
        </p>
      </div>

      {/* Main Grid: Left Column | Center Image | Right Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column Services */}
        <div className="lg:col-span-4 space-y-3">
          {leftServices.map((item) => {
            const isOpen = openLeft === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-slate-300/80 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleLeft(item.id)}
                  className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                      isOpen
                        ? "text-[#0c373b]"
                        : "text-slate-800 group-hover:text-[#0c373b]"
                    }`}
                  >
                    <span className="mr-2 text-slate-500">
                      {isOpen ? "–" : "+"}
                    </span>
                    {item.title}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-4 pt-1 pl-4 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                    <ul className="list-disc pl-4 space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Center Image */}
        <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
          <div className="relative w-full max-w-[340px] h-[420px] rounded-lg overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/scientific-editing/researcher-laptop.jpg"
              alt="Researcher working on scientific editing laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column Services */}
        <div className="lg:col-span-4 space-y-3">
          {rightServices.map((item) => {
            const isOpen = openRight === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-slate-300/80 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleRight(item.id)}
                  className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                      isOpen
                        ? "text-[#0c373b]"
                        : "text-slate-800 group-hover:text-[#0c373b]"
                    }`}
                  >
                    <span className="mr-2 text-slate-500">
                      {isOpen ? "–" : "+"}
                    </span>
                    {item.title}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-4 pt-1 pl-4 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                    <ul className="list-disc pl-4 space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
