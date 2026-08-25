import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__video-abstract__video-abstracts-enhancing-research-impact';

export const metadata: Metadata = {
  title: "Video Abstracts: Complete Guide to Enhance Research Impact",
  description: "Learn how video abstracts improve research visibility, engagement, and scientific communication with practical tips, benefits, and future trends.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-a-video-abstract",
    "label": "1. What is a Video Abstract?"
  },
  {
    "id": "2-why-video-abstracts-matter-in-research-publishing",
    "label": "2. Why Video Abstracts Matter in Research Publishing"
  },
  {
    "id": "3-how-to-create-an-effective-video-abstract",
    "label": "3. How to Create an Effective Video Abstract"
  },
  {
    "id": "4-ensuring-quality-and-scientific-integrity",
    "label": "4. Ensuring Quality and Scientific Integrity"
  },
  {
    "id": "5-the-evolving-role-of-video-abstracts",
    "label": "5. The Evolving Role of Video Abstracts"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "frequently-asked-questions-faqs",
    "label": "Frequently Asked Questions (FAQs)"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function PublicationSupportVideoAbstractVideoAbstractsEnhancingResearchImpactPage() {
  return (
    <GuideLayout title={"Video Abstracts: The Complete Guide to Enhancing Research Impact"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
