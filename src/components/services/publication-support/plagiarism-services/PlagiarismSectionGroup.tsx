"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

// --- Data Types ---
interface Step {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc?: string;
}

interface StandardLogo {
  id: number;
  title: string;
  logoSrc: string;
  logoAlt: string;
  url?: string;
}

// --- Component Data ---
// const steps: Step[] = [
//   {
//     stepNumber: 1,
//     title: "UPLOAD YOUR MANUSCRIPT",
//     description:
//       "Upload your manuscript, thesis, or academic document securely through our platform",
//     iconSrc: "/images/publication-support/poster-preparation/submit-your-request-.png",
//   },
//   {
//     stepNumber: 2,
//     title: "MANUSCRIPT PLAGIARISM",
//     description:
//       "Specialized software checks for plagiarism & identifies the percentage",
//     iconSrc: "/images/publication-support/poster-preparation/material-review-and-order-confirmation-.png",
//   },
//   {
//     stepNumber: 3,
//     title: "RE-WRITE",
//     description:
//       "Will rewrite similar/overlapping text of your manuscript to make it plagiarism-free",
//     iconSrc: "/images/publication-support/poster-preparation/scientific-content-editing-.png",
//   },
//   {
//     stepNumber: 4,
//     title: "LANGUAGE STYLE CHECK",
//     description: "Experts check for scientific language accuracy",
//     iconSrc: "/images/publication-support/poster-preparation/poster-design-layout-.png",
//   },
//   {
//     stepNumber: 5,
//     title: "TRACKED CHANGES",
//     description:
//       "Expert adds comments indicating needed revisions, such as word count restrictions",
//     iconSrc: "/images/publication-support/poster-preparation/Revision-and-finalization-.png",
//   },
//   {
//     stepNumber: 6,
//     title: "PUBLISH READY MANUSCRIPT",
//     description: "Receive your plagiarism-free manuscript",
//     iconSrc: "/images/publication-support/poster-preparation/final-delivery-.png",
//   },
// ];

const standards: StandardLogo[] = [
  {
    id: 1,
    title: "Committee on Publication Ethics",
    logoSrc: "/images/publication-support/COPE_thumb.png",
    logoAlt: "COPE Logo",
    url: "https://publicationethics.org/",
  },
  {
    id: 2,
    title: "World Association of Medical Editors",
    logoSrc: "/images/publication-support/WAME.webp",
    logoAlt: "WAME Logo",
    url: "https://wame.org/",
  },
  {
    id: 3,
    title: "International Committee of Medical Journal Editors",
    logoSrc: "/images/publication-support/ICMJE.webp",
    logoAlt: "ICMJE Logo",
    url: "https://www.icmje.org/",
  },
];

