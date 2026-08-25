import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__meta-analysis-role-evidence-based-research';

export const metadata: Metadata = {
  title: "Meta-Analysis Role in Evidence-Based Research",
  description: "Explore methods used to combine research findings for improved accuracy, stronger conclusions, and better support for scientific decision-making.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-meta-analysis",
    "label": "1. What is Meta-Analysis"
  },
  {
    "id": "2-methodological-framework-for-performing-meta-analyses",
    "label": "2. Methodological Framework for Performing Meta-Analyses"
  },
  {
    "id": "4-methodological-constraints-of-meta-analysis",
    "label": "4. Methodological Constraints of Meta Analysis"
  },
  {
    "id": "5-applications-of-meta-analysis-across-disciplines",
    "label": "5. Applications of Meta-Analysis Across Disciplines"
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

export default function ResearchServicesMetaAnalysisMetaAnalysisRoleEvidenceBasedResearchPage() {
  return (
    <GuideLayout title={"Define Meta-Analysis: Exploring Its Role in Evidence-Based Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
