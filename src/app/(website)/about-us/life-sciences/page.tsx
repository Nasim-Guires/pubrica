import type { Metadata } from 'next';
import LifeSciencesPage from '../life-science/page';

export const metadata: Metadata = {
  title: 'Life Sciences Research & Writing Services - Pubrica',
  description: 'Life sciences research and writing services from Pubrica — publication support across therapeutic areas and subject-matter expertise.',
};

export default function LifeSciencesPluralPage() {
  return <LifeSciencesPage />;
}
