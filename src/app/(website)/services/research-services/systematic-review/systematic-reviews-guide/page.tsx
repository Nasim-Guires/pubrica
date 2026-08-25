import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__systematic-review__systematic-reviews-guide';

export const metadata: Metadata = {
  title: "Systematic Reviews: A Complete Guide for Researchers",
  description: "Learn how to conduct systematic reviews, assess studies, and synthesise evidence for reliable research outcomes.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-a-systematic-review",
    "label": "1. What is a Systematic Review?"
  },
  {
    "id": "2-why-are-systematic-reviews-important",
    "label": "2. Why Are Systematic Reviews Important?"
  },
  {
    "id": "3-types-of-systematic-reviews",
    "label": "3. Types of Systematic Reviews"
  },
  {
    "id": "4-steps-involved-in-conducting-a-systematic-review",
    "label": "4. Steps Involved in Conducting a Systematic Review"
  },
  {
    "id": "5-common-challenges-in-systematic-reviews",
    "label": "5. Common Challenges in Systematic Reviews"
  },
  {
    "id": "6-tools-used-for-systematic-reviews",
    "label": "6. Tools Used for Systematic Reviews"
  },
  {
    "id": "7-best-practices-for-high-quality-systematic-reviews",
    "label": "7. Best Practices for High-Quality Systematic Reviews"
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

export default function ResearchServicesSystematicReviewSystematicReviewsGuidePage() {
  return (
    <GuideLayout title={"Systematic Reviews: A Guide for Researchers and Academics"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
