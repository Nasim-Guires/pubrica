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
      <section className="py-7 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#0f2824]">{authorSectionTitle}</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
          {authorSectionSubtitle}
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm text-left flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-[280px] h-[360px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-100">
            <Image 
              src={journalCoverImage} 
              alt="Journal publication cover" 
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Paper Publication Showcase</h4>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2824] leading-snug">
              Paper Title: <span className="font-normal text-gray-800">{paperTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Author:</strong> {paperAuthors}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <strong className="text-gray-800">Journal Name:</strong> {journalName}
            </p>
            <div className="flex gap-6 pt-2">
              <p className="text-xs sm:text-sm text-gray-600">
                <strong className="text-gray-800">Publisher:</strong> {publisher}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                <strong className="text-gray-800">Impact factor:</strong> {impactFactor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FDA-Approved Biosimilar Products Table Section */}
      <section className="py-7 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-[#0f2824]">{fdaSectionTitle}</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {fdaSectionDescription}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/75 border-b border-gray-200 text-[#0f2824]">
                  <th className="py-4 px-6 font-bold text-sm text-center">Biosimilar Name</th>
                  <th className="py-4 px-6 font-bold text-sm text-center">Approval Date</th>
                  <th className="py-4 px-6 font-bold text-sm text-center">Reference Product</th>
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
      <section className="py-7 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#0f2824]">{editorsSectionTitle}</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {editorsSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editors.map((editor, index) => (
            <div key={index} className="bg-[#eaf4f2]/50 border border-[#d3e5e1] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <Image 
                    src={editor.imageSrc} 
                    alt={editor.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-[#0f2824]">{editor.name}</h3>
                    <div className="relative w-5 h-3.5 overflow-hidden rounded-sm shadow-sm">
                      <Image 
                        src={editor.flagSrc} 
                        alt="Country flag" 
                        fill 
                        sizes="20px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#b91c1c]">{editor.title}</p>
                </div>
              </div>
              <div className="border-t border-[#d3e5e1]/60 pt-4 flex justify-between text-xs font-medium text-gray-700">
                <span>{editor.experience}</span>
                <span>{editor.manuscripts}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}