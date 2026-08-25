import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: "Let's Change Lives Together - Pubrica",
  description: 'Publishers and journals partnering with Pubrica for research promotion and publication support.',
};

export default function JournalPage() {
  return (
    <MinimalNoticePage
      title="Let's Change Lives Together"
      tagline="Publishers and Journals"
      body="Whether you're a dedicated team of two or a pharmaceutical company with more than 100 staff, we'll work side-by-side with you to develop life-changing treatments."
      ctaLabel="See Our Journal Selection Service"
      ctaHref="/services/publication-support/journal-selection"
    />
  );
}
