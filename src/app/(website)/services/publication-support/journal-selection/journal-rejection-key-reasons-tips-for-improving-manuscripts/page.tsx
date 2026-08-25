import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__journal-rejection-key-reasons-tips-for-improving-manuscripts';

export const metadata: Metadata = {
  title: "Journal Rejection: Key Reasons & Tips for Improving Manuscripts",
  description: "Learn why journals reject manuscripts and how to improve your paper for future submissions. Tips for handling peer review and enhancing quality.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-key-reasons-for-journal-rejection",
    "label": "1. Key Reasons for Journal Rejection"
  },
  {
    "id": "2-the-role-of-peer-review-in-journal-rejection",
    "label": "2. The Role of Peer Review in Journal Rejection"
  },
  {
    "id": "3-tips-for-dealing-with-peer-review-feedback",
    "label": "3. Tips for Dealing with Peer Review Feedback"
  },
  {
    "id": "4-best-tips-for-improving-your-manuscript-quality",
    "label": "4. Best Tips for Improving Your Manuscript Quality"
  },
  {
    "id": "5-the-impact-of-target-journal-selection",
    "label": "5. The Impact of Target Journal Selection"
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

export default function PublicationSupportJournalSelectionJournalRejectionKeyReasonsTipsForImprovingManuscriptsPage() {
  return (
    <GuideLayout title={"Journal Rejection: Key Reasons, and Tips for Improving Your Manuscripts"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
