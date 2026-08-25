import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__literature-review-and-gap__literature-review-research-gap-services';

export const metadata: Metadata = {
  title: "Systematic Literature Review Services | PRISMA 2020",
  description: "Expert systematic, scoping, and narrative reviews, built to PRISMA 2020 standards, to identify real research gaps and strengthen your study's foundation.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-literature-review-methodologies",
    "label": "1. Understanding Literature Review Methodologies"
  },
  {
    "id": "2-importance-of-research-gap-identification",
    "label": "2. Importance of Research Gap Identification"
  },
  {
    "id": "3-comparison-of-literature-review-types",
    "label": "3. Comparison of Literature Review Types"
  },
  {
    "id": "4-prisma-2020-framework-for-systematic-reviews",
    "label": "4. PRISMA 2020 Framework for Systematic Reviews"
  },
  {
    "id": "5-research-gap-analysis-process",
    "label": "5. Research Gap Analysis Process"
  },
  {
    "id": "6-benefits-of-professional-literature-review-services",
    "label": "6. Benefits of Professional Literature Review Services"
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

export default function ResearchServicesLiteratureReviewAndGapLiteratureReviewResearchGapServicesPage() {
  return (
    <GuideLayout title={"Literature Review & Research Gap Services: Systematic, Scoping & Narrative Reviews (PRISMA 2020)"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
