"use client"
import React, { useState } from "react";

interface TestimonialData {
  id: number;
  author: string;
  role: string;
  quote: string;
  journalName: string;
}

interface FAQData {
  id: number;
  question: string;
  answer: string;
}

interface InsightCard {
  id: number;
  title: string;
  excerpt: string;
}

export const PhysicianWritingExtensions: React.FC = () => {
  // Track open state for FAQ collapse framework
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      author: "DR. KAVITA SHARMA",
      role: "General Surgeon",
      quote:
        "My manuscript on post-operative infection control was accurately written and referenced, thanks to Pubrica's physician writing service. It was accepted by the International Journal of Surgery after a single round of peer review. I recommend them for busy clinicians.",
      journalName: "International Journal of Surgery",
    },
    {
      id: 2,
      author: "DR. ANITA REDDY",
      role: "Interventional Cardiologist",
      quote:
        "As a practicing cardiologist, documenting complex trials can be overwhelming. Pubrica's writers developed a case report with proper reporting structure, leading to its publication in BMJ Case Reports. Highly responsive team.",
      journalName: "BMJ Case Reports",
    },
  ];

  const faqs: FAQData[] = [
    {
      id: 1,
      question:
        "1. How to prepare a clinical research manuscript for journal submission?",
      answer:
        "Prepare by designing an IMRAD structure, ensuring ethical clearance, methodology, accuracy of statistics, proper reporting (e.g., consort statement), proper formatting according to journal guidelines, and editing and proofreading before submission.",
    },
    {
      id: 2,
      question:
        "2. How can healthcare organizations outsource medical writing services?",
      answer:
        "Healthcare organizations can establish clear service level agreements (SLAs) with specialized providers like Pubrica to handle bulk clinical documentation, regulatory paperwork, and promotional medical insights securely.",
    },
    {
      id: 3,
      question:
        "3. What medical writing services are available for pharma and clinical research projects?",
      answer:
        "Services span clinical study reports (CSRs), investigator brochures, protocol drafting, pharmacovigilance reports, and highly customized scientific manuscripts for peer-reviewed journal submission.",
    },
    {
      id: 4,
      question:
        "4. How do physicians publish research papers in high-impact medical journals?",
      answer:
        "By ensuring robust clinical methodology, addressing strong research gaps, strictly matching target journal aims, and eliminating editorial errors through professional physician-led proofreading and formatting cycles.",
    },
    {
      id: 5,
      question:
        "5. How to improve the quality of clinical manuscripts before journal submission?",
      answer:
        "Focus on deep linguistic clarity, verify statistical data representations, structural coherence under IMRAD, rigorous plagiarism checking, and ensuring absolute compliance to formatting and ethical guidelines.",
    },
  ];

  const insights: InsightCard[] = [
    {
      id: 1,
      title:
        "How to Structure Case Reports and Review Articles for Medical Journals",
      excerpt:
        "Journals expect a clear structure for case reports and review articles, featuring precise objectives, rigorous timeline analysis...",
    },
    {
      id: 2,
      title:
        "How Should Physicians Choose the Right Journal for Submitting a Case...",
      excerpt:
        "Publishing a case report involves more than clinical knowledge; it also demands strategic journal targeting, matching visibility metrics...",
    },
    {
      id: 3,
      title:
        "How Physicians Can Write Clear and Impactful Patient Education Materials",
      excerpt:
        "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing compliance, and bridging care delivery gaps...",
    },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] font-sans text-left text-gray-800">
      {/* --- Section 1: Testimonials Carousel Layout --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-black text-xl md:text-2xl lg:text-[26px] font-bold tracking-tight mb-2">
          Testimonials
        </h2>
        <p className="text-gray-600 text-xs md:text-sm lg:text-[15px] leading-relaxed mb-10 max-w-5xl text-justify">
          Learn how Pubrica's physician writing service has supported clinicians
          in producing publication-ready manuscripts, adhering to evidence-based
          standards, and meeting the ethical and formatting requirements of
          leading journals. Here is what our clients say:
        </p>

        {/* Card display viewport */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col justify-between"
            >
              {/* Content core */}
              <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                <div className="w-[110px] h-[110px] bg-zinc-100 rounded border border-gray-200 flex-shrink-0 flex items-center justify-center p-2 text-center text-[10px] font-mono font-bold text-gray-400 select-none uppercase">
                  [{t.journalName} Cover]
                </div>
                <p className="text-gray-700 italic text-xs md:text-sm leading-relaxed text-justify">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer bar */}
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 tracking-wide">
                    {t.author},
                  </h4>
                  <p className="text-xs text-gray-500 italic mt-0.5">
                    {t.role}
                  </p>
                </div>
                {/* Visual Flag indicator frame */}
                <div className="w-6 h-4 bg-zinc-200 border border-zinc-300 rounded-sm flex items-center justify-center text-[8px] text-zinc-500 font-bold select-none">
                  IND
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 bg-[#0e3a2f] rounded-none cursor-pointer" />
          <span className="w-2.5 h-2.5 border border-gray-400 bg-white rounded-none cursor-pointer" />
        </div>
      </section>

      {/* --- Section 2: FAQ Accordion Structure --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200/60">
        <h2 className="text-black text-xl md:text-2xl lg:text-[26px] font-bold tracking-tight mb-8">
          Frequently Asked Questions – Physician Writing Service
        </h2>

        <div className="w-full border border-gray-200 rounded overflow-hidden bg-white shadow-sm">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                {/* Accordion header click event toggle */}
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors hover:bg-gray-50/70"
                >
                  <span className="text-[#0c313a] text-xs md:text-sm font-bold tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <span className="text-lg font-bold text-slate-700 select-none flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible content section container */}
                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[300px] border-t border-gray-100 bg-white"
                      : "max-h-0"
                  }`}
                >
                  <p className="p-4 md:p-5 text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Section 3: Insights Grid Cards --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-200/60">
        <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold tracking-tight mb-8">
          Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded border border-gray-200/80 shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Graphic Banner Top Area */}
              <div className="w-full aspect-[16/10] bg-zinc-100 border-b border-gray-100 flex items-center justify-center text-zinc-400 text-xs font-mono font-medium select-none">
                [Insight Cover Visual Asset]
              </div>

              {/* Informational Text Description Wrapper */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="text-[#083c4c] text-xs md:text-sm font-extrabold leading-snug tracking-wide text-left group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed text-justify line-clamp-3">
                  {card.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
