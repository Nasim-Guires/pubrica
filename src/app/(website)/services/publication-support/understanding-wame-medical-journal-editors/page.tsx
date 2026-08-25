import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__understanding-wame-medical-journal-editors';

export const metadata: Metadata = {
  title: "WAME Guidelines & Ethics for Medical Editors Explained",
  description: "Learn how WAME supports medical journal editors in following CONSORT guidelines to ensure ethical and transparent publication practices.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-wame",
    "label": "1. What is WAME?"
  },
  {
    "id": "2-the-role-of-consort-guidelines-in-medical-publishing",
    "label": "2. The Role of CONSORT Guidelines in Medical Publishing"
  },
  {
    "id": "4-how-wame-supports-editors-in-implementing-consort-guidelin",
    "label": "4. How WAME Supports Editors in Implementing CONSORT Guidelines"
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

export default function PublicationSupportUnderstandingWameMedicalJournalEditorsPage() {
  return (
    <GuideLayout title={"Navigating WAME: Essential Insights for Medical Editors"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
