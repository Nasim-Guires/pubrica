import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/scientific-communication__technology-enabled-medical-scientific-communication';

export const metadata: Metadata = {
  title: "Technology-Enabled Medical and Scientific Communication",
  description: "Expert-led, technology-enabled medical and scientific communication services delivering accurate, compliant, high-impact research.",
};

const TOC: TocItem[] = [
  {
    "id": "1-why-technology-alone-is-not-enough",
    "label": "1. Why Technology Alone Is Not Enough"
  },
  {
    "id": "2-expert-led-medical-and-scientific-communication-framework",
    "label": "2. Expert-Led Medical and Scientific Communication Framework"
  },
  {
    "id": "3-how-technology-enhances-expert-led-communication",
    "label": "3. How Technology Enhances Expert-Led Communication"
  },
  {
    "id": "4-benefits-across-the-research-lifecycle",
    "label": "4. Benefits Across the Research Lifecycle"
  },
  {
    "id": "5-precision-communication-across-therapeutic-areas",
    "label": "5. Precision Communication Across Therapeutic Areas"
  },
  {
    "id": "6-compliance-ethics-and-quality-assurance",
    "label": "6. Compliance, Ethics, and Quality Assurance"
  },
  {
    "id": "7-measuring-impact-in-medical-and-scientific-communication",
    "label": "7. Measuring Impact in Medical and Scientific Communication"
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

export default function ScientificCommunicationTechnologyEnabledMedicalScientificCommunicationPage() {
  return (
    <GuideLayout title={"Technology-Enabled, Expert-Led Medical and Scientific Communication"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
