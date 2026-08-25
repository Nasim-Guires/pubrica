import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-submission__guide-to-peer-review-types';

export const metadata: Metadata = {
  title: "Types of Peer Reviewers: Single, Double, Open, Post-Publication",
  description: "Explore the types of peer reviews—single blind, double blind, open peer review, post-publication review, and collaborative review—along with their pros and cons.",
};

const TOC: TocItem[] = [
  {
    "id": "1-single-blind-peer-review",
    "label": "1. Single Blind Peer Review"
  },
  {
    "id": "2-double-blind-peer-review",
    "label": "2. Double Blind Peer Review"
  },
  {
    "id": "3-open-peer-review",
    "label": "3. Open Peer Review"
  },
  {
    "id": "4-post-publication-peer-review",
    "label": "4. Post-Publication Peer Review"
  },
  {
    "id": "5-collaborative-peer-review",
    "label": "5. Collaborative Peer Review"
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

export default function PublicationSupportJournalSubmissionGuideToPeerReviewTypesPage() {
  return (
    <GuideLayout title={"Types of Peer Reviewers: A Comprehensive Guide for Researchers"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
