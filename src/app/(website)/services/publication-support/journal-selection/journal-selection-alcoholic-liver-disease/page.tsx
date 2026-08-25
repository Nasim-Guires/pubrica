import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'Journal Selection: Alcoholic Liver Disease Research - Pubrica',
  description: 'Journal selection sample work for a manuscript on alcoholic liver disease.',
};

export default function JournalSelectionAlcoholicLiverDiseasePage() {
  return (
    <SamplePdfPage
      eyebrow="Journal Selection Sample Work"
      title="Journal Selection: Alcoholic Liver Disease Research"
      intro='This report presents a detailed journal selection analysis for the manuscript titled "Incidence of Alcoholic Liver Disease in India and Across the Globe." The study focuses on the epidemiology, risk factors, and global trends of alcoholic liver disease (ALD). Based on relevance, scope, and publication parameters, three reputed journals—Journal of Hepatology, Liver International, and International Journal of Hepatology—were evaluated and recommended for potential submission.'
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/10/v1-Journal-Selection-Incidence-of-Alcoholic-Liver-Disease-in-India-and-Across-the-Globe-SAMPLE-PDF.pdf"
      pdfLabel="Journal Selection – Alcoholic Liver Disease"
      servicesHref="/services/publication-support/journal-selection"
    />
  );
}
