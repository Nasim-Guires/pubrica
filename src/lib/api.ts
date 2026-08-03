import { SERVICES_DATA, BLOGS_DATA, TESTIMONIALS_DATA, Service, Blog, Testimonial } from './constants';

/**
 * Synchronous mock fetches for Pubrica data to prevent unhandled promise hangs in Next.js Server Components.
 */

export function getServices(): Service[] {
  return Object.values(SERVICES_DATA);
}

export function getServiceBySlug(slug: string): Service | null {
  const service = SERVICES_DATA[slug];
  if (!service) return null;
  return service;
}

export function getBlogs(): Blog[] {
  return BLOGS_DATA;
}

export function getBlogBySlug(slug: string): Blog | null {
  const blog = BLOGS_DATA.find((b) => b.slug === slug);
  if (!blog) return null;
  return blog;
}

export function getTestimonials(): Testimonial[] {
  return TESTIMONIALS_DATA;
}