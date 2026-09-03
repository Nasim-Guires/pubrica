'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceBanner from '@/components/common/ServiceBanner';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';



const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "MANUSCRIPT SUBMISSION",
    description:
      "Submit your manuscript via our online portal, in formats such as Word or PDF.",
    iconSrc:
      "/images/research-impact/scientific-news-report/Manuscript-Submission.png",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "INTERNAL CONTENT REVIEW",
    description:
      "Our internal team will conduct a comprehensive review of your document's content and subject matter.",
    iconSrc:
      "/images/research-impact/scientific-news-report/Internal-Content-Review.png",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "SCIENTIFIC NEWS REPORT DRAFTING",
    description:
      "A content specialist will compile a news report, summarizing key highlights and any innovative aspects of your research.",
    iconSrc:
      "/images/research-impact/scientific-news-report/Scientific-News-Report-Drafting.png",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "FINAL LANGUAGE AND EDITORIAL REVIEW",
    description:
      "The Scientific News Report undergoes a final review by a native English language expert before being delivered to you.",
    iconSrc:
      "/images/research-impact/scientific-news-report/Final-Language-and-Editorial-Review.png",
    position: "bottom",
  },
];

const publishersList = [
  {
    name: 'Taylor & Francis',
    logoUrl: '/images/research-impact/scientific-news-report/Taylor-Francis.png',
  },
  {
    name: 'Wiley',
    logoUrl: '/images/research-impact/scientific-news-report/wiley.png',
  },
  {
    name: 'Springer Nature',
    logoUrl: '/images/publication-support/art-work-preparation/Springer.png',
  },
  {
    name: 'BMJ',
    logoUrl: '/images/research-impact/graphical-abstract/bmj-.png',
  },
  {
    name: 'Elsevier',
    logoUrl: '/images/research-impact/graphical-abstract/Elsevier-.png',
  },
];

export default function ScientificNewsWorkflowProcess() {
  // Set null so no cards are open/black by default
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans py-6 space-y-16">

      {/* 1. Header Banner */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Fast-Track Your Scientific News Reporting with Pubrica"
        description="Deliver cutting-edge scientific news faster with Pubrica’s expert editorial team and efficient workflow solutions. Our specialized support ensures accuracy, clarity, and timely publication—helping you break scientific stories with confidence and speed."
      />
      {/* 2. Step-By-Step Workflow Process */}
      <EditorialWorkflowSection
        heading="How Does The Scientific News Report Work?"
        subheading="Our Step-By-Step Process"
        description="Pubrica follows a systematic workflow to ensure that each scientific news report is accurate, accessible, and publication-ready:"
        steps={steps}
      />

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
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs font-semibold text-slate-700">{pub.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sample Work & Download Report CTA */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/research-impact/scientific-news-report/Scientific-News-Report-Sample-Work.png",
          alt: "Scientist reviewing research documents",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading: "Scientific News Report Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              { text: "Explore our " },
              {
                text: "",
                url: "/services/research-impact/scientific-news-report",
              },
              {
                text: "scientific news report samples professionally crafted to meet your target audience's comprehension level, research significance, and science communication standards.",
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