'use client';

import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import ServiceBanner from '@/components/common/ServiceBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
  title: 'Visual & Accessibility Editing Services | Pubrica',
  description:
    'Explore Pubrica’s Visual & Accessibility Editing Services, ensuring your scholarly documents, figures, tables, graphics, and layouts meet global accessibility standards.',
};

export default function VisualAndAccessibilityEditingComplete() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: WorkflowStep[] = [
    {
      stepNumber: 1,
      title: "INITIAL ASSESSMENT",
      description:
        "We begin by reviewing your document to understand its purpose, audience, and existing visual and accessibility challenges. This helps us create a tailored editing plan that meets compliance standards and improves overall readability.",
      iconSrc:
        "/images/academic-editorial-services/visual-and-accessibility-editing-services/Initial-Assessment.png",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "VISUAL ENHANCEMENT",
      description:
        "Our experts optimize figures, tables, charts, and layout elements to ensure clarity and consistency. This includes adjusting color contrasts, font sizes, spacing, and alignment to make your content visually appealing and easy to navigate.",
      iconSrc:
        "/images/academic-editorial-services/visual-and-accessibility-editing-services/Visual-Enhancement.png",
      position: "bottom",
    },
    {
      stepNumber: 3,
      title: "ACCESSIBILITY CHECK",
      description:
        "We assess your document against accessibility standards (such as WCAG) to ensure it is usable by people with disabilities. This includes evaluating alt text for images, heading structures, keyboard navigation, and screen reader compatibility.",
      iconSrc:
        "/images/academic-editorial-services/visual-and-accessibility-editing-services/Accessibility-Check.png",
      position: "top",
    },
    {
      stepNumber: 4,
      title: "CONTENT OPTIMIZATION",
      description:
        "We refine the textual content for clarity, conciseness, and maintaining your original meaning. Our editors ensure that your manuscript is not only accessible but also professionally presented and easy to understand.",
      iconSrc:
        "/images/academic-editorial-services/visual-and-accessibility-editing-services/Content-Optimization.png",
      position: "bottom",
    },
    {
      stepNumber: 5,
      title: "REVIEW & QUALITY ASSURANCE",
      description:
        "Every document undergoes a meticulous quality check to verify that visual and accessibility standards are met. Feedback is incorporated, and final adjustments are made to ensure your content is fully polished and compliant.",
      iconSrc:
        "/images/academic-editorial-services/visual-and-accessibility-editing-services/Review-Quality-Assurance.png",
      position: "top",
    },
    {
      stepNumber: 6,
      title: "DELIVERY",
      description:
        "You receive a fully edited, visually optimized, and accessibility-compliant document, ready for publication, presentation, or distribution to a diverse audience.",
      iconSrc:
        "/images/academic-editorial-services/visual-and-accessibility-editing-services/Delivery.png",
      position: "bottom",
    },
  ];

  const packages: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic Visual Clarity",
      idealFor:
        "Researchers, students, and authors needing clean, consistent, and reader-friendly visuals.",
      includes: [
        "Formatting and standardisation of figures, tables, charts, and images",
        "Basic readability enhancements for layout and structure",
        "Consistent typography, spacing, alignment, and colour usage",
        "Standard alt-text creation for essential images",
        "Correction of pixelation, sizing issues, and low-quality visuals",
        "Accessibility checks for headings, contrast, and legibility",
      ],
      turnaround: "3–5 business days",
      cardBgColor: "#ecfdf5",
      titleColor: "#0b3b2c",
    },
    {
      icon:
        "/images/publication-support/peer-review-pre-submission/advanced.webp",
      title: "Advanced Accessibility & Visual Enhancement",
      idealFor:
        "Authors submitting to journals or Institutions with strict accessibility guidelines.",
      includes: [
        "All features from the Basic Package",
        "WCAG 2.1-aligned visual accessibility editing",
        "Comprehensive alt-text and long description development",
        "Colour-blind friendly palette optimisation",
        "Tagging, structuring, and semantic layering for PDFs",
        "Improved navigation structure, bookmarks, and logical reading order",
        "Enhancement of charts, diagrams, and illustrations for clarity and inclusivity",
        "Layout redesign for multi-device readability (desktop, tablet, mobile)",
      ],
      turnaround: "5–7 business days",
      cardBgColor: "#faf5ff",
      titleColor: "#7e22ce",
    },
    {
      icon:
        "/images/editing-and-translation/translation-with-editing/pro.webp",
      title: "Premium Visual Redesign & Full Accessibility Compliance",
      idealFor:
        "Universities, publishers, NGOs, corporates, and large-scale projects requiring high-end visual and accessibility transformation.",
      includes: [
        "Everything in the Advanced Package",
        "Complete visual redesign of the document",
        "Creation of accessibility-compliant PDFs (WCAG + Section 508 standards)",
        "Infographic re-creation, illustration enhancement, and figure re-drawing",
        "Data visualisation optimisation for clarity and scientific accuracy",
        "Style guide development for recurring materials",
        "Multi-format optimisation (PDF, EPUB, HTML)",
        "Expert QA review + final compliance validation report",
      ],
      turnaround: "7–10 business days",
      cardBgColor: "#fffbeb",
      titleColor: "#92400e",
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER ------------------- */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Visual & Accessibility Editing Services at Pubrica"
        description="Our expert editors meticulously refine your manuscript’s visual elements and accessibility features, ensuring clarity, inclusivity, and compliance with accessibility standards, so your content is reader-friendly and publication-ready."
      />

      {/* ------------------- STEP-BY-STEP PROCESS ------------------- */}
      <EditorialWorkflowSection
        heading="How Our Visual and Accessibility Editing Service Works"
        subheading="Our Step-by-Step Process"
        description="At Pubrica, we ensure that your documents, manuscripts, and publications are visually optimized and fully accessible to all readers. Our meticulous editing process focuses on clarity, readability, and compliance with accessibility standards. Here’s a step-by-step overview of how our service works:"
        steps={steps}
      />

      {/* ------------------- SAMPLE WORK SECTION ------------------- */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/academic-editorial-services/visual-and-accessibility-editing-services/Visual-Accessibility-Editing-Services-sample-work-.webp",
          alt: "Visual and Accessibility Editing Services sample work",
          width: 600,
          height: 800,
        }}
        sections={[
          {
            heading: "Visual and Accessibility Editing Services Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our Visual and Accessibility Editing sample work, meticulously refined to meet rigorous scholarly standards, accessibility guidelines, and top-tier journal requirements. We ensure your manuscript is visually clear, universally accessible, and publication-ready, enhancing readability, inclusivity, and global research impact.",
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

      {/* ------------------- PACKAGES SECTION ------------------- */}
      <section className="py-6 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
        <CommonPackages
          title="Visual and Accessibility Editing Service – Our Packages"
          description="Our packages are designed to meet the diverse needs of researchers, universities, publishers, and organisations seeking visually optimised, accessible, and publication-ready documents. Each tier offers increasing depth of visual refinement, accessibility compliance, and editorial precision, ensuring your content is inclusive, compliant, and impactful across global platforms."
          packages={packages}
        />
        <div className="mt-1 text-center">
          <GetFreeQuoteButton />
        </div>
      </section>
    </article>
  );
}