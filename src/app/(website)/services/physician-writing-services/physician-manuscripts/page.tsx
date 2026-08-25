import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__physician-manuscripts';

export const metadata: Metadata = {
  title: "Physician Manuscript Writing Service | Pubrica",
  description: "Specialized manuscript support for physicians including writing, editing, and publication help for clinical studies, case reports & journals.",
};

const TOC: TocItem[] = [
  {
    "id": "professional-physician-manuscript-service-your-partner-in-se",
    "label": "Professional Physician Manuscript Service: Your Partner in Seamless Publishing, Credibility, and Compliance"
  },
  {
    "id": "scientific-medical-manuscript-content-development",
    "label": "Scientific Medical Manuscript Content Development:"
  },
  {
    "id": "customized-clinical-and-educational-medical-content",
    "label": "Customized Clinical and Educational Medical Content"
  },
  {
    "id": "speed-up-your-physician-manuscript-writing-with-pubrica",
    "label": "Speed up your Physician Manuscript writing with Pubrica"
  },
  {
    "id": "dedicated-to-busy-medical-professionals",
    "label": "Dedicated to Busy Medical Professionals"
  },
  {
    "id": "expert-medical-writers-scientific-reviewers",
    "label": "Expert Medical Writers & Scientific Reviewers"
  },
  {
    "id": "end-to-end-publication-support",
    "label": "End-to-End Publication Support"
  },
  {
    "id": "journal-submission-ready-output",
    "label": "Journal-Submission Ready Output"
  },
  {
    "id": "compliant-with-global-standards",
    "label": "Compliant with Global Standards"
  },
  {
    "id": "extensive-journal-experience",
    "label": "Extensive Journal Experience"
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

export default function PhysicianWritingServicesPhysicianManuscriptsPage() {
  return (
    <GuideLayout title={"Physician Manuscript Service: Transform Clinical Expertise into Published Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
