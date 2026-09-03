'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box } from 'lucide-react';
import ServiceBanner from '@/components/common/ServiceBanner';

interface ExampleData {
  id: string;
  category: string;
  // 2D fields
  journalName2D: string;
  citeScore2D: string;
  impactFactor2D: string;
  articleTitle2D: string;
  citation2D: string;
  image2D: string;
  // 3D fields
  journalName3D: string;
  citeScore3D: string;
  impactFactor3D: string;
  articleTitle3D: string;
  citation3D: string;
  image3D: string;
}

const examplesData: Record<string, ExampleData> = {
  medicine: {
    id: 'medicine',
    category: 'Medicine',
    // 2D Details
    journalName2D: 'Diabetes Care',
    citeScore2D: '22.3',
    impactFactor2D: '16.2',
    articleTitle2D: 'Risk factors, histopathological features and graft outcome of transplant glomerulopathy in the absence of donor-specific HLA antibodies',
    citation2D: 'Adapted From: Senev A, Van Loon E, Lerut E, et al. Risk factors, histopathological features, and graft outcome of transplant glomerulopathy in the absence of donor-specific HLA antibodies. Kidney Int. 2021;100(2):401-414. doi:10.1016/j.kint.2021.01.029',
    image2D: '/images/research-impact/graphical-abstract/v1-Persistent-Hyperglycemia-and-Insulin-Resistance-Graphical-abstract-2d.jpg',
    // 3D Details
    journalName3D: 'Journal of Biomedical Science',
    citeScore3D: '16.3',
    impactFactor3D: '12.1',
    articleTitle3D: 'Advanced 3D Analysis of Risk factors and graft outcome in transplant glomerulopathy',
    citation3D: 'Adapted From: Senev A, et al. Advanced 3D modeling in transplant glomerulopathy. Kidney Int. 2022;101(3):500-515. doi:10.1016/j.kint.2022.02.030',
    image3D: '/images/research-impact/graphical-abstract/v1-Scaffold-based-3D-cell-culture-models-in-cancer-research-Graphical-abstract-3d.jpg',
  },
  lifeSciences: {
    id: 'lifeSciences',
    category: 'Life Sciences',
    // 2D Details
    journalName2D: 'Life Sciences',
    citeScore2D: '10.9',
    impactFactor2D: '5.1',
    articleTitle2D: 'Scaffold-based 3D cell culture models in cancer research',
    citation2D: 'Adapted From: Abuwatfa WH, Pitt WG, Husseini GA. Scaffold-based 3D cell culture models in cancer research. J Biomed Sci. 2024;31(1):7. doi:10.1186/s12929-024-00994-y',
    image2D: '/images/research-impact/graphical-abstract/v1-Rat-Models-in-Chronic-Wound-Research-graphical-abstract-2d.jpg',
    // 3D Details
    journalName3D: 'Kidney International',
    citeScore3D: '21.4',
    impactFactor3D: '12.6',
    articleTitle3D: 'High-Resolution Scaffold-based 3D Cell Culture Models in Cancer Dynamics',
    citation3D: 'Adapted From: Abuwatfa WH, et al. High-Resolution Scaffold-based 3D models. J Biomed Sci. 2025;32(2):12. doi:10.1186/s12929-025-00100-x',
    image3D: '/images/research-impact/graphical-abstract/v1-Risk-factors-histopathological-features-graphical-abstract-3d.jpg',
  }
};

