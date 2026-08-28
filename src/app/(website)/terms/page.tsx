import React from 'react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { constructMetadata } from '@/lib/metadata';

// /terms/ 404s directly on live pubrica.com; the sitemap's closest topical match is
// /terms-and-conditions/ (this page's real Terms & Conditions content matches that
// live page's topic, unlike the empty /terms-and-condition stub — see that route).
export const metadata = constructMetadata({
  title: 'Terms & Condition - Pubrica',
  description:
    'Welcome to Pubrica - a global contract research, analytics, and editorial services organization. These Terms and Conditions outline the rules and regulations',
  slug: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terms & Conditions', href: '/terms' }]} />
      <div className="bg-white py-7 font-sans">
        <Container className="max-w-3xl prose prose-primary">
          <h1 className="text-3xl font-extrabold text-gray-900 font-display mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm">
            Welcome to Pubrica. By accessing our website or utilizing our biostatistics, scientific writing, or journal formatting services, you agree to comply with the following terms.
          </p>

          <h2 className="text-xl font-bold text-gray-800 font-display mt-8 mb-4">
            1. Scientific Integrity and Ethics
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Pubrica promotes ethical academic research. While we assist in structuring, summarizing, and editing research articles and reports, the authors maintain final responsibility for the scientific veracity of data points and adherence to institutional ethics board guidelines.
          </p>

          <h2 className="text-xl font-bold text-gray-800 font-display mt-8 mb-4">
            2. Payment and Delivery
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Service pricing, project scopes, and delivery deadlines are explicitly documented in individual quote agreements before research begins. Delivery dates are subject to timely receipt of essential datasets and design instructions.
          </p>
        </Container>
      </div>
    </>
  );
}
