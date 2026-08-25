import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/editing-and-translation__thesis-editing-guide';

export const metadata: Metadata = {
  title: "Thesis Editing: Process, Benefits & Editor Roles",
  description: "Discover thesis editing services, benefits, and key roles of a thesis editor for academic success.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-thesis-editing",
    "label": "1. What Is Thesis Editing?"
  },
  {
    "id": "3-qualities-of-a-good-thesis-editor",
    "label": "3. Qualities of a Good Thesis Editor"
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

export default function EditingAndTranslationThesisEditingGuidePage() {
  return (
    <GuideLayout title={"Thesis Editing: What It Is and What a Thesis Editor Does"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
