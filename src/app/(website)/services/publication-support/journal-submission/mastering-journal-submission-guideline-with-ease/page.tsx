import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-submission__mastering-journal-submission-guideline-with-ease';

export const metadata: Metadata = {
  title: "Mastering Journal Submission Guidelines Easily",
  description: "Learn how to follow journal submission guidelines for clear, ethical, and successful research publishing.",
};

const TOC: TocItem[] = [
  {
    "id": "1-decode-the-journal-requirements",
    "label": "1. Decode the Journal Requirements"
  },
  {
    "id": "2-master-your-manuscript-structure",
    "label": "2. Master Your Manuscript Structure"
  },
  {
    "id": "4-submission-to-acceptance-understand-the-publishing-process",
    "label": "4. Submission to Acceptance – Understand the Publishing Process"
  },
  {
    "id": "5-the-last-look-pre-submission-checklist",
    "label": "5. The Last Look: Pre-Submission Checklist"
  },
  {
    "id": "6-journal-submission-roadmap",
    "label": "6. Journal Submission Roadmap"
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

export default function PublicationSupportJournalSubmissionMasteringJournalSubmissionGuidelineWithEasePage() {
  return (
    <GuideLayout title={"Mastering Journal Submission Guidelines with Ease"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
