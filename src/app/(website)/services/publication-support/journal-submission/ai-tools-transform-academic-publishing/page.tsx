import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-submission__ai-tools-transform-academic-publishing';

export const metadata: Metadata = {
  title: "How AI Tools for Academic Publishing Are Changing Support",
  description: "Explore how AI tools for academic publishing are transforming manuscript editing services, peer review automation, and scholarly publishing workflows.",
};

const TOC: TocItem[] = [
  {
    "id": "1-the-growing-role-of-ai-in-academic-publishing",
    "label": "1. The Growing Role of AI in Academic Publishing"
  },
  {
    "id": "2-key-areas-where-ai-is-transforming-publication-support",
    "label": "2. Key Areas Where AI is Transforming Publication Support"
  },
  {
    "id": "3-benefits-of-ai-tools-in-publication-support-services",
    "label": "3. Benefits of AI Tools in Publication Support Services"
  },
  {
    "id": "4-popular-ai-tools-used-in-publication-support",
    "label": "4. Popular AI Tools Used in Publication Support"
  },
  {
    "id": "5-challenges-and-ethical-concerns",
    "label": "5. Challenges and Ethical Concerns"
  },
  {
    "id": "6-ai-and-the-future-of-publication-services",
    "label": "6. AI and the Future of Publication Services"
  },
  {
    "id": "7-best-practices-for-researchers-using-ai-tools",
    "label": "7. Best Practices for Researchers Using AI Tools"
  },
  {
    "id": "8-ai-assisted-academic-publishing",
    "label": "8. AI-Assisted Academic Publishing"
  },
  {
    "id": "9-ai-in-research-writing-and-journal-submission",
    "label": "9. AI in Research Writing and Journal Submission"
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

export default function PublicationSupportJournalSubmissionAiToolsTransformAcademicPublishingPage() {
  return (
    <GuideLayout title={"How AI Tools Are Transforming Academic Publishing"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
