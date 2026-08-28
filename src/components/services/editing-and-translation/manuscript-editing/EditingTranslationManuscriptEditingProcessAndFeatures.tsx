'use client';

import React from 'react';
import Image from 'next/image';

export const EditingTranslationManuscriptEditingProcessAndFeatures: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      {/* SECTION 1: Step-by-Step Process with Hover Effects */}
      <section className="py-6 sm:py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              <div className="mb-4 relative w-10 h-10">
                <Image
                  src="/images/editing-and-translation/manuscript-editing/Upload-Your-Manuscript-Select-a-Service-and-Plan.png"
                  alt="Upload your manuscript, select a service, and plan"
                  width={65}
                  height={65}
                  className="w-10 h-10 object-contain"
                />
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
              <div className="mb-4 relative w-10 h-10">
                <Image
                  src="/images/editing-and-translation/manuscript-editing/The-Two-Step-Edit-Process-Delivers-Top-Notch-Quality-and-Timely-Delivery.png"
                  alt="The two-step edit process"
                  width={65}
                  height={65}
                  className="w-10 h-10 object-contain"
                />
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
              <div className="mb-4 relative w-10 h-10">
                <Image
                  src="/images/editing-and-translation/manuscript-editing/Review-Final-Files-Ask-Questions-and-Collaborate.png"
                  alt="Review final files, ask questions, and collaborate"
                  width={65}
                  height={65}
                  className="w-10 h-10 object-contain"
                />
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
      <section className="w-full bg-emerald-950 text-white py-5 px-4 sm:px-6 lg:px-8 text-center">
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
      <section className="py-6 sm:py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
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
                src="/images/editing-and-translation/manuscript-editing/Features-of-Our-Research-Paper-Manuscript-Editing-Services.png"
                alt="Features of our research paper manuscript editing services"
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