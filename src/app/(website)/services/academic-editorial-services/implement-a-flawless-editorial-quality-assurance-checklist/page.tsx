import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/academic-editorial-services__implement-a-flawless-editorial-quality-assurance-checklist';

export const metadata: Metadata = {
  title: "How to Implement a Flawless Editorial Quality Assurance Checklist",
  description: "Learn how to create and implement an editorial QA checklist to ensure content quality, accuracy, and SEO optimization for publications.",
};

const TOC: TocItem[] = [
  {
    "id": "1-identify-your-editorial-standards-and-guidelines",
    "label": "1. Identify Your Editorial Standards and Guidelines"
  },
  {
    "id": "2-create-the-editorial-qa-checklist",
    "label": "2. Create the Editorial QA Checklist"
  },
  {
    "id": "3-establish-the-qa-workflow",
    "label": "3. Establish the QA Workflow"
  },
  {
    "id": "4-assign-editorial-roles-and-responsibilities",
    "label": "4. Assign Editorial Roles and Responsibilities"
  },
  {
    "id": "5-leverage-editorial-tools-and-software",
    "label": "5. Leverage Editorial Tools and Software"
  },
  {
    "id": "6-regularly-review-and-update-the-qa-checklist",
    "label": "6. Regularly Review and Update the QA Checklist"
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

export default function AcademicEditorialServicesImplementAFlawlessEditorialQualityAssuranceChecklistPage() {
  return (
    <GuideLayout title={"How to Implement a Flawless Editorial Quality Assurance Checklist for your Publication"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
