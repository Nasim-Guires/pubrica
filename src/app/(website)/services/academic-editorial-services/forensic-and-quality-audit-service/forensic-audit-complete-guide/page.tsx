import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/academic-editorial-services__forensic-and-quality-audit-service__forensic-audit-complete-guide';

export const metadata: Metadata = {
  title: "Forensic Audit Explained: Corporate & Research Guide",
  description: "Learn what a forensic audit is, how it works in corporate and research settings, and why it is vital for fraud detection, compliance, and financial transparency",
};

const TOC: TocItem[] = [
  {
    "id": "1-understanding-the-concept-of-a-forensic-audit",
    "label": "1. Understanding the Concept of a Forensic Audit"
  },
  {
    "id": "2-core-objectives-of-a-forensic-audit",
    "label": "2. Core Objectives of a Forensic Audit"
  },
  {
    "id": "3-forensic-audit-in-corporate-settings",
    "label": "3. Forensic Audit in Corporate Settings"
  },
  {
    "id": "4-common-corporate-triggers",
    "label": "4. Common Corporate Triggers"
  },
  {
    "id": "5-forensic-audit-in-research-settings",
    "label": "5. Forensic Audit in Research Settings"
  },
  {
    "id": "6-key-steps-in-a-forensic-audit",
    "label": "6. Key Steps in a Forensic Audit"
  },
  {
    "id": "7-differences-between-financial-and-forensic-audits",
    "label": "7. Differences Between Financial and Forensic Audits"
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

export default function AcademicEditorialServicesForensicAndQualityAuditServiceForensicAuditCompleteGuidePage() {
  return (
    <GuideLayout title={"What Is a Forensic Audit in Corporate and Research Settings?"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
