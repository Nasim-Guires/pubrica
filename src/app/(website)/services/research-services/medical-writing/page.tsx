import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__medical-writing';

export const metadata: Metadata = {
  title: "Expert Medical Writing Services for Pharma & Research",
  description: "Pubrica delivers expert medical writing, research writing, and medical paper writing services for physicians, researchers, and healthcare professionals.",
};

const TOC: TocItem[] = [
  {
    "id": "endocrinology-https-pubrica-com-subject-matter-experts",
    "label": "[Endocrinology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "haematology-https-pubrica-com-subject-matter-experts",
    "label": "[Haematology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "gastroenterology-https-pubrica-com-subject-matter-experts",
    "label": "[Gastroenterology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "dermatology-https-pubrica-com-subject-matter-experts-dermato",
    "label": "[Dermatology](https://pubrica.com/subject-matter-experts/dermatology/)"
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
    "id": "urology-https-pubrica-com-subject-matter-experts",
    "label": "[Urology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "paediatrics-https-pubrica-com-subject-matter-experts",
    "label": "[Paediatrics](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "immunology-https-pubrica-com-subject-matter-experts",
    "label": "[Immunology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "devices-class-i-iii-https-pubrica-com-subject-matter-experts",
    "label": "[Devices (Class I–III)](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "obstetrics-and-gynaecology-https-pubrica-com-subject-matter-",
    "label": "[Obstetrics and Gynaecology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "psychiatry-https-pubrica-com-subject-matter-experts-psychiat",
    "label": "[Psychiatry](https://pubrica.com/subject-matter-experts/psychiatry/)"
  },
  {
    "id": "geriatrics-https-pubrica-com-subject-matter-experts",
    "label": "[Geriatrics](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "rheumatology-https-pubrica-com-subject-matter-experts",
    "label": "[Rheumatology](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "genetic-disorders-https-pubrica-com-subject-matter-experts",
    "label": "[Genetic Disorders](https://pubrica.com/subject-matter-experts/)"
  },
  {
    "id": "regulatory-compliance-across-global-standards",
    "label": "Regulatory Compliance Across Global Standards"
  },
  {
    "id": "information-security-confidentiality",
    "label": "Information Security & Confidentiality"
  },
  {
    "id": "subject-matter-experts-internal-training",
    "label": "Subject Matter Experts & Internal Training"
  },
  {
    "id": "fast-turnaround-without-compromising-quality",
    "label": "Fast Turnaround Without Compromising Quality"
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

export default function ResearchServicesMedicalWritingPage() {
  return (
    <GuideLayout title={"Medical Writing"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
