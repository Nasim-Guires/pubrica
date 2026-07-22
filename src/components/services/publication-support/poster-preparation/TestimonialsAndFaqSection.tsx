"use client";

import React, { useState } from "react";
import Image from "next/image";

// ----------------------------------------------------------------------
// DATA TYPES & CONSTANTS
// ----------------------------------------------------------------------
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journal: string;
  journalCoverText: string;
  journalTag: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "The experts at Pubrica designed an impactful poster that showcased my neuroscience findings perfectly. Their attention to detail and formatting expertise made the conference presentation seamless. This greatly supported my recent publication in Frontiers in Neuroscience (Web of Science-indexed).",
    author: "DR. RAJESH K.,",
    role: "Neuroscience Scholar",
    journal: "Frontiers in Neuroscience",
    journalCoverText: "frontiers IN NEUROSCIENCE",
    journalTag: "Web of Science-indexed",
  },
  {
    id: 2,
    quote:
      "The team at Pubrica expertly formatted my pharmaceutical sciences research into a conference-ready poster that met strict guidelines. Their support allowed me to focus on presenting while ensuring professional quality. This complemented my work published in the European Journal of Pharmaceutical Sciences (Scopus-indexed).",
    author: "DR. SURESH N.,",
    role: "Pharmaceutical Scientist",
    journal: "European Journal of Pharmaceutical Sciences",
    journalCoverText: "European Journal of PHARMACEUTICAL SCIENCES",
    journalTag: "Scopus-indexed",
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    id: 1,
    question: "1. How to design a scientific poster for a conference?",
    answer:
      "A scientific poster should be designed with an appropriate title, sections such as an introduction, methods, results, conclusion, appropriate visuals, clear font styles, and minimal text to present scientific research at conferences.",
  },
  {
    id: 2,
    question: "2. What should be included in a research poster presentation?",
    answer:
      "Key elements include the title, author affiliations, abstract/introduction, methodology, key findings with high-resolution figures or graphs, summary conclusions, and references or acknowledgments.",
  },
  {
    id: 3,
    question: "3. What is the best format for an academic conference poster?",
    answer:
      "Most conferences prefer PDF format for digital submission or printing. Standard dimensions are usually 36x48 inches (landscape or portrait) or A0 size, depending on guidelines.",
  },
  {
    id: 4,
    question: "4. How to create an effective research poster layout?",
    answer:
      "Use a 3-column or 4-column layout with a natural left-to-right flow, generous whitespace, high-contrast headings, and short bullet points rather than dense walls of text.",
  },
  {
    id: 5,
    question: "5. How do I convert my research paper into a conference poster?",
    answer:
      "Condense your paper text by up to 60-70%, focus on key data visualizations, emphasize your conclusions, and let domain experts format it for visual clarity.",
  },
  {
    id: 6,
    question: "6. How can I make my scientific poster visually appealing?",
    answer:
      "Use professional color palettes, clean vector icons, high-resolution charts, clear font hierarchy, and structured container blocks to guide viewer attention.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: 7,
    question: "7. Which tools can be used to design a scientific poster?",
    answer:
      "Scientific posters can be designed using computer programs such as Microsoft PowerPoint, Canva, Adobe Illustrator, CorelDRAW, and LaTeX editors such as Overleaf for professional design and formatting.",
  },
  {
    id: 8,
    question:
      "8. What font size and formatting should be used in a research poster?",
    answer:
      "Headings should be 40–70pt for visibility from a distance, body text between 22–28pt, and line spacing set to 1.2–1.5 for effortless readability.",
  },
  {
    id: 9,
    question:
      "9. What are the key elements of a professional scientific poster?",
    answer:
      "Structured logical sections, concise text, vector charts, institutional/sponsor logos, clear contact information, and compliant layout sizing.",
  },
  {
    id: 10,
    question:
      "10. Can professional poster design services improve conference presentation quality?",
    answer:
      "Yes, expert designers ensure adherence to formatting guidelines, improve scientific visual communication, and allow you to focus entirely on your presentation.",
  },
  {
    id: 11,
    question: "11. What are the standard dimensions for conference posters?",
    answer:
      'Common standard dimensions include 48" x 36" (121.9 x 91.4 cm), 36" x 24", and standard international A0 size (84.1 x 118.9 cm).',
  },
  {
    id: 12,
    question:
      "12. What are the common mistakes to avoid in research poster design?",
    answer:
      "Avoid overcrowded text, low-resolution pixelated images, inconsistent font choices, poor color contrast, and missing conference formatting guidelines.",
  },
];

