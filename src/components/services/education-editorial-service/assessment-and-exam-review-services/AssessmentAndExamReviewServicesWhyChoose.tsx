'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    title: 'Academic Assessment Review',
    content: 'Our assessment review service is provided by a team of qualified subject-matter experts and certified academic reviewers (Ph.D. level) to assure reliability, validity, and academic quality in the assessment process.',
  },
  {
    title: 'Reviewing of Assessments',
    content: 'The review service for assessments is HACE s method of ensuring the validity, reliability, and academic quality of all assessment material including the following: the assessment question paper and assessment answer key validation; and the review of grading consistency; and the recommendations on improving written and/or illustrative educational assessment materials.',
  },
  {
    title: 'Efficiency and Cost-Effectiveness',
    content: 'Using a structured method of evaluation will provide an efficient, timely, and best practices approach to the assessment review process, enabling educators and educational institutions to concentrate on their primary responsibility of promoting teaching and educating.',
  },
  {
    title: 'Global Academic Standards',
    content: 'We undertake to ensure that our review process is conducted in accordance with the international framework regarding educational assessment (i.e., the International Standards for Educational Assessment).',
  },
  {
    title: 'Customised Assessment Review Services',
    content: 'We provide individualised assessment review services for all users (educational institutions, educators, and training providers) to assist each customer in their attainment of their respective academic objectives and criteria for evaluation.',
  },
];

const AssessmentAndExamReviewServicesWhyChoose: NextPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: IMAGE COLLAGE */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[420px] h-[360px] md:h-[400px]">
              <div className="absolute inset-0 bg-[#eaf4ef] rounded-full filter blur-2xl opacity-60"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Why Choose Pubrica Assessment and Exam Review" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT & ACCORDION CARDS (ALL CLOSED BY DEFAULT) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Why Choose Pubrica for Assessment and Exam Review Services
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                At Pubrica, we understand that accurate assessment and exam review are critical to academic success. Our specialized Assessment & Exam Review Services are designed to ensure clarity, accuracy, and compliance with academic standards helping students, educators, and institutions achieve reliable outcomes:
              </p>
            </div>

            {/* ACCORDION LIST WITH ALL CARDS CLOSED BY DEFAULT */}
            <div className="space-y-4 pt-2">
              {accordionData.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2 transition-all cursor-pointer"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <div className="flex items-center justify-between text-gray-900 font-bold text-sm md:text-base">
                      <span className="flex items-center space-x-2">
                        <span className="text-[#0b3b2c] font-black">—</span>
                        <span>{item.title}</span>
                      </span>
                      <span className="text-gray-500 font-bold text-lg select-none">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="text-xs md:text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-[#0b3b2c]/20 pt-2">
                        {item.content}
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
};

export default AssessmentAndExamReviewServicesWhyChoose;