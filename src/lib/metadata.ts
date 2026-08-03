import { Metadata } from 'next';

const DEFAULT_TITLE = 'Pubrica | Scientific & Medical Writing & Publication Support Services';
const DEFAULT_DESCRIPTION = 'Pubrica provides expert medical writing, systematic review, meta-analysis, biostatistics, and journal publication support services for clinical and academic researchers globally.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pubrica.com';

interface MetadataProps {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Reusable helper to generate standard metadata objects for Next.js pages.
 */
export function constructMetadata({
  title,
  description,
  slug = '',
  image = '/images/og-image.jpg',
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | Pubrica` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${slug.startsWith('/') ? slug : `/${slug}`}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: 'Pubrica',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [image],
      creator: '@pubrica',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
