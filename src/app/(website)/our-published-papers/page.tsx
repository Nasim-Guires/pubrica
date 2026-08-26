import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Our Published Papers - Pubrica',
  description: 'SCRIPTING SUCCESS STORIES',
  slug: '/our-published-papers',
});

interface Paper {
  journalName: string;
  title: string;
  author: string;
  impactFactor: number;
}

const papersData: Paper[] = [
  { journalName: "Tiger Nixon", title: "System Architect", author: "Edinburgh", impactFactor: 61 },
  { journalName: "Garrett Winters", title: "Accountant", author: "Tokyo", impactFactor: 63 },
  { journalName: "Ashton Cox", title: "Junior Technical Author", author: "San Francisco", impactFactor: 66 },
  { journalName: "Cedric Kelly", title: "Senior Javascript Developer", author: "Edinburgh", impactFactor: 22 },
  { journalName: "Airi Satou", title: "Accountant", author: "Tokyo", impactFactor: 33 },
];

export default function PublishedPapersPage() {
  return (
    <>
      <Head>
        <title>Published Papers - Pubrica</title>
        <meta
          name="description"
          content="Publish research in top journals with high impact factor. We strive to help researchers get published and share successful publication stories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Top Banner Section */}
        <section className="bg-[#415a55] text-white py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto border border-gray-400 p-8">
            <h1 className="text-4xl font-bold mb-4">Publish research in top journals</h1>
            <p className="text-sm md:text-base text-gray-200">High impact factor</p>
          </div>
        </section>

        {/* Papers Published Section */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Papers Published</h2>
            <p className="text-sm text-gray-600">
              We strive to help researchers get published. We are proud to share successful publication stories of our clients.
            </p>
          </div>

          {/* Static Non-interactive Text Items */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm font-medium text-gray-600">
            <span>➜ physical sciences</span>
            <span>➜ social sciences</span>
            <span>➜ medical sciences</span>
            <span>➜ life sciences</span>
          </div>

          {/* Fixed Static Data Table */}
          <div className="overflow-x-auto bg-white shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-900 text-sm font-semibold">
                  <th className="py-3 px-6 text-center">Journal Name</th>
                  <th className="py-3 px-6 text-center">Published Paper Title</th>
                  <th className="py-3 px-6 text-center">Author&apos;s Name</th>
                  <th className="py-3 px-6 text-center">Impact Factor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700 text-center">
                {papersData.map((paper, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-6">{paper.journalName}</td>
                    <td className="py-3 px-6">{paper.title}</td>
                    <td className="py-3 px-6">{paper.author}</td>
                    <td className="py-3 px-6">{paper.impactFactor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scripting Success Stories Section */}
        <section className="bg-[#2d4642] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-wide mb-12">SCRIPTING SUCCESS STORIES</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Success Story Card 1 */}
              <div className="bg-[#1f3330] border border-gray-600 overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/images/scropt-2.png"
                    alt="Clinical Problem Solving Journal Cover"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Success Story Card 2 */}
              <div className="bg-[#1f3330] border border-gray-600 overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src="/images/book-01.jpg"
                    alt="Clinical Practice Journal Cover"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="py-16 px-4 text-center bg-gray-50">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Start your publication journey now</h3>
          <p className="text-xs text-gray-600 mb-6">All our editing plans come with 100% confidentiality and quality guarantee.</p>
          <button type="button" className="bg-[#2d4642] text-white text-xs uppercase tracking-wider font-semibold py-3 px-8 hover:bg-[#415a55] transition-colors cursor-pointer">
            get started
          </button>
        </section>
      </main>
    </>
  );
}