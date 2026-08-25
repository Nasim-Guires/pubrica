import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__introduction-to-bayesian-statistics';

export const metadata: Metadata = {
  title: "Introduction to Bayesian Statistics Explained",
  description: "Learn the principles, methods, and real-world applications of Bayesian statistics and how it differs from frequentist methods.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-bayesian-statistics",
    "label": "1. Bayesian Statistics"
  },
  {
    "id": "2-bayesian-vs-frequentist-approaches",
    "label": "2. Bayesian vs Frequentist Approaches"
  },
  {
    "id": "4-applications",
    "label": "4. Applications"
  },
  {
    "id": "5-common-bayesian-methods",
    "label": "5. Common Bayesian Methods"
  },
  {
    "id": "6-limitations",
    "label": "6. Limitations"
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

export default function ResearchServicesMetaAnalysisIntroductionToBayesianStatisticsPage() {
  return (
    <GuideLayout title={"Introduction to Bayesian Statistics: Principles and Applications"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
