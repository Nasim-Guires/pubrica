import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__meta-analysis-services-prisma-2020';

export const metadata: Metadata = {
  title: "Meta-Analysis Services: RCTs & PRISMA 2020 Support",
  description: "Meta-analysis services covering RCTs, observational studies and diagnostic-accuracy research, built on PRISMA 2020 for publishable evidence synthesis.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-prisma-2020",
    "label": "1. Understanding PRISMA 2020"
  },
  {
    "id": "2-types-of-meta-analyses-covered-by-prisma-2020",
    "label": "2. Types of Meta-Analyses Covered by PRISMA 2020"
  },
  {
    "id": "3-key-components-of-a-prisma-2020-meta-analysis",
    "label": "3. Key Components of a PRISMA 2020 Meta-Analysis"
  },
  {
    "id": "4-statistical-analysis-across-different-study-types",
    "label": "4. Statistical Analysis Across Different Study Types"
  },
  {
    "id": "5-importance-of-prisma-2020-in-evidence-based-research",
    "label": "5. Importance of PRISMA 2020 in Evidence-Based Research"
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

export default function ResearchServicesMetaAnalysisMetaAnalysisServicesPrisma2020Page() {
  return (
    <GuideLayout title={"Meta-Analysis of RCTs, Observational & Diagnostic Accuracy Studies: A PRISMA 2020 Guide"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
