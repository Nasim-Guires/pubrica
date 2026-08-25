import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__identify-predatory-journals-2026';

export const metadata: Metadata = {
  title: "Predatory Journal Checklist and Guide 2026 Update",
  description: "Learn how to identify predatory journals in 2026 with evidence-based checklist, warning signs, and publishing ethics tips for researchers.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-predatory-journals",
    "label": "1. Understanding Predatory Journals"
  },
  {
    "id": "2-why-researchers-must-avoid-predatory-journals",
    "label": "2. Why Researchers Must Avoid Predatory Journals"
  },
  {
    "id": "3-common-characteristics-of-predatory-journals",
    "label": "3. Common Characteristics of Predatory Journals"
  },
  {
    "id": "4-evidence-based-guidelines-to-identify-predatory-journals",
    "label": "4. Evidence-Based Guidelines to Identify Predatory Journals"
  },
  {
    "id": "5-importance-of-publication-ethics",
    "label": "5. Importance of Publication Ethics"
  },
  {
    "id": "6-role-of-impact-factor-and-metrics",
    "label": "6. Role of Impact Factor and Metrics"
  },
  {
    "id": "7-checklist-before-submitting-a-manuscript",
    "label": "7. Checklist Before Submitting a Manuscript"
  },
  {
    "id": "8-risks-associated-with-predatory-publishing",
    "label": "8. Risks Associated with Predatory Publishing"
  },
  {
    "id": "9-support-for-early-career-researchers",
    "label": "9. Support for Early-Career Researchers"
  },
  {
    "id": "10-future-trends-in-2026",
    "label": "10. Future Trends in 2026"
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

export default function PublicationSupportJournalSelectionIdentifyPredatoryJournals2026Page() {
  return (
    <GuideLayout title={"How to Identify Predatory Journals: 2026 Evidence-Based Guidelines and Checklist"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
