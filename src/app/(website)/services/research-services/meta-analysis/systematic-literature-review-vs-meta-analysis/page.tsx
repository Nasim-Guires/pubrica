import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__systematic-literature-review-vs-meta-analysis';

export const metadata: Metadata = {
  title: "Systematic Review vs Meta-Analysis: Evidence Synthesis",
  description: "Explore differences, methods, and steps of systematic reviews and meta-analyses for research evidence synthesis.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-a-systematic-literature-review",
    "label": "1. What is a Systematic Literature Review?"
  },
  {
    "id": "2-what-is-a-meta-analysis",
    "label": "2. What is a Meta-Analysis?"
  },
  {
    "id": "4-how-to-perform-a-systematic-literature-review",
    "label": "4. How to Perform a Systematic Literature Review"
  },
  {
    "id": "5-how-to-access-jcr",
    "label": "5. How to Access JCR?"
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

export default function ResearchServicesMetaAnalysisSystematicLiteratureReviewVsMetaAnalysisPage() {
  return (
    <GuideLayout title={"Systematic Literature Review Vs. Meta-Analysis: Understanding Evidence Synthesis"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
