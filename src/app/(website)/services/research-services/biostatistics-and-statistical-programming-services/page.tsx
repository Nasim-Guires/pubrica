import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__biostatistics-and-statistical-programming-services';

export const metadata: Metadata = {
  title: "Biostatistical Programming Services for Clinical Trials – Pubrica",
  description: "Expert biostatistical programming and analysis for clinical trials, from data management to validated, regulatory-ready results output now.",
};

const TOC: TocItem[] = [
  {
    "id": "pharmaceutical-biotechnology-companies",
    "label": "Pharmaceutical & Biotechnology Companies"
  },
  {
    "id": "clinical-research-organizations-cros",
    "label": "Clinical Research Organizations (CROs)"
  },
  {
    "id": "academic-research-institutions",
    "label": "Academic & Research Institutions"
  },
  {
    "id": "medical-device-manufacturers",
    "label": "Medical Device Manufacturers"
  },
  {
    "id": "healthcare-providers-hospitals",
    "label": "Healthcare Providers & Hospitals"
  },
  {
    "id": "regulatory-agencies-government-bodies",
    "label": "Regulatory Agencies & Government Bodies"
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

export default function ResearchServicesBiostatisticsAndStatisticalProgrammingServicesPage() {
  return (
    <GuideLayout title={"Biostatistics and Statistical Programming Services"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
