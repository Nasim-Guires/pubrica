import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/data-analytics-machine-learning__patient-journey-insights-machine-learning__data-extraction-healthcare-definition-methods-applications';

export const metadata: Metadata = {
  title: "Healthcare Data Extraction: Definition, Methods & Uses",
  description: "Learn about data extraction in healthcare, its methods, applications, and challenges in improving clinical and research outcomes.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-data-extraction-in-healthcare",
    "label": "1. What is Data Extraction in Healthcare?"
  },
  {
    "id": "2-methods-of-data-extraction",
    "label": "2. Methods of Data Extraction"
  },
  {
    "id": "3-applications-of-data-extraction",
    "label": "3. Applications of Data Extraction"
  },
  {
    "id": "4-benefits-of-data-extraction-in-healthcare",
    "label": "4. Benefits of Data Extraction in Healthcare"
  },
  {
    "id": "5-challenges-in-healthcare-data-extraction",
    "label": "5. Challenges in Healthcare Data Extraction"
  },
  {
    "id": "6-future-trends-in-extraction",
    "label": "6. Future Trends in Extraction"
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

export default function DataAnalyticsMachineLearningPatientJourneyInsightsMachineLearningDataExtractionHealthcareDefinitionMethodsApplicationsPage() {
  return (
    <GuideLayout title={"Data Extraction in Healthcare: Definition, Methods, and Applications"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
