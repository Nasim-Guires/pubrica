import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-impact__graphical-abstract__research-visualization';

export const metadata: Metadata = {
  title: "Research Visualization Services for Scientific Impact",
  description: "Enhance research visibility with Pubrica’s graphical abstract and research visualization services designed for academic teams.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-research-visualization-matters-in-modern-science",
    "label": "1. Why Research Visualization Matters in Modern Science"
  },
  {
    "id": "2-role-of-research-visualization-in-academic-publishing",
    "label": "2. Role of Research Visualization in Academic Publishing"
  },
  {
    "id": "3-types-of-research-visualization-used-by-researchers",
    "label": "3. Types of Research Visualization Used by Researchers"
  },
  {
    "id": "4-research-visualization-across-disciplines",
    "label": "4. Research Visualization Across Disciplines"
  },
  {
    "id": "5-best-practices-for-effective-research-visualization",
    "label": "5. Best Practices for Effective Research Visualization"
  },
  {
    "id": "6-research-visualization-process-from-manuscript-to-visual",
    "label": "6. Research Visualization Process: From Manuscript to Visual"
  },
  {
    "id": "7-research-visualization-for-digital-and-post-publication-im",
    "label": "7. Research Visualization for Digital and Post-Publication Impact"
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

export default function ResearchImpactGraphicalAbstractResearchVisualizationPage() {
  return (
    <GuideLayout title={"Research Visualization: Transforming Complex Science into Clear, Impactful Visuals"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
