import type { Metadata } from 'next';
import PublicationPackPage from '@/components/packs/PublicationPackPage';

export const metadata: Metadata = {
  title: { absolute: "Platinum Pack - Pubrica" },
  description: "Platinum PackTIME: 3 WEEKSFor authors looking for speedy support in preparing their manuscripts for submission",
};

export default function PlatinumPackPage() {
  return <PublicationPackPage packName="Platinum Pack" />;
}
