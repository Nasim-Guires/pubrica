import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__new-product-discovery-and-development';

export const metadata: Metadata = {
  title: "New Product Development - Pubrica",
  description: "New Product Development – Pubrica supports research, formulation, testing, and regulatory documentation for successful product launches.",
};

const TOC: TocItem[] = [
  {
    "id": "meta-analysis-https-pubrica-com-academy-research-systematic-",
    "label": "[Meta-analysis](https://pubrica.com/academy/research/systematic-review-meta-analysis-step-by-step-guide/) types that we undertake"
  },
  {
    "id": "our-comprehensive-meta-analyses-identification-reanalyses-an",
    "label": "Our Comprehensive meta-analyses Identification, Reanalyses and Analyses Services & Solutions"
  }
];

export default function ResearchServicesNewProductDiscoveryAndDevelopmentPage() {
  return (
    <GuideLayout title={"Meta-Analyses"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
