"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  journalCoverSrc: string;
  flagSrc: string;
  flagAlt: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const EditingTranslationManuscriptEditingTestimonialsAndFaq: React.FC =
  () => {
    // Testimonial slide index
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // FAQ open state (stores ID of currently open FAQ, or null if all closed)
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);

    // All testimonials data
    const testimonials: Testimonial[] = [
      {
        id: "test-1",
        quote:
          '"Pubrica\'s manuscript editing service transformed my draft into a polished paper that met all the requirements of my target journal, Journal of Neuroscience. The attention to detail was outstanding."',
        authorName: "DR. EMILY CARTER",
        authorTitle: "Associate Professor of Neuroscience, USA",
        journalCoverSrc: "/images/testimonials/internal-medicine-journal.webp",
        flagSrc: "/images/flags/de.svg",
        flagAlt: "Germany Flag",
      },
      {
        id: "test-2",
        quote:
          '"The editors not only corrected grammar and formatting but also improved the overall clarity and flow of my article. Thanks to Pubrica, my manuscript was accepted in The Lancet without major revisions."',
        authorName: "PROF. RAJESH NAIR",
        authorTitle: "Department of Cardiology, India",
        journalCoverSrc:
          "/images/testimonials/clinical-diagnostic-research.webp",
        flagSrc: "/images/flags/in.svg",
        flagAlt: "India Flag",
      },
    ];

    // All FAQ items with exact text extracted from screenshots
    const faqList: FaqItem[] = [
      {
        id: 1,
        question:
          "1. What does manuscript editing include for research papers?",
        answer:
          "Editing of a manuscript involves language correction, structural correction, clarity improvement, format correction, reference verification, and refinement of the manuscript according to journal requirements and improvement of the quality of presentation.",
      },
      {
        id: 2,
        question:
          "2. How can manuscript editing improve the chances of journal acceptance?",
        answer:
          "Manuscript editing improves clarity, structure, professionalism, reduces language errors, ensures compliance, and readability, thus increasing the chances of evaluation and acceptance by reviewers.",
      },
      {
        id: 3,
        question:
          "3. When should a research paper be edited before journal submission?",
        answer:
          "A research paper is to be edited after completing the final draft, which is to be submitted to a journal, thus ensuring clarity, structure, compliance, accurate references, and manuscript refinement.",
      },
      {
        id: 4,
        question:
          "4. What are the common writing issues corrected during manuscript editing?",
        answer:
          "Common issues may include grammatical errors, unclear writing, poor structure, use of incorrect terminology, poor flow, incorrect formatting, citation errors, and a lack of clarity in results and discussion sections.",
      },
      {
        id: 5,
        question:
          "5. Do journals recommend professional editing for non-native English authors?",
        answer:
          "Many journals advise non-native English-speaking authors to seek professional language editing to enhance clarity and submission standards, although this does not guarantee publication.",
      },
      {
        id: 6,
        question:
          "6. What is the difference between manuscript editing and proofreading?",
        answer:
          "Editing a manuscript will enhance structure, clarity, flow, and content quality, and proofreading will correct grammatical errors, spelling mistakes, punctuation errors, and minor formatting errors.",
      },
      {
        id: 7,
        question:
          "7. How do authors choose the right manuscript editing service for journal submission?",
        answer:
          "Authors may look for editing services with expertise in the subject area, skilled editors, clear procedures, guarantee of confidentiality, positive reviews, knowledge of journal guidelines, and clear turnaround times.",
      },
    ];

    const toggleFaq = (id: number) => {
      setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
      <div className="w-full bg-slate-50 py-12 sm:py-16 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* SECTION 1: Testimonials */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
              Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mb-8 leading-relaxed">
              Learn how Pubrica’s Manuscript Editing Services have supported
              researchers and scholars in preparing well-structured, error-free,
              and publication-ready manuscripts. Our experienced editors refine
              language, improve organization, and ensure adherence to journal
              formatting requirements, thereby enhancing the quality and
              acceptance potential of your work. Here is what our clients say:
            </p>

            {/* Testimonial Cards Grid / Slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-300 rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between relative"
                >
                  {/* Gray Inner Quote Box */}
                  <div className="bg-slate-200/80 rounded-lg p-4 sm:p-5 flex gap-4 items-center mb-6 min-h-[140px]">
                    {/* Journal Cover */}
                    <div className="w-20 h-24 relative flex-shrink-0 border border-slate-300 shadow-sm rounded overflow-hidden">
                      <Image
                        src={item.journalCoverSrc}
                        alt="Journal Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Quote Content */}
                    <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author Info & Country Flag */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base tracking-wide">
                        — {item.authorName}
                      </h3>
                      <p className="text-xs text-slate-600 italic mt-0.5">
                        {item.authorTitle}
                      </p>
                    </div>

                    {/* Flag Icon */}
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 shadow-sm relative flex-shrink-0">
                      <Image
                        src={item.flagSrc}
                        alt={item.flagAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Pagination Controls */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentSlide(0)}
                className={`w-3 h-3 rounded-none transition-colors ${
                  currentSlide === 0
                    ? "bg-[#0d3b36]"
                    : "border border-[#0d3b36] bg-transparent"
                }`}
                aria-label="Slide 1"
              />
              <button
                onClick={() => setCurrentSlide(1)}
                className={`w-3 h-3 rounded-none transition-colors ${
                  currentSlide === 1
                    ? "bg-[#0d3b36]"
                    : "border border-[#0d3b36] bg-transparent"
                }`}
                aria-label="Slide 2"
              />
            </div>
          </section>

          {/* SECTION 2: Frequently Asked Questions Accordion */}
          <section className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="border border-slate-200 rounded-md bg-white shadow-sm overflow-hidden divide-y divide-slate-200">
              {faqList.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="transition-colors">
                    {/* Question Header */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 sm:px-6 sm:py-4 flex items-center justify-between font-semibold text-slate-900 text-xs sm:text-sm hover:bg-slate-50 focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-lg font-mono font-bold leading-none text-slate-800 flex-shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Expandable Answer */}
                    {isOpen && (
                      <div className="p-4 sm:px-6 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  };
