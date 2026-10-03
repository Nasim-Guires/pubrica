import type { Metadata } from 'next';
import LifeSciencesPage from '../life-science/page';

export const metadata: Metadata = {
  title: { absolute: "Life Sciences Research & Writing Services | Pubrica" },
  description: "Get expert life sciences research, writing, editing, and publication support from Pubrica’s experienced scientific professionals.",
  alternates: {
    canonical: 'https://pubrica.com/about-us/life-sciences/',
  },
};

export default function LifeSciencesPluralPage() {
  return <LifeSciencesPage />;
}
