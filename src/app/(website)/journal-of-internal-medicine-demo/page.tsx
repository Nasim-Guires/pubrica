import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: 'Annals of Internal Medicine - Pubrica',
  description: 'A journal-submission example from Pubrica: Annals of Internal Medicine.',
};

export default function JournalOfInternalMedicineDemoPage() {
  return (
    <MinimalNoticePage
      title="Annals of Internal Medicine"
      body="Explore how Pubrica supports authors preparing manuscripts for leading medical journals like Annals of Internal Medicine."
      ctaLabel="See Our Journal Selection Service"
      ctaHref="/services/publication-support/journal-selection"
    />
  );
}
