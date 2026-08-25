import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/education-editorial-service__accessibility-compliance__web-accessibility-compliance-wcag-standards';

export const metadata: Metadata = {
  title: "Web Accessibility Standards (WCAG) & Global Compliance",
  description: "Learn WCAG web accessibility standards, international compliance requirements, and digital accessibility guidelines for global businesses.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-are-global-accessibility-standards",
    "label": "1. What Are Global Accessibility Standards?"
  },
  {
    "id": "2-understanding-wcag-the-global-benchmark-for-accessibility",
    "label": "2. Understanding WCAG: The Global Benchmark for Accessibility"
  },
  {
    "id": "3-wcag-versions-and-conformance-levels",
    "label": "3. WCAG Versions and Conformance Levels"
  },
  {
    "id": "4-international-accessibility-laws-and-regulations",
    "label": "4. International Accessibility Laws and Regulations"
  },
  {
    "id": "5-why-wcag-compliance-matters-for-organisations",
    "label": "5. Why WCAG Compliance Matters for Organisations"
  },
  {
    "id": "6-accessibility-beyond-the-web-a-global-perspective",
    "label": "6. Accessibility Beyond the Web: A Global Perspective"
  },
  {
    "id": "7-best-practices-for-meeting-global-accessibility-standards",
    "label": "7. Best Practices for Meeting Global Accessibility Standards"
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

export default function EducationEditorialServiceAccessibilityComplianceWebAccessibilityComplianceWcagStandardsPage() {
  return (
    <GuideLayout title={"Global Accessibility Compliance: Understanding WCAG and International Requirements"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