export default function PlagiarismSectionGroup() {
  // Active hovered step (defaults to Step 1)
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="w-full font-sans">
      {/* SECTION 1: Why Use Pubrica */}
      <section className="w-full bg-white py-4 md:py-8 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
            Why use Pubrica&apos;s Plagiarism and AI authorship identification
            in Scientific Services?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text & List */}
            <div className="lg:col-span-7 space-y-4">
              <ul className="space-y-3 list-disc pl-5 text-slate-700 text-sm md:text-base leading-relaxed marker:text-red-600">
                <li className="pl-1">
                  Plagiarism is an extremely serious ethical violation in
                  academic publishing. Even small instances of text duplication,
                  self-plagiarism, or AI-generated text can be treated severely,
                  possibly resulting in rejection of a manuscript, damage to
                  your scholarly reputation, and/or serious consequences for
                  your research career. However, identifying what constitutes
                  plagiarism is often not straightforward. Graduate students,
                  early-career researchers, and even seasoned academics may
                  struggle to assess whether their work violates originality
                  standards.
                </li>
                <li className="pl-1">
                  Pubrica&apos;s professional{" "}
                  <Link
                    href="/services/publication-support/plagiarism-services/plagiarism-detection-guide"
                    className="text-blue-600 no-underline hover:no-underline"
                  >
                    plagiarism detection services
                  </Link>{" "}
                  are essential for researchers aiming to ensure their
                  manuscript is free of unethical content. We use iThenticate, a
                  globally trusted plagiarism scanning tool widely adopted by
                  peer-reviewed journals, publishers, and academic institutions.
                </li>
                <li className="pl-1">
                  In addition, our scientific writing experts, trained in best
                  publication practices, provide manuscript feedback with clear
                  recommendations to enhance text originality, reduce the risk
                  of AI-generated overlap, and ensure adherence to research
                  integrity standards. Our goal is to help you submit an
                  ethically compliant manuscript with a strong likelihood of
                  acceptance in reputable journals.
                </li>
              </ul>

              <div className="pt-2">
                <GetFreeQuoteButton />
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-[260px] md:h-[320px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/publication-support/plagiarism-services/Plagiarism-and-AI-authorship-identification-in-Scientific-Services.jpg"
                  alt="AI Authorship Identification Concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Process Steps with Black Hover Effect */}
   <EditorialWorkflowSection
  heading="How the Plagiarism Check and AI-generated content screening Service Works"
  subheading="Our step-by-Step Process"
  description={
    <>
      Most journal editors check manuscripts not only for language clarity and
      study relevance but also for originality. Using services like Pubrica&apos;s
      journal plagiarism checker can allow you to get a plagiarism-free paper
      in just 6 easy steps.
    </>
  }
  steps={[
    {
      stepNumber: 1,
      title: "UPLOAD YOUR MANUSCRIPT",
      description:
        "Upload your manuscript, thesis, or academic document securely through our platform",
      iconSrc:
        "/images/publication-support/poster-preparation/submit-your-request-.png",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "MANUSCRIPT PLAGIARISM",
      description:
        "Specialized software checks for plagiarism & identifies the percentage",
      iconSrc:
        "/images/publication-support/poster-preparation/material-review-and-order-confirmation-.png",
      position: "bottom",
    },
    {
      stepNumber: 3,
      title: "RE-WRITE",
      description:
        "Will rewrite similar/overlapping text of your manuscript to make it plagiarism-free",
      iconSrc:
        "/images/publication-support/poster-preparation/scientific-content-editing-.png",
      position: "top",
    },
    {
      stepNumber: 4,
      title: "LANGUAGE STYLE CHECK",
      description: "Experts check for scientific language accuracy",
      iconSrc:
        "/images/publication-support/poster-preparation/poster-design-layout-.png",
      position: "bottom",
    },
    {
      stepNumber: 5,
      title: "TRACKED CHANGES",
      description:
        "Expert adds comments indicating needed revisions, such as word count restrictions",
      iconSrc:
        "/images/publication-support/poster-preparation/Revision-and-finalization-.png",
      position: "top",
    },
    {
      stepNumber: 6,
      title: "PUBLISH READY MANUSCRIPT",
      description: "Receive your plagiarism-free manuscript",
      iconSrc:
        "/images/publication-support/poster-preparation/final-delivery-.png",
      position: "bottom",
    },
  ]}
/>

      {/* SECTION 3: Banner */}
      <section className="w-full bg-[#0a2f2b] text-white py-6 px-4 md:px-8 text-center">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            Focus on Your Research — We&apos;ll Ensure Its Originality
          </h3>
          <p className="text-xs md:text-sm text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
            With Pubrica, you get an accurate, reliable, and complete plagiarism
            check without the hassle – from detailed assessment to expert
            assistance, we&apos;re here to help you every stage to ensure that
            your work is ready for publication.
          </p>
        </div>
      </section>

      {/* SECTION 4: Compliance & Guidelines */}
      <section className="w-full bg-[#f8fafc] py-8 md:py-6 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 max-w-5xl">
            At Pubrica, our plagiarism check and AI-driven authorship evaluation
            service strictly adheres to internationally recognized ethical
            guidelines and best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {standards.map((item) => (
              <a
                key={item.id}
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-md border border-slate-200 p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-24 mb-6 flex items-center justify-center">
                  <Image
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    width={180}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
                <p className="text-center font-bold text-[#0c373b] group-hover:text-sky-600 transition-colors text-sm md:text-base leading-snug">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}