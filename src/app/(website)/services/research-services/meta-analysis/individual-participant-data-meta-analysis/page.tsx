import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__meta-analysis__individual-participant-data-meta-analysis';

export const metadata: Metadata = {
  title: "Overview of Individual Participant Data (IPD) Meta-Analysis",
  description: "Explore IPD Meta-Analysis, its methods, benefits, and applications in clinical research for more accurate and reliable evidence synthesis results.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-individual-participant-data-meta-analysis",
    "label": "1. What Is Individual Participant Data Meta-Analysis?"
  },
  {
    "id": "2-why-is-ipd-meta-analysis-important",
    "label": "2. Why Is IPD Meta-Analysis Important?"
  },
  {
    "id": "3-steps-involved-in-conducting-an-ipd-meta-analysis",
    "label": "3. Steps Involved in Conducting an IPD Meta-Analysis"
  },
  {
    "id": "4-statistical-approaches-in-ipd-meta-analysis",
    "label": "4. Statistical Approaches in IPD Meta-Analysis"
  },
  {
    "id": "5-applications-and-issues-related-to-ipd-meta-analysis",
    "label": "5. Applications and Issues Related to IPD Meta-Analysis"
  },
  {
    "id": "6-best-practices-for-successful-ipd-meta-analysis",
    "label": "6. Best Practices for Successful IPD Meta-Analysis"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "frequently-asked-questions-faqs",
    "label": "Frequently Asked Questions (FAQs)"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function ResearchServicesMetaAnalysisIndividualParticipantDataMetaAnalysisPage() {
  return (
    <GuideLayout title={"A Comprehensive Overview of Individual Participant Data (IPD) Meta-Analysis"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
