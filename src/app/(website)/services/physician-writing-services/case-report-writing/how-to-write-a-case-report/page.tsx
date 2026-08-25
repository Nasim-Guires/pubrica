import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__case-report-writing__how-to-write-a-case-report';

export const metadata: Metadata = {
  title: "How to Write a Medical Case Report | Pubrica Guide",
  description: "Discover how to write a medical case report with expert insights. Boost your case report writing skills using Pubrica physician services.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-a-case-report",
    "label": "1. What is a Case Report?"
  },
  {
    "id": "2-the-role-of-case-reports",
    "label": "2. The Role of Case Reports"
  },
  {
    "id": "3-structuring-a-case-report",
    "label": "3. Structuring a Case Report"
  },
  {
    "id": "3-1-abstract",
    "label": "3.1. Abstract"
  },
  {
    "id": "3-2-introduction",
    "label": "3.2. Introduction"
  },
  {
    "id": "3-3-case-presentation",
    "label": "3.3. Case Presentation"
  },
  {
    "id": "3-4-discussion",
    "label": "3.4. Discussion"
  },
  {
    "id": "3-5-results",
    "label": "3.5. Results"
  },
  {
    "id": "3-6-references",
    "label": "3.6. References"
  },
  {
    "id": "4-step-by-step-example-writing-your-case-report",
    "label": "4. Step-By-Step Example: Writing Your Case Report"
  },
  {
    "id": "5-addressing-challenges-in-case-report-writing",
    "label": "5. Addressing Challenges in Case Report Writing"
  },
  {
    "id": "6-writing-an-outstanding-case-report",
    "label": "6. Writing an Outstanding Case Report"
  },
  {
    "id": "7-how-pubrica-can-help",
    "label": "7. How Pubrica Can Help"
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

export default function PhysicianWritingServicesCaseReportWritingHowToWriteACaseReportPage() {
  return (
    <GuideLayout title={"How to Write a Case Report: Step-by-Step Guide for Clinicians"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
