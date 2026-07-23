'use client';

import React from 'react';
import Image from 'next/image';

export const EditingTranslationManuscriptEditingProcessAndFeatures: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      {/* SECTION 1: Step-by-Step Process with Hover Effects */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            How Our Manuscript Editing Service Works
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-4">
            Our Step-by-Step Process
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We simplify the process of enhancing your research work. From submitting your order to receiving the polished manuscript, our expert team ensures precision and quality at every step.
          </p>
        </div>

        {/* Timeline Process Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {/* Step 1 Card: Default dark, hover is handled inherently */}
          <div className="flex flex-col justify-between group">
            <div className="  p-6 rounded-lg shadow-md flex-1 transition-colors duration-300 group-hover:bg-black">
              <div className="mb-4">
                <svg className="w-10 h-10 transition-colors duration-300 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-3 tracking-wide uppercase transition-colors duration-300 group-hover:text-white">
                Upload Your Manuscript, Select a Service, and Plan
              </h4>
              <p className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                You start by selecting a service according to your target journal. We analyse your document and recommend the best plans, including professional editing for journals.
              </p>
            </div>
            
            {/* Step Number Circle & Connector Line */}
            <div className="relative flex flex-col items-center mt-6">
              <div className="w-full h-1 bg-sky-600 absolute top-1/2 -translate-y-1/2 hidden md:block" />
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center z-10 shadow-md">
                1
              </div>
            </div>
          </div>

          {/* Step 2 Card: Default White, Hover turns black */}
          <div className="flex flex-col justify-between md:translate-y-[-16px] group">
            <div className="bg-white border border-slate-200 text-slate-800 p-6 rounded-lg shadow-md flex-1 transition-colors duration-300 group-hover:bg-black group-hover:border-black">
              <div className="mb-4">
                <svg className="w-10 h-10 text-slate-700 transition-colors duration-300 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-3 tracking-wide uppercase text-slate-900 transition-colors duration-300 group-hover:text-white">
                The Two-Step Edit Process Delivers Top-Notch Quality and Timely Delivery
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                Two native editors provide expert scientific manuscript editing, ensuring your manuscript meets journal guidelines and quality standards.
              </p>
            </div>

            {/* Step Number Circle & Connector Line */}
            <div className="relative flex flex-col items-center mt-6">
              <div className="w-full h-1 bg-sky-600 absolute top-1/2 -translate-y-1/2 hidden md:block" />
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center z-10 shadow-md">
                2
              </div>
            </div>
          </div>

          {/* Step 3 Card: Default White, Hover turns black */}
          <div className="flex flex-col justify-between group">
            <div className="bg-white border border-slate-200 text-slate-800 p-6 rounded-lg shadow-md flex-1 transition-colors duration-300 group-hover:bg-black group-hover:border-black">
              <div className="mb-4">
                <svg className="w-10 h-10 text-slate-700 transition-colors duration-300 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-3 tracking-wide uppercase text-slate-900 transition-colors duration-300 group-hover:text-white">
                Review Final Files, Ask Questions, and Collaborate
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                Download edited files and collaborate with editors through multiple revisions, making our outsourced manuscript editing services highly flexible and user focused.
              </p>
            </div>

            {/* Step Number Circle & Connector Line */}
            <div className="relative flex flex-col items-center mt-6">
              <div className="w-full h-1 bg-sky-600 absolute top-1/2 -translate-y-1/2 hidden md:block" />
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center z-10 shadow-md">
                3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dark Emerald Banner */}
      <section className="w-full bg-emerald-950 text-white py-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Manuscript Editing Services at Pubrica
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Our editors ensure that your manuscript is flawless, impactful, and ready for publication through careful editing and expert feedback.
          </p>
        </div>
      </section>

      {/* SECTION 3: Features & Recommended Journals */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Features Of Our Research Paper Manuscript Editing Services
        </h2>
        <p className="text-base text-slate-700 leading-relaxed mb-10">
          At Pubrica, we understand the significance of a successful publication to any world-leading journal. Our research paper editing services and proofreading service digs up every minute detail and leaves no stone unturned for its quality, thereby ensuring that you have your work polished and ready to be published, error-free and of the highest accuracy, clarity, and precision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Journal Recommendation Badge Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="relative w-full max-w-[380px] h-[300px]">
              <Image
                src="/images/services/manuscript-recommended-journals.webp"
                alt="1600+ journals officially recommended our editing services including IEEE Transactions, Physical Therapy, Foot & Ankle, PNAS, and AJR"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Key Feature Bullet Points */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-slate-900 font-bold text-xl leading-none mt-1">•</span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Experienced Subject-Matter Experts in Publishing:
                </strong>{' '}
                Manuscript editors at Pubrica have experienced and expert PhD holders, MDs, and long-standing researchers. They possess extensive knowledge in a wide range of subjects and undergo rigorous language and technical training to ensure precise editing. In addition, their deep understanding of subject-specific nuances assures richness, quality, and clarity about your manuscript.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-slate-900 font-bold text-xl leading-none mt-1">•</span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Complete Assessment of Language, Syntax, and Format:
                </strong>{' '}
                Manuscript editing by Pubrica ensures stringent correction of typographical, grammatical, and punctuation errors while giving refinement to language, clarity, tone, and style. All manuscripts are reviewed strictly on a two-tiered system by experts in editing.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-slate-900 font-bold text-xl leading-none mt-1">•</span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Journal manuscript editing services:
                </strong>{' '}
                by Pubrica ensures stringent correction of typographical, grammatical, and punctuation errors while giving refinement to language, clarity, tone, and style. All manuscripts are reviewed strictly on a two-tiered system by experts in editing.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};