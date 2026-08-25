import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/data-analytics-machine-learning__customer-segmentation__patient-segmentation-in-healthcare';

export const metadata: Metadata = {
  title: "Patient Segmentation in Healthcare Overview",
  description: "Patient segmentation in healthcare by Pubrica uses data analytics and machine learning to support hospitals, payers, and providers",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-patient-segmentation-matters",
    "label": "1. Why Patient Segmentation Matters"
  },
  {
    "id": "2-types-of-patient-segmentation",
    "label": "2. Types of Patient Segmentation"
  },
  {
    "id": "3-how-patient-segmentation-works",
    "label": "3. How Patient Segmentation Works"
  },
  {
    "id": "4-leveraging-segmentation-for-smarter-decisions",
    "label": "4. Leveraging Segmentation for Smarter Decisions"
  },
  {
    "id": "5-accreditation-and-quality-assurance-in-cme",
    "label": "5. Accreditation and Quality Assurance in CME"
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

export default function DataAnalyticsMachineLearningCustomerSegmentationPatientSegmentationInHealthcarePage() {
  return (
    <GuideLayout title={"What is Patient Segmentation and How to Leverage It for Smarter Healthcare Decisions"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
