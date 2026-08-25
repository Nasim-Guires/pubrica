import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'Breast Cancer Treatment Early Diagnosis and Success - Pubrica',
  description: 'Patient education content sample work: breast cancer symptoms, diagnosis, and treatment.',
};

export default function BreastCancerTreatmentPage() {
  return (
    <SamplePdfPage
      eyebrow="Patient Education Content Sample Work"
      title="Breast Cancer Treatment, Early Diagnosis and Success"
      intro="Cells in your breast grow and divide in an uncontrolled way, creating a mass of tissue called a tumor. Signs of breast cancer can include feeling a lump in your breast, experiencing a change in the size of your breast and seeing changes to the skin on your breasts."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/09/V1-PATIENT-EDUCATION-CONTENT-Breast-cancer.pdf"
      pdfLabel="Patient Education Content – Breast Cancer"
      servicesHref="/services/physician-writing-services/patient-education-content"
    />
  );
}
