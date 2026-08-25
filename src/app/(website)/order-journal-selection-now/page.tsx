import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: 'Order Journal Selection Now - Pubrica',
  description: 'Journal Selection for Academic Publishing Support — order now.',
};

export default function OrderJournalSelectionNowPage() {
  return (
    <MinimalNoticePage
      title="Order Now"
      tagline="Journal Selection for Academic Publishing Support"
      body="Our experts thoroughly review your manuscript and suggest the top 3 to 5 journals that best fit its content and scope."
      ctaLabel="Order Journal Selection"
      ctaHref="/services/publication-support/journal-selection"
    />
  );
}
