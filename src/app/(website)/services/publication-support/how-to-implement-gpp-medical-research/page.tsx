import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__how-to-implement-gpp-medical-research';

export const metadata: Metadata = {
  title: "GPP Implementation Guide for Medical Research Publishing",
  description: "Learn how to implement GPP in medical research to ensure transparency, integrity, and ethical standards",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-understanding-gpp",
    "label": "1. Understanding GPP"
  },
  {
    "id": "2-steps-to-implement-gpp-in-medical-research",
    "label": "2. Steps to Implement GPP in Medical Research"
  },
  {
    "id": "3-key-considerations-for-gpp-in-publication",
    "label": "3. Key Considerations for GPP in Publication"
  },
  {
    "id": "4-common-challenges-in-implementing-gpp",
    "label": "4. Common Challenges in Implementing GPP"
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

export default function PublicationSupportHowToImplementGppMedicalResearchPage() {
  return (
    <GuideLayout title={"How to Implement GPP in Medical Research and Publication"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
