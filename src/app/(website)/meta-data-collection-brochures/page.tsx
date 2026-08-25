import type { Metadata } from 'next';
import BrochureGrid from '@/components/packs/BrochureGrid';

export const metadata: Metadata = {
  title: 'Medical Data Collection Brochures - Pubrica',
  description: 'Download Pubrica editing and translation brochures — scientific editing, manuscript editing, book editing, and more.',
};

const ITEMS = [
  { title: 'Scientific Editing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Orginal-research-article-broucher.pdf' },
  { title: 'Manuscript Editing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Manuscript-Editing-broucher.pdf' },
  { title: 'Translation With Editing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Translate-academic-and-scientific-papers-broucher.pdf' },
  { title: 'Thesis Editing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Thesis-Editing-broucher.pdf' },
  { title: 'Post Editing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Post-editing-services-broucher.pdf' },
  { title: 'Book Editing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Book-Editing-broucher.pdf' },
  { title: 'Scientific Grant Review', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Thought-Leadership-Content-Editorial-Design-broucher.pdf' },
  { title: 'Proofreading', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-proff-reading-broucher.pdf' },
];

export default function MetaDataCollectionBrochuresPage() {
  return <BrochureGrid heading="Editing & Translation Brochures" subheading="Hear from the experts" items={ITEMS} />;
}
