import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-impact__scientific-news-report__scientific-news-reporting-for-researchers';

export const metadata: Metadata = {
  title: "Scientific News Reporting for Research Visibility",
  description: "Scientific news reporting services that translate research into clear stories, improving research visibility and public understanding.",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-scientific-news-reporting",
    "label": "1. Understanding Scientific News Reporting"
  },
  {
    "id": "2-the-role-of-science-communication-in-research-visibility",
    "label": "2. The Role of Science Communication in Research Visibility"
  },
  {
    "id": "3-why-researchers-need-scientific-news-reporting",
    "label": "3. Why Researchers Need Scientific News Reporting"
  },
  {
    "id": "4-challenges-and-ethical-considerations-in-reporting",
    "label": "4. Challenges and Ethical Considerations in Reporting"
  },
  {
    "id": "5-best-practices-for-effective-scientific-news-reporting",
    "label": "5. Best Practices for Effective Scientific News Reporting"
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

export default function ResearchImpactScientificNewsReportScientificNewsReportingForResearchersPage() {
  return (
    <GuideLayout title={"What is Scientific News Reporting and Why Researchers Need It"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
