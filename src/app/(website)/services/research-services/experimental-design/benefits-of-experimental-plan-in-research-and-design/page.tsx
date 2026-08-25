import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__experimental-design__benefits-of-experimental-plan-in-research-and-design';

export const metadata: Metadata = {
  title: "Benefits of an Experimental Plan in Research and Design",
  description: "Discover the key benefits of an experimental plan in research design. Learn about control, reliability, and ethical considerations",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-clear-research-focus",
    "label": "1. Clear Research Focus"
  },
  {
    "id": "2-control-over-variables",
    "label": "2. Control Over Variables"
  },
  {
    "id": "3-systematic-data-collection",
    "label": "3. Systematic Data Collection"
  },
  {
    "id": "4-replicability",
    "label": "4. Replicability"
  },
  {
    "id": "5-minimized-errors",
    "label": "5. Minimized Errors"
  },
  {
    "id": "6-ethical-considerations",
    "label": "6. Ethical Considerations"
  },
  {
    "id": "7-optimal-resource-allocation",
    "label": "7. Optimal Resource Allocation"
  },
  {
    "id": "8-improved-interpretation-of-results",
    "label": "8. Improved Interpretation of Results"
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

export default function ResearchServicesExperimentalDesignBenefitsOfExperimentalPlanInResearchAndDesignPage() {
  return (
    <GuideLayout title={"What are the benefits of an experimental plan in research and experimental research design"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
