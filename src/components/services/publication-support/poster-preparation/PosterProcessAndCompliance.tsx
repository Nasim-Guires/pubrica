'use client';

import React from 'react';
import Link from 'next/link';
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection';

const PAGE_IMAGES = '/images/publication-support/poster-preparation';

const steps = [
  {
    stepNumber: 1,
    title: 'SUBMIT YOUR REQUEST',
    position: 'top',
    iconSrc: `${PAGE_IMAGES}/submit-your-request-.png`,
    description:
      'Provide your manuscript including links to the conference website/guidelines and high-resolution figures or editable vector files.',
  },
  {
    stepNumber: 2,
    title: 'MATERIAL REVIEW & ORDER CONFIRMATION',
    position: 'bottom',
    iconSrc: `${PAGE_IMAGES}/material-review-and-order-confirmation-.png`,
    description:
      'Our team examines the content you submitted and confirms your order. We may contact you for clarification of details or to request anything missing from your content before proceeding.',
  },
  {
    stepNumber: 3,
    title: 'SCIENTIFIC CONTENT EDITING',
    position: 'top',
    iconSrc: `${PAGE_IMAGES}/scientific-content-editing-.png`,
    description:
      'A domain-specific content expert edits the provided text for language accuracy, clarity and brevity suited to poster formats, and alignment with scientific tone.',
  },
  {
    stepNumber: 4,
    title: 'POSTER DESIGN & LAYOUT DRAFT',
    position: 'bottom',
    iconSrc: `${PAGE_IMAGES}/poster-design-layout-.png`,
    description:
      'Our design team creates a structured, visually appealing draft, customized to conference layout guidelines and effective scientific visualization.',
  },
  {
    stepNumber: 5,
    title: 'REVISION & FINALIZATION',
    position: 'top',
    iconSrc: `${PAGE_IMAGES}/Revision-and-finalization-.png`,
    description:
      'We incorporate your suggestions and make refinements. Our team re-checks the file for visual consistency, scientific accuracy, and design compliance.',
  },
  {
    stepNumber: 6,
    title: 'FINAL DELIVERY',
    position: 'bottom',
    iconSrc: `${PAGE_IMAGES}/final-delivery-.png`,
    description:
      'The finalized poster is delivered in high-resolution PDF (suitable for print) and editable PPT file (for digital display or last-minute edits).',
  },
];

export default function PosterProcessExactDesign() {
  return (
    <EditorialWorkflowSection
      heading="How the Poster Preparation Service Works"
      subheading="Our Step-by-Step Process"
      description="Our poster preparation process is designed to convert complicated research into a visually stimulating and scientifically compliant conference poster. Each step will ensure clarity, technical accuracy, and visual consistency that suits both your discipline and the target audience."
      steps={steps}
    />
  );
}