export default function ResearchImpactGraphicalAbstract() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'medicine' | 'lifeSciences'>('medicine');
  const [dimensionMode, setDimensionMode] = useState<'2D' | '3D'>('2D');

  const processSteps = [
    {
      id: 1,
      title: 'Upload Your Manuscript',
      description: 'Submit your manuscript along with the relevant information for the target journal.',
      illustrationSrc: '/images/research-impact/graphical-abstract/Upload-Your-Manuscript.png',
    },
    {
      id: 2,
      title: 'Questionnaire',
      description: 'We will send you a customized questionnaire to align with your vision. This is a key step to ensure that the deliverables meet your expectations.',
      illustrationSrc: '/images/research-impact/graphical-abstract/Questionnaire.png',
    },
    {
      id: 3,
      title: 'Graphical abstract creation – First draft',
      description: 'Our experts will review the manuscript. Our designers will create a visual concept note per journal guidelines and share the first draft with you.',
      illustrationSrc: '/images/research-impact/graphical-abstract/Graphical-abstract-creation-First-draft.png',
    },
    {
      id: 4,
      title: 'Final draft',
      description: 'The production team works on the revisions if any and finalizes the graphical abstract in file formats as required by the journal.',
      illustrationSrc: '/images/research-impact/graphical-abstract/Final-draft.png',
    },
  ];

  // Auto-rotate steps every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [processSteps.length]);

  const currentExample = examplesData[activeTab];
  const currentStepData = processSteps[activeStep];

  // Dynamically switch metrics and content based on 2D or 3D mode
  const currentJournalName = dimensionMode === '3D' ? currentExample.journalName3D : currentExample.journalName2D;
  const currentCiteScore = dimensionMode === '3D' ? currentExample.citeScore3D : currentExample.citeScore2D;
  const currentImpactFactor = dimensionMode === '3D' ? currentExample.impactFactor3D : currentExample.impactFactor2D;
  const currentImage = dimensionMode === '3D' ? currentExample.image3D : currentExample.image2D;

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans">
      {/* 1. Hero Banner */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Graphical Abstract Services at Pubrica"
        description="Our experts design visually engaging, scientifically accurate graphical abstracts that distill your research into a clear and compelling visual summary."
      />

      {/* 2. Process Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How The Graphical Abstract Service Works
          </h2>
          <p className="text-lg font-semibold text-emerald-800 mt-2">
            Our Step-By-Step Process
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
            We use a structured, expert-led process to convert your research into accurate and visually compelling summaries that increase understanding and visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Process Steps List */}
          <div className="lg:col-span-6 space-y-6">
            {processSteps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-200 pl-4 sm:pl-6 border-l-4 ${
                    isSelected
                      ? 'border-blue-600'
                      : 'border-transparent hover:border-slate-300'
                  }`}
                >
                  <div>
                    <h3 className={`font-bold text-base sm:text-lg transition-colors ${
                      isSelected ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Pure Full-Size Image Container */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[460px] shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 z-10">
              Step {activeStep + 1} of 4
            </div>

            <div className="w-full flex flex-col items-center justify-center text-center">
              <div className="relative w-full h-80 sm:h-96 rounded-xl flex items-center justify-center transition-all duration-300">
                <div className="relative w-full h-full flex items-center justify-center bg-white/80 border border-slate-200/80 rounded-xl shadow-sm overflow-hidden">
                  <Image
                    src={currentStepData.illustrationSrc}
                    alt={currentStepData.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Complete Graphical Illustration Section */}
      <section className="bg-white border-y border-slate-200 py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Complete Graphical Illustration
            </h2>
            <p className="text-slate-600 max-w-4xl text-sm sm:text-base leading-relaxed">
              With this complete service, we need your manuscript and the target journal. Our specialists will identify the key results, observations, and findings in your manuscript and create a clear, clean, creative, and easy-to-read visual representation of your research. The high-resolution final images will be delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-amber-200/80">
                  What We Need From You
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Research manuscript (final version)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Target journal and URL</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Special instructions, if any</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50/50 border border-purple-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-purple-200/80">
                  What We Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span>Prepare a simplified synopsis of your manuscript</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span>Develop a computer-aided 2D graphical representation of your research study</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span>Deliver a final file of the images that meets all the guidelines of the target journal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-emerald-200/80">
                  What We Deliver
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>Graphical abstract file (JPEG, TIFF, EPS, PDF)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>Adobe working file</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>Abstract Report</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Graphical Abstract Examples by Pubrica */}
      <section className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Graphical Abstract Examples by Pubrica
          </h2>
        </div>

        {/* Example Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-200 p-1 rounded-xl inline-flex gap-1">
            <button
              onClick={() => setActiveTab('medicine')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'medicine'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Medicine
            </button>
            <button
              onClick={() => setActiveTab('lifeSciences')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'lifeSciences'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Life Sciences
            </button>
          </div>
        </div>

        {/* Display Card Matching Your Exact Reference Images */}
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-lg overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Metadata Green Info Box */}
          <div className="bg-[#eaf7ec] border-b border-emerald-200/60 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {currentJournalName}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Journal Impact Factor: <span className="text-slate-900 font-semibold">{currentImpactFactor}</span>
              </p>
            </div>
            <div className="text-xs text-slate-700 font-medium">
              Journal Cite Score: <span className="text-slate-900 font-semibold">{currentCiteScore}</span>
            </div>
          </div>

          {/* Main Card Content Container */}
          <div className="p-4 sm:p-6 bg-white">
            
            {/* Title Bar with Professional 2D/3D Pill Toggle matching reference layout */}
            <div className="bg-[#1f3833] text-white rounded-t-xl px-4 py-3 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* <h4 className="text-sm sm:text-base font-semibold tracking-wide leading-snug">
                {dimensionMode === '3D' ? currentExample.articleTitle3D : currentExample.articleTitle2D}
              </h4> */}

              {/* Exact Professional 2D / 3D Toggle Button Group */}
              <div className="bg-[#162925] p-1 rounded-lg border border-emerald-900/50 flex items-center gap-1 flex-shrink-0 self-end md:self-auto shadow-inner">
                <button
                  onClick={() => setDimensionMode('2D')}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-1 ${
                    dimensionMode === '2D'
                      ? 'bg-rose-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>2D</span>
                </button>
                <button
                  onClick={() => setDimensionMode('3D')}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-1 ${
                    dimensionMode === '3D'
                      ? 'bg-rose-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>3D</span>
                </button>
              </div>
            </div>

            {/* Graphical Abstract Image Display Area */}
            <div className="bg-white border-x border-b border-slate-200 rounded-b-xl p-4 sm:p-6 flex flex-col items-center justify-center">
              {currentImage ? (
                <div className="relative w-full h-[380px] sm:h-[480px] flex items-center justify-center">
                  <Image
                    src={currentImage}
                    alt={`${dimensionMode} Graphical Abstract`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
              ) : (
                <div className="w-full h-80 flex flex-col items-center justify-center bg-slate-50 text-slate-500 p-6 rounded-xl border border-dashed border-slate-200">
                  <Box className="w-10 h-10 mb-2 text-slate-400" />
                  <p className="text-sm font-semibold">{dimensionMode} Graphical Abstract coming soon</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}