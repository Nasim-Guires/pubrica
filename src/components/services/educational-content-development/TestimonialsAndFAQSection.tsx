'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// ==========================================
// TYPES & DATA
// ==========================================

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  country: string;
  flagCode: string;
  imageAlt: string;
  journalTitle: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote:
      'Pubrica’s educational content development team transformed our curriculum materials with clarity and precision. The engaging modules they created have significantly improved learner interaction and comprehension.',
    author: 'DR. EMILY ROBERTS',
    role: 'Program Director, Leading Medical University, USA',
    country: 'USA',
    flagCode: 'us',
    imageAlt: 'Journal of Cancer Research and Clinical Oncology',
    journalTitle: 'Journal of Cancer Research & Clinical Oncology',
  },
  {
    id: '2',
    quote:
      'Working with Pubrica has been a seamless experience. Their ability to deliver evidence-based and compliant educational content has strengthened our training programs and elevated the learning outcomes for our students.',
    author: 'PROF. JAMES THORNTON',
    role: 'Head of Academics, Global Healthcare Training Institute, UK',
    country: 'UK',
    flagCode: 'gb',
    imageAlt: 'JAMA Oncology',
    journalTitle: 'JAMA Oncology',
  },
];

const leftFaqs: FAQItem[] = [
  {
    id: 1,
    question: '1. How do I get started with your educational content development service?',
    answer:
      'You can start by reaching out to us with your project details, target audience, and objectives. Our team will schedule an initial discussion to understand your requirements and suggest the most suitable package.',
  },
  {
    id: 2,
    question: '2. What information do you need from me to develop the content?',
    answer:
      'We typically require your course goals, target audience profile, preferred formats (e.g., slides, videos, worksheets), existing reference materials or syllabus guidelines, and timeline requirements.',
  },
  {
    id: 3,
    question: '3. Can you handle large-scale or ongoing projects?',
    answer:
      'Yes, our team is equipped to manage multi-module curricula, institution-wide e-learning rollouts, and long-term content updating schedules with dedicated project managers.',
  },
  {
    id: 4,
    question: '4. What types of educational content do you develop?',
    answer:
      'We create e-learning modules, medical infographics, curriculum frameworks, interactive assessment tools, lecture slides, case studies, and subject-matter expert review reports.',
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: 5,
    question: '5. Who is your content suitable for?',
    answer:
      'Our content is ideal for schools, universities, professional training programs, healthcare institutions, corporate learning initiatives, and any organization seeking high-quality, engaging educational materials.',
  },
  {
    id: 6,
    question: '6. How do you ensure content quality and accuracy?',
    answer:
      'Every piece of content goes through a rigorous multi-tier quality assurance workflow, including subject-matter expert (SME) validation, peer review, and instructional design alignment.',
  },
  {
    id: 7,
    question: '7. Can the content be customized for specific audiences?',
    answer:
      'Absolutely. All content is tailored to your learner demographic, whether for undergraduate students, clinical specialists, corporate trainees, or patient education.',
  },
  {
    id: 8,
    question: '8. Do you provide revisions if needed?',
    answer:
      'Yes, we provide structured feedback and revision rounds within our project scope to ensure the final deliverables perfectly match your institution’s standards.',
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TestimonialsAndFAQSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // 1 and 5 open initially as shown in image

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8 space-y-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ==========================================
            SECTION 1: TESTIMONIALS
        ========================================== */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
              Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 max-w-5xl leading-relaxed">
              Learn how Pubrica’s Educational Content Development services have empowered academic institutions, educators, and professionals to create evidence-based, engaging learning materials that enhance knowledge, improve learner outcomes, and support academic and career growth. Here is what our clients say:
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-300 p-6 shadow-sm flex flex-col justify-between space-y-6 relative"
              >
                {/* Outer Content Box (Grey background inside card) */}
                <div className="bg-[#cdcfd2] rounded-lg p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start min-h-[160px]">
                  {/* Publication Cover Image Placeholder/Mockup */}
                  <div className="w-28 h-36 bg-[#0a233c] rounded border border-gray-400 shrink-0 flex flex-col justify-between p-2 shadow-inner text-white text-[10px]">
                    <div className="border-b border-gray-500 pb-1 font-semibold uppercase tracking-tighter text-[8px] text-teal-300">
                      Pubrica Review
                    </div>
                    <div className="my-auto font-bold text-center leading-tight">
                      {item.journalTitle}
                    </div>
                    <div className="bg-teal-600 text-[7px] text-center py-0.5 rounded uppercase font-mono">
                      Indexed
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-medium">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 tracking-wide">
                      — {item.author}
                    </h4>
                    <p className="text-xs text-gray-600 italic">
                      {item.role}
                    </p>
                  </div>

                  {/* Flag Icon */}
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0 flex items-center justify-center bg-gray-100">
                    {item.country === 'USA' ? (
                      <span className="text-base" title="United States">🇺🇸</span>
                    ) : (
                      <span className="text-base" title="United Kingdom">🇬🇧</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 pt-2">
            <button
              onClick={() => setActiveSlide(0)}
              className={`w-3 h-3 rounded-sm transition-all ${
                activeSlide === 0 ? 'bg-[#0d3b44]' : 'border border-[#0d3b44] bg-transparent'
              }`}
              aria-label="Slide 1"
            />
            <button
              onClick={() => setActiveSlide(1)}
              className={`w-3 h-3 rounded-sm transition-all ${
                activeSlide === 1 ? 'bg-[#0d3b44]' : 'border border-[#0d3b44] bg-transparent'
              }`}
              aria-label="Slide 2"
            />
          </div>
        </section>

        {/* ==========================================
            SECTION 2: FREQUENTLY ASKED QUESTIONS
        ========================================== */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Frequently Asked Questions – Educational Content Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Left Column FAQs */}
            <div className="border border-gray-300 bg-white rounded-sm divide-y divide-gray-200">
              {leftFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="transition-colors">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-slate-700 shrink-0 mt-0.5">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column FAQs */}
            <div className="border border-gray-300 bg-white rounded-sm divide-y divide-gray-200">
              {rightFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="transition-colors">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-slate-700 shrink-0 mt-0.5">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/50">
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