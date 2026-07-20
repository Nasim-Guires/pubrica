import { Service } from '@/lib/constants';

/**
 * Reusable utility functions for parsing service data.
 */

export function filterServicesByCategory(
  services: Service[],
  category: Service['category']
): Service[] {
  return services.filter((s) => s.category === category);
}
