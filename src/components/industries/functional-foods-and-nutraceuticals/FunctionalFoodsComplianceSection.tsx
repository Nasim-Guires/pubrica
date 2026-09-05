import React from 'react';
import Image from 'next/image';

interface EditorProfile {
  name: string;
  qualification: string;
  experience: string;
  manuscripts: string;
  image: string;
}

interface PublicationItem {
  title: string;
  author: string;
  journal: string;
  publisher: string;
  impactFactor: string;
  coverImage: string;
}

interface FoodsNutraceuticalsComplianceProps {
  sectionTitle?: string;
  sectionDescription?: string;
  regulatoryComplianceTitle?: string;
  regulatoryIntro?: string;
  qualityStandardsTitle?: string;
  qualityIntro?: string;
  authorsPublishTitle?: string;
  authorsPublishDescription?: string;
  publication?: PublicationItem;
  editorsTitle?: string;
  editorsDescription?: string;
  editors?: EditorProfile[];
}

const defaultPublication: PublicationItem = {
  title: 'Functional Foods in Modern Nutrition Science',
  author: 'Fekete M, Lehoczki A, Kryczyk-Poprawa A, Zabó V, Varga JT, Bálint M',
  journal: 'Nutrients',
  publisher: 'MDPI',
  impactFactor: '5.0',
  coverImage: '/images/industries/foods-nutraceuticals/sample-works-3.webp'
};

const defaultEditors: EditorProfile[] = [
  {
    name: 'Dr. Ananya Mehta',
    qualification: 'PhD, M.Sc. - Nutrition & Functional Foods',
    experience: '18 Years of Experience',
    manuscripts: '80+ manuscripts edited',
    image: '/images/industries/foods-nutraceuticals/Dr.-Ananya-Mehta-1.webp'
  },
  {
    name: 'Dr. Raghav Varma',
    qualification: 'PhD, FIAMS - Clinical Nutrition',
    experience: '22 Years of Experience',
    manuscripts: '120+ manuscripts edited',
    image: '/images/industries/foods-nutraceuticals/Dr.-Raghav-Varma.webp'
  },
  {
    name: 'Dr. Priya Chandrasekhar',
    qualification: 'PhD, DNB - Nutraceutical Sciences',
    experience: '20 Years of Experience',
    manuscripts: '90+ manuscripts edited',
    image: '/images/industries/biotechnology/Dr.-Meera-Sharma-1.webp'
  }
];

export default function FoodsNutraceuticalsComplianceSection({
  sectionTitle = 'Our Compliance And Guidelines',
  sectionDescription = 'Ensuring regulatory compliance is critical in the foods and nutraceuticals industry, where consumer safety, product efficacy, and quality standards are paramount. Our team helps you navigate the complex regulatory landscape across global markets, ensuring your products meet all legal, safety, and labelling requirements.',
  regulatoryComplianceTitle = 'Regulatory Compliance',
  regulatoryIntro = 'We ensure your products adhere to international and regional regulations, including:',
  qualityStandardsTitle = 'Quality & Safety Standards',
  qualityIntro = 'We assist in implementing quality management systems that ensure product safety and consistency, including:',
  authorsPublishTitle = 'Where Our Authors Publish',
  authorsPublishDescription = 'Our authors share Pubrica\'s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.',
  publication = defaultPublication,
  editorsTitle = 'Our Expert Foods And Nutraceuticals Editors',
  editorsDescription = 'Pubrica\'s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.',
  editors = defaultEditors
}: FoodsNutraceuticalsComplianceProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">

      {/* Top Compliance & Guidelines Container */}
      <section className="py-8 px-6 max-w-full bg-[#f0f4f8] border-t border-gray-100">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">{sectionTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed mb-8">
            {sectionDescription}
          </p>

          {/* Regulatory Compliance Subsection */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2824] mb-2">{regulatoryComplianceTitle}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">{regulatoryIntro}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center justify-center h-32 hover:shadow-md transition-shadow relative">
                <Image src="/images/industries/foods-nutraceuticals/fda.webp" alt="U.S. Food and Drug Administration" width={140} height={48} className="object-contain max-h-16" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center justify-center h-32 hover:shadow-md transition-shadow">
                <Image src="/images/industries/foods-nutraceuticals/efsa.webp" alt="EFSA" width={140} height={48} className="object-contain max-h-16" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center justify-center h-32 hover:shadow-md transition-shadow">
                <Image src="/images/industries/foods-nutraceuticals/fssai.webp" alt="FSSAI" width={140} height={48} className="object-contain max-h-16" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center justify-center h-32 hover:shadow-md transition-shadow text-center">
                <Image src="/images/industries/foods-nutraceuticals/codex-allimentariyus.webp" alt="Codex Alimentarius" width={140} height={48} className="object-contain max-h-16" />
              </div>
            </div>
          </div>

          {/* Quality & Safety Standards Subsection */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2824] mb-2">{qualityStandardsTitle}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">{qualityIntro}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center h-44 hover:shadow-md transition-shadow">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/images/industries/foods-nutraceuticals/gmp-.webp" alt="GMP" fill className="object-contain" sizes="48px" />
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-800">GMP (Good Manufacturing Practices) compliance</h4>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center h-44 hover:shadow-md transition-shadow">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/images/industries/foods-nutraceuticals/pa-iconshccp.webp" alt="HACCP" fill className="object-contain" sizes="48px" />
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-800">HACCP (Hazard Analysis Critical Control Points)</h4>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center h-44 hover:shadow-md transition-shadow">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/images/industries/foods-nutraceuticals/iso.webp" alt="ISO" fill className="object-contain" sizes="48px" />
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-800">ISO certifications for food safety and quality</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Our Authors Publish Section */}
      <section className="py-12 max-w-5xl mx-auto px-4 border-t border-gray-100">
        <div className="text-left max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            {authorsPublishTitle}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {authorsPublishDescription}
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
            <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
              <Image
                src={publication.coverImage}
                alt={publication.title}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain p-1"
              />
            </div>

            <div className="space-y-3 text-sm md:text-base text-gray-700">
              <div>
                <span className="font-bold text-gray-900">Paper Title: </span>
                <span className="text-gray-800">
                  {publication.title}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Author: </span>
                <span>{publication.author}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Journal Name: </span>
                <span className="text-[#1b3b32] font-semibold">
                  {publication.journal}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Publisher: </span>
                <span>{publication.publisher}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Impact factor: </span>
                <span>{publication.impactFactor}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Foods And Nutraceuticals Editors Section */}
      <section className="py-6 max-w-6xl mx-auto px-4 border-t border-gray-100">
        <div className="text-left max-w-2xl mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            {editorsTitle}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {editorsDescription}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editors.map((editor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/60 rounded-xl p-6 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4 w-full">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                  <Image
                    src={editor.image}
                    alt={editor.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {editor.name}
                  </h3>

                  <p className="text-xs text-[#1b3b32] font-semibold">
                    {editor.qualification}
                  </p>
                </div>
              </div>

              <div className="w-full space-y-1.5 text-xs text-gray-600 pt-3 border-t border-gray-100">
                <p>{editor.experience}</p>
                <p>{editor.manuscripts}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}