import type { Metadata } from 'next';
import SamplePdfPage from '@/components/services/SamplePdfPage';

export const metadata: Metadata = {
  title: 'Skin Cancer Journal Selection: Melanoma & Nonmelanoma - Pubrica',
  description: 'Journal selection sample work for research on melanoma and nonmelanoma skin cancer incidence.',
};

export default function JournalSelectionSkinCancerPage() {
  return (
    <SamplePdfPage
      eyebrow="Journal Selection Sample Work"
      title="Skin Cancer Journal Selection: Melanoma & Nonmelanoma"
      intro="Melanoma and nonmelanoma skin cancers show varying incidence across the globe, with higher rates in regions of high UV exposure. In India, growing cases highlight the need for awareness and early detection. Selecting the right journal is vital for effective dissemination of such research. This report evaluates leading dermatology and oncology journals suitable for publishing studies on skin cancer incidence in Indian and global contexts."
      pdfUrl="https://pubrica.com/wp-content/uploads/2025/09/v1-Incidence-of-melanoma-and-nonmelanoma-skin-cancers-in-Indian-and-the-global-regions-sample-pdf-1.pdf"
      pdfLabel="Journal Selection – Melanoma & Nonmelanoma Skin Cancers"
      servicesHref="/services/publication-support/journal-selection"
    />
  );
}
