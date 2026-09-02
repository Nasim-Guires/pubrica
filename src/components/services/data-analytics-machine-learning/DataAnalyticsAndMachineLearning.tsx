import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Link from 'next/link';
import React from 'react';

export const DataAnalyticsAndMachineLearning: React.FC = () => {
  return (
    <div className="w-full bg-white font-sans text-left text-gray-850 selection:bg-emerald-100">

      {/* --- Section 1: Dark Header Hero Banner --- */}
      <HeroBanner
        title="Data Analytics and Machine Learning Services"
        description="Pubrica provides end-to-end machine learning solutions, turning raw data into intelligent, predictive, and actionable insights. Our services ensure accuracy, compliance, and readiness for deployment, empowering businesses and researchers with reliable models and data-driven decisions."
        headingAs="h1"
      />

      {/* --- Section 2: Core Offerings & Split Dashboard Showcase --- */}
      <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-gray-50/50">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">

          {/* Left Text and Features Side */}
          <div className="flex-1 space-y-6 text-left">
            <h2 className="text-[#0c313a] text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-normal">
              Ensure Robust Results with Pubrica’s Machine Learning & Data Analytics,
              Delivering Expert Data Management, Custom AI Models, and Insightful
              Visualizations for Research and Business Accuracy
            </h2>

            <p className="text-gray-700 text-sm md:text-[14px] leading-relaxed">
              Pubrica’s team of data science, AI, and machine learning experts has
              delivered over 100+ ML projects, empowering researchers and businesses
              with advanced data analytics, AI solutions, and predictive modeling. We
              transform raw data into actionable insights, intelligent visualizations, and
              publication-ready outputs for medical research, life sciences, healthcare,
              and business intelligence.
            </p>

            {/* Red Bullet Feature List */}
            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-2.5 text-sm md:text-[14px] text-gray-800 leading-relaxed">
                <span className="text-[#c00] text-lg leading-none mt-1 select-none font-bold">▪</span>
                <p>
                  End-to-End Data Management: Cleaning, structuring, and preparing
                  datasets for accurate machine learning analysis.
                </p>
              </li>
              <li className="flex items-start gap-2.5 text-sm md:text-[14px] text-gray-800 leading-relaxed">
                <span className="text-[#c00] text-lg leading-none mt-1 select-none font-bold">▪</span>
                <p>
                  Custom AI/ML Models: Scalable and cost-effective machine learning
                  algorithms tailored to your{" "}
                  <Link
                    href="/academy/statistical-analysis/how-to-develop-a-good-research-hypothesis"
                    className="text-sky-600 underline-offset-2 hover:underline"
                  >
                    research
                  </Link>{" "}
                  or business needs.
                </p>
              </li>
              <li className="flex items-start gap-2.5 text-sm md:text-[14px] text-gray-800 leading-relaxed">
                <span className="text-[#c00] text-lg leading-none mt-1 select-none font-bold">▪</span>
                <p>
                  Data Visualization & Publication Support: Clear, insightful charts, tables,
                  and figures for research publications, white papers, and business reports.
                </p>
              </li>
            </ul>

            <div className="pt-2 space-y-5">
              <p className="text-gray-800 text-sm md:text-[14px] leading-relaxed">
                With proven expertise in AI, data analytics, and healthcare research, we deliver compliant, reliable, and impactful results that support informed decision-making.
              </p>
              <div>
                <GetFreeQuoteButton />
              </div>
            </div>
          </div>

          {/* Right Image Wrapper with Solid Teal Backdrop Accent */}
          <div className="relative w-full lg:w-[460px] shrink-0 pt-4 pr-4">
            <div className="relative z-10 overflow-hidden">
              <img
                src="/images/data-analytics-machine-learning/Ensure-Robust-Results-with-Pubricas-Machine-Learning-Data-Analytics.webp"
                alt="Ensure Robust Results with Pubrica's Machine Learning & Data Analytics"
                className="w-full h-auto object-cover block"
              />
            </div>
            {/* Dark Teal Accent Block Behind the Bottom-Left Portion */}
          </div>

        </div>
      </section>
    </div>
  );
};