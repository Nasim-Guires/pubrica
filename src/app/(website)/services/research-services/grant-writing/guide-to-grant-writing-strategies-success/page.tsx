import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__grant-writing__guide-to-grant-writing-strategies-success';

export const metadata: Metadata = {
  title: "Grant Writing Guide: Strategies & Success Factors",
  description: "Learn essential grant writing strategies, proposal structure, and success factors to secure funding for nonprofits, research, and projects.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-understanding-the-grant-process",
    "label": "1. Understanding the Grant Process"
  },
  {
    "id": "2-key-strategies-for-successful-grant-writing",
    "label": "2. Key Strategies for Successful Grant Writing"
  },
  {
    "id": "4-proposal-writing-best-practices",
    "label": "4. Proposal writing best practices"
  },
  {
    "id": "5-success-factors-for-securing-funding",
    "label": "5. Success Factors for Securing Funding"
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

export default function ResearchServicesGrantWritingGuideToGrantWritingStrategiesSuccessPage() {
  return (
    <GuideLayout title={"A Comprehensive Guide to Grant Writing: Strategies, Structure, and Success Factors for Securing Funding"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
