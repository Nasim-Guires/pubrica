import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__meta-analysis-reporting-standards';

export const metadata: Metadata = {
  title: "Meta-Analysis Reporting Standards(MARS) Guidelines",
  description: "Learn how MARS guidelines enhance transparency, reproducibility, and reporting quality in meta-analysis research for stronger publication outcomes.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-are-mars-guidelines-in-meta-analysis-reporting",
    "label": "1. What Are MARS Guidelines in Meta-Analysis Reporting?"
  },
  {
    "id": "2-why-mars-guidelines-matter-for-evidence-based-research",
    "label": "2. Why MARS Guidelines Matter for Evidence-Based Research"
  },
  {
    "id": "3-core-components-of-mars-reporting-standards",
    "label": "3. Core Components of MARS Reporting Standards"
  },
  {
    "id": "4-mars-vs-other-reporting-guidelines",
    "label": "4. MARS vs. Other Reporting Guidelines"
  },
  {
    "id": "5-common-mistakes-in-meta-analysis-reporting",
    "label": "5. Common Mistakes in Meta-Analysis Reporting"
  },
  {
    "id": "6-how-to-ensure-compliance-with-mars-guidelines",
    "label": "6. How to Ensure Compliance with MARS Guidelines"
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

export default function ResearchServicesMetaAnalysisMetaAnalysisReportingStandardsPage() {
  return (
    <GuideLayout title={"MARS Guidelines Explained: Improving the Quality of Meta-Analysis Reporting"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
