import type { Metadata } from 'next';
import PublicationPackPage from '@/components/packs/PublicationPackPage';

export const metadata: Metadata = {
  title: 'Gold Pack - Pubrica',
  description: 'The Gold Pack bundles five publication support services worth $998 for $718.',
};

export default function GoldPackPage() {
  return <PublicationPackPage packName="Gold Pack" />;
}
