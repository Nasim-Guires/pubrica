import type { Metadata } from 'next';
import BrochureGrid from '@/components/packs/BrochureGrid';

export const metadata: Metadata = {
  title: 'Scientific Communication Brochures - Pubrica',
  description: 'Download Pubrica scientific communication brochures — medical animation, video abstracts, poster creation, and more.',
};

const ITEMS = [
  { title: 'Citations Accelerator', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Physician-Writing-Clinical-Litearture-review-for-an-Evidence-based-Medicine-broucher.pdf' },
  { title: 'Medical Animation', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Customized-Writing-broucher.pdf' },
  { title: 'Video Abstracts', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Video-Abstract-Services-brouche.pdf' },
  { title: 'Poster Creation', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Poster-design-and-creation-broucher.pdf' },
  { title: 'Thought Leadership', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-Thought-Leadership-Content-Editorial-Design-broucher.pdf' },
  { title: 'E-Learning Modules', pdfUrl: 'https://pubrica.com/wp-content/uploads/2024/05/Pubrica-E-learning-Modules-broucher.pdf' },
];

export default function ScientificCommunicationBrochuresPage() {
  return <BrochureGrid heading="Scientific Communication Brochures" subheading="Hear from the experts" items={ITEMS} />;
}
