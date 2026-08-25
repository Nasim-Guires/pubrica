import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/academic-editorial-services__tools-standards-academic-editing';

export const metadata: Metadata = {
  title: "Tools & Standards in High-Quality Academic Editing",
  description: "Ensure publication-ready manuscripts through expert academic editing, smart tools, and compliance with global publishing standards",
};

const TOC: TocItem[] = [
  {
    "id": "1-the-role-of-editorial-standards-in-academic-editing",
    "label": "1. The Role of Editorial Standards in Academic Editing"
  },
  {
    "id": "2-core-tools-used-in-high-quality-academic-editing",
    "label": "2. Core Tools Used in High-Quality Academic Editing"
  },
  {
    "id": "4-layered-framework-for-high-quality-academic-editing",
    "label": "4. Layered Framework for High-Quality Academic Editing"
  },
  {
    "id": "5-ensuring-quality-across-disciplines",
    "label": "5. Ensuring Quality Across Disciplines"
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

export default function AcademicEditorialServicesToolsStandardsAcademicEditingPage() {
  return (
    <GuideLayout title={"What Are the Tools and Standards That Define High-Quality Academic Editing?"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
