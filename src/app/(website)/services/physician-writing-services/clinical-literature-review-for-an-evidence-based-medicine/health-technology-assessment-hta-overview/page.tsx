import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__clinical-literature-review-for-an-evidence-based-medicine__health-technology-assessment-hta-overview';

export const metadata: Metadata = {
  title: "Health Technology Assessment (HTA) Overview",
  description: "Comprehensive guide on HTA, its process, importance, and global implementation in healthcare.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-health-technology-assessment",
    "label": "1. What is Health Technology Assessment?"
  },
  {
    "id": "2-why-is-hta-important",
    "label": "2. Why is HTA important?"
  },
  {
    "id": "4-importance-of-hta",
    "label": "4. Importance of HTA"
  },
  {
    "id": "5-global-implementation",
    "label": "5. Global Implementation"
  },
  {
    "id": "6-challenges-in-hta",
    "label": "6. Challenges in HTA"
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

export default function PhysicianWritingServicesClinicalLiteratureReviewForAnEvidenceBasedMedicineHealthTechnologyAssessmentHtaOverviewPage() {
  return (
    <GuideLayout title={"Health Technology Assessment (HTA): A Comprehensive Overview"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
