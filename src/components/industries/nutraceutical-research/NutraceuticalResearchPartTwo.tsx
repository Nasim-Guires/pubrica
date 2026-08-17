'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ResearchListItem {
  title: string;
  description: string;
}

interface StandardItem {
  title: string;
  description: string;
  iconSrc?: string;
}

interface CommitmentBullet {
  text: string;
}

interface PublicationItem {
  title: string;
  author: string;
  journal: string;
  publisher: string;
  impactFactor: string;
  coverImage: string;
}

interface EditorProfile {
  name: string;
  qualification: string;
  experience: string;
  manuscripts: string;
  image: string;
}

interface NutraceuticalResearchPartTwoProps {
  rdTitle?: string;
  rdSubtitle?: string;
  rdItems?: ResearchListItem[];
  rdImages?: { main: string; secondary: string };
  standardsTitle?: string;
  standardsSubtitle?: string;
  standardsTabs?: StandardItem[];
  commitmentTitle?: string;
  commitmentDescription?: string;
  commitmentBullets?: CommitmentBullet[];
  commitmentImage?: string;
  authorsPublishTitle?: string;
  authorsPublishDescription?: string;
  publication?: PublicationItem;
  editorsTitle?: string;
  editorsDescription?: string;
  editors?: EditorProfile[];
}

const defaultRdItems: ResearchListItem[] = [
  {
    title: "Nutrigenomics",
    description: "Studying how nutrition affects gene expression and health outcomes."
  },
  {
    title: "Bioavailability enhancement",
    description: "Improving absorption and efficacy through advanced formulation techniques."
  },
  {
    title: "Clinical validation",
    description: "Conducting human studies to substantiate health claims and gain regulatory approval."
  },
  {
    title: "Personalized nutrition",
    description: "Developing customized nutraceuticals based on individual genetic profiles and lifestyle factors."
  }
];

const defaultStandardsTabs: StandardItem[] = [
  {
    title: "Clinical evidence",
    iconSrc: "/images/industries/nutraceutical-research/Clinical-evidence-.webp",
    description: "Rigorous scientific studies substantiating product efficacy and health benefits."
  },
  {
    title: "Labelling compliance",
    iconSrc: "/images/industries/nutraceutical-research/labelling-compilance-.webp",
    description: "Accurate disclosure of ingredients, dosage, and health claims."
  },
  {
    title: "Safety assessments",
    iconSrc: "/images/industries/nutraceutical-research/safety-assesments-.webp",
    description: "Comprehensive toxicology and safety evaluations prior to market release."
  },
  {
    title: "Good Manufacturing Practices (GMP)",
    iconSrc: "/images/industries/nutraceutical-research/good-manufacturing-practices-.webp",
    description: "Adhering to strict quality control and standardized production protocols."
  }
];

const defaultCommitmentBullets: CommitmentBullet[] = [
  { text: "Meets global quality and safety standards" },
  { text: "Delivers tangible health benefits to consumers" },
  { text: "Aligns with market trends and consumer expectations" }
];

const defaultPublication: PublicationItem = {
  title: "Nutraceuticals in the Treatment of Major Depressive Disorder",
  author: "Davis A, Pence J, Bloomer RJ",
  journal: "Nutraceuticals",
  publisher: "MDPI",
  impactFactor: "5.1",
  coverImage: "/images/industries/nutraceutical-research/sample-works-5.webp"
};

const defaultEditors: EditorProfile[] = [
  {
    name: "Dr. Ananya Mehta",
    qualification: "PhD - Nutraceutical Science",
    experience: "12 Years of Experience",
    manuscripts: "80+ manuscripts edited",
    image: "/images/industries/nutraceutical-research/Dr.-Ananya-Mehta-2.webp"
  },
  {
    name: "Dr. Rohit Kapoor",
    qualification: "PhD - Herbal Nutraceuticals",
    experience: "18 Years of Experience",
    manuscripts: "120+ manuscripts edited",
    image: "/images/industries/nutraceutical-research/Dr.-Rohit-Kapoor.webp"
  },
  {
    name: "Dr. Priya Nair",
    qualification: "PhD - Nutraceutical Research",
    experience: "10 Years of Experience",
    manuscripts: "70+ manuscripts edited",
    image: "/images/industries/nutraceutical-research/Dr.-Priya-Nair-1.webp"
  }
];

