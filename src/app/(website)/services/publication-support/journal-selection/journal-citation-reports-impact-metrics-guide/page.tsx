import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__journal-citation-reports-impact-metrics-guide';

export const metadata: Metadata = {
  title: "Journal Citation Reports: Impact & Metrics Guide",
  description: "Understand Journal Citation Reports metrics, impact factor, and applications for research and publishing.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-jcr",
    "label": "1. What is JCR?"
  },
  {
    "id": "2-key-metrics-provided-by-jcr",
    "label": "2. Key Metrics Provided by JCR"
  },
  {
    "id": "4-examples-of-high-impact-journals-based-on-jcr",
    "label": "4. Examples of High-Impact Journals (Based on JCR)"
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

export default function PublicationSupportJournalSelectionJournalCitationReportsImpactMetricsGuidePage() {
  return (
    <GuideLayout title={"Journal Citation Reports: Understanding Impact and Metrics"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
