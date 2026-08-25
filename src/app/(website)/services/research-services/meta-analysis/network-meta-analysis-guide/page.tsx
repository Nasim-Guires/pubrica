import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__network-meta-analysis-guide';

export const metadata: Metadata = {
  title: "Network Meta-Analysis: Methods, Assumptions & Applications",
  description: "Learn network meta-analysis methods and assumptions, including mixed treatment comparison and indirect treatment comparison meta-analysis applications.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-network-meta-analysis-in-evidence-synthesis",
    "label": "1. Understanding Network Meta-Analysis in Evidence Synthesis"
  },
  {
    "id": "2-methods-used-in-network-meta-analysis",
    "label": "2. Methods Used in Network Meta-Analysis"
  },
  {
    "id": "3-key-assumptions-in-network-meta-analysis",
    "label": "3. Key Assumptions in Network Meta-Analysis"
  },
  {
    "id": "4-applications-of-network-meta-analysis-in-research",
    "label": "4. Applications of Network Meta-Analysis in Research"
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

export default function ResearchServicesMetaAnalysisNetworkMetaAnalysisGuidePage() {
  return (
    <GuideLayout title={"What Is Network Meta-Analysis? Methods, Assumptions, and Applications"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
