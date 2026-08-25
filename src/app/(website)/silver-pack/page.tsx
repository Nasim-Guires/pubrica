import type { Metadata } from 'next';
import PublicationPackPage from '@/components/packs/PublicationPackPage';

export const metadata: Metadata = {
  title: 'Silver Pack - Pubrica',
  description: 'The Silver Pack bundles five publication support services worth $998 for $718.',
};

export default function SilverPackPage() {
  return <PublicationPackPage packName="Silver Pack" />;
}
