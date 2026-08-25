import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__journal-manuscript-formatting-services__citation-management-tools-formatting-referencing';

export const metadata: Metadata = {
  title: "Citation Management Tools for Accurate Formatting & Referencing",
  description: "Explore citation management tools that ensure accurate formatting, referencing, and journal-ready manuscripts.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-are-citation-management-tools",
    "label": "1. What Are Citation Management Tools?"
  },
  {
    "id": "2-role-of-citation-management-tools-in-accurate-formatting",
    "label": "2. Role of Citation Management Tools in Accurate Formatting"
  },
  {
    "id": "3-popular-citation-management-tools-and-their-features",
    "label": "3. Popular Citation Management Tools and Their Features"
  },
  {
    "id": "4-how-citation-tools-improve-referencing-accuracy",
    "label": "4. How Citation Tools Improve Referencing Accuracy"
  },
  {
    "id": "5-citation-management-tools-and-journal-compliance",
    "label": "5. Citation Management Tools and Journal Compliance"
  },
  {
    "id": "6-best-practices-for-using-citation-management-tools",
    "label": "6. Best Practices for Using Citation Management Tools"
  },
  {
    "id": "7-when-to-combine-citation-tools-with-professional-formattin",
    "label": "7. When to Combine Citation Tools with Professional Formatting Services"
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

export default function PublicationSupportJournalManuscriptFormattingServicesCitationManagementToolsFormattingReferencingPage() {
  return (
    <GuideLayout title={"Citation Management Tools for Accurate Formatting and Referencing"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
