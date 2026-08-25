import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/medical-data-collection__types-of-research-data-sources';

export const metadata: Metadata = {
  title: "Types of Research Data Sources Explained Simply",
  description: "Understand how different data sources support research, with insights on choosing credible information for better analysis and informed decisions.",
};

const TOC: TocItem[] = [
  {
    "id": "1-the-foundation-of-research-data-sources-explained",
    "label": "1. The Foundation of Research: Data Sources Explained"
  },
  {
    "id": "2-primary-data-sources-first-hand-evidence",
    "label": "2. Primary Data Sources: First-Hand Evidence"
  },
  {
    "id": "3-secondary-data-sources-building-on-existing-knowledge",
    "label": "3. Secondary Data Sources: Building on Existing Knowledge"
  },
  {
    "id": "4-tertiary-data-sources-simplified-knowledge",
    "label": "4. Tertiary Data Sources: Simplified Knowledge"
  },
  {
    "id": "5-comparative-overview-of-data-sources",
    "label": "5. Comparative Overview of Data Sources"
  },
  {
    "id": "6-understanding-data-by-nature-quantitative-and-qualitative",
    "label": "6. Understanding Data by Nature: Quantitative and Qualitative"
  },
  {
    "id": "7-internal-and-external-data-sources",
    "label": "7. Internal and External Data Sources"
  },
  {
    "id": "8-why-data-source-selection-matters",
    "label": "8. Why Data Source Selection Matters"
  },
  {
    "id": "9-challenges-in-using-data-sources",
    "label": "9. Challenges in Using Data Sources"
  },
  {
    "id": "10-developing-a-strategic-approach",
    "label": "10. Developing a Strategic Approach"
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

export default function MedicalDataCollectionTypesOfResearchDataSourcesPage() {
  return (
    <GuideLayout title={"Understanding Different Types of Research Data Sources"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
