import type { Metadata } from 'next';
import PublicationPackPage from '@/components/packs/PublicationPackPage';

export const metadata: Metadata = {
  title: { absolute: "Silver Pack - Pubrica" },
  description: "Silver PackTIME: 3 WEEKSFor authors looking for speedy support in preparing their manuscripts for submission",
};

export default function SilverPackPage() {
  return <PublicationPackPage packName="Silver Pack" />;
}
