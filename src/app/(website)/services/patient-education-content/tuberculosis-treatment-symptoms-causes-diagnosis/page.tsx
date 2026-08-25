import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'Tuberculosis: Symptoms, Causes, Diagnosis & Treatment - Pubrica',
  description: 'Patient education content sample work: tuberculosis symptoms, causes, diagnosis, and treatment.',
};

export default function TuberculosisTreatmentPage() {
  return (
    <SamplePdfPage
      eyebrow="Patient Education Content Sample Work"
      title="Tuberculosis: Symptoms, Causes, Diagnosis & Treatment"
      intro="Tuberculosis (TB) is a contagious infectious disease caused by Mycobacterium tuberculosis, mainly affecting the lungs. It spreads through airborne droplets when an infected person coughs or sneezes. Common symptoms include persistent cough, fever, night sweats, and weight loss. Although preventable and curable, TB remains a major global health problem. Effective vaccination, early diagnosis, and proper treatment are key to controlling its spread."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/11/V1-PATIENT-EDUCATION-CONTENT-Tuberculosis-pdf.pdf"
      pdfLabel="Patient Education Content – Tuberculosis"
      servicesHref="/services/physician-writing-services/patient-education-content"
    />
  );
}
