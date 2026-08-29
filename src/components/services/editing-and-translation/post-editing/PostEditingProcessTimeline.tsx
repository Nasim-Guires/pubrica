"use client";

import React from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  iconSrc: string;
}

export const PostEditingProcessTimeline: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "MANUSCRIPT ASSESSMENT",
      description:
        "Our experts review your manuscript to understand its structure, content, and intended audience. We identify areas that need improvement for clarity, consistency, and quality.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Manuscript-Assessment.png",
    },
    {
      number: 2,
      title: "CONTENT POST-EDITING",
      description:
        "We refine your text by correcting errors, enhancing readability, and ensuring coherence while preserving your original meaning and style.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Content-Post-Editing.png",
    },
    {
      number: 3,
      title: "LANGUAGE & GRAMMAR ENHANCEMENT",
      description:
        "Grammar, punctuation, and syntax are polished to meet academic or professional standards. Specialized terminology is checked for accuracy and consistency.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Language-Grammar-Enhancement.png",
    },
    {
      number: 4,
      title: "FORMATTING & STYLE COMPLIANCE",
      description:
        "The manuscript is formatted according to your target journal, publisher, or organization guidelines, including references, headings, and citations.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Formatting-Style-Compliance.png",
    },
    {
      number: 5,
      title: "QUALITY ASSURANCE & REVIEW",
      description:
        "A senior editor reviews the post-edited manuscript to ensure it meets high-quality standards and is ready for submission or publication.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Quality-Assurance-Review.png",
    },
    {
      number: 6,
      title: "DELIVERY & FEEDBACK",
      description:
        "The final manuscript is delivered along with suggestions or notes (if necessary) for any final tweaks, ensuring your work is publication-ready.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Delivery-Feedback.png",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP HERO BANNER SECTION                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#03231a] py-5 px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wide">
            Post Editing Services at Pubrica
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl mx-auto font-light">
            Pubrica’s Post Editing Services refine your document, ensuring
            clarity and accuracy. Our expert editors meticulously review
            grammar, style, and coherence, delivering polished content tailored
            to your needs.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. HOW OUR POST EDITING SERVICES WORKS SECTION               */}
      {/* ------------------------------------------------------------- */}
      <EditorialWorkflowSection
        heading="How Our Post Editing Services Works"
        subheading="Our Step-by-Step Process"
        description={
          <>
            At Pubrica, we refine your manuscript to perfection with our expert Post
            Editing Service. Our meticulous step-by-step process ensures your work is
            polished, professional, and ready for successful publication.
          </>
        }
        steps={[
          {
            stepNumber: 1,
            title: "MANUSCRIPT ASSESSMENT",
            description:
              "Our experts review your manuscript to understand its structure, content, and intended audience. We identify areas that need improvement for clarity, consistency, and quality.",
            iconSrc:
              "/images/editing-and-translation/post-editing/Manuscript-Assessment.png",
            position: "top",
          },
          {
            stepNumber: 2,
            title: "CONTENT POST-EDITING",
            description:
              "We refine your text by correcting errors, enhancing readability, and ensuring coherence while preserving your original meaning and style.",
            iconSrc:
              "/images/editing-and-translation/post-editing/Content-Post-Editing.png",
            position: "bottom",
          },
          {
            stepNumber: 3,
            title: "LANGUAGE & GRAMMAR ENHANCEMENT",
            description:
              "Grammar, punctuation, and syntax are polished to meet academic or professional standards. Specialized terminology is checked for accuracy and consistency.",
            iconSrc:
              "/images/editing-and-translation/post-editing/Language-Grammar-Enhancement.png",
            position: "top",
          },
          {
            stepNumber: 4,
            title: "FORMATTING & STYLE COMPLIANCE",
            description:
              "The manuscript is formatted according to your target journal, publisher, or organization guidelines, including references, headings, and citations.",
            iconSrc:
              "/images/editing-and-translation/post-editing/Formatting-Style-Compliance.png",
            position: "bottom",
          },
          {
            stepNumber: 5,
            title: "QUALITY ASSURANCE & REVIEW",
            description:
              "A senior editor reviews the post-edited manuscript to ensure it meets high-quality standards and is ready for submission or publication.",
            iconSrc:
              "/images/editing-and-translation/post-editing/Quality-Assurance-Review.png",
            position: "top",
          },
          {
            stepNumber: 6,
            title: "DELIVERY & FEEDBACK",
            description:
              "The final manuscript is delivered along with suggestions or notes (if necessary) for any final tweaks, ensuring your work is publication-ready.",
            iconSrc:
              "/images/editing-and-translation/post-editing/Delivery-Feedback.png",
            position: "bottom",
          },
        ]}
      />
    </div>
  );
};
