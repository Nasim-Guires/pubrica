import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__plagiarism-services__meta-analysis-tools-medical-researchers';

export const metadata: Metadata = {
  title: "Top 5 Tools to Simplify Meta-Analysis in Medical Research",
  description: "Explore top tools for meta-analysis in medical research, like Rev Man, CMA, R, Stata, and Rayyan, to simplify data analysis and systematic reviews.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-software-tools-matter-in-meta-analysis",
    "label": "1. Why Software Tools Matter in Meta-Analysis"
  },
  {
    "id": "2-rev-man-review-manager",
    "label": "2. Rev Man (Review Manager)"
  },
  {
    "id": "3-comprehensive-meta-analysis-cma",
    "label": "3. Comprehensive Meta-Analysis (CMA)"
  },
  {
    "id": "4-r-and-meta-analysis-packages",
    "label": "4. R and Meta-Analysis Packages"
  },
  {
    "id": "5-stata",
    "label": "5. Stata"
  },
  {
    "id": "6-rayyan",
    "label": "6. Rayyan"
  },
  {
    "id": "7-comparing-meta-analysis-tools",
    "label": "7. Comparing Meta-Analysis Tools"
  },
  {
    "id": "8-choosing-the-right-tool",
    "label": "8. Choosing the Right Tool"
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

export default function PublicationSupportPlagiarismServicesMetaAnalysisToolsMedicalResearchersPage() {
  return (
    <GuideLayout title={"Tools to Make Meta-Analysis Easier for Medical Researchers"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
