import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/medical-writing__regulatory-writing__ctd-structure-overview-modules';

export const metadata: Metadata = {
  title: "Common Technical Document (CTD) Structure & Module Overview",
  description: "Explore CTD structure, modules 1-5, and key tips for preparing pharmaceutical regulatory submissions worldwide.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-why-is-the-ctd-important",
    "label": "1. Why is the CTD Important?"
  },
  {
    "id": "2-the-structure-of-the-ctd",
    "label": "2. The Structure of the CTD"
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

export default function MedicalWritingRegulatoryWritingCtdStructureOverviewModulesPage() {
  return (
    <GuideLayout title={"Common Technical Document (CTD) Structure: Overview of Modules"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
