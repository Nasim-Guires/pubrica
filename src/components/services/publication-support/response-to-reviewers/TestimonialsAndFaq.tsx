"use client"
import React, { useState } from "react";

// ================= DATA TYPES =================
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journal: string;
  journalImage: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// ================= MOCK DATA =================
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      '"Pubrica\'s reviewer response service saved my article. The experts reworded my explanations and helped me defend my methodology convincingly. My paper is now accepted in the Journal of Clinical Oncology (Scopus-indexed)."',
    author: "DR. MEENA R.,",
    role: "Oncology Researcher",
    journal: "Journal of Clinical Oncology",
    journalImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    quote:
      "\"The reviewer comments were overwhelming. Pubrica's team simplified the entire process of revision. Their scientific justification and formatting skills were impressive. I'm happy to say my paper was successfully published in The Lancet Infectious Diseases. \"",
    author: "ARUN J., PHD",
    role: "Scholar in Biotechnology",
    journal: "The Lancet Infectious Diseases",
    journalImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80",
  },
];

const FAQS_COL_1: FAQItem[] = [
  {
    id: 1,
    question:
      "1. How do I respond to peer review comments from journal reviewers?",
    answer:
      "Respond to peer review comments by addressing each comment carefully, revising the paper if necessary, providing a detailed response letter explaining all the changes made, and maintaining a respectful tone in the response.",
  },
  {
    id: 2,
    question:
      "2. What is the correct format for responding to reviewers' comments?",
    answer:
      "Use a point-by-point format. Quote each reviewer comment directly, follow it with your detailed response, and state clearly where changes were made in the revised manuscript (including line or page numbers).",
  },
  {
    id: 3,
    question: "3. How to write a response letter to journal reviewers?",
    answer:
      "Start with a respectful opening thanking the editor and reviewers for their constructive feedback. Present each comment followed by a clear, evidence-based response detailing the corresponding manuscript revisions.",
  },
  {
    id: 4,
    question:
      "4. What happens after submitting revised manuscripts and reviewer responses?",
    answer:
      "The journal editor reviews your resubmission and may accept it directly or send it back to the original reviewers for a second round of evaluation before making a final publication decision.",
  },
];

const FAQS_COL_2: FAQItem[] = [
  {
    id: 5,
    question:
      "5. How can researchers improve their manuscript while responding to reviewer feedback?",
    answer:
      "Researchers can improve the quality of their paper by addressing all the points raised, clarifying the paper, enhancing the methodology, improving the structure, language, and content, ensuring all revisions enhance overall quality and clarity.",
  },
  {
    id: 6,
    question: "6. How to address critical reviewer comments effectively?",
    answer:
      "Acknowledge critical feedback objectively without becoming defensive. Provide clear scientific justification, additional data, or references to support your position, or make the requested revisions where valid.",
  },
  {
    id: 7,
    question:
      "7. What strategies help authors handle major revision requests from journals?",
    answer:
      "Break down complex comments into actionable sub-tasks, prioritize methodology/data updates first, maintain a transparent change log, and seek professional revision support when required.",
  },
];

export default function TestimonialsAndFaq() {
  // FAQ 1 & 5 expanded by default as shown in the screenshot
  const [openFaqs, setOpenFaqs] = useState<number[]>([1, 5]);

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full bg-[#f6f8f8] font-sans text-slate-800">
      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="pt-10 pb-12 px-4 max-w-6xl mx-auto">
        {/* Top Button */}
        <div className="text-center mb-6">
          <button className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs px-6 py-2 rounded-full shadow-sm transition-colors">
            Get a Free Quote
          </button>
        </div>

        {/* Heading & Intro */}
        <div className="max-w-4xl mx-auto text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e4a42] mb-3">
            Testimonials
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Discover how Pubrica&apos;s response to reviewer comments service
            has helped researchers successfully navigate reviewer feedback and
            secure publication in top-tier journals. Here&apos;s what our
            clients say:
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e4a42] text-white p-6 rounded-sm shadow-md flex justify-between gap-4 items-stretch"
            >
              {/* Left Quote & Author Details */}
              <div className="flex-1 flex flex-col justify-between pr-2">
                <p className="text-xs leading-relaxed text-slate-100 font-normal italic mb-6">
                  {item.quote}
                </p>
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-white">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-300 italic font-medium">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Right Thumbnail Image Box */}
              <div className="w-32 flex-shrink-0 bg-white p-1 rounded-sm shadow-inner flex items-center justify-center">
                <img
                  src={item.journalImage}
                  alt={item.journal}
                  className="w-full h-36 object-cover rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Square Dots */}
        <div className="flex justify-center items-center gap-2 pt-2">
          <span className="w-2.5 h-2.5 bg-[#1e4a42] rounded-xs cursor-pointer" />
          <span className="w-2.5 h-2.5 border border-[#1e4a42] bg-white rounded-xs cursor-pointer" />
        </div>
      </section>

      {/* ================= FAQ ACCORDION SECTION ================= */}
      <section className="py-12 px-4 max-w-6xl mx-auto border-t border-slate-200/60">
        <h2 className="text-xl md:text-2xl font-bold text-[#1e4a42] text-center mb-10">
          Frequently Asked Questions Response to Reviewer Comments Services
        </h2>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="space-y-4">
            {FAQS_COL_1.map((faq) => {
              const isOpen = openFaqs.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 bg-white rounded-sm overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 text-left flex justify-between items-start gap-3 hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-base font-bold text-slate-700 flex-shrink-0 leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {FAQS_COL_2.map((faq) => {
              const isOpen = openFaqs.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 bg-white rounded-sm overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 text-left flex justify-between items-start gap-3 hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-base font-bold text-slate-700 flex-shrink-0 leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark Footer Strip */}
      <div className="w-full h-3 bg-[#1e4a42]" />
    </div>
  );
}
