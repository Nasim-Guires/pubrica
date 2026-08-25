import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__scopus-indexed-journals-submission-guide';

export const metadata: Metadata = {
  title: "Scopus-indexed-journals-submission-guide",
  description: "Learn how to publish in SCOPUS-indexed journals: submission tips, guidelines, examples, and ethical standards.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-key-features-of-scopus-indexed-journals",
    "label": "1. Key Features of SCOPUS-Indexed Journals"
  },
  {
    "id": "2-types-of-scopus-indexed-journals",
    "label": "2. Types of SCOPUS-Indexed Journals"
  },
  {
    "id": "3-examples-of-leading-scopus-journals",
    "label": "3. Examples of Leading SCOPUS Journals"
  },
  {
    "id": "4-essential-guidelines-for-submission-to-scopus-journals",
    "label": "4. Essential Guidelines for Submission to SCOPUS Journals"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "frequently-asked-questions-faq",
    "label": "Frequently Asked Questions (FAQ)"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function PhysicianWritingServicesScopusIndexedJournalsSubmissionGuidePage() {
  return (
    <GuideLayout title={"SCOPUS-Indexed Journals: A Comprehensive Guide for Authors"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
