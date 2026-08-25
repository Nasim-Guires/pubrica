import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-manuscript-formatting-services__manuscript-formatting-for-journal-submission';

export const metadata: Metadata = {
  title: "Manuscript Formatting for Successful Journal Submission | Pubrica",
  description: "A comprehensive guide to manuscript formatting, enhancing clarity, and speeding up journal submission and publication.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-proper-formatting-matters",
    "label": "1. Why Proper Formatting Matters"
  },
  {
    "id": "2-beyond-the-basics-what-manuscript-formatting-include",
    "label": "2. Beyond the Basics: What Manuscript Formatting Include"
  },
  {
    "id": "4-formatting-styles-a-primer",
    "label": "4. Formatting Styles: A Primer"
  },
  {
    "id": "5-visual-elements-making-data-speak-clearly",
    "label": "5. Visual Elements: Making Data Speak Clearly"
  },
  {
    "id": "6-manuscript-formatting-checklist",
    "label": "6. Manuscript Formatting Checklist"
  },
  {
    "id": "7-benefits-of-professional-formatting",
    "label": "7. Benefits of Professional Formatting"
  },
  {
    "id": "8-tools-and-resources-for-formatting",
    "label": "8. Tools and Resources for Formatting"
  },
  {
    "id": "9-handling-submission-errors",
    "label": "9. Handling Submission Errors"
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

export default function PublicationSupportJournalManuscriptFormattingServicesManuscriptFormattingForJournalSubmissionPage() {
  return (
    <GuideLayout title={"Manuscript Formatting for Journal Submission: A Complete Guide for Researchers"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
