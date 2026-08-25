import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/data-analytics-machine-learning__health-economics-outcome-research__thesis-vs-dissertation-differences-similarities';

export const metadata: Metadata = {
  title: "Thesis vs Dissertation: Key Differences & Similarities",
  description: "Learn the differences and similarities between a thesis and a dissertation, including purpose, length, research type, and tips for choosing the right path.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-a-thesis",
    "label": "1. What is a thesis?"
  },
  {
    "id": "2-what-is-a-dissertation",
    "label": "2. What Is a Dissertation?"
  },
  {
    "id": "4-similarities-between-thesis-and-dissertation",
    "label": "4. Similarities Between Thesis and Dissertation"
  },
  {
    "id": "5-tips-for-choosing-between-a-thesis-and-a-dissertation",
    "label": "5. Tips for Choosing Between a Thesis and a Dissertation"
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

export default function DataAnalyticsMachineLearningHealthEconomicsOutcomeResearchThesisVsDissertationDifferencesSimilaritiesPage() {
  return (
    <GuideLayout title={"Thesis Vs. Dissertation: Know the Differences and Similarities!"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
