import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__biostatistics-and-statistical-programming-services__biostatistical-programming-framework-regulatory-research';

export const metadata: Metadata = {
  title: "Biostatistical Programming Framework for Regulatory Research",
  description: "Overview of biostatistical programming frameworks, tools, and standards supporting regulatory-compliant clinical research.",
};

const TOC: TocItem[] = [
  {
    "id": "1-core-principles-of-the-biostatistical-programming-framewor",
    "label": "1. Core Principles of the Biostatistical Programming Framework for Regulatory Research"
  },
  {
    "id": "2-study-design-and-pre-specification-in-regulatory-research",
    "label": "2. Study Design and Pre Specification in Regulatory Research"
  },
  {
    "id": "4-toolset-for-implementing-the-framework-in-regulatory-resea",
    "label": "4. Toolset for Implementing the Framework in Regulatory Research"
  },
  {
    "id": "5-best-practices-in-the-biostatistical-framework-for-regulat",
    "label": "5. Best Practices in the Biostatistical Framework for Regulatory Research"
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

export default function ResearchServicesBiostatisticsAndStatisticalProgrammingServicesBiostatisticalProgrammingFrameworkRegulatoryResearchPage() {
  return (
    <GuideLayout title={"What is the Biostatistical programming Framework for Regulatory Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
