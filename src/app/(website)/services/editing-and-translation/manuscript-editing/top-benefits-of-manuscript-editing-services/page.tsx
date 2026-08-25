import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/editing-and-translation__manuscript-editing__top-benefits-of-manuscript-editing-services';

export const metadata: Metadata = {
  title: "Top 7 Benefits of Expert Manuscript Editing Help",
  description: "Discover the top 7 benefits of professional manuscript editing services to improve clarity, meet journal standards, and increase publication success.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-professional-editing-matters-in-academic-publishing",
    "label": "1. Why Professional Editing Matters in Academic Publishing"
  },
  {
    "id": "2-enhancing-communication-through-clear-and-engaging-writing",
    "label": "2. Enhancing Communication Through Clear and Engaging Writing"
  },
  {
    "id": "3-eliminating-language-and-technical-writing-errors",
    "label": "3. Eliminating Language and Technical Writing Errors"
  },
  {
    "id": "4-aligning-manuscripts-with-journal-requirements",
    "label": "4. Aligning Manuscripts with Journal Requirements"
  },
  {
    "id": "5-strengthening-scholarly-voice-and-academic-credibility",
    "label": "5. Strengthening Scholarly Voice and Academic Credibility"
  },
  {
    "id": "6-accelerating-the-publication-journey",
    "label": "6. Accelerating the Publication Journey"
  },
  {
    "id": "7-increasing-the-likelihood-of-journal-acceptance",
    "label": "7. Increasing the Likelihood of Journal Acceptance"
  },
  {
    "id": "8-receiving-expert-insights-beyond-basic-proofreading",
    "label": "8. Receiving Expert Insights Beyond Basic Proofreading"
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

export default function EditingAndTranslationManuscriptEditingTopBenefitsOfManuscriptEditingServicesPage() {
  return (
    <GuideLayout title={"Top 7 Benefits of Professional Manuscript Editing Services for Researchers"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
