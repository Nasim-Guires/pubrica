import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__literature-review-and-gap__open-access-research-impact';

export const metadata: Metadata = {
  title: "Open Access Publishing & Research Impact | Pubrica",
  description: "Explore how open access publishing improves research dissemination and scholarly publishing impact. Expert academic publishing services by Pubrica.",
};

const TOC: TocItem[] = [
  {
    "id": "1-open-access-publishing-an-overview",
    "label": "1. Open Access Publishing: An Overview"
  },
  {
    "id": "2-key-open-access-models-and-their-implementation-in-scienti",
    "label": "2. Key Open Access Models and Their Implementation in Scientific Research"
  },
  {
    "id": "3-the-influence-of-open-access-on-knowledge-dissemination-an",
    "label": "3. The Influence of Open Access on Knowledge Dissemination and Public Accessibility"
  },
  {
    "id": "4-impact-of-open-access-on-citation-and-academic-impact-metr",
    "label": "4. Impact of Open Access on Citation and Academic Impact Metrics"
  },
  {
    "id": "5-economic-considerations-of-open-access-publishing",
    "label": "5. Economic Considerations of Open Access Publishing"
  },
  {
    "id": "6-addressing-quality-control-and-peer-review-in-open-access-",
    "label": "6. Addressing Quality Control and Peer Review in Open Access Publishing"
  },
  {
    "id": "7-future-trends-and-challenges-in-open-access-publishing",
    "label": "7. Future Trends and Challenges in Open Access Publishing"
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

export default function ResearchServicesLiteratureReviewAndGapOpenAccessResearchImpactPage() {
  return (
    <GuideLayout title={"Open Access Publishing and Its Impact on Scientific Research"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
