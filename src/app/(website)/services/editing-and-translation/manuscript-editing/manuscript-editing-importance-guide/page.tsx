import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/editing-and-translation__manuscript-editing__manuscript-editing-importance-guide';

export const metadata: Metadata = {
  title: "Manuscript Editing: Importance & Benefits for Research",
  description: "Learn why manuscript editing improves clarity, professionalism, and publication success for research papers.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-what-is-manuscript-editing",
    "label": "1. What is Manuscript Editing?"
  },
  {
    "id": "2-importance-of-manuscript-editing",
    "label": "2. Importance of Manuscript Editing"
  },
  {
    "id": "4-what-are-the-stages-of-manuscript-editing",
    "label": "4. What are the Stages of Manuscript Editing?"
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

export default function EditingAndTranslationManuscriptEditingManuscriptEditingImportanceGuidePage() {
  return (
    <GuideLayout title={"What is Manuscript Editing and Why is it Important?"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
