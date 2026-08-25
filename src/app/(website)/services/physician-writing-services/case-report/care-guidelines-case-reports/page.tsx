import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__case-report__care-guidelines-case-reports';

export const metadata: Metadata = {
  title: "CARE Guidelines for Case Reports: Tools & Applications",
  description: "Learn CARE guidelines for accurate, transparent case reports, with tools like CARE-writer & clinical applications.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-are-the-care-guidelines",
    "label": "1. What are the CARE guidelines?"
  },
  {
    "id": "2-what-is-care-writer",
    "label": "2. What is CARE-writer?"
  },
  {
    "id": "4-case-reports",
    "label": "4. Case Reports"
  },
  {
    "id": "5-case-reports-following-care-improve-healthcare-by",
    "label": "5. Case reports following CARE improve healthcare by"
  },
  {
    "id": "6-the-care-toolkit-for-case-reports",
    "label": "6. The CARE Toolkit for Case Reports"
  },
  {
    "id": "7-what-s-coming-from-the-care-initiative",
    "label": "7. What’s coming from the CARE initiative"
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

export default function PhysicianWritingServicesCaseReportCareGuidelinesCaseReportsPage() {
  return (
    <GuideLayout title={"CARE Guidelines for Case Reports: Framework Tools and Clinical Applications"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
