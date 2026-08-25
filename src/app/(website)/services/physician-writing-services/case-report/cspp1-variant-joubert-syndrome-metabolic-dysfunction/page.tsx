import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'CSPP1 Variant in Joubert Syndrome with Metabolic Dysfunction - Pubrica',
  description: 'Case report sample work: a CSPP1-related Joubert syndrome patient with metabolic abnormalities.',
};

export default function Cspp1VariantJoubertSyndromePage() {
  return (
    <SamplePdfPage
      eyebrow="Case Report Sample Work"
      title="CSPP1 Variant in Joubert Syndrome with Metabolic Dysfunction"
      intro="Joubert syndrome is a ciliopathy marked by cerebellar vermis hypoplasia and the molar tooth sign. CSPP1 variants cause ~3% of cases, but metabolic dysfunction has not been reported. This case highlights a CSPP1-related Joubert syndrome patient with metabolic abnormalities, expanding its clinical spectrum."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/10/v1-Case-Reports-metabolic-dysfunction-SAMPLE-PDF.pdf"
      pdfLabel="Case Report – CSPP1 Variant Joubert Syndrome"
      servicesHref="/services/physician-writing-services/case-report"
    />
  );
}
