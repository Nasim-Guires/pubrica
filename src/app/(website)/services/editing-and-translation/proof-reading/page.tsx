import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/editing-and-translation__proof-reading';

export const metadata: Metadata = {
  title: "Proofreading Services | Pubrica",
  description: "Accurate and reliable proofreading to improve clarity, grammar, and quality of academic, scientific, and medical manuscripts.",
};

const TOC: TocItem[] = [];

export default function EditingAndTranslationProofReadingPage() {
  return (
    <GuideLayout title={"Copy Editing and Proofreading Services"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
