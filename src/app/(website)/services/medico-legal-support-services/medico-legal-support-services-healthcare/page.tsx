import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/medico-legal-support-services__medico-legal-support-services-healthcare';

export const metadata: Metadata = {
  title: "Medico-Legal Support Services in Healthcare Systems",
  description: "Expert medico legal support services for healthcare organizations and hospitals. Ensure compliant documentation, case analysis, and reporting.",
};

const TOC: TocItem[] = [
  {
    "id": "1-overview-of-medico-legal-support",
    "label": "1. Overview of Medico-Legal Support"
  },
  {
    "id": "2-core-functions",
    "label": "2. Core Functions"
  },
  {
    "id": "3-significance-in-healthcare",
    "label": "3. Significance in Healthcare"
  },
  {
    "id": "4-categories-of-medico-legal-issues",
    "label": "4. Categories of Medico-Legal Issues"
  },
  {
    "id": "5-steps-in-managing-a-medico-legal-case",
    "label": "5. Steps in Managing a Medico-Legal Case"
  },
  {
    "id": "6-responsibilities-of-medical-practitioners",
    "label": "6. Responsibilities of Medical Practitioners"
  },
  {
    "id": "7-preventive-strategies",
    "label": "7. Preventive Strategies"
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

export default function MedicoLegalSupportServicesMedicoLegalSupportServicesHealthcarePage() {
  return (
    <GuideLayout title={"Comprehensive Overview of Medico-Legal Support in Healthcare"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
