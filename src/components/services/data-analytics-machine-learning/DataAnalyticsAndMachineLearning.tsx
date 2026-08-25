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
                  <strong className="text-black font-bold">Custom AI/ML Models:</strong> Scalable and cost-effective machine learning algorithms tailored to your <a href="/services/research-services" className="text-blue-600 hover:underline">research</a> or business needs.
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
                <GetFreeQuoteButton />
              </div>
            </div>
          </div>

          {/* Right Product Laptop Graphic Wrapper */}
          <div className="relative w-full max-w-[480px] select-none p-6">
            {/* Dark Teal Offset Background Accent */}
            <div className="absolute inset-0 top-10 left-6 rounded-2xl z-0" />

            {/* Main Foreground Image Card */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
              <img
                src="/images/data-analytics-machine-learning/Ensure-Robust-Results-with-Pubricas-Machine-Learning-Data-Analytics.webp"
                alt="Ensure Robust Results with Pubrica's Machine Learning & Data Analytics"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};