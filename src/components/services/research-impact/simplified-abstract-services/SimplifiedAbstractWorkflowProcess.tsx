'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Data structure for Table Rows
interface ServiceTypeRow {
  serviceType: string;
  idealFor: string;
  features: string[];
}

const serviceTypesData: ServiceTypeRow[] = [
  {
    serviceType: 'Research abstract writing, entry-level abstract',
    idealFor: 'Student projects, internal reports, non-peer-reviewed content',
    features: [
      'Unstructured abstract (150–200 words)',
      'Summary of objectives, methodology, and key findings',
    ],
  },
  {
    serviceType: 'Journal Submission-ready Abstract',
    idealFor: 'Submissions to academic journals and conferences',
    features: [
      'Structured (IMRaD or journal-specific format)',
      'Focus on precision and clarity for interdisciplinary audiences',
      'Keyword optimization for indexing',
    ],
  },
  {
    serviceType: 'Grant Proposal Abstract',
    idealFor: 'Abstract for funding application, proposal abstract writing',
    features: [
      'Concise and impactful abstract focusing on research goals and outcomes',
      'Tailored to grant body requirements, with emphasis on significance, innovation, and impact',
    ],
  },
  {
    serviceType: 'Systematic Review & PRISMA compliance Abstract',
    idealFor: 'Systematic reviews and meta-analyses',
    features: [
      'PRISMA-aligned structure',
      'Summarizes inclusion/exclusion criteria, data analysis, and findings',
      'Focus on clarity and reproducibility',
    ],
  },
  {
    serviceType: 'Medical abstract writing, clinical abstract services',
    idealFor: 'Medical research papers, clinical trials, epidemiological studies',
    features: [
      'Clear, structured summary of clinical data, results, and outcomes',
      'Focus on public health relevance and statistical significance',
      'Meets medical journal standards (e.g., The Lancet, BMJ)',
      'Keyword optimization for medical indexing',
    ],
  },
  {
    serviceType: 'Thesis abstract service, dissertation abstract writing',
    idealFor: 'PhD students or scholars submitting a thesis/dissertation',
    features: [
      'Comprehensive yet concise summary of entire research',
      'IMRaD format or as per university guidelines',
      'Focus on contribution, methodology, and findings',
    ],
  },
  {
    serviceType: 'Multilingual research abstracts, translated abstracts',
    idealFor: 'For global audiences',
    features: [
      'Simplified summaries translated into other languages for accessibility to non-English-speaking audiences.',
    ],
  },
  {
    serviceType: 'Executive Summaries',
    idealFor: 'For business or policy leaders',
    features: [
      'Tailored for decision-makers.',
      'Focus on high-level findings, implications, and recommendations without technical detail.',
    ],
  },
  {
    serviceType: 'Layman Abstracts',
    idealFor: 'General Public',
    features: [
      'Designed for a general audience.',
      'Translates complex research into easy-to-understand language.',
    ],
  },
  {
    serviceType: 'Podcast-Ready Abstracts',
    idealFor: 'For audio content delivery',
    features: [
      'Scripted summaries optimized for podcasts.',
      'Balancing brevity with informativeness.',
    ],
  },
  {
    serviceType: 'Investor-Focused Abstracts',
    idealFor: 'VCs, industry stakeholders',
    features: [
      'Highlights commercial potential.',
      'Market relevance and ROI aspects of research.',
    ],
  },
  {
    serviceType: 'Policy Brief Abstracts',
    idealFor: 'Government, NGOs',
    features: [
      'Informs policymakers and advocacy groups.',
      'Focuses on societal relevance and policy recommendations.',
    ],
  },
];

