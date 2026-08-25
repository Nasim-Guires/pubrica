import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/research-services__systematic-review__how-to-conduct-a-systematic-review';

export const metadata: Metadata = {
  title: "How to Conduct a Systematic Review: Step-by-Step Guide",
  description: "Learn how to conduct a systematic review using PRISMA 2020, develop protocols, search databases, assess quality, synthesise evidence, and write for publication.",
};

const TOC: TocItem[] = [
  {
    "id": "1-developing-a-well-defined-research-question",
    "label": "1. Developing a Well-Defined Research Question"
  },
  {
    "id": "2-preparing-a-systematic-review-protocol",
    "label": "2. Preparing a Systematic Review Protocol"
  },
  {
    "id": "3-conducting-a-comprehensive-literature-search",
    "label": "3. Conducting a Comprehensive Literature Search"
  },
  {
    "id": "4-screening-and-selecting-relevant-studies",
    "label": "4. Screening and Selecting Relevant Studies"
  },
  {
    "id": "5-extracting-data-and-assessing-study-quality",
    "label": "5. Extracting Data and Assessing Study Quality"
  },
  {
    "id": "6-synthesising-the-evidence",
    "label": "6. Synthesising the Evidence"
  },
  {
    "id": "7-writing-the-systematic-review",
    "label": "7. Writing the Systematic Review"
  },
  {
    "id": "8-challenges-and-best-practices",
    "label": "8. Challenges and Best Practices"
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

export default function ResearchServicesSystematicReviewHowToConductASystematicReviewPage() {
  return (
    <GuideLayout title={"How to Conduct a Systematic Review and Write It Up"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
