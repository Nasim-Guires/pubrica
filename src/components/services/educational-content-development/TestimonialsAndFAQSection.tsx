'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  coverSrc: string;
  flagSrc: string;
  imageAlt: string;
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
    coverSrc: '/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/journal-of-cancer-reserach-clinical-oncology-.webp',
    flagSrc: '/images/editing-and-translation/scientific-editing/usa-.png',
    imageAlt: 'Journal of Cancer Research and Clinical Oncology',
  },
  {
    id: '2',
    quote:
      'Working with Pubrica has been a seamless experience. Their ability to deliver evidence-based and compliant educational content has strengthened our training programs and elevated the learning outcomes for our students.',
    author: 'PROF. JAMES THORNTON',
    role: 'Head of Academics, Global Healthcare Training Institute, UK',
    country: 'UK',
    coverSrc: '/images/marketing-communication-content-development-service/jama-oncology-journal-1-1.webp',
    flagSrc: '/images/editing-and-translation/manuscript-editing/uk-flag-.png',
    imageAlt: 'JAMA Oncology',
  },
  {
    id: '3',
    quote:
      'Pubrica’s team exceeded our expectations in developing interactive and impactful educational materials. Their attention to detail and commitment to excellence have made a real difference in our learners’ success.',
    author: "PROF. LIAM O'CONNOR",
    role: 'Dean, School of Health Sciences, Australia',
    country: 'Australia',
    coverSrc: '/images/marketing-communication-content-development-service/british-journal-of-clinical-pharmacology.webp',
    flagSrc: '/images/marketing-communication-content-development-service/Australia.webp',
    imageAlt: 'British Journal of Clinical Pharmacology',
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
      'We typically require details about your target audience, learning objectives, preferred formats (e-learning, printed materials, videos), content scope, and any specific guidelines or standards to follow.',
  },
  {
    id: 3,
    question: '3. Can you handle large-scale or ongoing projects?',
    answer:
      'Yes, we have experience managing large-scale programs, multi-module courses, and ongoing educational content needs. We can scale our services to match your requirements.',
  },
  {
    id: 4,
    question: '4. What types of educational content do you develop?',
    answer:
      'We create a wide range of content, including e-learning modules, course materials, instructor-led training guides, assessment tools, infographics, case studies, and multimedia resources tailored to your target audience.',
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
      'All content is developed by subject-matter experts and instructional designers. We follow a rigorous review and revision process to ensure accuracy, clarity, compliance, and alignment with your learning objectives.',
  },
  {
    id: 7,
    question: '7. Can the content be customized for specific audiences?',
    answer:
      'Yes! We tailor content to the learning level, industry requirements, language preferences, and specific educational goals of your audience.',
  },
  {
    id: 8,
    question: '8. Do you provide revisions if needed?',
    answer:
      'Absolutely. Each package includes feedback loops and revisions to ensure the content meets your expectations and educational goals.',
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TestimonialsAndFAQSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // 1 and 5 open initially as shown in image
  const cardsPerPage = 2;
  const totalSlides = Math.ceil(testimonialsData.length / cardsPerPage);
  const displayedTestimonials = testimonialsData.slice(
    activeSlide * cardsPerPage,
    (activeSlide + 1) * cardsPerPage
  );
  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8 space-y-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ==========================================
            SECTION 1: TESTIMONIALS
        ========================================== */}
        <section className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
              Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 max-w-5xl leading-relaxed">
              Learn how Pubrica’s Educational Content Development services have empowered academic institutions, educators, and professionals to create evidence-based, engaging learning materials that enhance knowledge, improve learner outcomes, and support academic and career growth. Here is what our clients say:
            </p>
          </div>

          {/* Testimonial Cards Grid (Shows 2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-300 p-6 shadow-sm flex flex-col justify-between space-y-6 relative"
              >
                {/* Outer Content Box (Light gray background inside card) */}
                <div className="bg-[#e2e4e8] rounded-lg p-5 flex flex-col sm:flex-row gap-5 items-center sm:items-start min-h-[160px]">
                  {/* Publication Cover Image Placeholder/Mockup */}
                  <div className="relative w-28 h-36 shrink-0 rounded border border-gray-400 overflow-hidden shadow-inner bg-white">
                    <Image src={item.coverSrc} alt={item.imageAlt} fill className="object-cover" sizes="112px" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-medium">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 tracking-wide uppercase">
                      — {item.author}
                    </h4>
                    <p className="text-xs text-gray-600 italic">
                      {item.role}
                    </p>
                  </div>

                  {/* Flag Icon */}
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
                    <Image src={item.flagSrc} alt={`${item.country} flag`} fill className="object-cover" sizes="28px" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators (Dynamic dots based on total pairs) */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-sm transition-all ${activeSlide === index ? 'bg-[#0d3b44]' : 'border border-[#0d3b44] bg-transparent'
                  }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
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