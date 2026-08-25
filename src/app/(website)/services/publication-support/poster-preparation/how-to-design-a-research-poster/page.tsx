import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__poster-preparation__how-to-design-a-research-poster';

export const metadata: Metadata = {
  title: "How to Design a Research Poster: Step-by-Step Guide",
  description: "Learn how to structure, lay out, and print a research poster that gets noticed. A step-by-step guide covering size, sections, and design best practices.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-the-purpose-of-a-research-poster",
    "label": "1. Understanding the Purpose of a Research Poster"
  },
  {
    "id": "2-standard-structure-of-a-research-poster",
    "label": "2. Standard Structure of a Research Poster"
  },
  {
    "id": "3-designing-an-effective-poster-layout",
    "label": "3. Designing an Effective Poster Layout"
  },
  {
    "id": "4-choosing-the-right-visual-elements",
    "label": "4. Choosing the Right Visual Elements"
  },
  {
    "id": "5-common-design-mistakes-to-avoid",
    "label": "5. Common Design Mistakes to Avoid"
  },
  {
    "id": "6-final-checklist-before-printing",
    "label": "6. Final Checklist Before Printing"
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

export default function PublicationSupportPosterPreparationHowToDesignAResearchPosterPage() {
  return (
    <GuideLayout title={"How to Design a Research Poster: Structure, Layout & Print Specifications (Step-by-Step)"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
