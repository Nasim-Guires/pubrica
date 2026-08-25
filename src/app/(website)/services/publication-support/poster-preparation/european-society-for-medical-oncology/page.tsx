import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__poster-preparation__european-society-for-medical-oncology';

export const metadata: Metadata = {
  title: "ESMO Guide: European Society for Medical Oncology",
  description: "Learn about the European Society for Medical Oncology, its mission, guidelines, structure, and contributions to cancer care.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-why-publish-in-esmo-advantages-for-cancer-researchers-and-",
    "label": "1. Why Publish in ESMO? Advantages for Cancer Researchers and Physicians"
  },
  {
    "id": "2-types-of-manuscripts-accepted-by-esmo-journals",
    "label": "2. Types of Manuscripts Accepted by ESMO Journals"
  },
  {
    "id": "3-step-by-step-guide-to-esmo-manuscript-preparation",
    "label": "3. Step-by-Step Guide to ESMO Manuscript Preparation"
  },
  {
    "id": "4-esmo-formatting-and-ethical-compliance-checklist",
    "label": "4. ESMO Formatting and Ethical Compliance Checklist"
  },
  {
    "id": "5-understanding-esmo-s-peer-review-and-editorial-process",
    "label": "5. Understanding ESMO’s Peer-Review and Editorial Process"
  },
  {
    "id": "6-tips-for-successful-submission-and-avoiding-rejection",
    "label": "6. Tips for Successful Submission and Avoiding Rejection"
  },
  {
    "id": "7-faqs-common-questions-about-esmo-publication",
    "label": "7. FAQs: Common Questions About ESMO Publication"
  },
  {
    "id": "8-resources-and-templates-for-esmo-submissions",
    "label": "8. Resources and Templates for ESMO Submissions"
  },
  {
    "id": "9-need-expert-help-with-esmo-submissions",
    "label": "9. Need Expert Help with ESMO Submissions?"
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

export default function PublicationSupportPosterPreparationEuropeanSocietyForMedicalOncologyPage() {
  return (
    <GuideLayout title={"European Society for Medical Oncology: A Comprehensive Guide"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
