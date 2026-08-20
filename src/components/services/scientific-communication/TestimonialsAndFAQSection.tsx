"use client";

import React, { useState } from "react";
import Image from "next/image";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface Testimonial {
  id: string;
  journalImageSrc: string;
  journalImageAlt: string;
  quote: string;
  author: string;
  title: string;
  location: string;
  flagSrc?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    journalImageSrc: "/images/scientific-communication/jama-neurology-.webp",
    journalImageAlt: "JAMA Neurology journal cover",
    quote:
      "Pubrica's scientific communication team helped us transform complex clinical data into clear, publication-ready manuscripts. Their attention to regulatory guidelines and journal requirements ensured smooth submissions and faster approvals.",
    author: "DR. MEERA SHARMA",
    title: "Clinical Research Lead",
    location: "India",
    flagSrc: "/images/editing-and-translation/flag.png",
  },
  {
    id: "2",
    journalImageSrc: "/images/editing-and-translation/scientific-editing/testimonials-1.png",
    journalImageAlt: "Scientific communication testimonial illustration",
    quote:
      "Pubrica's scientific medical communication services helped us convey complex trial results in a way that was both accurate and engaging. Their work strengthened our publications and reinforced our credibility in the field.",
    author: "DR. ROHAN IYER",
    title: "Clinical Trials Manager",
    location: "United Kingdom",
    flagSrc: "/images/research-services/systematic-review/united-kingdom-.png",
  },
  {
    id: "3",
    journalImageSrc: "/images/scientific-communication/journal-of-health-economics-1.webp",
    journalImageAlt: "Journal of Health Economics cover",
    quote:
      "The team delivered scientifically accurate communication materials that met our regulatory and publication standards. Their editorial precision and turnaround were outstanding.",
    author: "DR. KLAUS WEBER",
    title: "Medical Affairs Director",
    location: "Germany",
    flagSrc: "/images/editing-and-translation/book-editing/germany-.png",
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const faqDataColumn1: FAQItem[] = [
  {
    id: 1,
    question: "1. Who can benefit from SMC services?",
    answer: (
      <div className="space-y-2 text-xs md:text-sm text-gray-700">
        <p>SMC services are valuable for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pharmaceutical and biotech companies</li>
          <li>Healthcare professionals and medical societies</li>
          <li>Academic researchers and institutions</li>
          <li>Regulatory authorities</li>
          <li>Medical writers and editors seeking support for publications</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    question: "2. What types of documents are created through SMC?",
    answer: (
      <div className="space-y-2 text-xs md:text-sm text-gray-700">
        <p>Our SMC services cover:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manuscripts for peer-reviewed journals</li>
          <li>Clinical study reports (CSRs)</li>
          <li>Regulatory submission documents</li>
          <li>Conference posters and abstracts</li>
          <li>Educational materials for healthcare professionals</li>
          <li>Patient education resources</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    question: "3. How do you ensure scientific accuracy?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700">
        All content is developed by subject-matter experts, including medical writers, statisticians, and clinicians. We follow evidence-based methodologies, source verification, and compliance with industry standards to ensure accuracy and reliability.
      </p>
    ),
  },
  {
    id: 4,
    question: "4. Do you follow specific guidelines?",
    answer: (
      <div className="space-y-2 text-xs md:text-sm text-gray-700">
        <p>Yes, our team adheres to international guidelines, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>ICMJE (International Committee of Medical Journal Editors)</li>
          <li>GPP (Good Publication Practice)</li>
          <li>CONSORT, PRISMA, and other reporting standards</li>
          <li>Regulatory authority requirements (FDA, EMA, CDSCO, etc.)</li>

        </ul>
      </div>
    ),
  },
];

const faqDataColumn2: FAQItem[] = [
  {
    id: 5,
    question: "5. How is confidentiality maintained?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
        We implement strict data security protocols and confidentiality agreements. Client data, unpublished research, and proprietary information are protected at all stages of communication and documentation.
      </p>
    ),
  },
  {
    id: 6,
    question: "6. Can you handle multi-disciplinary or international projects?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700">
        Absolutely. Our team is experienced in collaborating across different therapeutic areas, languages, and regions, ensuring compliance with local and international standards.
      </p>
    ),
  },
  {
    id: 7,
    question: "7. How do you collaborate with clients during a project?",
    answer: (
      <div className="space-y-2 text-xs md:text-sm text-gray-700">
        <p>We follow a structured workflow:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Initial consultation to understand project objectives</li>
          <li>Regular updates and drafts shared for client feedback</li>
          <li>Revision cycles to refine content</li>
          <li>Final review and approval before delivery</li>

        </ul>
      </div>
    ),
  },
  {
    id: 8,
    question: "8. What sets your SMC services apart?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700">
        We combine scientific expertise, regulatory knowledge, and communication skills to produce content that is accurate, engaging, and publication-ready. Our focus on clarity, precision, and audience relevance ensures your research and messages have maximum impact.
      </p>
    ),
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TestimonialsAndFAQSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Accordion state management: open items by default matching the screenshot (Q1 & Q5 open)
  const [openFaqs, setOpenFaqs] = useState<number[]>([1, 5]);

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...faqDataColumn1, ...faqDataColumn2].map((item) => ({
      "@type": "Question",
      name: item.question.replace(/^\d+\.\s*/, ""), // Remove numbers for clean schema
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof item.answer === "string"
            ? item.answer
            : "Refer to website for detailed scope.",
      },
    })),
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto space-y-20">
        {/* ==========================================
            SECTION 1: TESTIMONIALS
        ========================================== */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-3">
            Testimonials
          </h2>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-5xl mb-8">
            Discover how Pubrica’s expert scientific medical communication
            services have helped researchers, clinicians, and healthcare
            organizations produce accurate, publication-ready content that
            strengthens credibility, supports evidence-based decisions, and
            maximizes research impact. Here’s what our clients say:
          </p>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-emerald-900/30 rounded-xl p-6 shadow-sm flex flex-col justify-between"
              >
                {/* Quote Box with Thumbnail */}
                <div className="bg-[#d2d5d6]/60 rounded-lg p-5 flex flex-col sm:flex-row gap-4 items-start mb-6">
                  <div className="w-24 h-28 relative flex-shrink-0 border border-gray-300 rounded overflow-hidden shadow-sm">
                    <Image
                      src={item.journalImageSrc}
                      alt={item.journalImageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-slate-800 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info & Country Flag */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-slate-900 tracking-wide">
                      — {item.author}
                    </h3>
                    <p className="text-xs text-gray-600 italic">
                      {item.title}, {item.location}
                    </p>
                  </div>
                  {item.flagSrc ? (
                    <div className="w-6 h-6 relative rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                      <Image
                        src={item.flagSrc}
                        alt={`${item.location} flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setActiveSlide(0)}
              aria-label="Slide 1"
              className={`w-3 h-3 transition-colors duration-200 ${activeSlide === 0
                ? "bg-[#003b42]"
                : "border border-[#003b42] bg-transparent"
                }`}
            />
            <button
              onClick={() => setActiveSlide(2)}
              aria-label="Slide 3"
              className={`w-3 h-3 transition-colors duration-200 ${activeSlide === 2
                ? "bg-[#003b42]"
                : "border border-[#003b42] bg-transparent"
                }`}
            />
          </div>
        </section>

        {/* ==========================================
            SECTION 2: FREQUENTLY ASKED QUESTIONS
        ========================================== */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-8">
            Frequently Asked Questions – Scientific Medical Communication
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 (Questions 1 to 4) */}
            <div className="space-y-3">
              {faqDataColumn1.map((faq) => {
                const isOpen = openFaqs.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-sm bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xs md:text-sm font-bold text-slate-800">
                        {faq.question}
                      </span>
                      <span className="text-slate-800 font-bold text-base ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Questions 5 to 8) */}
            <div className="space-y-3">
              {faqDataColumn2.map((faq) => {
                const isOpen = openFaqs.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-sm bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xs md:text-sm font-bold text-slate-800">
                        {faq.question}
                      </span>
                      <span className="text-slate-800 font-bold text-base ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