// Data structure for Workflow Steps
interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'MANUSCRIPT SUBMISSION',
    description:
      'You submit your full-length research manuscript, thesis chapter, or academic paper, along with any specific journal formatting guidelines or institutional requirements.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "INITIAL REVIEW BY PUBRICA'S DOMAIN EXPERTS",
    description:
      "Our subject-matter experts thoroughly review your study's objectives, methodology, results, and conclusions. We extract the core scientific message that forms the basis of your research abstract.",
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'ABSTRACT STRUCTURING & DRAFTING',
    description:
      'A clear, coherent, and structured abstract is drafted using formats like IMRaD or unstructured formats, depending on your target journal. This step ensures effective scientific communication.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'KEYWORD IDENTIFICATION & OPTIMIZATION',
    description:
      'We integrate high-impact, SEO-optimized keywords to improve visibility on platforms like PubMed, Scopus, and Web of Science. This helps your abstract reach the right scholarly audience.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'INTERNAL REVIEW & QUALITY CHECK BY THE PUBRICA TEAM',
    description:
      'Your abstract undergoes internal peer review for scientific accuracy, clarity, and language precision. This includes editing and proofreading by experienced editors to maintain publication standards.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'FINAL DELIVERY',
    description:
      'You receive a submission-ready abstract, customized to your target audience, platform, or publication outlet, ensuring alignment with both technical content and readability expectations.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function SimplifiedAbstractTypesAndWorkflow() {
  // State set to null so NO card is active/black by default
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans py-6 space-y-20">
      
      {/* SECTION 1: Types of Simplified Abstract Services We Offer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
            Types of Simplified Abstract Services We Offer
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            Our{' '}
            <Link href="/services/research-impact/simplified-abstract-services" className="text-sky-600 hover:underline font-medium">
              simplified abstract
            </Link>{' '}
            writing services are tailored to diverse academic, clinical, policy, and public communication needs. Whether you're preparing a journal-ready abstract, a grant submission, or a lay summary, our professional abstract writers ensure clarity, structure, and impact across formats.
          </p>
        </div>

        {/* Services Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-bold">
                <th className="py-3.5 px-4 sm:px-6 w-1/4">Service Type</th>
                <th className="py-3.5 px-4 sm:px-6 w-1/4">Ideal For</th>
                <th className="py-3.5 px-4 sm:px-6 w-2/4">Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {serviceTypesData.map((row, idx) => {
                const isEvenRow = idx % 2 === 1;
                return (
                  <tr
                    key={idx}
                    className={isEvenRow ? 'bg-[#eef5f8]/60' : 'bg-white'}
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 align-top">
                      {row.serviceType}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-700 align-top">
                      {row.idealFor}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-700 align-top">
                      <ul className="space-y-1.5 list-disc list-inside">
                        {row.features.map((feat, fIdx) => (
                          <li key={fIdx} className="leading-relaxed">
                            <span className="text-slate-800">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </section>

      {/* SECTION 2: How Our Simplified Abstract Service Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-slate-200/80 pt-7">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#033c2a]">
            How Our Simplified Abstract Service Works
          </h2>
          <p className="text-lg font-semibold text-slate-700">
            Our Step-By-Step Process
          </p>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Pubrica's{' '}
            <Link href="/services/research-impact/simplified-abstract-services" className="text-sky-600 hover:underline">
              simplified abstract writing service
            </Link>{' '}
            is designed to be structured, expert-led, and process-driven. Each step ensures scientific clarity, accuracy, and full compliance with{' '}
            <Link href="/services/publication-support/journal-submission" className="text-sky-600 hover:underline">
              journal submission
            </Link>{' '}
            requirements. Our goal is to convert your detailed manuscript into a concise, professional, and journal-ready abstract.
          </p>
        </div>

        {/* 6-Step Alternating Interactive Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
          
          {/* Horizontal Line across desktop */}
          <div className="hidden lg:block absolute top-[5.2rem] left-6 right-6 h-1 bg-teal-600 z-0" />

          {workflowSteps.map((step) => {
            const isHovered = activeStep === step.id;
            const isEven = step.id % 2 === 0;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative z-10 flex flex-col items-center ${
                  isEven ? 'lg:flex-col-reverse' : 'lg:flex-col'
                }`}
              >
                {/* Step Circle */}
                <div className="w-9 h-9 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-md my-3">
                  {step.id}
                </div>

                {/* Card Container */}
                <div
                  className={`w-full p-5 rounded-xl border transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-start min-h-[300px] shadow-sm ${
                    isHovered
                      ? 'bg-neutral-800 text-white border-neutral-800 shadow-xl scale-105'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3 flex flex-col items-center">
                    <div className={`${isHovered ? 'text-teal-400' : 'text-slate-700'} transition-colors`}>
                      {step.iconSvg}
                    </div>
                    <h3 className={`text-xs font-bold uppercase tracking-wide leading-snug ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[11px] sm:text-xs leading-relaxed ${isHovered ? 'text-slate-300' : 'text-slate-600'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}