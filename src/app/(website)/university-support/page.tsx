import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: { absolute: "University Support - Pubrica" },
  description: "University Support – Pubrica provides research guidance, academic writing, and training programs for students and faculty.",
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
