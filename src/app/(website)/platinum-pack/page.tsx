import type { Metadata } from 'next';
import PublicationPackPage from '@/components/packs/PublicationPackPage';

export const metadata: Metadata = {
  title: 'Platinum Pack - Pubrica',
  description: 'The Platinum Pack bundles five publication support services worth $998 for $718.',
};

export default function PlatinumPackPage() {
  return <PublicationPackPage packName="Platinum Pack" />;
}
