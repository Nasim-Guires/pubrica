import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';

export const DataAnalyticsAndMachineLearning: React.FC = () => {
  return (
    <div className="w-full bg-white font-sans text-left text-gray-850 selection:bg-emerald-100">
      
      {/* --- Section 1: Dark Header Hero Banner --- */}
      <section className="w-full bg-gradient-to-b from-[#1c2e2a] via-[#121f1c] to-[#0b1412] py-14 px-4 sm:px-6 md:px-12 lg:px-24 border-b border-emerald-950/20 text-center">
        <div className="max-w-6xl mx-auto border border-gray-400/30 rounded-none p-6 md:p-10 my-2 backdrop-blur-sm bg-black/5">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold tracking-tight mb-4">
            Data Analytics and Machine Learning Services
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto font-light">
            Pubrica provides end-to-end machine learning solutions, turning raw data into intelligent, predictive, and actionable insights. Our services ensure accuracy, compliance, and readiness for deployment, empowering businesses and researchers with reliable models and data-driven decisions.
          </p>
        </div>
      </section>

      {/* --- Section 2: Core Offerings & Split Dashboard Showcase --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          
          {/* Left Text and Features Side */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#0c313a] text-lg sm:text-xl md:text-2xl lg:text-[25px] font-black leading-tight tracking-tight">
              Ensure Robust Results with Pubrica’s Machine Learning & Data Analytics, Delivering Expert Data Management, Custom AI Models, and Insightful Visualizations for Research and Business Accuracy
            </h2>
            
            <p className="text-gray-700 text-xs sm:text-sm md:text-[14px] leading-relaxed text-justify">
              Pubrica’s team of data science, AI, and machine learning experts has delivered over 100+ ML projects, empowering researchers and businesses with advanced data analytics, AI solutions, and predictive modeling. We transform raw data into actionable insights, intelligent visualizations, and publication-ready outputs for medical research, life sciences, healthcare, and business intelligence.
            </p>

            {/* Custom Red Bullet Feature List */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 text-xs sm:text-sm md:text-[14px]">
                <span className="text-[#c00] font-serif text-lg leading-none mt-0.5 select-none">•</span>
                <p className="text-gray-800 font-normal leading-relaxed">
                  <strong className="text-black font-bold">End-to-End Data Management:</strong> Cleaning, structuring, and preparing datasets for accurate machine learning analysis.
                </p>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm md:text-[14px]">
                <span className="text-[#c00] font-serif text-lg leading-none mt-0.5 select-none">•</span>
                <p className="text-gray-800 font-normal leading-relaxed">
                  <strong className="text-black font-bold">Custom AI/ML Models:</strong> Scalable and cost-effective machine learning algorithms tailored to your <a href="#" className="text-blue-600 hover:underline">research</a> or business needs.
                </p>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm md:text-[14px]">
                <span className="text-[#c00] font-serif text-lg leading-none mt-0.5 select-none">•</span>
                <p className="text-gray-800 font-normal leading-relaxed">
                  <strong className="text-black font-bold">Data Visualization & Publication Support:</strong> Clear, insightful charts, tables, and figures for research publications, white papers, and business reports.
                </p>
              </li>
            </ul>

            <div className="pt-4 border-t border-gray-100 space-y-5">
              <p className="text-gray-700 text-xs sm:text-sm md:text-[14px] leading-relaxed font-semibold">
                With proven expertise in AI, data analytics, and healthcare research, we deliver compliant, reliable, and impactful results that support informed decision-making.
              </p>
              <div>
              <GetFreeQuoteButton/>
              </div>
            </div>
          </div>

          {/* Right Product Laptop Graphic Wrapper */}
          <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0 relative mt-4 lg:mt-0 select-none">
            {/* Deep Slate Offset Background Accent */}
            <div className="absolute -inset-2 bg-[#0c2420] rounded-lg translate-x-3 translate-y-6 z-0" />
            
            {/* Main Interactive Laptop Mock Frame */}
            <div className="bg-white rounded-md border border-gray-200 p-3 shadow-xl relative z-10 flex flex-col items-center">
              {/* Upper Floating Brain/Network Icon Frame Accent */}
              <div className="absolute -top-3 -left-3 bg-[#1e293b] text-white p-2 rounded shadow border border-slate-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              {/* Mock Laptop Screen Image Area */}
              <div className="w-full aspect-[4/3] bg-zinc-50 border border-zinc-200 rounded overflow-hidden flex flex-col justify-between p-3">
                <div className="flex justify-between items-center border-b border-zinc-200/60 pb-1.5 mb-2">
                  <div className="h-2 w-16 bg-zinc-200 rounded" />
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                  </div>
                </div>
                
                {/* Content Graphic Mock Grid */}
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div className="col-span-2 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-100 rounded p-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="h-1.5 w-1/2 bg-emerald-600/30 rounded" />
                      <div className="h-3 w-full bg-emerald-700/10 rounded" />
                    </div>
                    <div className="h-8 w-full bg-emerald-600/20 rounded-sm" />
                  </div>
                  <div className="bg-zinc-100/70 border border-zinc-200 rounded p-1.5 flex flex-col gap-1.5">
                    <div className="h-full bg-amber-500/10 rounded-sm" />
                    <div className="h-full bg-sky-500/10 rounded-sm" />
                  </div>
                </div>

                {/* Lower Charts Bar Area */}
                <div className="h-10 w-full bg-zinc-100 rounded-sm border border-zinc-200/60 mt-2 p-1 flex gap-2 items-center">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 flex-shrink-0" />
                  <div className="w-full space-y-1">
                    <div className="h-1 w-full bg-zinc-300 rounded" />
                    <div className="h-1 w-2/3 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>

              {/* Lower Laptop Keyboard Support Line */}
              <div className="w-11/12 h-1 bg-zinc-300 rounded-full mt-2 shadow-sm" />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};