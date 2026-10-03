import type { Metadata } from 'next';
import LifeSciencesPage from '../life-science/page';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: "Life Sciences Research & Writing Services | Pubrica",
  description:
    "Get expert life sciences research, writing, editing, and publication support from Pubrica’s experienced scientific professionals.",
  slug: "/about-us/life-sciences/",
});
export default function LifeSciencesPluralPage() {
  return <LifeSciencesPage />;
}
