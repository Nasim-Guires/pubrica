import { SERVICES_DATA, BLOGS_DATA, TESTIMONIALS_DATA, Service, Blog, Testimonial } from './constants';

/**
 * Simulates server-side API fetches for Pubrica data.
 * Ready to be connected to a headless CMS or backend.
 */

export async function getServices(): Promise<Service[]> {
  // Simulate delay
  return Object.values(SERVICES_DATA);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const service = SERVICES_DATA[slug];
  if (!service) return null;
  return service;
}

export async function getBlogs(): Promise<Blog[]> {
  return BLOGS_DATA;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blog = BLOGS_DATA.find((b) => b.slug === slug);
  if (!blog) return null;
  return blog;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return TESTIMONIALS_DATA;
}
