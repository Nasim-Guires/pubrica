import { Metadata } from 'next';

const DEFAULT_TITLE = 'Pubrica | Scientific & Medical Writing & Publication Support Services';
const DEFAULT_DESCRIPTION = 'Pubrica provides expert medical writing, systematic review, meta-analysis, biostatistics, and journal publication support services for clinical and academic researchers globally.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pubrica.com';

// This rebuild isn't the live pubrica.com yet — keep every page out of search
// engines until launch. Flip NEXT_PUBLIC_ALLOW_INDEXING=true (no code change
// needed) once this deployment actually becomes the production site.
const SITE_WIDE_NOINDEX = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== 'true';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  slug?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Reusable helper to generate standard metadata objects for Next.js pages.
 *
 * Note: `keywords` has no effect on Google ranking or snippets (Google has
 * publicly ignored this tag since 2009) — it's included only because some
 * other crawlers/tools still read it, not as a real SEO lever.
 */
export function constructMetadata({
  title,
  description,
  keywords,
  slug = '',
  image = '/images/home/banner1-min-scaled-8.jpg',
  noIndex = false,
}: MetadataProps = {}): Metadata {
  // Used verbatim, with no automatic suffixing — real pubrica.com titles are copied
  // exactly (some already end in "| Pubrica", some don't), so this helper must never
  // rewrite what's passed in. Only the true fallback case uses DEFAULT_TITLE.
  const pageTitle = title || DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESCRIPTION;
  // Every real pubrica.com URL ends in "/" — match that convention exactly.
  const canonicalPath = slug.startsWith('/') ? slug : `/${slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}/`.replace(/\/+$/, '/');
  const shouldNoIndex = noIndex || SITE_WIDE_NOINDEX;

  return {
    metadataBase: new URL(SITE_URL),
    // `absolute` bypasses the root layout's `title.template`, which would otherwise
    // append " | Pubrica" a second time on top of the branding already applied here.
    title: { absolute: pageTitle },
    description: pageDesc,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
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
      index: !shouldNoIndex,
      follow: !shouldNoIndex,
      googleBot: {
        index: !shouldNoIndex,
        follow: !shouldNoIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
