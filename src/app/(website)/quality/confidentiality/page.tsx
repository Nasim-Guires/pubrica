import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Confidentiality - Pubrica',
  description:
    'Research Confidentiality 100% data privacy Confidentiality and privacyPubrica has a high regard and respects for the confidentiality in research work; our',
  slug: '/quality/confidentiality',
});

export default function ResearchConfidentialityPage() {
  return (
    <>
      <Head>
        <title>Research Confidentiality - Pubrica</title>
        <meta
          name="description"
          content="Pubrica has a high regard and respects for the confidentiality in research work; our experts receive unpublished work outlining path breaking research."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        {/* Top Banner Section */}
        <section className="bg-[#2d4642] text-white py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto border border-gray-500 p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Research Confidentiality</h1>
            <p className="text-sm md:text-base text-gray-200">100% data privacy</p>
          </div>
        </section>

        {/* Confidentiality and Privacy Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confidentiality and privacy</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Pubrica has a high regard and respects for the confidentiality in research work; our experts receive unpublished work outlining path breaking research and novel ideas from the best minds across the globe and we keep your work secure and safe. Also, we know how important your work is and the confidentiality risks related to submitting any kind of unpublished work.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hence, we adhere to a strict privacy policy that guarantees 100% confidentiality and allows researchers across the globe to submit their work to us with complete faith in our process. Our data centers and network are highly encrypted and our premises are under surveillance. You can entrust your content and data to our experts.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-72 h-64">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400"
                  alt="Research Journals and Publication Covers"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pubrica Information Security Policies Section */}
        <section className="max-w-6xl mx-auto pb-16 px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Pubrica Information Security Policies</h2>
          
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#2d4642] font-bold mt-0.5">➔</span>
              <span>Pubrica signs a confidentiality contract before start of any project</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2d4642] font-bold mt-0.5">➔</span>
              <span>Pubrica&apos;s IT security management systems are ISO/IEC 27001:2013-certified</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2d4642] font-bold mt-0.5">➔</span>
              <span>Pubrica employees and contractors have signed non-disclosure agreements and will not make any client information/data available to anyone outside Pubrica without permission of clients authorized in writing by the client.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2d4642] font-bold mt-0.5">➔</span>
              <span>All data/documents/information are submitted and managed through an encrypted online ticketing portal; your information can only be seen by your customer relationship manager/coordinator</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2d4642] font-bold mt-0.5">➔</span>
              <span>Client&apos;s personal information (ID, physical address, e-mail address, phone number, and other info) will never be made available to any outside parties.</span>
            </li>
          </ul>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 px-4 text-center bg-gray-100 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Work with us to publish your paper in high-impact factor journals.</h3>
          <button 
            type="button" 
            className="bg-[#2d4642] text-white text-xs uppercase tracking-wider font-semibold py-3 px-8 hover:bg-[#415a55] transition-colors cursor-pointer"
          >
            Request support
          </button>
        </section>
      </main>
    </>
  );
}