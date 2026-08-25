import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__journal-selection-manuscript-optimization';

export const metadata: Metadata = {
  title: "Strategic Journal Selection and Manuscript Optimization",
  description: "Learn journal selection and manuscript optimization tips to improve publication success, avoid rejection, and meet academic journal requirements.",
};

const TOC: TocItem[] = [
  {
    "id": "1-importance-of-strategic-journal-selection",
    "label": "1. Importance of Strategic Journal Selection"
  },
  {
    "id": "2-evaluating-journal-suitability",
    "label": "2. Evaluating Journal Suitability"
  },
  {
    "id": "3-manuscript-optimisation-for-publication-success",
    "label": "3. Manuscript Optimisation for Publication Success"
  },
  {
    "id": "4-improving-scientific-writing-quality",
    "label": "4. Improving Scientific Writing Quality"
  },
  {
    "id": "5-aligning-with-journal-guidelines",
    "label": "5. Aligning with Journal Guidelines"
  },
  {
    "id": "6-visual-presentation-of-research-results",
    "label": "6. Visual Presentation of Research Results"
  },
  {
    "id": "7-responding-to-reviewer-feedback-and-common-reasons-for-man",
    "label": "7. Responding to Reviewer Feedback and Common Reasons for Manuscript Rejection"
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

export default function PublicationSupportJournalSelectionJournalSelectionManuscriptOptimizationPage() {
  return (
    <GuideLayout title={"Strategic Journal Selection and Manuscript Optimisation for Academic Publishing"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
