import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/medical-writing__ich-guidelines-clinical-trials-drug-development';

export const metadata: Metadata = {
  title: "ICH Guidelines for Clinical Trials & Drug Development",
  description: "Learn ICH guidelines for clinical trials and drug development. Pubrica delivers professional medical writing services for accurate compliance.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-are-the-ich-guidelines",
    "label": "1. What are the ICH Guidelines?"
  },
  {
    "id": "2-types-of-ich-guidelines",
    "label": "2. Types of ICH Guidelines"
  },
  {
    "id": "4-ich-guideline-in-drug-development",
    "label": "4. ICH Guideline in Drug Development"
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

export default function MedicalWritingIchGuidelinesClinicalTrialsDrugDevelopmentPage() {
  return (
    <GuideLayout title={"ICH Guidelines for Clinical Trials and Drug Development"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
