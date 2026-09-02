'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "STRATEGIC SEGMENTATION REFINEMENT",
    description:
      "Our experts meticulously refine the segmentation strategy for precision and effectiveness, aligning with industry standards and best practices to ensure optimal outcomes.",
    iconSrc:
      "/images/data-analytics-machine-learning/customer-segmentation/Strategic-Segmentation-Refinement.png",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "COMPREHENSIVE MARKET DATA ANALYSIS",
    description:
      "We conduct a thorough review of market data to identify priority segments based on demographics, behavior patterns, and preferences. This ensures that segmentation begins with a strong evidence-driven foundation using data analytics algorithms.",
    iconSrc:
      "/images/data-analytics-machine-learning/customer-segmentation/Comprehensive-Market-Data-Analysis.png",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "ENHANCEMENT FOR RELEVANCE AND IMPACT",
    description:
      "We enhance the segmentation framework to elevate readability, relevance, and strategic appeal, addressing market nuances and aligning with client objectives.",
    iconSrc:
      "/images/data-analytics-machine-learning/customer-segmentation/Enhancement-for-Relevance-and-Impact.png",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "FINAL INTEGRATION AND QUALITY ASSURANCE",
    description:
      "A final check ensures all refinements are seamlessly integrated, presenting a coherent and polished segmentation approach that is ready for immediate implementation.",
    iconSrc:
      "/images/data-analytics-machine-learning/customer-segmentation/Final-Integration-and-Quality-Assurance.png",
    position: "bottom",
  },
];
export default function CustomerSegmentationSections() {
  const [activeTab, setActiveTab] = useState<'mapping' | 'collaboration'>('mapping');

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* ========================================================= */}
      {/* SECTION 1: Step by Step Process                           */}
      {/* ========================================================= */}
      <EditorialWorkflowSection
        heading="How Our Customer Segmentation Service Works"
        subheading="Our Step By Step Process"
        description="Our customer segmentation analytics approach combines data-driven analysis with strategic refinement, ensuring clarity, precision, and alignment with evolving market dynamics."
        steps={steps}
      />

      {/* ========================================================= */}
      {/* SECTION 2: Customer Segmentation Example (Interactive)    */}
      {/* ========================================================= */}
      <section className="py-7 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
            Customer Segmentation Example by Pubrica
          </h2>

          {/* Navigation Tabs */}
          <div className="flex justify-start gap-2 mb-6">
            <button
              onClick={() => setActiveTab('mapping')}
              className={`px-5 py-2.5 rounded-t-md text-sm font-semibold transition-colors ${activeTab === 'mapping'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
            >
              Customer Segmentation Mapping
            </button>
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`px-5 py-2.5 rounded-t-md text-sm font-semibold transition-colors ${activeTab === 'collaboration'
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
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/data-analytics-machine-learning/customer-segmentation/Customer-Segmentation-Sample-Work.webp",
          alt: "Professional analyzing customer segmentation sample work",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading: "Customer Segmentation Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our customer segmentation sample work, crafted to meet rigorous analytical standards, industry specific requirements, and project timelines. We deliver precise, actionable, and insight-driven results that enhance marketing strategies, business growth, and customer engagement outcomes.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />
    </div>
  );
}