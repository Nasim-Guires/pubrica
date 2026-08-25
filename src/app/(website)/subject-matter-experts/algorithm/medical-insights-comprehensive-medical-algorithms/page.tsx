import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/subject-matter-experts-algorithm-medical-insights';

export const metadata: Metadata = {
  title: 'Medical Insights: Comprehensive Medical Algorithms - Pubrica',
  description: 'Explore medical algorithms for diagnosis, treatment, research, and predictive healthcare decision-making.',
};

const TOC: TocItem[] = [
  { id: 'what-is-a-clinical-practice-algorithm', label: 'What is a Clinical Practice Algorithm?' },
  { id: 'types-of-medical-algorithms', label: 'Types of Medical Algorithms' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'references', label: 'References' },
];

export default function MedicalAlgorithmsArticlePage() {
  return (
    <GuideLayout title="Medical Insights: Comprehensive Collection of Medical Algorithms" toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
