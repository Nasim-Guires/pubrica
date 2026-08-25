import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__literature-review-and-gap__types-of-literature-review-in-research';

export const metadata: Metadata = {
  title: "Types of Literature Reviews Explained with Examples",
  description: "Learn types of literature review, including systematic literature review methods used in academic research and evidence-based publications.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-a-literature-review",
    "label": "1. What is a literature review?"
  },
  {
    "id": "2-literature-review-in-research-methodology",
    "label": "2. Literature Review in Research methodology"
  },
  {
    "id": "3-types-of-literature-review",
    "label": "3. Types of Literature Review"
  },
  {
    "id": "4-methodological-steps-for-conducting-a-literature-review",
    "label": "4. Methodological Steps for Conducting a Literature Review"
  },
  {
    "id": "5-synthesizing-the-literature-review",
    "label": "5. Synthesizing the literature review"
  },
  {
    "id": "6-narrative-reviews-vs-systematic-reviews",
    "label": "6. Narrative Reviews vs Systematic Reviews"
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

export default function ResearchServicesLiteratureReviewAndGapTypesOfLiteratureReviewInResearchPage() {
  return (
    <GuideLayout title={"Types of Literature Reviews in Research: Methodological Approaches"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
