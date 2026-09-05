import React from 'react';
import Image from 'next/image';

interface FdaProduct {
  name: string;
  approvalDate: string;
  referenceProduct: string;
  statusColor?: string; // For row background tinting if needed
}

interface EditorProfile {
  name: string;
  title: string;
  experience: string;
  manuscripts: string;
  imageSrc: string;
  flagSrc: string;
}

interface BiosimilarAdditionalComponentsProps {
  // Feature Cards Section
  featureCards?: Array<{
    title: string;
    description: string;
    iconSrc: string;
  }>;

  // Author Publication Section
  authorSectionTitle?: string;
  authorSectionSubtitle?: string;
  paperTitle?: string;
  paperAuthors?: string;
  journalName?: string;
  publisher?: string;
  impactFactor?: string;
  journalCoverImage?: string;

  // FDA Products Table Section
  fdaSectionTitle?: string;
  fdaSectionDescription?: string;
  fdaProducts?: FdaProduct[];

  // Expert Medical Editors Section
  editorsSectionTitle?: string;
  editorsSectionSubtitle?: string;
  editors?: EditorProfile[];
}

const defaultFeatureCards = [
  {
    title: 'Complexity',
    description: 'Biosimilars are large, complex proteins, while generics are simpler, small-molecule drugs.',
    iconSrc: '/images/industries/biosimilar/Complexity.webp'
  },
  {
    title: 'Development Requirements',
    description: 'Biosimilars need extensive analytical, preclinical, and clinical studies; generics usually require only bioequivalence studies.',
    iconSrc: '/images/industries/biosimilar/Development-Requirements.webp'
  },
  {
    title: 'Regulatory Pathways',
    description: 'Approval for biosimilars involves demonstrating similarity to the reference biologic; generics demonstrate chemical equivalence.',
    iconSrc: '/images/industries/biosimilar/Regulatory-Pathways.webp'
  }
];

const defaultFdaProducts: FdaProduct[] = [
  { name: 'Enoby and Xtrenbo (denosumab-qbde)', approvalDate: 'September 2025', referenceProduct: 'Prolia and Xgeva (denosumab)', statusColor: 'bg-emerald-50/60' },
  { name: 'Aukelso and Bosaya (denosumab-kyqq)', approvalDate: 'September 2025', referenceProduct: 'Prolia and Xgeva (denosumab)', statusColor: 'bg-emerald-50/60' },
  { name: 'Bildyos and Bilprevda (denosumab-nxxp)', approvalDate: 'August 2025', referenceProduct: 'Prolia and Xgeva (denosumab)', statusColor: 'bg-amber-50/40' },
  { name: 'Kirsty (insulin aspart-xjhz)', approvalDate: 'July 2025', referenceProduct: 'Novolog (insulin aspart)', statusColor: 'bg-amber-50/40' },
  { name: 'Starjemza (ustekinumab-hmny)', approvalDate: 'May 2025', referenceProduct: 'Stelara (ustekinumab)', statusColor: 'bg-rose-50/50' },
  { name: 'Jobevne (bevacizumab-nwgd)', approvalDate: 'April 2025', referenceProduct: 'Avastin (bevacizumab)', statusColor: 'bg-rose-50/50' },
  { name: 'Bomyntra and Conexxence (denosumab-bnht)', approvalDate: 'March 2025', referenceProduct: 'Prolia and Xgeva (denosumab)', statusColor: 'bg-amber-50/40' },
  { name: 'Omlyclo (omalizumab-igec)', approvalDate: 'March 2025', referenceProduct: 'Xolair (omalizumab)', statusColor: 'bg-amber-50/40' },
  { name: 'Stoboclo and Osenvelt (denosumab-bmwo)', approvalDate: 'February 2025', referenceProduct: 'Prolia and Xgeva (denosumab)', statusColor: 'bg-emerald-50/60' }
];

const defaultEditors: EditorProfile[] = [
  {
    name: 'Dr. Laurence',
    title: 'PHD - Biosimilar Research',
    experience: '7 years of experience',
    manuscripts: '100+ manuscripts edited',
    imageSrc: '/images/industries/generics/Dr.-Laurence.webp',
    flagSrc: '/images/industries/biosimilar/united-kingdom-.png'
  },
  {
    name: 'Dr. AJ',
    title: 'PHD - Biosimilar Research',
    experience: '5 Years of Experience',
    manuscripts: '90+ manuscripts edited',
    imageSrc: '/images/industries/generics/Dr.-AJ.webp',
    flagSrc: '/images/industries/cosmeceutical-research/usa-.png'
  },
  {
    name: 'Dr. Jay',
    title: 'PHD - Biosimilar Research',
    experience: '15 Years of Experience',
    manuscripts: '150+ manuscripts edited',
    imageSrc: '/images/industries/nutraceutical-research/Dr.-Rohit-Kapoor.webp',
    flagSrc: '/images/industries/cosmeceutical-research/usa-.png'
  }
];

