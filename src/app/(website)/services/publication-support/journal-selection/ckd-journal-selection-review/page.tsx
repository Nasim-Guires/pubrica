import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'Selecting and Reviewing Journals for Chronic Kidney Disease - Pubrica',
  description: 'Journal Selection & Submission sample work for a chronic kidney disease manuscript.',
};

export default function CkdJournalSelectionReviewPage() {
  return (
    <SamplePdfPage
      eyebrow="Journal Selection & Submission Sample Work"
      title="Selecting and Reviewing Journals for Chronic Kidney Disease"
      intro="Chronic Kidney Disease (CKD) is a major global health issue with rising prevalence and serious public health implications. Research on CKD focuses on risk factors, epidemiology, and interventions to improve outcomes. Choosing the right journal ensures the study reaches the appropriate audience and maximizes impact. This report highlights recommended journals for the manuscript Prevalence and Risk Factors of Chronic Kidney Disease in India and Global Regions, including their scope, impact, and relevance to the research topic."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/10/v1-Journal-Selection-SAMPLE-PDF.pdf"
      pdfLabel="Journal Selection – Chronic Kidney Disease"
      servicesHref="/services/publication-support/journal-selection"
    />
  );
}
