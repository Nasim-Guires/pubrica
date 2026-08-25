import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/medico-legal-support-services__independent-medical-examinations-and-expert-assessments-in-research';

export const metadata: Metadata = {
  title: "Independent Medical Examinations in Research & Assessments",
  description: "Learn how Independent Medical Examinations (IMEs) and expert assessments improve research quality, patient safety, and clinical trial outcomes.",
};

const TOC: TocItem[] = [
  {
    "id": "1-role-of-imes-in-research",
    "label": "1. Role of IMEs in Research"
  },
  {
    "id": "2-types-of-expert-assessments",
    "label": "2. Types of Expert Assessments"
  },
  {
    "id": "3-importance-of-expert-assessments",
    "label": "3. Importance of Expert Assessments"
  },
  {
    "id": "4-benefits-and-challenges",
    "label": "4. Benefits and Challenges"
  },
  {
    "id": "5-best-practices-for-conducting-imes",
    "label": "5. Best Practices for Conducting IMEs"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "frequently-asked-questions-faqs",
    "label": "Frequently Asked Questions (FAQs)"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function MedicoLegalSupportServicesIndependentMedicalExaminationsAndExpertAssessmentsInResearchPage() {
  return (
    <GuideLayout title={"Independent Medical Examinations (IMEs) and Expert Assessments in Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
