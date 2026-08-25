import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: 'Biotech Clinical Trial Solutions - Pubrica',
  description: 'Pubrica supports journals, publishers, and publication societies in acquiring high-value research output and improving submission quality.',
};

export default function PublishersPage() {
  return (
    <MinimalNoticePage
      title="Creating Leverage for Publishers and Journals"
      tagline="Let's change lives together"
      body="Our team supports journals, publishers, and publication societies improve their standing by helping them acquire high-value research output and improve the quality of submissions received. We also help amplify their reach to create wider impact."
      ctaLabel="See Our Global Partner Program"
      ctaHref="/global-partner-program"
    />
  );
}
