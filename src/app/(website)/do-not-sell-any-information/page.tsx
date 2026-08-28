import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Do Not Sell Any Information - Pubrica',
  description: 'Your CCPA rights regarding the sale of personal information — Pubrica does not sell your data for monetary gain or compensation.',
};

export default function DoNotSellPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Do Not Sell Any Information', href: '/do-not-sell-any-information' }]} />

      <section className="bg-[#1b2e2b] text-white py-7 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Do Not Sell Any Information</h1>
        </div>
      </section>

      <div className="bg-white py-7 font-sans">
        <Container className="max-w-4xl prose prose-primary">
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            For California residents using www.pubrica.com, which is managed by 1341 W Mockingbird Lane, Suite 600W, Dallas, Texas, 75247, the California Consumer Privacy Act (CCPA) grants specific rights concerning their personal information. These rights include access, deletion, and the ability to opt out of the sale of personal information. It&rsquo;s important to clarify that Pubrica does not partake in selling your data for monetary gain or compensation.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Our Privacy Policy comprehensively details the data we collect, how it&rsquo;s obtained, its intended purposes, instances of sharing with third parties, and the rights you hold regarding information control and management.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Should you have any inquiries, concerns, or requests regarding your personal data—such as accessing, deleting, or opting out of potential data sales—you can contact us via email at{' '}
            <a href="mailto:sales@pubrica.com" className="text-[#004d40] underline">sales@pubrica.com</a>. Our Compliance Officer is also available at 1341 W Mockingbird Lane, Suite 600W, Dallas, Texas, 75247. You can reach us by phone at{' '}
            <a href="tel:+19725029262" className="text-[#004d40] underline">+1-972-502-9262</a> or via email at{' '}
            <a href="mailto:ganesh@guires.uk" className="text-[#004d40] underline">ganesh@guires.uk</a>.
          </p>
        </Container>
      </div>
    </>
  );
}
