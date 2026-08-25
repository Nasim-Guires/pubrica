import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/academic-editorial-services__editorial-services-case-studies';

export const metadata: Metadata = {
  title: "Case Study Editorial Services | Quality & Accuracy",
  description: "Discover how editorial services improve case study clarity, structure, and academic standards for successful publication.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-are-editorial-services-for-case-studies",
    "label": "1. What are Editorial Services for Case Studies?"
  },
  {
    "id": "2-ensuring-clear-structure-with-editorial-services",
    "label": "2. Ensuring Clear Structure with Editorial Services"
  },
  {
    "id": "4-what-an-editorial-services-guarantee-error-free-writing-in",
    "label": "4. What an Editorial Services Guarantee Error-Free Writing in Case Studies"
  },
  {
    "id": "5-how-editorial-services-improve-engagement-and-flow-in-case",
    "label": "5. How Editorial Services Improve Engagement and Flow in Case Studies"
  },
  {
    "id": "6-editorial-process-for-case-study",
    "label": "6. Editorial Process for Case Study"
  },
  {
    "id": "7-benefits-of-editorial-services-for-case-studies",
    "label": "7. Benefits of Editorial Services for Case Studies"
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

export default function AcademicEditorialServicesEditorialServicesCaseStudiesPage() {
  return (
    <GuideLayout title={"What are Editorial Services for Case Studies and Why They Matter"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
