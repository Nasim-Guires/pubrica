import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__poster-preparation__why-scientific-design-and-visualization-matter-in-poster-preparation';

export const metadata: Metadata = {
  title: "Scientific design and visualization improve clarity and impact.",
  description: "Pubrica provides expert scientific poster design and data visualization, presenting research clearly and impactfully.",
};

const TOC: TocItem[] = [
  {
    "id": "1-the-role-of-scientific-posters-in-research-communication",
    "label": "1. The Role of Scientific Posters in Research Communication"
  },
  {
    "id": "2-why-scientific-design-matters-in-poster-preparation",
    "label": "2. Why Scientific Design Matters in Poster Preparation"
  },
  {
    "id": "3-importance-of-data-visualisation-in-scientific-posters",
    "label": "3. Importance of Data Visualisation in Scientific Posters"
  },
  {
    "id": "4-key-principles-of-effective-scientific-poster-design",
    "label": "4. Key Principles of Effective Scientific Poster Design"
  },
  {
    "id": "5-visual-storytelling-and-flow-in-posters",
    "label": "5. Visual Storytelling and Flow in Posters"
  },
  {
    "id": "6-accessibility-and-inclusivity-in-scientific-visualisation",
    "label": "6. Accessibility and Inclusivity in Scientific Visualisation"
  },
  {
    "id": "7-long-term-impact-of-good-poster-design",
    "label": "7. Long-Term Impact of Good Poster Design"
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

export default function PublicationSupportPosterPreparationWhyScientificDesignAndVisualizationMatterInPosterPreparationPage() {
  return (
    <GuideLayout title={"Why Scientific Design and Visualization Matter in Poster Preparation"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
