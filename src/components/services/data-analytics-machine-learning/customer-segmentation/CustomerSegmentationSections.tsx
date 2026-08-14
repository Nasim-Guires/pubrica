'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const stepsData: Step[] = [
  {
    id: 1,
    title: 'Strategic Segmentation Refinement',
    description:
      'Our experts meticulously refine the segmentation strategy for precision and effectiveness, aligning with industry standards and best practices to ensure optimal outcomes.',
    icon: "/images/data-analytics-machine-learning/customer-segmentation/Strategic-Segmentation-Refinement.png",
  },
  {
    id: 2,
    title: 'Comprehensive Market Data Analysis',
    description:
      'We conduct a thorough review of market data to identify priority segments based on demographics, behavior patterns, and preferences. This ensures that segmentation begins with a strong evidence-driven foundation using data analytics algorithms.',
    icon: "/images/data-analytics-machine-learning/customer-segmentation/Comprehensive-Market-Data-Analysis.png",
  },
  {
    id: 3,
    title: 'Enhancement for Relevance and Impact',
    description:
      'We enhance the segmentation framework to elevate readability, relevance, and strategic appeal, addressing market nuances and aligning with client objectives.',
    icon: "/images/data-analytics-machine-learning/customer-segmentation/Enhancement-for-Relevance-and-Impact.png",
  },
  {
    id: 4,
    title: 'Final Integration and Quality Assurance',
    description:
      'A final check ensures all refinements are seamlessly integrated, presenting a coherent and polished segmentation approach that is ready for immediate implementation.',
    icon: "/images/data-analytics-machine-learning/customer-segmentation/Final-Integration-and-Quality-Assurance.png",
  },
];

export default function CustomerSegmentationSections() {
  const [activeTab, setActiveTab] = useState<'mapping' | 'collaboration'>('mapping');

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* ========================================================= */}
      {/* SECTION 1: Step by Step Process                           */}
      {/* ========================================================= */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
          How Our Customer Segmentation Service Works
        </h2>
        <h3 className="text-lg font-semibold text-slate-600 mb-3">
          Our Step By Step Process
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12 text-xs md:text-sm leading-relaxed">
          Our customer segmentation analytics approach combines data-driven analysis with strategic refinement, ensuring clarity, precision, and alignment with evolving market dynamics.
        </p>

        {/* Alternating Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start max-w-6xl mx-auto">
          {stepsData.map((step) => {
            const isEven = step.id % 2 === 0;

            {/* Reusable Card Component with Hover State */}
            const processCard = (
              <div className="group relative w-full bg-white hover:bg-neutral-800 p-6 rounded-sm border border-slate-200 hover:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col min-h-[260px] cursor-pointer">
                <div className="relative w-10 h-10 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Image src={step.icon} alt="" fill className="object-contain" />
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-white text-sm mb-3 leading-snug transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600 group-hover:text-neutral-300 leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            );

            return (
              <div key={step.id} className="flex flex-col items-center w-full">
                {/* ODD STEPS (1, 3): Circle TOP -> Stem -> Bar -> Card BOTTOM */}
                {!isEven && (
                  <>
                    <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                      {step.id}
                    </div>
                    <div className="w-0.5 h-6 bg-cyan-600" />
                    <div className="w-full h-1.5 bg-cyan-600 mb-4" />
                    {processCard}
                  </>
                )}

                {/* EVEN STEPS (2, 4): Card TOP -> Bar -> Stem -> Circle BOTTOM */}
                {isEven && (
                  <>
                    {processCard}
                    <div className="w-full h-1.5 bg-cyan-600 mt-4" />
                    <div className="w-0.5 h-6 bg-cyan-600" />
                    <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                      {step.id}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: Customer Segmentation Example (Interactive)    */}
      {/* ========================================================= */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
            Customer Segmentation Example by Pubrica
          </h2>

          {/* Navigation Tabs */}
          <div className="flex justify-start gap-2 mb-6">
            <button
              onClick={() => setActiveTab('mapping')}
              className={`px-5 py-2.5 rounded-t-md text-sm font-semibold transition-colors ${
                activeTab === 'mapping'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Customer Segmentation Mapping
            </button>
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`px-5 py-2.5 rounded-t-md text-sm font-semibold transition-colors ${
                activeTab === 'collaboration'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Customer Collaboration
            </button>
          </div>

          {/* Display Container */}
          <div className="bg-sky-50 border border-sky-100 rounded-b-lg rounded-tr-lg p-6 shadow-inner">
            <h3 className="text-lg font-bold text-cyan-800 mb-4">
              {activeTab === 'mapping'
                ? 'Customer Segmentation Mapping'
                : 'Customer Collaboration Framework'}
            </h3>

            {/* Content Image Container */}
            <div className="relative w-full h-[350px] md:h-[450px] bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center">
              {activeTab === 'mapping' ? (
                <Image
                  src="/images/data-analytics-machine-learning/customer-segmentation/Graphical-Abstract-Sample-Work-1.webp"
                  alt="Customer Segmentation Model Loss and Accuracy Chart"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              ) : (
                <Image
                  src="/images/data-analytics-machine-learning/customer-segmentation/Graphical-Abstract-Sample-Work-2.webp"
                  alt="Customer Collaboration and Data Insights Display"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: Sample Work & Report Download Callout           */}
      {/* ========================================================= */}
      <section className="py-12 px-4 bg-emerald-50/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Representative Image */}
          <div className="relative w-full h-[280px] md:h-[350px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/data-analytics-machine-learning/customer-segmentation/Customer-Segmentation-Sample-Work.webp"
              alt="Professional analyzing customer segmentation sample work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Details & Action Buttons */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Customer Segmentation Sample Work
              </h3>
              <button className="w-full bg-black hover:bg-neutral-800 text-white font-medium py-2.5 px-6 rounded-full transition-colors text-sm">
                Discover More
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                Explore our customer segmentation sample work, crafted to meet rigorous analytical standards, industry specific requirements, and project timelines. We deliver precise, actionable, and insight-driven results that enhance marketing strategies, business growth, and customer engagement outcomes.
              </p>
              <button className="w-full bg-black hover:bg-neutral-800 text-white font-medium py-2.5 px-6 rounded-full transition-colors text-sm">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}