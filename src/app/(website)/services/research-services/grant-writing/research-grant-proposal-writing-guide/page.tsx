import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__grant-writing__research-grant-proposal-writing-guide';

export const metadata: Metadata = {
  title: "What You Must Know Before Writing a Research Grant Proposal",
  description: "Improve research grant applications with key writing strategies, funder priorities, evaluation methods, and tips to enhance proposal clarity and success.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understand-the-granting-agency-s-requirements",
    "label": "1. Understand the Granting Agency’s Requirements"
  },
  {
    "id": "2-define-a-clear-research-problem",
    "label": "2. Define a Clear Research Problem"
  },
  {
    "id": "3-set-clear-and-measurable-objectives",
    "label": "3. Set Clear and Measurable Objectives"
  },
  {
    "id": "4-develop-a-realistic-and-detailed-budget",
    "label": "4. Develop a Realistic and Detailed Budget"
  },
  {
    "id": "5-provide-a-comprehensive-timeline",
    "label": "5. Provide a Comprehensive Timeline"
  },
  {
    "id": "6-demonstrate-the-significance-of-your-research",
    "label": "6. Demonstrate the Significance of Your Research"
  },
  {
    "id": "7-write-a-convincing-and-clear-proposal",
    "label": "7. Write a Convincing and Clear Proposal"
  },
  {
    "id": "8-proofread-and-edit",
    "label": "8. Proofread and Edit"
  },
  {
    "id": "9-references-and-citations",
    "label": "9. References and Citations"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function ResearchServicesGrantWritingResearchGrantProposalWritingGuidePage() {
  return (
    <GuideLayout title={"What You Should Know Before Writing a Research Grant Proposal"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
