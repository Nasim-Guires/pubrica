import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__high-impact-academic-journals-guide';

export const metadata: Metadata = {
  title: "High-Impact Academic Journals: Definition, Examples & Tips",
  description: "Learn what high-impact academic journals are, examples by discipline, and tips to publish your research successfully.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "what-is-a-high-impact-academic-journal",
    "label": "What is a High-Impact Academic Journal?"
  },
  {
    "id": "how-impact-factor-is-calculated-simplified-formula",
    "label": "How Impact Factor is Calculated (Simplified Formula)"
  },
  {
    "id": "types-of-high-impact-academic-journals",
    "label": "Types of High-Impact Academic Journals"
  },
  {
    "id": "high-impact-journals-by-discipline",
    "label": "High-Impact Journals by Discipline"
  },
  {
    "id": "how-to-publish-in-high-impact-journals",
    "label": "How to Publish in High-Impact Journals"
  },
  {
    "id": "benefits-of-publishing-in-high-impact-journals",
    "label": "Benefits of Publishing in High-Impact Journals"
  },
  {
    "id": "top-indexing-databases",
    "label": "Top Indexing Databases"
  },
  {
    "id": "comparison-of-major-indexing-databases",
    "label": "Comparison of Major Indexing Databases"
  },
  {
    "id": "frequently-asked-questions-faqs",
    "label": "Frequently Asked Questions (FAQs)"
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

export default function PublicationSupportJournalSelectionHighImpactAcademicJournalsGuidePage() {
  return (
    <GuideLayout title={"High-Impact Academic Journal: An Academy Guide"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
