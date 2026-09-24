import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/editing-and-translation__proof-reading';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Expert Proofreading Service for Research Writing Help',
  description: 'Get expert help to refine your writing, remove language errors, and improve clarity so your documents look professional and easy to understand.',
  keywords: ['proofreading,Manuscript proofreading service,Scientific Manuscript proofreading service,Academic Manuscript proofreading service,Medical Manuscript proofreading service'],
  slug: '/services/editing-and-translation/proofreading/',
})

const TOC: TocItem[] = [];

export default function EditingAndTranslationProofReadingPage() {
  return (
    <GuideLayout title={"Copy Editing and Proofreading Services"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
