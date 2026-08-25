import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__literature-review-and-gap__drug-drug-interaction-literature-review-services-by-pubrica';

export const metadata: Metadata = {
  title: "Drug-Drug Interaction Literature Review Services by Pubrica - Pubrica",
  description: "Drug–Drug Interaction Literature Review Services – Pubrica offers thorough analysis, and reporting to support safe clinical decision-making.",
};

const TOC: TocItem[] = [];

export default function ResearchServicesLiteratureReviewAndGapDrugDrugInteractionLiteratureReviewServicesByPubricaPage() {
  return (
    <GuideLayout title={"Drug-Drug Interaction Literature Review Services by Pubrica"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
