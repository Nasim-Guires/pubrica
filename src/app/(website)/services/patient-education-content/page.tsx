import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/patient-education-content';

export const metadata: Metadata = {
  title: "Patient Education Content Service - Pubrica",
  description: "Professional patient education content development — evidence-based, patient-centred materials for hospitals, pharma, and telehealth platforms.",
};

const TOC: TocItem[] = [
  {
    "id": "professional-patient-education-content-development-service-c",
    "label": "Professional Patient Education Content Development Service: Communicate Medical Information with Clarity, Compassion, and Compliance"
  },
  {
    "id": "what-we-do",
    "label": "What We do"
  },
  {
    "id": "radiology-https-pubrica-com-subject-matter-experts-radiology",
    "label": "[Radiology](https://pubrica.com/subject-matter-experts/radiology/)"
  },
  {
    "id": "nuclear-medicine-https-pubrica-com-subject-matter-experts",
    "label": "[Nuclear Medicine](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "emergency-medicine-https-pubrica-com-subject-matter-experts",
    "label": "[Emergency medicine](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "internal-medicine-https-pubrica-com-subject-matter-experts",
    "label": "[Internal medicine](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "oncology-https-pubrica-com-subject-matter-experts",
    "label": "[Oncology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "cardiology-https-pubrica-com-subject-matter-experts-cardiolo",
    "label": "[Cardiology](https://pubrica.com/subject-matter-experts/cardiology/)"
  },
  {
    "id": "neurology-https-pubrica-com-subject-matter-experts-neurology",
    "label": "[Neurology](https://pubrica.com/subject-matter-experts/neurology/)"
  },
  {
    "id": "otolaryngology-https-pubrica-com-subject-matter-experts",
    "label": "[Otolaryngology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "obstetrics-gynaecology-https-pubrica-com-subject-matter-expe",
    "label": "[Obstetrics & Gynaecology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "orthopaedics-https-pubrica-com-subject-matter-experts",
    "label": "[Orthopaedics](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "gastroenterology-https-pubrica-com-subject-matter-experts",
    "label": "[Gastroenterology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "paediatrics-https-pubrica-com-subject-matter-experts",
    "label": "[Paediatrics](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "how-to-structure-case-reports-and-review-articles-for-medica",
    "label": "How to Structure Case Reports and Review Articles for Medical Journals"
  },
  {
    "id": "how-should-physicians-choose-the-right-journal-for-submittin",
    "label": "How Should Physicians Choose the Right Journal for Submitting a Case..."
  },
  {
    "id": "how-physicians-can-write-clear-and-impactful-patient-educati",
    "label": "How Physicians Can Write Clear and Impactful Patient Education Materials"
  }
];

export default function PatientEducationContentPage() {
  return (
    <GuideLayout title={"Patient Education Content Service: Bridging Clinical Knowledge and Patient Understanding"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
