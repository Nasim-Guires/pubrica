import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-selection__understanding-cope-publication-ethics';

export const metadata: Metadata = {
  title: "Understanding COPE: Ethics in Academic Publishing",
  description: "Learn about COPE’s role in ensuring ethical standards and integrity in academic publishing and research.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "introduction",
    "label": "Introduction"
  },
  {
    "id": "what-is-cope",
    "label": "What Is COPE?"
  },
  {
    "id": "types-of-cope-guidelines",
    "label": "Types of COPE Guidelines"
  },
  {
    "id": "example-of-a-cope-case",
    "label": "Example of a COPE Case"
  },
  {
    "id": "why-cope-matters-in-scholarly-publishing",
    "label": "Why COPE Matters in Scholarly Publishing"
  },
  {
    "id": "cope-and-pubrica-s-commitment",
    "label": "COPE and Pubrica’s Commitment"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  }
];

export default function PublicationSupportJournalSelectionUnderstandingCopePublicationEthicsPage() {
  return (
    <GuideLayout title={"Understanding COPE: Ethical Backbone of Academic Publishing"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
