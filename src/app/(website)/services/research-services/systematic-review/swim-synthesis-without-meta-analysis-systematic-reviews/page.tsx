import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__systematic-review__swim-synthesis-without-meta-analysis-systematic-reviews';

export const metadata: Metadata = {
  title: "SWiM: Synthesis Without Meta-Analysis in Systematic Reviews",
  description: "Understand how SWiM synthesis enables clear and transparent evidence synthesis when meta-analysis is not possible in systematic reviews.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-swim",
    "label": "1. What Is SWiM?"
  },
  {
    "id": "2-when-is-swim-appropriate-in-systematic-reviews",
    "label": "2. When Is SWiM Appropriate in Systematic Reviews?"
  },
  {
    "id": "4-how-swim-strengthens-evidence-synthesis",
    "label": "4. How SWiM Strengthens Evidence Synthesis"
  },
  {
    "id": "5-swim-vs-meta-analysis-a-comparative-overview",
    "label": "5. SWiM vs Meta-Analysis: A Comparative Overview"
  },
  {
    "id": "6-how-swim-structures-evidence-without-meta-analysis",
    "label": "6. How SWiM Structures Evidence Without Meta-Analysis"
  },
  {
    "id": "7-why-choose-swim-compliant-systematic-review-support",
    "label": "7. Why Choose SWiM-Compliant Systematic Review Support?"
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

export default function ResearchServicesSystematicReviewSwimSynthesisWithoutMetaAnalysisSystematicReviewsPage() {
  return (
    <GuideLayout title={"Synthesis Without Meta-Analysis (SWiM): A Structured Approach to Systematic Reviews"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