export default function NutraceuticalResearchPartTwo({
  rdTitle = "Research And Development In Nutraceuticals",
  rdSubtitle = "Innovation is at the heart of the nutraceutical industry. R&D efforts focus on identifying new bioactive compounds, understanding their mechanisms of action, and developing novel delivery systems. Leading areas of research include:",
  rdItems = defaultRdItems,
  rdImages = {
    main: "/images/industries/nutraceutical-research/Research-and-Development-in-Nutraceuticals.webp",
    secondary: ""
  },
  standardsTitle = "Quality And Regulatory Standards",
  standardsSubtitle = "Quality, safety, and regulatory compliance are critical in the nutraceutical industry. Regulatory authorities such as the US FDA, EFSA (European Food Safety Authority), and FSSAI (India) provide guidelines for manufacturing, labelling, and marketing nutraceutical products. Key considerations include:",
  standardsTabs = defaultStandardsTabs,
  commitmentTitle = "Our Commitment To The Nutraceutical Industry",
  commitmentDescription = "At Pubrica, we are dedicated to transforming ideas into impactful nutraceutical solutions. Our multi-disciplinary team of scientists, regulatory experts, and marketing professionals ensures that every product:",
  commitmentBullets = defaultCommitmentBullets,
  commitmentImage = "/images/industries/nutraceutical-research/Our-Commitment-to-the-Nutraceutical-Industry.webp",
  authorsPublishTitle = "Where Our Authors Publish",
  authorsPublishDescription = "Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.",
  publication = defaultPublication,
  editorsTitle = "Our Expert Nutraceutical Editors",
  editorsDescription = "Pubrica's team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.",
  editors = defaultEditors
}: NutraceuticalResearchPartTwoProps) {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">
      
      {/* Research And Development In Nutraceuticals */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0f2824]">{rdTitle}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image 
                src={rdImages.main} 
                alt="Nutraceutical R&D testing" 
                fill 
                sizes="320px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-4 w-[160px] h-[120px] sm:w-[180px] sm:h-[130px] rounded-xl overflow-hidden shadow-xl border-4 border-white hidden" aria-hidden="true" />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              {rdSubtitle}
            </p>
            <ul className="space-y-4">
              {rdItems.map((item, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#cc0000] mt-1.5 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong className="text-gray-900 font-semibold">{item.title}:</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quality And Regulatory Standards */}
      <section className="bg-gray-50/50 py-16 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{standardsTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            {standardsSubtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {standardsTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                  activeTab === index 
                    ? 'bg-white border-emerald-800 shadow-md text-[#0f2824] ring-2 ring-emerald-800/10' 
                    : 'bg-white/60 border-gray-200 text-gray-600 hover:bg-white'
                }`}
              >
                <div className="relative w-8 h-8">
                  {tab.iconSrc ? <Image src={tab.iconSrc} alt="" fill className="object-contain" sizes="32px" /> : null}
                </div>
                <span className="font-semibold text-xs sm:text-sm">{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-base text-[#cc0000] mb-2">{standardsTabs[activeTab].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{standardsTabs[activeTab].description}</p>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Adhering to these standards is essential for building consumer trust and achieving global market acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment To The Nutraceutical Industry */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2824]">{commitmentTitle}</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {commitmentDescription}
            </p>
            <ul className="space-y-3">
              {commitmentBullets.map((bullet, index) => (
                <li key={index} className="flex items-center text-xs sm:text-sm text-gray-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs mr-3 flex-shrink-0 font-bold">✓</span>
                  {bullet.text}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-2">
              We believe in fostering collaboration with nutraceutical innovators worldwide, helping them navigate challenges and capitalize on emerging opportunities.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] h-[300px] sm:h-[340px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
              <Image 
                src={commitmentImage} 
                alt="Nutraceutical professional writing notes with supplements" 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Our Authors Publish */}
      <section className="bg-gray-50/50 py-16 px-6 border-t border-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">{authorsPublishTitle}</h2>
          <div className="w-12 h-1 bg-[#0f2824] mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-10">
            {authorsPublishDescription}
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center text-left">
            <div className="relative w-full md:w-[260px] h-[340px] flex-shrink-0 rounded-xl overflow-hidden shadow border border-gray-100">
              <Image 
                src={publication.coverImage} 
                alt={publication.title} 
                fill 
                sizes="260px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="flex-1 space-y-3">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Featured Publication</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                <span className="text-gray-700 font-medium">Paper Title:</span> {publication.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Author:</span> {publication.author}
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Journal Name:</span> {publication.journal}
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Publisher:</span> {publication.publisher}
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Impact factor:</span> {publication.impactFactor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Nutraceutical Editors */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{editorsTitle}</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-12">
          {editorsDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editors.map((editor, index) => (
            <div key={index} className="bg-[#e8f0ec]/60 border border-emerald-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                <Image 
                  src={editor.image} 
                  alt={editor.name} 
                  fill 
                  sizes="80px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <h3 className="font-bold text-base sm:text-lg text-[#0f2824] mb-1">{editor.name}</h3>
              <p className="text-gray-600 text-xs mb-4 min-h-[32px] leading-snug">{editor.qualification}</p>

              <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-emerald-200/50 mt-auto text-xs text-gray-700 font-medium">
                <div className="bg-white/80 rounded-lg py-2 px-1 shadow-2xs">
                  <div className="font-bold text-[#0f2824]">{editor.experience}</div>
                </div>
                <div className="bg-white/80 rounded-lg py-2 px-1 shadow-2xs">
                  <div className="font-bold text-[#0f2824]">{editor.manuscripts}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}