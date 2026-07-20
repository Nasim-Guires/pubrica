import React from 'react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <div className="bg-white py-16 font-sans">
        <Container className="max-w-3xl prose prose-primary">
          <h1 className="text-3xl font-extrabold text-gray-900 font-display mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm">
            At Pubrica, we take data privacy and research confidentiality seriously. This policy outlines how we handle and protect personal information, draft manuscripts, clinical trial datasets, and other records.
          </p>

          <h2 className="text-xl font-bold text-gray-800 font-display mt-8 mb-4">
            1. Confidentiality of Scientific Data
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            All research materials, data points, illustrations, and draft texts sent to Pubrica are treated as strictly confidential. Our team members, including editors, writers, and consultants, sign legally binding Non-Disclosure Agreements (NDAs).
          </p>

          <h2 className="text-xl font-bold text-gray-800 font-display mt-8 mb-4">
            2. Personal Information Collected
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            We collect email addresses, phone numbers, and institution names solely to contact you regarding service quotes, project delivery, and informational updates. We do not sell or share contact details with third-party advertising companies.
          </p>
        </Container>
      </div>
    </>
  );
}
