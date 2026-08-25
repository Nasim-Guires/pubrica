import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/data-analytics-machine-learning__random-forests-biomedical-data-guide';

export const metadata: Metadata = {
  title: "Random Forests for Big Biomedical Data: A Handy Guide",
  description: "Explore Random Forests in biomedical data, from training to feature insights and practical applications.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-are-random-forests",
    "label": "1. What are Random Forests?"
  },
  {
    "id": "2-why-random-forests-for-biomedical-data",
    "label": "2. Why Random Forests for Biomedical Data?"
  },
  {
    "id": "3-getting-started-with-random-forests",
    "label": "3. Getting Started with Random Forests"
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

export default function DataAnalyticsMachineLearningRandomForestsBiomedicalDataGuidePage() {
  return (
    <GuideLayout title={"A Handy Guide to Random Forests for Big Biomedical Data"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
