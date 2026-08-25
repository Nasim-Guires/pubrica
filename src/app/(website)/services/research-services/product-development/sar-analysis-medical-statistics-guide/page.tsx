import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__product-development__sar-analysis-medical-statistics-guide';

export const metadata: Metadata = {
  title: "SAR Analysis in Research: Structure Activity Guide",
  description: "Optimize drug development with Pubrica’s SAR analysis medical statistics guide—data-driven insights for precise, scalable research decisions.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-sar-in-research",
    "label": "1. Understanding SAR in Research"
  },
  {
    "id": "2-key-components-of-sar-analysis",
    "label": "2. Key Components of SAR Analysis"
  },
  {
    "id": "3-sar-workflow-in-drug-discovery",
    "label": "3. SAR Workflow in Drug Discovery"
  },
  {
    "id": "4-types-of-sar-approaches",
    "label": "4. Types of SAR Approaches"
  },
  {
    "id": "5-importance-of-sar-in-research",
    "label": "5. Importance of SAR in Research"
  },
  {
    "id": "6-applications-of-sar",
    "label": "6. Applications of SAR"
  },
  {
    "id": "7-challenges-in-sar-analysis",
    "label": "7. Challenges in SAR Analysis"
  },
  {
    "id": "8-best-practices-for-effective-sar-studies",
    "label": "8. Best Practices for Effective SAR Studies"
  },
  {
    "id": "9-future-trends-in-sar-research",
    "label": "9. Future Trends in SAR Research"
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

export default function ResearchServicesProductDevelopmentSarAnalysisMedicalStatisticsGuidePage() {
  return (
    <GuideLayout title={"SAR Analysis in Research: A Complete Guide to Structure Activity Relationships"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
