'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  FilePlay, 
  ClipboardList, 
  Palette, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Sparkles, 
  Check, 
  ExternalLink,
  BookOpen,
  Box
} from 'lucide-react';

interface ExampleData {
  id: string;
  category: string;
  journalName: string;
  citeScore: string;
  impactFactor: string;
  articleTitle: string;
  citation: string;
  image2D: string;
  image3D?: string;
  summaryText: string;
}

const examplesData: Record<string, ExampleData> = {
  medicine: {
    id: 'medicine',
    category: 'Medicine',
    journalName: 'Diabetes Care',
    citeScore: '22.3',
    impactFactor: '16.2',
    articleTitle: 'Persistent Hyperglycemia and Insulin Resistance With the Risk of Worsening Cardiac Damage in Adolescents',
    citation: 'Adapted From: Agbaje AO, Zachariah JP, Barker AR, et al. Persistent hyperglycemia and insulin resistance with the risk of worsening cardiac damage in adolescents: A 7-year longitudinal study of the ALSPAC birth cohort. Diabetes Care. 2025;48(6):896–904. doi:10.2337/dc24-2459',
    image2D: '/images/research-impact/graphical-abstract/v1-Persistent-Hyperglycemia-and-Insulin-Resistance-Graphical-abstract-2d.jpg',
    summaryText: 'Persistently high blood glucose levels and insulin resistance were associated with premature and worsening structural and functional cardiac damage in youth, largely explained by excess fat.'
  },
  lifeSciences: {
    id: 'lifeSciences',
    category: 'Life Sciences',
    journalName: 'Life Sciences',
    citeScore: '10.9',
    impactFactor: '6.1',
    articleTitle: 'Rat Models in Chronic Wound Research: Addressing a Multifactorial Disease',
    citation: 'Adapted From: Ghanbari M, Salkovskiy Y, Carlson MA. The rat as an animal model in chronic wound research: An update. Life Sci. 2024;351(122783):122783. doi:10.1016/j.lfs.2024.122783',
    image2D: '/images/research-impact/graphical-abstract/v1-Rat-Models-in-Chronic-Wound-Research-graphical-abstract-2d.jpg',
    summaryText: 'Conclusion: A relevant rat model for chronic wound research requires the induction of comorbidities like diabetes, peripheral arterial disease, venous stasis, and prolonged pressure on body areas, mirroring clinical symptoms in humans.'
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
      iconSrc: '/images/research-impact/graphical-abstract/Upload-Your-Manuscript.png',
    },
    {
      id: 2,
      title: 'Questionnaire',
      description: 'We will send you a customized questionnaire to align with your vision. This is a key step to ensure that the deliverables meet your expectations.',
      iconSrc: '/images/research-impact/graphical-abstract/Questionnaire.png',
    },
    {
      id: 3,
      title: 'Graphical abstract creation – First draft',
      description: 'Our experts will review the manuscript. Our designers will create a visual concept note per journal guidelines and share the first draft with you.',
      iconSrc: '/images/research-impact/graphical-abstract/Graphical-abstract-creation-First-draft.png',
    },
    {
      id: 4,
      title: 'Final draft',
      description: 'The production team works on the revisions if any and finalizes the graphical abstract in file formats as required by the journal.',
      iconSrc: '/images/research-impact/graphical-abstract/Final-draft.png',
    },
  ];

  const currentExample = examplesData[activeTab];

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans">
      {/* 1. Hero Banner */}
      <section className="w-full bg-[#033c2a] text-white py-7 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Graphical Abstract Services at Pubrica
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Our experts design visually engaging, scientifically accurate graphical abstracts that distill your research into a clear and compelling visual summary.
          </p>
        </div>
      </section>

      {/* 2. Process Section */}
      <section className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
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
          <div className="lg:col-span-6 space-y-4">
            {processSteps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-emerald-600 shadow-md ring-1 ring-emerald-500'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 rounded-lg flex-shrink-0 relative w-10 h-10 ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Image src={step.iconSrc} alt="" fill className="object-contain p-1" sizes="40px" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-base sm:text-lg ${
                          isSelected ? 'text-emerald-900' : 'text-slate-800'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Diagram Box */}
          <div className="lg:col-span-6 bg-slate-100 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[380px] shadow-inner relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
              Step {activeStep + 1} of 4
            </div>

            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200 text-emerald-700 relative overflow-hidden">
                <Image src={processSteps[activeStep].iconSrc} alt="" fill className="object-contain p-3" sizes="64px" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {processSteps[activeStep].title}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Pubrica Workflow Interactive Demo
                </p>
              </div>

              {/* Mock graphic elements matching diagram preview */}
              <div className="pt-2 border-t border-slate-100 flex justify-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                  <FileText className="w-3.5 h-3.5 text-blue-500" /> DOC
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                  <Layers className="w-3.5 h-3.5 text-red-500" /> PDF
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Graphical Abstract
                </span>
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

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: What We Need From You */}
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

            {/* Card 2: What We Do */}
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

            {/* Card 3: What We Deliver */}
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

        {/* Display Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden max-w-5xl mx-auto">
          {/* Header Metric Bar */}
          <div className="bg-emerald-50/60 border-b border-emerald-100 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {currentExample.journalName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Journal Impact Factor: <span className="font-bold text-emerald-800">{currentExample.impactFactor}</span>
              </p>
            </div>
            <div className="bg-emerald-100/80 text-emerald-900 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-md border border-emerald-200">
              Journal Cite Score: {currentExample.citeScore}
            </div>
          </div>

          {/* Abstract Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Article Title and Dimension Switch */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white p-4 rounded-xl">
              <h4 className="font-bold text-sm sm:text-base leading-snug">
                {currentExample.articleTitle}
              </h4>
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg self-start sm:self-center flex-shrink-0">
                <button
                  onClick={() => setDimensionMode('2D')}
                  className={`px-3 py-1 text-xs font-bold rounded ${
                    dimensionMode === '2D' ? 'bg-rose-500 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  2D
                </button>
                <button
                  onClick={() => setDimensionMode('3D')}
                  className={`px-3 py-1 text-xs font-bold rounded ${
                    dimensionMode === '3D' ? 'bg-rose-500 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  3D
                </button>
              </div>
            </div>

            {/* Illustration Graphic Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center space-y-4">
              <div className={`relative rounded-lg overflow-hidden border border-slate-200 max-h-80 bg-white flex items-center justify-center ${dimensionMode === '3D' && !currentExample.image3D ? 'hidden' : ''}`}>
                <Image
                  src={dimensionMode === '3D' && currentExample.image3D ? currentExample.image3D : currentExample.image2D}
                  alt={currentExample.articleTitle}
                  width={900}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center p-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl max-w-xl text-center shadow-xl border border-slate-200">
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      "{currentExample.summaryText}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citation Footer */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex items-start gap-3">
              <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded flex-shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {currentExample.citation}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}