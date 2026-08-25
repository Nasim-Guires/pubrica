import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-submission__complete-guide-to-writing-cover-letter-for-medical-journals';

export const metadata: Metadata = {
  title: "Medical Journal Cover Letter Writing Guide for Authors",
  description: "Learn how to write an effective cover letter for medical journals with expert tips, structure, and common mistakes to avoid.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-why-a-cover-letter-matters-in-medical-journals",
    "label": "1. Why a Cover Letter Matters in Medical Journals"
  },
  {
    "id": "2-essential-components-of-a-medical-journal-cover-letter",
    "label": "2. Essential Components of a Medical Journal Cover Letter"
  },
  {
    "id": "3-cover-letter-structure-sample-format",
    "label": "3. Cover Letter Structure – Sample Format"
  },
  {
    "id": "4-tips-for-writing-an-effective-journal-cover-letter",
    "label": "4. Tips for Writing an Effective Journal Cover Letter"
  },
  {
    "id": "5-common-mistakes-to-avoid",
    "label": "5. Common Mistakes to Avoid"
  },
  {
    "id": "6-journal-cover-letter-vs-abstract-a-quick-comparison",
    "label": "6. Journal Cover Letter vs. Abstract: A Quick Comparison"
  },
  {
    "id": "7-how-pubrica-supports-cover-letter-preparation",
    "label": "7. How Pubrica Supports Cover Letter Preparation"
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

export default function PublicationSupportJournalSubmissionCompleteGuideToWritingCoverLetterForMedicalJournalsPage() {
  return (
    <GuideLayout title={"Complete Guide to Writing a Cover Letter for Medical Journals"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
