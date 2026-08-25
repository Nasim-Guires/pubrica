import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__right-journal-for-your-research';

export const metadata: Metadata = {
  title: "How to Select the Right Journal for Your Research | Guide",
  description: "Choose the right journal for your research with tips on journal scope, indexing, ethics, impact, and submission to improve publication success.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understand-your-research-scope",
    "label": "1. Understand Your Research Scope"
  },
  {
    "id": "2-evaluate-journal-quality",
    "label": "2. Evaluate Journal Quality"
  },
  {
    "id": "3-review-author-guidelines-carefully",
    "label": "3. Review Author Guidelines Carefully"
  },
  {
    "id": "4-consider-publication-ethics",
    "label": "4. Consider Publication Ethics"
  },
  {
    "id": "5-match-the-journal-with-your-research-goals",
    "label": "5. Match the Journal with Your Research Goals"
  },
  {
    "id": "6-avoid-common-journal-selection-mistakes",
    "label": "6. Avoid Common Journal Selection Mistakes"
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

export default function PublicationSupportJournalSelectionRightJournalForYourResearchPage() {
  return (
    <GuideLayout title={"How to Select the Right Journal for Your Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