export default function BiosimilarAdditionalComponents({
  featureCards = defaultFeatureCards,
  authorSectionTitle = 'Where Our Authors Publish',
  authorSectionSubtitle = 'Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.',
  paperTitle = 'An Overview of Biosimilars-Development, Quality, Regulatory Issues, and Management in Healthcare',
  paperAuthors = 'Mascorenhas-Melo, F., Diaz, M., Gonçalves, M. B. S., Vieira, P., Bell, V., Viana, S., Nunes, S., Paiva-Santos, A. C., & Veiga, F.',
  journalName = 'harmaceuticals (Basel, Switzerland)',
  publisher = 'MDPI',
  impactFactor = '4.8',
  journalCoverImage = '/images/industries/biosimilar/sample-works-1-1.webp',
  fdaSectionTitle = 'FDA-Approved Biosimilar Products',
  fdaSectionDescription = 'The Food and Drug Administration approves biosimilar products and provides the scientific and regulatory advice needed to bring safe and effective biosimilars to market. The approval of biosimilar products can improve access to care for patients by increasing the number of medication options and potentially lowering costs.',
  fdaProducts = defaultFdaProducts,
  editorsSectionTitle = 'Our Expert Medical Editors',
  editorsSectionSubtitle = 'Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.',
  editors = defaultEditors
}: BiosimilarAdditionalComponentsProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans">

      {/* 1. Feature Cards Grid (Complexity, Development, Regulatory) */}
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-[#0f2824]">{card.title}</h3>
                  <div className="relative w-10 h-10">
                    <Image src={card.iconSrc} alt="" fill className="object-contain" sizes="40px" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Where Our Authors Publish Section */}

      <section className="py-6 max-w-7xl mx-auto px-6">
        <div className="text-start max-w-4xl mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
            {authorSectionTitle}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {authorSectionSubtitle}
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-center">

            <div className="relative w-full h-[220px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
              <Image
                src={journalCoverImage}
                alt="Journal publication cover"
                fill
                sizes="(max-width: 768px) 100vw, 180px"
                className="object-contain p-1"
              />
            </div>

            <div className="space-y-2 text-sm md:text-base text-gray-700">
              <div>
                <span className="font-bold text-gray-900">Paper Title: </span>
                <span className="text-gray-800">{paperTitle}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Author: </span>
                <span>{paperAuthors}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Journal Name: </span>
                <span className="text-[#1b3b32] font-semibold">
                  {journalName}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Publisher: </span>
                <span>{publisher}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Impact factor: </span>
                <span>{impactFactor}</span>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 3. FDA-Approved Biosimilar Products Table Section */}
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="text-start mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#0f2824]">{fdaSectionTitle}</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl leading-relaxed">
            {fdaSectionDescription}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/75 border-b border-gray-200 text-[#0f2824]">
                  <th className="py-3 px-6 font-bold text-sm text-center">Biosimilar Name</th>
                  <th className="py-3 px-6 font-bold text-sm text-center">Approval Date</th>
                  <th className="py-3 px-6 font-bold text-sm text-center">Reference Product</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {fdaProducts.map((product, index) => (
                  <tr key={index} className={`hover:bg-gray-50 transition-colors ${product.statusColor || ''}`}>
                    <td className="py-3 px-6 text-gray-800 font-medium text-center">{product.name}</td>
                    <td className="py-3 px-6 text-gray-600 text-center">{product.approvalDate}</td>
                    <td className="py-3 px-6 text-gray-600 text-center">{product.referenceProduct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Our Expert Medical Editors Section */}
      <section className="py-6 max-w-7xl mx-auto px-6">
        <div className="text-start max-w-4xl mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
            {editorsSectionTitle}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {editorsSectionSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {editors.map((editor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/60 rounded-xl p-5 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
            >
              <div className="flex items-center space-x-4 mb-3 w-full">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                  <Image
                    src={editor.imageSrc}
                    alt={editor.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-base">
                      {editor.name}
                    </h3>

                    <div className="relative w-5 h-3.5 overflow-hidden rounded-sm">
                      <Image
                        src={editor.flagSrc}
                        alt="Country flag"
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-[#1b3b32] font-semibold">
                    {editor.title}
                  </p>
                </div>
              </div>

              <div className="w-full space-y-1 text-xs text-gray-600 pt-3 border-t border-gray-100">
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