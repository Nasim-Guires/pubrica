import type { Metadata } from 'next';
import PublicationPackPage from '@/components/packs/PublicationPackPage';

export const metadata: Metadata = {
  title: { absolute: "Gold Pack - Pubrica" },
  description: "Gold PackTIME: 3 WEEKSFor authors looking for speedy support in preparing their manuscripts for submission",
};

export default function GoldPackPage() {
  return <PublicationPackPage packName="Gold Pack" />;
}
