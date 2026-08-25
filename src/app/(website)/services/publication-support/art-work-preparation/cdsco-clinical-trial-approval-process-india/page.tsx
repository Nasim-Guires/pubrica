import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__art-work-preparation__cdsco-clinical-trial-approval-process-india';

export const metadata: Metadata = {
  title: "India CDSCO Clinical Trial Approval: Step-by-Step Guide",
  description: "Understand the step-by-step CDSCO clinical trial approval process under NDCTR 2019 and essential documentation requirements.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-stakeholders-and-roles-in-cdsco-approval",
    "label": "1. Stakeholders and Roles in CDSCO Approval"
  },
  {
    "id": "2-stages-of-cdsco-clinical-trial-approval-in-india",
    "label": "2. Stages of CDSCO Clinical Trial Approval in India"
  },
  {
    "id": "4-cdsco-timelines-for-clinical-trial-approval",
    "label": "4. CDSCO Timelines For Clinical Trial Approval"
  },
  {
    "id": "5-functions-of-cdsco-relevant-to-clinical-trials",
    "label": "5. Functions of CDSCO Relevant to Clinical Trials"
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

export default function PublicationSupportArtWorkPreparationCdscoClinicalTrialApprovalProcessIndiaPage() {
  return (
    <GuideLayout title={"Overview of CDSCO Clinical Trial Approval Process in India"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
