import React from 'react';
import {
  ClipboardDocumentCheckIcon,
  UserIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';

// --- Types ---
interface StepData {
  stepNumber: number;
  title: string;
  description: string;
  items?: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// --- Process Steps Data ---
const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "REQUIREMENT COLLECTION",
    description: (
      <>
        We begin by gathering comprehensive project details, including:
        <ul className="list-disc text-left mt-2 pl-5">
          <li>Document type (e.g., research article, case report, thesis, grant)</li>
          <li>Target journal or institution guidance</li>
          <li>Formatting style (e.g., Vancouver, APA, Harvard)</li>
          <li>Word count, deadline, and any special instructions</li>
        </ul>
      </>
    ),
    iconSrc: "/images/icons/step1.png",
    position: "top",
  },
  {
    stepNumber: 2,
    title: "EXPERT ASSIGNMENT",
    description:
      "A domain-specific medical writer or researcher with relevant clinical or academic expertise is matched to your project. We ensure alignment with your specialty (e.g., cardiology, surgery, oncology) and the intended purpose (publication, CME, regulatory use).",
    iconSrc: "/images/icons/step-2.png",
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "INITIAL DRAFTING",
    description: (
      <>
        Our expert drafts the document based on:
        <ul className="list-disc text-left mt-2 pl-5">
          <li>Verified and peer-reviewed literature</li>
          <li>Your data or research protocols</li>
          <li>
            Compliance with global publication and ethical standards (ICMJE,
            GPP3, etc.)
          </li>
        </ul>
      </>
    ),
    iconSrc: "/images/icons/step-3.png",
    position: "top",
  },
  {
    stepNumber: 4,
    title: "INTERNAL REVIEW & QUALITY CHECK",
    description: (
      <>
        Every draft goes through a multi-level internal review that includes:
        <ul className="list-disc text-left mt-2 pl-5">
          <li>Technical review by a senior editor</li>
          <li>Language and grammar revision</li>
          <li>Formatting review for journal/institutional compliance</li>
          <li>Plagiarism review with Turnitin/iThenticate</li>
        </ul>
      </>
    ),
    iconSrc: "/images/icons/step-4.png",
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "CLIENT REVIEW & REVISIONS",
    description: (
      <>
        We share the draft with you for feedback. Revisions are handled
        promptly while ensuring:
        <ul className="list-disc text-left mt-2 pl-5">
          <li>Scientific integrity is preserved</li>
          <li>Requested changes are fully addressed</li>
          <li>
            Content remains consistent with the target audience and publication
            goals
          </li>
        </ul>
      </>
    ),
    iconSrc: "/images/icons/step-5.png",
    position: "top",
  },
  {
    stepNumber: 6,
    title: "FINAL DELIVERY",
    description: (
      <>
        The final version is delivered along with:
        <ul className="list-disc text-left mt-2 pl-5">
          <li>Reference list (formatted)</li>
          <li>Plagiarism/similarity report</li>
          <li>Formatting checklist or journal compliance sheet</li>
          <li>
            Ready for journal submission, university defense, regulatory
            filing, or CME use
          </li>
        </ul>
      </>
    ),
    iconSrc: "/images/icons/step-6.png",
    position: "bottom",
  },
];

export default function CustomizedWritingServiceWork() {
  return (
    <>
      <EditorialWorkflowSection
        heading="How Our Customized Medical Writing Services Work"
        subheading="Step-by-Step Process Designed for Physicians"
        description="Our structured and collaborative workflow ensures that every document, be it a medical manuscript, thesis, clinical report, or grant proposal, is scientifically accurate, customized to your aims, and submission-ready."
        steps={steps}
      />
    </>
  );
}