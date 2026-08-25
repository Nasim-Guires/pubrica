import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: 'Lab Assistance - Pubrica',
  description: 'Research and publication support for labs and research institutions, from Pubrica.',
};

export default function LabAssistancePage() {
  return (
    <MinimalNoticePage
      title="Lab Assistance"
      tagline="Let's change lives together"
      body="At Pubrica, we transform your concepts into incisive reports with our comprehensive writing services. Our global team of experts supports institutions, authors, researchers, and publishers in product development, publishing, branding, and educational content."
      ctaLabel="Explore Research Services"
      ctaHref="/services/research-services"
    />
  );
}
