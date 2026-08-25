import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: 'University Support - Pubrica',
  description: 'Global expertise in research, publishing, and communication support for universities and research institutions.',
};

export default function UniversitySupportPage() {
  return (
    <MinimalNoticePage
      title="University Support"
      tagline="Global Leader in Research, Publishing and Communication"
      body="We have expertise around the world, access to a variety of databases, and a team specialized in research methodologies from prestigious universities. We partner with life science, pharmaceutical, and medical device manufacturers, hospitals, healthcare providers, and research scholars, providing credible scientific and evidence-based writing support."
      ctaLabel="See Our Global Partner Program"
      ctaHref="/global-partner-program"
    />
  );
}
