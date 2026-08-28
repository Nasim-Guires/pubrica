import { MetadataRoute } from 'next';

// This rebuild isn't the live pubrica.com yet — block crawling entirely
// until launch. Flip NEXT_PUBLIC_ALLOW_INDEXING=true (no code change needed)
// once this deployment actually becomes the production site.
const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pubrica.com';

  if (!ALLOW_INDEXING) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
