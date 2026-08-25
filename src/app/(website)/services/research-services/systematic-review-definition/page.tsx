import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__systematic-review-definition';

export const metadata: Metadata = {
  title: "Systematic Review Definition & Key Features",
  description: "Learn the definition of a systematic review, its methodology, and how it differs from narrative reviews in evidence-based research.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-are-the-stages-of-a-systematic-review",
    "label": "1. What are the stages of a systematic review?"
  },
  {
    "id": "2-what-is-the-minimum-sample-size-for-a-systematic-review",
    "label": "2. What is the minimum sample size for a systematic review? ["
  },
  {
    "id": "4-why-systematic-reviews-are-important",
    "label": "4. Why Systematic Reviews Are Important"
  },
  {
    "id": "5-other-types-of-systematic-review",
    "label": "5. Other Types of Systematic Review?"
  },
  {
    "id": "6-ai-systematic-reviews",
    "label": "6. AI & Systematic Reviews"
  },
  {
    "id": "7-which-reporting-standard-should-systematic-reviewers-use",
    "label": "7. Which Reporting Standard Should Systematic Reviewers Use?"
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

export default function ResearchServicesSystematicReviewDefinitionPage() {
  return (
    <GuideLayout title={"Define systematic review"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
