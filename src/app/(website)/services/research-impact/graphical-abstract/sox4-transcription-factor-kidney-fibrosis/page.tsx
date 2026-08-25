import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: "SOX4's Role in Kidney Fibrosis: TEC Dedifferentiation & Fibroblast - Pubrica",
  description: 'Graphical abstract sample work on SOX4 and kidney fibrosis in chronic kidney disease.',
};

export default function Sox4TranscriptionFactorPage() {
  return (
    <SamplePdfPage
      eyebrow="Graphical Abstract Sample Work"
      title="SOX4's Role in Kidney Fibrosis: TEC Dedifferentiation & Fibroblast"
      intro="Chronic kidney disease (CKD) is a widely prevalent health issue globally. A striking pathological feature of CKD is kidney fibrosis characterized by excessive production and deposition of extracellular matrix (ECM). Tubular epithelial cell (TEC) dedifferentiation and fibroblast activation contribute to the pathogenesis of kidney fibrosis. However, the molecular mechanisms underlying TEC dedifferentiation and fibroblast activation are not fully understood. Here, we investigated the role of SRY-box transcription factor 4 (SOX4) in regulating TEC dedifferentiation and fibroblast activation during the development of CKD."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/10/V1-Graphical-Abstract-Sample-Work-KIDNEY-PDF.pdf"
      pdfLabel="Graphical Abstract – SOX4 in Kidney Fibrosis"
      servicesHref="/services/research-impact/graphical-abstract"
    />
  );
}
