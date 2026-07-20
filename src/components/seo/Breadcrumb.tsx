import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Container from '@/components/common/Container';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Construct JSON-LD list items for breadcrumbs schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pubrica.com'}${item.href}` : undefined,
    })),
  };

  return (
    <div className="bg-gray-50 border-y border-gray-100 py-3.5 select-none">
      <Container>
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-xs sm:text-sm text-gray-500 font-sans">
          {/* Schema injection */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary-800 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                <ChevronRight className="h-4 w-4 text-gray-300 flex-shrink-0" />
                {isLast || !item.href ? (
                  <span className="font-semibold text-gray-800 tracking-tight">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
