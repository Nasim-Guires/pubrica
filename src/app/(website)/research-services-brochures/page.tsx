import type { Metadata } from 'next';
import BrochureGrid from '@/components/packs/BrochureGrid';

export const metadata: Metadata = {
  title: { absolute: "Research Services Brochures - Pubrica" },
  description: "Research Services Brochures Literature Review & Gap BROUCHURE Meta - Analysis     BROUCHURE   Case Report Writing     BROUCHURE",
};

const ITEMS = [
  { title: 'Literature Review & Gap', pdfUrl: '/upload/research-services-brochures/literature-review-gap-brochure.pdf' },
  { title: 'Meta-Analysis', pdfUrl: '/upload/research-services-brochures/meta-analysis-brochure.pdf' },
  { title: 'Case Report Writing', pdfUrl: '/upload/research-services-brochures/case-report-writing-brochure.pdf' },
  { title: 'Systematic Review', pdfUrl: '/upload/research-services-brochures/systematic-review-brochure.pdf' },
  { title: 'Experimental Design', pdfUrl: '/upload/research-services-brochures/experimental-design-brochure.pdf' },
  { title: 'Biostatistics', pdfUrl: '/upload/research-services-brochures/biostatistics-brochure.pdf' },
  { title: 'Grant Writing', pdfUrl: '/upload/research-services-brochures/grant-writing-brochure.pdf' },
  { title: 'Product Development', pdfUrl: '/upload/research-services-brochures/product-development-brochure.pdf' },
];

export default function ResearchServicesBrochuresPage() {
  return <BrochureGrid heading="Research Services Brochures" items={ITEMS} />;
}
