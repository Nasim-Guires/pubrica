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
    description: "Validating health claims through scientifically rigorous studies."
  },
  {
    title: "Labelling compliance",
    iconSrc: "/images/industries/nutraceutical-research/labelling-compilance-.webp",
    description: "Accurate disclosure of ingredients, dosage, and health claims."
  },
  {
    title: "Safety assessments",
    iconSrc: "/images/industries/nutraceutical-research/safety-assesments-.webp",
    description: "Evaluating potential toxicity, interactions, and contraindications."
  },
  {
    title: "Good Manufacturing Practices (GMP)",
    iconSrc: "/images/industries/nutraceutical-research/good-manufacturing-practices-.webp",
    description: "Ensuring consistent product quality and safety."
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
      <section className="max-w-6xl mx-auto py-5 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">{rdTitle}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[280px] h-[320px] sm:w-[300px] sm:h-[350px] rounded-2xl overflow-hidden">
              <Image
                src={rdImages.main}
                alt="Nutraceutical R&D testing"
                fill
                sizes="300px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-4 w-[160px] h-[120px] sm:w-[180px] sm:h-[130px] rounded-xl overflow-hidden shadow-xl border-4 border-white hidden" aria-hidden="true" />
          </div>

          <div className="lg:col-span-7 space-y-3">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              {rdSubtitle}
            </p>
            <ul className="space-y-2.5">
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
      <section className="bg-gray-50/50 py-7 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{standardsTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            {standardsSubtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {standardsTabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div key={index} className="flex flex-col">
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full p-3 rounded-xl border text-left sm:text-center transition-all flex flex-col items-start sm:items-center justify-center gap-1.5 ${isActive
                      ? 'bg-white border-[#0f2824] shadow-sm text-[#0f2824] ring-1 ring-[#0f2824]/10 rounded-b-none border-b-0'
                      : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300'
                      }`}
                  >
                    <div className="relative w-7 h-7 flex-shrink-0">
                      {tab.iconSrc ? <Image src={tab.iconSrc} alt="" fill className="object-contain" sizes="28px" /> : null}
                    </div>
                    <span className="font-semibold text-xs sm:text-sm">{tab.title}</span>
                  </button>

                  {isActive && (
                    <div className="bg-white border border-[#0f2824] border-t-0 rounded-b-xl p-3.5 text-left sm:text-center shadow-sm -mt-px z-10">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tab.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-left mt-4">
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Adhering to these standards is essential for building consumer trust and achieving global market acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment To The Nutraceutical Industry */}
      <section className="max-w-6xl mx-auto py-5 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2824]">{commitmentTitle}</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {commitmentDescription}
            </p>
            <ul className="space-y-2.5">
              {commitmentBullets.map((bullet, index) => (
                <li key={index} className="flex items-center text-xs sm:text-sm text-gray-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs mr-3 flex-shrink-0 font-bold">✓</span>
                  {bullet.text}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-1">
              We believe in fostering collaboration with nutraceutical innovators worldwide, helping them navigate challenges and capitalize on emerging opportunities.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
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

      <section className="py-6 max-w-5xl mx-auto px-4 border-t border-gray-100">
        <div className="text-left max-w-2xl mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
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
                <span className="text-gray-800">{publication.title}</span>
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

      {/* Our Expert Nutraceutical Editors */}

      <section className="py-6 max-w-6xl mx-auto px-4">
        <div className="text-left max-w-2xl mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
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