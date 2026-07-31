'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    description: 'Submit your manuscript via our online portal, in formats such as Word or PDF.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'INTERNAL CONTENT REVIEW',
    description: 'Our internal team will conduct a comprehensive review of your document\'s content and subject matter.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'SCIENTIFIC NEWS REPORT DRAFTING',
    description: 'A content specialist will compile a news report, summarizing key highlights and any innovative aspects of your research.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'FINAL LANGUAGE AND EDITORIAL REVIEW',
    description: 'The Scientific News Report undergoes a final review by a native English language expert before being delivered to you.',
    iconSvg: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const publishersList = [
  {
    name: 'Taylor & Francis',
    logoUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Wiley',
    logoUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Springer Nature',
    logoUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'BMJ',
    logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Elsevier',
    logoUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=300',
  },
];

export default function ScientificNewsWorkflowProcess() {
  // Set null so no cards are open/black by default
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans py-12 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="w-full bg-[#033c2a] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Fast-Track Your Scientific News Reporting with Pubrica
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            Deliver cutting-edge scientific news faster with Pubrica’s expert editorial team and efficient workflow solutions. Our specialized support ensures accuracy, clarity, and timely publication—helping you break scientific stories with confidence and speed.
          </p>
        </div>
      </section>

      {/* 2. Step-By-Step Workflow Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
            How Does The Scientific News Report Work?
          </h2>
          <p className="text-lg font-semibold text-slate-700">
            Our Step-By-Step Process
          </p>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
            Pubrica follows a systematic workflow to ensure that each scientific news report is accurate, accessible, and publication-ready:
          </p>
        </div>

        {/* Workflow Steps Grid with Connecting Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          
          {/* Horizontal Connecting Bar (Visible on desktop) */}
          <div className="hidden lg:block absolute top-[5.2rem] left-8 right-8 h-1.5 bg-teal-600 z-0" />

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
                {/* Step Number Circle */}
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shadow-md my-4">
                  {step.id}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full p-6 rounded-xl border transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-between min-h-[220px] shadow-sm ${
                    isHovered
                      ? 'bg-neutral-800 text-white border-neutral-800 shadow-xl scale-105'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className={`${isHovered ? 'text-teal-400' : 'text-slate-700'} transition-colors`}>
                      {step.iconSvg}
                    </div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isHovered ? 'text-slate-300' : 'text-slate-600'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Top Publishers Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#033c2a]">
          We Have Developed A Scientific News Report For These Top Publishers
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          At Pubrica, we have developed scientific news reports for articles published in leading journals from top publishers, including:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-4">
          {publishersList.map((pub, idx) => (
            <div
              key={idx}
              className="p-4 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-16 bg-slate-50 rounded flex items-center justify-center overflow-hidden">
                <Image
                  src={pub.logoUrl}
                  alt={`${pub.name} Logo`}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-semibold text-slate-700">{pub.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sample Work & Download Report CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm h-64 bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                  alt="Scientist reviewing research documents"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Callouts */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#033c2a]">
                  Scientific News Report Sample Work
                </h3>
                <button
                  type="button"
                  className="px-6 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition-colors"
                >
                  Discover More
                </button>
              </div>

              <div className="space-y-3 pt-4 border-t border-emerald-200/60">
                <h3 className="text-lg font-bold text-[#033c2a]">
                  Download the full Report Now
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Explore our{' '}
                  <Link href="#" className="text-sky-600 hover:underline">
                    scientific news report samples
                  </Link>
                  , professionally crafted to meet your target audience's comprehension level, research significance, and science communication standards.
                </p>
                <button
                  type="button"
                  className="px-6 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition-colors"
                >
                  Discover More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}