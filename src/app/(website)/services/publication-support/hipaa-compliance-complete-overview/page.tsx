import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/publication-support__hipaa-compliance-complete-overview';

export const metadata: Metadata = {
  title: "HIPAA Compliance Explained: Rules, Updates & Guidance",
  description: "Learn HIPAA compliance essentials, from PHI protection to safeguards and common violations.",
};

const TOC: TocItem[] = [
  {
    "id": "table-of-content",
    "label": "Table of Content"
  },
  {
    "id": "1-hipaa-privacy-rule",
    "label": "1. HIPAA Privacy Rule"
  },
  {
    "id": "2-hipaa-security-rule",
    "label": "2. HIPAA Security Rule"
  },
  {
    "id": "3-types-of-hipaa",
    "label": "3. Types Of HIPAA"
  },
  {
    "id": "4-why-was-hipaa-established",
    "label": "4. Why was HIPAA established?"
  },
  {
    "id": "5-whom-does-hipaa-cover",
    "label": "5. Whom does HIPAA cover?"
  },
  {
    "id": "7-what-types-of-health-information-are-protected",
    "label": "7. What types of health information are protected?"
  },
  {
    "id": "8-core-requirements-for-compliance",
    "label": "8. Core Requirements for Compliance"
  },
  {
    "id": "9-common-hipaa-violations",
    "label": "9. Common HIPAA Violations"
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

export default function PublicationSupportHipaaComplianceCompleteOverviewPage() {
  return (
    <GuideLayout title={"A Complete Overview of HIPAA Compliance"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
