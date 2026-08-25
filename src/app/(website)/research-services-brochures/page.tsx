import type { Metadata } from 'next';
import BrochureGrid from '@/components/packs/BrochureGrid';

export const metadata: Metadata = {
  title: 'Research Services Brochures - Pubrica',
  description: 'Download Pubrica research services brochures — literature review, meta-analysis, systematic review, and more.',
};

const ITEMS = [
  { title: 'Literature Review & Gap', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Literature-review-broucher-min_opt.pdf' },
  { title: 'Meta-Analysis', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-meta-analysis-broucher-min.pdf' },
  { title: 'Case Report Writing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Case-Report-Writing-broucher-min.pdf' },
  { title: 'Systematic Review', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Systematic-review-broucher-min.pdf' },
  { title: 'Experimental Design', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Experimental-design-broucher-min.pdf' },
  { title: 'Biostatistics', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Biostatistics-broucher-min.pdf' },
  { title: 'Grant Writing', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Grant-Writing-broucher-min.pdf' },
  { title: 'Product Development', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Product-Development-broucher-min.pdf' },
];

export default function ResearchServicesBrochuresPage() {
  return <BrochureGrid heading="Research Services Brochures" items={ITEMS} />;
}
