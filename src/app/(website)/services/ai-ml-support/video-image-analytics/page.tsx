import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/ai-ml-support__video-image-analytics';

export const metadata: Metadata = {
  title: "Video Image Analytics - Pubrica",
  description: "Pubrica specializes in algorithm development for training and optimization. Our expert team ensures robust and efficient algorithms tailored to your specific",
};

const TOC: TocItem[] = [
  {
    "id": "scientific-algorithm-development-for-training-and-optimizati",
    "label": "Scientific Algorithm Development for Training and optimization"
  },
  {
    "id": "algorithm-development-services-of-sample-work",
    "label": "Algorithm Development Services of Sample Work"
  }
];

export default function AiMlSupportVideoImageAnalyticsPage() {
  return (
    <GuideLayout title={"Algorithm Development for Training and optimisation"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
