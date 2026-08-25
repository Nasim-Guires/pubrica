import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__systematic-review__risk-of-bias-assessment-guide';

export const metadata: Metadata = {
  title: "Risk of Bias Assessment Tools for Research Teams",
  description: "Comprehensive guide to risk of bias assessment tools like RoB 2, ROBINS-I, QUADAS-2, and AMSTAR 2 for systematic reviews and evidence synthesis",
};

const TOC: TocItem[] = [
  {
    "id": "1-core-frameworks-for-risk-of-bias-assessment",
    "label": "1. Core Frameworks for Risk of Bias Assessment"
  },
  {
    "id": "2-major-domains-of-bias",
    "label": "2. Major Domains of Bias"
  },
  {
    "id": "3-best-practices-for-conducting-risk-of-bias-assessment",
    "label": "3. Best Practices for Conducting Risk of Bias Assessment"
  },
  {
    "id": "4-integrating-risk-of-bias-with-evidence-certainty",
    "label": "4. Integrating Risk of Bias with Evidence Certainty"
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

export default function ResearchServicesSystematicReviewRiskOfBiasAssessmentGuidePage() {
  return (
    <GuideLayout title={"Understanding Risk of Bias Assessment: Frameworks, Tools, and Best Practices"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
