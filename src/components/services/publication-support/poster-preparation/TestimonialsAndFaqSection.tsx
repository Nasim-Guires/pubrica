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
  journalImage: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica’s poster preparation service transformed my research into a visually compelling and clear presentation. The team ensured full compliance with conference guidelines. My poster was highly appreciated at the International Conference on Oncology, complementing my publication in the Journal of Clinical Oncology (Scopus-indexed).",
    author: "DR. ANANYA S.,",
    role: "Oncology Researcher",
    journal: "Journal of Clinical Oncology",
    journalImage:
      "/images/publication-support/poster-preparation/journal-of-clinical-oncology-1.jpg",
  },
  {
    id: 2,
    quote:
      "The experts at Pubrica designed an impactful poster that showcased my neuroscience findings perfectly. Their attention to detail and formatting expertise made the conference presentation seamless. This greatly supported my recent publication in Frontiers in Neuroscience (Web of Science-indexed).",
    author: "DR. RAJESH K.,",
    role: "Neuroscience Scholar",
    journal: "Frontiers in Neuroscience",
    journalImage:
      "/images/publication-support/poster-preparation/Frontiers-of-neuro-science-.jpg",
  },
  {
    id: 3,
    quote:
      "The team at Pubrica expertly formatted my pharmaceutical sciences research into a conference-ready poster that met strict guidelines. Their support allowed me to focus on presenting while ensuring professional quality. This complemented my work published in the European Journal of Pharmaceutical Sciences (Scopus-indexed).",
    author: "DR. SURESH N.,",
    role: "Pharmaceutical Scientist",
    journal: "European Journal of Pharmaceutical Sciences",
    journalImage:
      "/images/publication-support/poster-preparation/european-journal-of-pharmaceutical-sciences.jpg",
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
      "A research poster should have an appropriate title, author details, background, objectives, methods, key results, conclusions, references, acknowledgment, and figures or charts to present research in an effective manner.",
  },
  {
    id: 3,
    question: "3. What is the best format for an academic conference poster?",
    answer:
      "The best academic conference poster design is a well-structured layout with a logical flow (top-to-bottom or left-to-right), concise text, strong visuals, legible typography, and adequate use of space",
  },
  {
    id: 4,
    question: "4. How to create an effective research poster layout?",
    answer:
      "Designing an effective research poster layout involves structuring your content with a logical flow, using section headers, emphasizing visuals over text, using consistent design, and ensuring legibility even from a distance.",
  },
  {
    id: 5,
    question: "5. How do I convert my research paper into a conference poster?",
    answer:
      "To turn your research paper into a conference poster, you can summarize your paper, focus on your main findings, use visuals instead of lengthy text, use simple language, and design your content with a logical flow, concise layout, etc",
  },
  {
    id: 6,
    question: "6. How can I make my scientific poster visually appealing?",
    answer:
      "Design an eye-catching scientific poster using a clean design, color scheme, font styles, quality images, proper white space, and simple design elements that effectively highlight important scientific findings in a professional manner.",
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
      "Use large font styles for scientific posters, ranging from 60 to 90 points for title fonts, 36 to 44 points for headings, and 24 to 32 points for text fonts, with proper formatting for easy reading.",
  },
  {
    id: 9,
    question:
      "9. What are the key elements of a professional scientific poster?",
    answer:
      "A professional scientific poster will have a title, author information, background information, objectives, methods, results, conclusion, references, acknowledgments, and well-designed visual content in a clean and logical design.",
  },
  {
    id: 10,
    question:
      "10. Can professional poster design services improve conference presentation quality?",
    answer:
      "Yes, professional poster design services will be helpful in improving the quality of conference presentations by improving the layout, visual content, readability, and design of the conference presentations.",
  },
  {
    id: 11,
    question: "11. What are the standard dimensions for conference posters?",
    answer:
      'The most commonly used poster sizes in conferences are 36” x 48” in a landscape orientation or A0 size, which is 841 x 1189 mm',
  },
  {
    id: 12,
    question:
      "12. What are the common mistakes to avoid in research poster design?",
    answer:
      "Some of the common mistakes that can occur while designing a poster include too much text, poor layout structure, low-quality images, small font, poor formatting, poor visuals, and poor emphasis of key results.",
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

  const mobileItem = testimonialsData[activeSlide];
  const desktopItems = [
    testimonialsData[activeSlide],
    testimonialsData[(activeSlide + 1) % testimonialsData.length],
  ];

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
          <div className="grid grid-cols-1 gap-6 items-stretch mb-6 md:hidden">
            <TestimonialCard item={mobileItem} />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-6 items-stretch mb-6">
            {desktopItems.map((item) => (
              <TestimonialCard
                key={`${activeSlide}-${item.id}`}
                item={item}
              />
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center space-x-2">
            {testimonialsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`w-3 h-3 border border-[#104e43] ${activeSlide === index ? "bg-white" : "bg-[#104e43]"
                  }`}
              ></button>
            ))}
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
                  src="/images/publication-support/poster-preparation/Poster-Preparation-Service-Unique.jpg"
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

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#104e43] text-white p-6 rounded-sm shadow-md flex flex-col justify-between">
      <div className="grid grid-cols-12 gap-4 items-start mb-6">
        <div className="col-span-8 space-y-2">
          <p className="text-xs md:text-[13px] leading-relaxed text-gray-100 font-light italic">
            &quot;{item.quote}&quot;
          </p>
        </div>

        <div className="col-span-4 flex justify-end">
          <div className="w-28 h-32 bg-white p-1 flex items-center justify-center border border-gray-300 rounded-xs shadow-inner">
            <Image
              src={item.journalImage}
              alt={item.journal}
              width={217}
              height={179}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a6659] pt-3">
        <h4 className="font-bold text-xs uppercase tracking-wider text-white">
          {item.author}
        </h4>
        <p className="text-[11px] text-gray-300 italic">{item.role}</p>
      </div>
    </div>
  );
}
