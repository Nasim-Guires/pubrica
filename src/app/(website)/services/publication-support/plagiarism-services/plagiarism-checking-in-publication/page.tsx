import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__plagiarism-services__plagiarism-checking-in-publication';

export const metadata: Metadata = {
  title: "How Important Is Plagiarism Checking in Publication?",
  description: "Checking for plagiarism ensures originality, maintains academic integrity, prevents misconduct, and improves the quality of research publications.",
};

const TOC: TocItem[] = [
  {
    "id": "1-visual-overview-of-the-publication-screening-process",
    "label": "1. Visual Overview of the Publication Screening Process"
  },
  {
    "id": "2-why-plagiarism-checking-matters",
    "label": "2. Why Plagiarism Checking Matters"
  },
  {
    "id": "3-common-types-of-plagiarism",
    "label": "3. Common Types of Plagiarism"
  },
  {
    "id": "4-role-of-plagiarism-detection-software",
    "label": "4. Role of Plagiarism Detection Software"
  },
  {
    "id": "5-impact-on-journal-publication",
    "label": "5. Impact on Journal Publication"
  },
  {
    "id": "6-essential-publication-practices-for-researchers",
    "label": "6. Essential Publication Practices for Researchers"
  },
  {
    "id": "7-challenges-in-plagiarism-assessment",
    "label": "7. Challenges in Plagiarism Assessment"
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

export default function PublicationSupportPlagiarismServicesPlagiarismCheckingInPublicationPage() {
  return (
    <GuideLayout title={"How Important Is Plagiarism Checking in the Publication Process?"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
