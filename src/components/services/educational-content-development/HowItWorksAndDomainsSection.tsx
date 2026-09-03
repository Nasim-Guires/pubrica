"use client";

import React from "react";
import Image from "next/image";
import {
  Book,
  Edit3,
} from "lucide-react";
import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";

// ==========================================
// DATA STRUCTURES
// ==========================================

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}
const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "INITIAL CONSULTATION & NEEDS ASSESSMENT",
    description:
      "Engage in an initial discussion where we understand your educational objectives, target audience, and content requirements to tailor our approach effectively.",
    iconSrc: "/images/publication-support/video-abstract/Send-Materials.png",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "STRATEGIC ROADMAP DEVELOPMENT",
    description:
      "Strategize a comprehensive roadmap outlining topics, learning objectives, and engaging formats aligned with your educational goals and audience preferences.",
    iconSrc:
      "/images/publication-support/video-abstract/Script-Content-Development.png",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "EXPERT CONTENT CREATION",
    description:
      "Our expert team crafts high-quality educational content using evidence-based methodologies, ensuring accuracy, clarity, and effectiveness in conveying complex concepts.",
    iconSrc:
      "/images/publication-support/video-abstract/Author-Feedback.png",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "REVIEW & FEEDBACK LOOP",
    description:
      "Your feedback is integrated through thorough review cycles to refine the content and ensure alignment with your expectations.",
    iconSrc:
      "/images/publication-support/video-abstract/Video-Development.png",
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "FINAL DELIVERY & IMPLEMENTATION SUPPORT",
    description:
      "We deliver polished, ready-to-use educational content and guide effective implementation and learner engagement.",
    iconSrc:
      "/images/publication-support/video-abstract/Add-Captions-and-Subtitles.png",
    position: "top",
  },
];

const elearningDomains = [
  {
    title: "ILT/VILT",
    iconSrc: "/images/educational-content-development/ILT_VILT.webp",
  },
  {
    title: "Blended Learning",
    iconSrc: "/images/educational-content-development/Blended-Learning.webp",
  },
  {
    title: "Video Based Learning",
    iconSrc: "/images/educational-content-development/Video-Based-Learning.webp",
  },
  {
    title: "Content Based Learning",
    iconSrc: "/images/educational-content-development/Content-Based-Learning.webp",
  },
  {
    title: "Micro Learning",
    iconSrc: "/images/educational-content-development/Micro-Learning.webp",
  },
  {
    title: "Personalised Learning",
    iconSrc: "/images/educational-content-development/Personalised-Learning.webp",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function HowItWorksAndDomainsSection() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ==========================================
            SECTION 1: PROCESS WORKFLOW (STEP-BY-STEP)
        ========================================== */}
        <EditorialWorkflowSection
          heading="How Our Educational Content Development Service Works"
          subheading="Our Step-by-Step Process"
          description="Our Educational Content Development Service transforms complex concepts into engaging, learner-friendly materials. We combine strategic planning, expert content creation, and rigorous quality checks to deliver impactful educational experiences."
          steps={steps}
        />

        {/* ==========================================
            SECTION 2: E-LEARNING DOMAINS GRID
        ========================================== */}
        <section className="text-center pt-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0d3b44] mb-10">
            We Offer Fully Functional Solutions To Cover Various e-learning
            Domains
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {elearningDomains.map((domain, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Circular Icon Container */}
                <div className="relative w-16 h-16 mb-3">
                  <Image src={domain.iconSrc} alt={domain.title} fill className="object-contain" sizes="64px" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {domain.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: VALUE PROPOSITION CARDS
        ========================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Card 1: Plagiarism Free Content */}
          <div className="group relative rounded-md overflow-hidden bg-neutral-900 text-white p-8 md:p-10 shadow-lg text-center flex flex-col items-center justify-center border border-neutral-800 transition-all duration-300 ease-in-out hover:bg-black hover:border-neutral-600 hover:shadow-2xl hover:scale-[1.01] min-h-[220px]">
            {/* Subtle background black overlay on hover */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-300 -z-0" />

            <div className="relative z-10 space-y-3 max-w-md">
              <div className="w-12 h-12 mx-auto rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md mb-2 transition-transform duration-300 group-hover:scale-110">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold tracking-wide text-white transition-colors duration-300">
                Plagiarism Free Content
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                We assure that all our educational content in terms of both the
                content and the examples given are updated to the latest
                standards, unique, plagiarism-free, and copyright-free.
              </p>
            </div>
          </div>

          {/* Card 2: Adaptable */}
          <div className="group relative rounded-md overflow-hidden bg-neutral-900 text-white p-8 md:p-10 shadow-lg text-center flex flex-col items-center justify-center border border-neutral-800 transition-all duration-300 ease-in-out hover:bg-black hover:border-neutral-600 hover:shadow-2xl hover:scale-[1.01] min-h-[220px]">
            {/* Subtle background black overlay on hover */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-300 -z-0" />

            <div className="relative z-10 space-y-3 max-w-md">
              <div className="w-12 h-12 mx-auto rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md mb-2 transition-transform duration-300 group-hover:scale-110">
                <Edit3 className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold tracking-wide text-white transition-colors duration-300">
                Adaptable
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                All our content development follows the standards and guidelines
                recommended by FAO. Content developed at Pubrica facilitates
                e-tutoring and collaborative learning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
