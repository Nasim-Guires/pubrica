import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__poster-preparation__scientific-poster-preparation-guidelines';

export const metadata: Metadata = {
  title: "Scientific Poster Guidelines for Research Communication",
  description: "Enhance audience understanding with organized layouts, compelling graphics, concise messaging, well-structured research displays, and clear data presentation.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-scientific-posters-matter",
    "label": "1. Why Scientific Posters Matter"
  },
  {
    "id": "2-essential-components-of-a-scientific-poster",
    "label": "2. Essential Components of a Scientific Poster"
  },
  {
    "id": "3-designing-for-visual-clarity",
    "label": "3. Designing for Visual Clarity"
  },
  {
    "id": "3-1-poster-design-elements",
    "label": "3.1. Poster Design Elements"
  },
  {
    "id": "4-presenting-research-data-effectively",
    "label": "4. Presenting Research Data Effectively"
  },
  {
    "id": "5-preparing-for-poster-presentation-sessions",
    "label": "5. Preparing for Poster Presentation Sessions"
  },
  {
    "id": "6-emerging-trends-in-scientific-poster-design",
    "label": "6. Emerging Trends in Scientific Poster Design"
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

export default function PublicationSupportPosterPreparationScientificPosterPreparationGuidelinesPage() {
  return (
    <GuideLayout title={"Scientific Poster Preparation: Guidelines for Clear Research Communication"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
