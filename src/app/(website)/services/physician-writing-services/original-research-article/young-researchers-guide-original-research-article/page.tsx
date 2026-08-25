import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/physician-writing-services__original-research-article__young-researchers-guide-original-research-article';

export const metadata: Metadata = {
  title: "A Young Researcher’s Guide to Original Research Articles",
  description: "Learn how to write original research articles with proper structure, methodology, and scholarly rigor.",
};

const TOC: TocItem[] = [
  {
    "id": "research-service",
    "label": "Research Service"
  },
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "2-approaching-an-original-research-article",
    "label": "2. Approaching an Original Research Article"
  },
  {
    "id": "3-choosing-a-research-question",
    "label": "3. Choosing a Research Question"
  },
  {
    "id": "4-conducting-a-literature-search",
    "label": "4. Conducting a Literature Search"
  },
  {
    "id": "5-structuring-a-research-article",
    "label": "5. Structuring a Research Article"
  },
  {
    "id": "6-formatting-the-paper",
    "label": "6. Formatting the Paper"
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

export default function PhysicianWritingServicesOriginalResearchArticleYoungResearchersGuideOriginalResearchArticlePage() {
  return (
    <GuideLayout title={"A Young Researcher’s Guide to Writing an Original Research Article"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
