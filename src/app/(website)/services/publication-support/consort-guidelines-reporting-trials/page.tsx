import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__consort-guidelines-reporting-trials';

export const metadata: Metadata = {
  title: "CONSORT Guidelines: Essential Standards for Reporting Trials",
  description: "Learn the key features, types, and benefits of the CONSORT guidelines for transparent reporting of randomized controlled trials.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-overview-of-consort-guidelines",
    "label": "1. Overview of CONSORT Guidelines"
  },
  {
    "id": "2-key-features-of-consort-guidelines",
    "label": "2. Key Features of CONSORT Guidelines"
  },
  {
    "id": "3-types-of-consort-guidelines",
    "label": "3. Types of CONSORT Guidelines"
  },
  {
    "id": "4-key-sections-of-consort-guidelines",
    "label": "4. Key Sections of CONSORT Guidelines"
  },
  {
    "id": "5-example-of-reporting-in-consort-format",
    "label": "5. Example of Reporting in CONSORT Format"
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

export default function PublicationSupportConsortGuidelinesReportingTrialsPage() {
  return (
    <GuideLayout title={"CONSORT Guidelines: A Comprehensive Guide"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
