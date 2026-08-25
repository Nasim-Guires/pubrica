import type { Metadata } from 'next';
import MinimalNoticePage from '@/components/common/MinimalNoticePage';

export const metadata: Metadata = {
  title: 'Apply Now - Pubrica',
  description: 'Unlock your research potential with Pubrica. Apply now.',
};

export default function EditorApplicationPage() {
  return (
    <MinimalNoticePage
      title="Apply Now"
      tagline="Unlock Your Research Potential – with Pubrica!"
      body="Get in touch with our team to apply as an editor, writer, or subject-matter expert."
      ctaLabel="Contact Us"
      ctaHref="/contact"
    />
  );
}
