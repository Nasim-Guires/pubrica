import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/continuing-medical-education-cme-content-development__what-is-continuing-medical-education';

export const metadata: Metadata = {
  title: "What Is Continuing Medical Education and Its Role in Healthcare",
  description: "Learn what Continuing Medical Education is, its benefits, requirements, and how CME improves healthcare practice.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-cme-matters-in-healthcare-practice",
    "label": "1. Why CME Matters in Healthcare Practice"
  },
  {
    "id": "2-types-of-cme-activities",
    "label": "2. Types of CME Activities"
  },
  {
    "id": "3-how-cme-improves-clinician-knowledge-and-skills",
    "label": "3. How CME Improves Clinician Knowledge and Skills"
  },
  {
    "id": "4-impact-on-clinical-practice-and-outcomes",
    "label": "4. Impact on Clinical Practice and Outcomes"
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

export default function ContinuingMedicalEducationCmeContentDevelopmentWhatIsContinuingMedicalEducationPage() {
  return (
    <GuideLayout title={"What Is Continuing Medical Education and How It Improves Healthcare Practice"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
