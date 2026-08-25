import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__literature-review-and-gap__literature-review-and-gap-literature-review-support-chronological-vs-thematic';

export const metadata: Metadata = {
  title: "Literature Review Support: Chronological vs Thematic",
  description: "Expert literature review support for academic and clinical research using chronological and thematic structuring approaches.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-structuring-matters-in-academic-and-clinical-literatur",
    "label": "1. Why Structuring Matters in Academic and Clinical Literature Reviews"
  },
  {
    "id": "2-chronological-structuring-supporting-evidence-evolution",
    "label": "2. Chronological Structuring: Supporting Evidence Evolution"
  },
  {
    "id": "4-chronological-vs-thematic-literature-review",
    "label": "4. Chronological vs. Thematic Literature Review"
  },
  {
    "id": "5-choosing-the-right-structuring-approach-how-expert-support",
    "label": "5. Choosing the Right Structuring Approach: How Expert Support Helps"
  },
  {
    "id": "6-how-reviewers-interpret-the-structure",
    "label": "6. How Reviewers Interpret the Structure"
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

export default function ResearchServicesLiteratureReviewAndGapLiteratureReviewAndGapLiteratureReviewSupportChronologicalVsThematicPage() {
  return (
    <GuideLayout title={"Literature Review Support for Academic and Clinical Research: Chronological and Thematic Structuring Approaches"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
