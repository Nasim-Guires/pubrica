import React from 'react';
import Image from 'next/image';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

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

const expertEditors: ExpertEditorItem[] = [
  {
    name: "Dr. Ananya Mehta",
    degree: "PhD, M.Sc. - Nutrition & Functional Foods",
    experience: "18 Years of Experience",
    manuscripts: "80+ manuscripts edited",
    avatar: "/images/industries/foods-nutraceuticals/Dr.-Ananya-Mehta-1.webp",
    flag: "/images/country/gb.png",
  },
  {
    name: "Dr. Raghav Varma",
    degree: "PhD, FIAMS - Clinical Nutrition",
    experience: "22 Years of Experience",
    manuscripts: "120+ manuscripts edited",
    avatar: "/images/industries/foods-nutraceuticals/Dr.-Raghav-Varma.webp",
    flag: "/images/country/us.png",
  },
  {
    name: "Dr. Priya Chandrasekhar",
    degree: "PhD, DNB - Nutraceutical Sciences",
    experience: "20 Years of Experience",
    manuscripts: "90+ manuscripts edited",
    avatar: "/images/industries/biotechnology/Dr.-Meera-Sharma-1.webp",
    flag: "/images/country/us.png",
  },
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

}: FoodsNutraceuticalsComplianceProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden space-y-2">

      {/* Top Compliance & Guidelines Container */}
      <section className="py-4 px-6 max-w-full bg-[#f0f4f8] border-t border-gray-100">
        <div className="max-w-6xl mx-auto mb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f2824]">{sectionTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed mb-4">
            {sectionDescription}
          </p>

          {/* Regulatory Compliance Subsection */}
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2824] mb-1">{regulatoryComplianceTitle}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3">{regulatoryIntro}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow relative">
                <Image src="/images/industries/foods-nutraceuticals/fda.webp" alt="U.S. Food and Drug Administration" width={140} height={48} className="object-contain max-h-12" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                <Image src="/images/industries/foods-nutraceuticals/efsa.webp" alt="EFSA" width={140} height={48} className="object-contain max-h-12" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                <Image src="/images/industries/foods-nutraceuticals/fssai.webp" alt="FSSAI" width={140} height={48} className="object-contain max-h-12" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow text-center">
                <Image src="/images/industries/foods-nutraceuticals/codex-allimentariyus.webp" alt="Codex Alimentarius" width={140} height={48} className="object-contain max-h-12" />
              </div>
            </div>
          </div>

          {/* Quality & Safety Standards Subsection */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2824] mb-1">{qualityStandardsTitle}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3">{qualityIntro}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center text-center h-32 hover:shadow-md transition-shadow">
                <div className="relative w-9 h-9 mb-2">
                  <Image src="/images/industries/foods-nutraceuticals/gmp-.webp" alt="GMP" fill className="object-contain" sizes="36px" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800">GMP (Good Manufacturing Practices) compliance</h4>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center text-center h-32 hover:shadow-md transition-shadow">
                <div className="relative w-9 h-9 mb-2">
                  <Image src="/images/industries/foods-nutraceuticals/pa-iconshccp.webp" alt="HACCP" fill className="object-contain" sizes="36px" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800">HACCP (Hazard Analysis Critical Control Points)</h4>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center text-center h-32 hover:shadow-md transition-shadow">
                <div className="relative w-9 h-9 mb-2">
                  <Image src="/images/industries/foods-nutraceuticals/iso.webp" alt="ISO" fill className="object-contain" sizes="36px" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-800">ISO certifications for food safety and quality</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Our Authors Publish Section */}
      <section className="py-2 max-w-5xl mx-auto px-4 border-t border-gray-100">
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={{
            imageSrc:
              "/images/industries/foods-nutraceuticals/sample-works-3.webp",
            imageAlt: "Nutrients Journal Cover",
            paperTitle: "Functional Foods in Modern Nutrition Science",
            author:
              "Fekete M, Lehoczki A, Kryczyk-Poprawa A, Zábó V, Varga JT, Bálint M",
            journalName: "Nutrients",
            publisher: "MDPI",
            impactFactor: "5.0",
          }}
        />
      </section>

      {/* Our Expert Foods And Nutraceuticals Editors Section */}
      <section className="py-2 max-w-6xl mx-auto px-4 border-t border-gray-100">
        <ExpertEditorsSection
          title="Our Expert Foods and Nutraceuticals Editors"
          description="Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
          editors={expertEditors}
        />
      </section>

    </div>
  );
}