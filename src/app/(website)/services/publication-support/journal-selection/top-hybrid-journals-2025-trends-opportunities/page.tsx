import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__top-hybrid-journals-2025-trends-opportunities';

export const metadata: Metadata = {
  title: "Top Hybrid Journals 2025: Trends and Opportunities for Researchers",
  description: "Explore top hybrid journals of 2025, discover trends in open access, and learn about the opportunities and challenges for researchers",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-are-hybrid-journals",
    "label": "1. What are hybrid journals"
  },
  {
    "id": "2-top-hybrid-journals-in-2025",
    "label": "2. Top Hybrid Journals in 2025"
  },
  {
    "id": "3-top-hybrid-journals-in-2025",
    "label": "3. Top Hybrid Journals in 2025"
  },
  {
    "id": "4-advantages-of-hybrid-journals-for-researchers",
    "label": "4. Advantages of Hybrid Journals for Researchers"
  },
  {
    "id": "5-challenges-of-hybrid-journals",
    "label": "5. Challenges of Hybrid Journals"
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

export default function PublicationSupportJournalSelectionTopHybridJournals2025TrendsOpportunitiesPage() {
  return (
    <GuideLayout title={"Top Hybrid Journals in 2025"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
