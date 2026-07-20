import { MetadataRoute } from 'next';
import { SERVICES_DATA, BLOGS_DATA } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pubrica.com';

  // Base static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/subjects',
    '/blogs',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic services routes
  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic blogs routes
  const blogRoutes = BLOGS_DATA.map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
