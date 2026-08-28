import React from 'react';
import { Download } from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { unslugify } from '@/lib/helpers';
import { constructMetadata } from '@/lib/metadata';

interface ResourceSlugProps {
  params: Promise<{ slug: string }>;
}

// This catch-all only ever shows a generic "coming soon" placeholder for any slug —
// there is no real per-resource content yet, and no live pubrica.com equivalent.
// Follows the same pattern as /industries/[slug]: generated per-slug title, kept out
// of the index so these placeholders don't compete with real pages.
export async function generateMetadata({ params }: ResourceSlugProps) {
  const { slug } = await params;
  return constructMetadata({
    title: unslugify(slug),
    description: 'Detailed information for this resource is being updated.',
    slug: `/subjects/${slug}`,
    noIndex: true,
  });
}

export default async function ResourceSlugPage({ params }: ResourceSlugProps) {
  const { slug } = await params;
  const resourceTitle = unslugify(slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Subjects', href: '/subjects' },
          { label: resourceTitle, href: `/resources/${slug}` },
        ]}
      />
      <div className="bg-white py-8 text-center font-sans">
        <Container className="max-w-xl">
          <Download className="h-16 w-16 text-primary-800 mx-auto mb-6" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display">
            {resourceTitle}
          </h1>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            The requested download, documentation, or reference toolkit is currently being prepared for online retrieval. Please try again shortly.
          </p>
        </Container>
      </div>
    </>
  );
}
