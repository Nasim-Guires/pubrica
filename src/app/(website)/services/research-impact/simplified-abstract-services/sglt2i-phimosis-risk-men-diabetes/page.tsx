import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'SGLT2i and Phimosis Risk in Men with Type 2 Diabetes - Pubrica',
  description: 'Simplified abstract sample work comparing phimosis risk with SGLT2i versus GLP-1RA therapy.',
};

export default function Sglt2iPhimosisRiskPage() {
  return (
    <SamplePdfPage
      eyebrow="Simplified Abstract Sample Work"
      title="SGLT2i and Phimosis Risk in Men with Type 2 Diabetes"
      intro="Phimosis is a foreskin condition more frequently observed in men with type 2 diabetes due to higher susceptibility to local infections and inflammation. Sodium-glucose co-transporter-2 inhibitors (SGLT2i) may increase the risk of genital complications through enhanced glucosuria. In contrast, GLP-1 receptor agonists (GLP-1RA) exhibit a different safety profile without this mechanism. This Danish cohort study evaluates the comparative risk of phimosis in men initiating SGLT2i versus GLP-1RA therapy."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/10/v1-SIMPLIFIED-ABSTRACT-SAMPLE-WORK-Risk-of-Phimosis-Associated-with-SGLT2i-Versus-GLP-1RA-A-Danish-Cohort-Study.pdf"
      pdfLabel="Simplified Abstract – SGLT2i and Phimosis Risk"
      servicesHref="/services/research-impact/simplified-abstract-services"
    />
  );
}
