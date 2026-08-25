import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__icmje-guidelines-medical-research-compliance';

export const metadata: Metadata = {
  title: "ICMJE Guidelines for Ethical Medical Research Publishing",
  description: "Ensure ethical compliance in medical publishing with ICMJE-aligned support for authors, trials, and data sharing.",
};

const TOC: TocItem[] = [
  {
    "id": "introduction",
    "label": "Introduction"
  },
  {
    "id": "what-is-icmje",
    "label": "What is ICMJE?"
  },
  {
    "id": "core-elements-of-the-icmje-guideline",
    "label": "Core Elements of the ICMJE Guideline"
  },
  {
    "id": "why-adhere-to-icmje-guidelines",
    "label": "Why Adhere to ICMJE Guidelines?"
  },
  {
    "id": "who-do-we-support",
    "label": "Who do We Support?"
  },
  {
    "id": "why-are-they-important",
    "label": "Why Are They Important?"
  },
  {
    "id": "the-icmje-guidelines",
    "label": "The ICMJE Guidelines:"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  }
];

export default function PublicationSupportIcmjeGuidelinesMedicalResearchCompliancePage() {
  return (
    <GuideLayout title={"ICMJE Guidelines: Ensuring Integrity and Transparency in Medical Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
