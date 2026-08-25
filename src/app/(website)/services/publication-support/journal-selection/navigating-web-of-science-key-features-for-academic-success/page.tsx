import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__navigating-web-of-science-key-features-for-academic-success';

export const metadata: Metadata = {
  title: "Web of Science Features for Academic Publishing Success",
  description: "Discover how Web of Science enhances academic research visibility, citation tracking, and journal impact for researchers.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-introduction-to-web-of-science",
    "label": "1. Introduction to Web of Science"
  },
  {
    "id": "2-how-to-use-web-of-science-effectively",
    "label": "2. How to Use Web of Science Effectively"
  },
  {
    "id": "3-citation-tracking-and-citation-indexes",
    "label": "3. Citation Tracking and Citation Indexes"
  },
  {
    "id": "4-benefits-of-using-web-of-science",
    "label": "4. Benefits of Using Web of Science"
  },
  {
    "id": "5-understanding-citation-impact-and-journal-metrics",
    "label": "5. Understanding Citation Impact and Journal Metrics"
  },
  {
    "id": "6-the-importance-of-web-of-science-for-academic-publishing",
    "label": "6. The Importance of Web of Science for Academic Publishing"
  },
  {
    "id": "7-how-to-enhance-your-research-with-web-of-science",
    "label": "7. How to Enhance Your Research with Web of Science"
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

export default function PublicationSupportJournalSelectionNavigatingWebOfScienceKeyFeaturesForAcademicSuccessPage() {
  return (
    <GuideLayout title={"Navigating Web of Science: Key Features for Academic Success"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
