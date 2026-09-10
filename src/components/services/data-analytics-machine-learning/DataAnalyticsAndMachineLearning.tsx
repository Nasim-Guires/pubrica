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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 bg-gray-50/50">
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#0c313a] leading-tight">
            Ensure Robust Results with Pubrica’s Machine Learning & Data Analytics,
            Delivering Expert Data Management, Custom AI Models, and Insightful
            Visualizations for Research and Business Accuracy
          </h2>

          <div className="flow-root">
            {/* Right Image */}
            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
              <div className="relative w-full max-w-md">
                <img
                  src="/images/data-analytics-machine-learning/Ensure-Robust-Results-with-Pubricas-Machine-Learning-Data-Analytics.webp"
                  alt="Ensure Robust Results with Pubrica's Machine Learning & Data Analytics"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-5 text-sm md:text-[14px] text-gray-700 leading-relaxed">
              <p>
                Pubrica’s team of data science, AI, and machine learning experts has
                delivered over 100+ ML projects, empowering researchers and businesses
                with advanced data analytics, AI solutions, and predictive modeling. We
                transform raw data into actionable insights, intelligent visualizations, and
                publication-ready outputs for medical research, life sciences, healthcare,
                and business intelligence.
              </p>

              {/* Red Bullet Feature List */}
              <ul className="space-y-3 pl-4 list-disc marker:text-red-600">
                <li>
                  End-to-End Data Management: Cleaning, structuring, and preparing
                  datasets for accurate machine learning analysis.
                </li>

                <li>
                  Custom AI/ML Models: Scalable and cost-effective machine learning
                  algorithms tailored to your{" "}
                  <Link
                    href="/academy/statistical-analysis/how-to-develop-a-good-research-hypothesis"
                    className="text-sky-600 underline-offset-2 hover:underline"
                  >
                    research
                  </Link>{" "}
                  or business needs.
                </li>

                <li>
                  Data Visualization & Publication Support: Clear, insightful charts, tables,
                  and figures for research publications, white papers, and business reports.
                </li>
              </ul>

              <div className="pt-2 space-y-5">
                <p className="text-gray-800 text-sm md:text-[14px] leading-relaxed">
                  With proven expertise in AI, data analytics, and healthcare research, we deliver compliant, reliable, and impactful results that support informed decision-making.
                </p>

                <div className="pt-2">
                  <GetFreeQuoteButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};