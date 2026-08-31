"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";

const IMG = "/images/editing-and-translation/scientific-editing";

interface Step {
  number: number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}

// const steps: Step[] = [
//   {
//     number: 1,
//     title: "Choosing the most suitable experts",
//     description:
//       "A customer service executive understands your preferences and passes them on to our project managers",
//     iconSrc: `${IMG}/Choosing-the-most-suitable-experts.png`,
//     position: "bottom",
//   },
//   {
//     number: 2,
//     title: "Understanding your work",
//     description:
//       "Project managers then handpick the most suitable native English experts based on a subject area match",
//     iconSrc: `${IMG}/Understanding-your-work.png`,
//     position: "top",
//   },
//   {
//     number: 3,
//     title: "3 senior experts create a robust publication strategy for you",
//     description:
//       "A high-impact journal peer reviewer conducts a thorough technical review. Senior editors handle developmental and language edits. The managing editor ensures submission readiness.",
//     iconSrc: `${IMG}/senior-experts-create-a-robust-publication-strategy-for-you.png`,
//     position: "bottom",
//   },
//   {
//     number: 4,
//     title:
//       "Unlimited review and rework based on your feedback for up to 365 days",
//     description:
//       "You review, suggest revisions, and resubmit. Request a discounted recheck by the same peer reviewer. Experts re-edit and reformat for free.",
//     iconSrc: `${IMG}/Unlimited-review-and-rework-based-on-your-feedback-for-up-to-365-days.png`,
//     position: "top",
//   },
// ];

export default function ScientificProcessWorkflow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <EditorialWorkflowSection
      heading="How Our Scientific Editing Service Works"
      subheading="Our Step-by-Step Process"
      description={
        <>
          At Pubrica, we follow a structured and transparent workflow to ensure
          your manuscript meets the highest scientific and publication standards.
          Our process is designed to provide clarity, accuracy, and efficiency at
          every stage.
        </>
      }
      steps={[
        {
          stepNumber: 1,
          title: "CHOOSING THE MOST SUITABLE EXPERTS",
          description:
            "A customer service executive understands your preferences and passes them on to our project managers",
          iconSrc: `${IMG}/Choosing-the-most-suitable-experts.png`,
          position: "bottom",
        },
        {
          stepNumber: 2,
          title: "UNDERSTANDING YOUR WORK",
          description:
            "Project managers then handpick the most suitable native English experts based on a subject area match",
          iconSrc: `${IMG}/Understanding-your-work.png`,
          position: "top",
        },
        {
          stepNumber: 3,
          title:
            "3 SENIOR EXPERTS CREATE A ROBUST PUBLICATION STRATEGY FOR YOU",
          description:
            "A high-impact journal peer reviewer conducts a thorough technical review. Senior editors handle developmental and language edits. The managing editor ensures submission readiness.",
          iconSrc: `${IMG}/senior-experts-create-a-robust-publication-strategy-for-you.png`,
          position: "bottom",
        },
        {
          stepNumber: 4,
          title:
            "UNLIMITED REVIEW AND REWORK BASED ON YOUR FEEDBACK FOR UP TO 365 DAYS",
          description:
            "You review, suggest revisions, and resubmit. Request a discounted recheck by the same peer reviewer. Experts re-edit and reformat for free.",
          iconSrc: `${IMG}/Unlimited-review-and-rework-based-on-your-feedback-for-up-to-365-days.png`,
          position: "top",
        },
      ]}
    />
  );
}
