import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__research-proposal__research-design-types-methods-best-practices';

export const metadata: Metadata = {
  title: "Research Design: Types, Methods & Best Practices",
  description: "Learn research design types, methods, and best practices to ensure valid, reliable, and structured research.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-research-design",
    "label": "1. What is Research Design?"
  },
  {
    "id": "2-why-is-research-design-important",
    "label": "2. Why is Research Design Important?"
  },
  {
    "id": "4-exploratory-vs-confirmatory-research-designs",
    "label": "4. Exploratory vs. Confirmatory Research Designs"
  },
  {
    "id": "5-steps-to-develop-an-effective-research-design",
    "label": "5. Steps to Develop an Effective Research Design"
  },
  {
    "id": "6-common-mistakes-in-research-design-and-how-to-avoid-them",
    "label": "6. Common Mistakes in Research Design (and How to Avoid Them)"
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

export default function PhysicianWritingServicesResearchProposalResearchDesignTypesMethodsBestPracticesPage() {
  return (
    <GuideLayout title={"What Is Research Design? Types, Methods & Best Practices"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
