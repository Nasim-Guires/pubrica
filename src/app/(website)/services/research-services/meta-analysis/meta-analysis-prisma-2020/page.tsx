import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__meta-analysis-prisma-2020';

export const metadata: Metadata = {
  title: "Meta-Analysis of RCTs & Observational Studies| PRISMA 2020",
  description: "Learn how to conduct PRISMA 2020 meta-analysis of RCTs, observational and diagnostic studies using robust methods for publication success",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-makes-a-high-quality-meta-analysis",
    "label": "1. What Makes a High-Quality Meta-Analysis?"
  },
  {
    "id": "2-essential-components-of-a-publishable-meta-analysis",
    "label": "2. Essential Components of a Publishable Meta-Analysis"
  },
  {
    "id": "3-importance-of-following-reporting-guidelines",
    "label": "3. Importance of Following Reporting Guidelines"
  },
  {
    "id": "4-statistical-methods-that-strengthen-meta-analysis",
    "label": "4. Statistical Methods That Strengthen Meta-Analysis"
  },
  {
    "id": "5-common-reasons-meta-analyses-are-rejected",
    "label": "5. Common Reasons Meta-Analyses Are Rejected"
  },
  {
    "id": "6-best-practices-for-high-impact-publication",
    "label": "6. Best Practices for High-Impact Publication"
  },
  {
    "id": "7-role-of-expert-support-in-meta-analysis",
    "label": "7. Role of Expert Support in Meta-Analysis"
  },
  {
    "id": "8-future-trends-in-meta-analysis",
    "label": "8. Future Trends in Meta-Analysis"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "frequently-asked-questions-faqs",
    "label": "Frequently Asked Questions (FAQs)"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function ResearchServicesMetaAnalysisMetaAnalysisPrisma2020Page() {
  return (
    <GuideLayout title={"Meta-Analysis of RCTs, Observational & Diagnostic-Accuracy Studies (PRISMA 2020)"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
