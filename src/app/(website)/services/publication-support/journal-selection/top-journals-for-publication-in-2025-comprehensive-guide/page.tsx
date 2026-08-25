import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__top-journals-for-publication-in-2025-comprehensive-guide';

export const metadata: Metadata = {
  title: "2025 Guide to Top Academic Journals for Publication",
  description: "Discover top high-impact journals for 2025, including SCI and Scopus journals, with tips on selecting the right journal for manuscript submission.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-top-journals-for-publication-in-2025",
    "label": "1. Top Journals for Publication in 2025"
  },
  {
    "id": "2-high-impact-journals-in-2025",
    "label": "2. High-Impact Journals in 2025"
  },
  {
    "id": "3-best-journals-for-manuscript-submission-in-2025",
    "label": "3. Best Journals for Manuscript Submission in 2025"
  },
  {
    "id": "4-sci-indexed-journals-for-2025",
    "label": "4. SCI-Indexed Journals for 2025"
  },
  {
    "id": "5-scopus-journals-with-high-impact-factor-in-2025",
    "label": "5. Scopus Journals with High Impact Factor in 2025"
  },
  {
    "id": "6-top-medical-scientific-journals-to-publish-in-2025",
    "label": "6. Top Medical/Scientific Journals to Publish in 2025"
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

export default function PublicationSupportJournalSelectionTopJournalsForPublicationIn2025ComprehensiveGuidePage() {
  return (
    <GuideLayout title={"Top Journals for Publication in 2025: A Comprehensive Guide"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
