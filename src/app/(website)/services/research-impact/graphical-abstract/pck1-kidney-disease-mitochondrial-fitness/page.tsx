import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'PCK1 and Mitochondrial Health: Impact on Kidney Disease - Pubrica',
  description: 'Graphical abstract sample work on the role of PCK1 in kidney disease progression.',
};

export default function Pck1KidneyDiseasePage() {
  return (
    <SamplePdfPage
      eyebrow="Graphical Abstract Sample Work"
      title="PCK1 and Mitochondrial Health: Impact on Kidney Disease"
      intro="Metabolic alterations are recognized as key features of kidney injury, but their causal role in kidney repair remains debatable. Here, we investigate the role of phosphoenolpyruvate carboxykinase 1 (PCK1), an enzyme involved in gluconeogenesis and cataplerosis (removal of tricarboxylic acid (TCA) cycle intermediates from the mitochondrial matrix) in kidney disease progression."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/09/v1-Graphical-Abstract-Sample-Work-pdf.pdf"
      pdfLabel="Graphical Abstract – PCK1 in Kidney Disease"
      servicesHref="/services/research-impact/graphical-abstract"
    />
  );
}