// ----------------------------------------------------------------------
// MAIN COMBINED COMPONENT
// ----------------------------------------------------------------------
export default function TestimonialsAndFaqSection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // 1 and 7 open by default matching design
  const [openRightFaqId, setOpenRightFaqId] = useState<number | null>(7);

  const toggleLeftFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const toggleRightFaq = (id: number) => {
    setOpenRightFaqId(openRightFaqId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">
        {/* ============================================================ */}
        {/* SECTION 1: TESTIMONIALS                                      */}
        {/* ============================================================ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-3">
            Testimonials
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-5xl leading-relaxed mb-8">
            Learn how Pubrica&apos;s poster preparation service has enabled
            researchers to develop meaningful presentations to communicate their
            work at conferences and increase their visibility as professional
            researchers. Here is what our clients say:
          </p>

          {/* Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#104e43] text-white p-6 rounded-sm shadow-md flex flex-col justify-between"
              >
                <div className="grid grid-cols-12 gap-4 items-start mb-6">
                  {/* Quote Text */}
                  <div className="col-span-8 space-y-2">
                    <p className="text-xs md:text-[13px] leading-relaxed text-gray-100 font-light italic">
                      &quot;{item.quote}&quot;
                    </p>
                  </div>

                  {/* Journal Cover Placeholder Graphic */}
                  <div className="col-span-4 flex justify-end">
                    <div className="w-28 h-32 bg-white text-black p-2 flex flex-col justify-between border border-gray-300 rounded-xs shadow-inner">
                      <div className="text-[11px] font-black leading-tight border-b border-gray-200 pb-1">
                        {item.journalCoverText}
                      </div>
                      <div className="w-full h-14 bg-amber-900/10 rounded my-1 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-amber-700 opacity-60"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div className="text-[7px] text-gray-500 font-semibold truncate">
                        {item.journalTag}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="border-t border-[#1a6659] pt-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-gray-300 italic">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center space-x-2">
            <button
              type="button"
              onClick={() => setActiveSlide(0)}
              aria-label="Slide 1"
              className={`w-3 h-3 border border-[#104e43] ${
                activeSlide === 0 ? "bg-white" : "bg-[#104e43]"
              }`}
            ></button>
            <button
              type="button"
              onClick={() => setActiveSlide(1)}
              aria-label="Slide 2"
              className={`w-3 h-3 border border-[#104e43] ${
                activeSlide === 1 ? "bg-[#104e43]" : "bg-white"
              }`}
            ></button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: WHAT MAKES OUR POSTER SERVICE UNIQUE              */}
        {/* ============================================================ */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-6">
            What Makes Our Poster Preparation Service Unique
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Bullet Points */}
            <div className="md:col-span-7 space-y-4">
              <ul className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                    •
                  </span>
                  <span>
                    Pubrica offers full assistance for reviewer comments,
                    enabling your responses to be concise, professional, and
                    backed with scientific evidence. We will take care of
                    everything, including formatting your responses, answering
                    reviewer comments, and increasing the odds of a favourable
                    review.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                    •
                  </span>
                  <span>
                    Leverage our vast team of subject matter experts, including
                    professional graphic designers, science communicators, and
                    publication professionals, all trained to provide you with
                    top-notch results.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                    •
                  </span>
                  <span>
                    With over 2000 journals, universities, and academic
                    societies trusting Pubrica for more than 20 years in the
                    scholarly publishing industry, your partnership with us will
                    allow you to work with incredible professionals.
                    Additionally, we enhance the audience for your work by
                    promoting it to our large community of more than 500,000
                    researchers, and it&apos;s free.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                    •
                  </span>
                  <span>
                    Get unique premium features only found with Pubrica. Beyond
                    our traditional virtual conference plans, your experience
                    can be built from various choices, such as writing opinion
                    pieces or selecting a dedicated PhD Project Manager to take
                    care of your presentation needs!
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-64 sm:h-72 rounded-sm overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                  alt="Hands typing on laptop displaying creative designs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS GRID                   */}
        {/* ============================================================ */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-6">
            Frequently Asked Questions – Poster Preparation Service
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Left Column (Q1 - Q6) */}
            <div className="border border-gray-300 rounded-sm bg-white divide-y divide-gray-300">
              {leftFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleLeftFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs md:text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span className="pr-2">{faq.question}</span>
                      <span className="text-lg font-bold shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column (Q7 - Q12) */}
            <div className="border border-gray-300 rounded-sm bg-white divide-y divide-gray-300">
              {rightFaqs.map((faq) => {
                const isOpen = openRightFaqId === faq.id;
                return (
                  <div key={faq.id} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleRightFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs md:text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span className="pr-2">{faq.question}</span>
                      <span className="text-lg font-bold shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
