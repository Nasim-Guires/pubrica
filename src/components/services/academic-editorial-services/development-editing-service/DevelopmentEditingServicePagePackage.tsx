"use client";


import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import ExpertsSection, { Expert } from '@/components/common/ExpertsSection';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import { 
  Menu, 
  ChevronLeft, 
  ChevronRight, 
  ZoomOut, 
  ZoomIn, 
  RotateCw, 
  Undo, 
  Redo, 
  Download, 
  Printer, 
  MoreVertical, 
  MessageCircle 
} from 'lucide-react';

export default function DevelopmentEditingServicePagePackage() {
  const [activeTab, setActiveTab] = useState('Medicine');
  const [zoomLevel, setZoomLevel] = useState(67);

  const documentPath = "/uploads/v1-Copy-Editing-Service-sample-work.pdf";

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 20));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = documentPath;
    link.download = documentPath.split('/').pop() || 'sample-work.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open(documentPath, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  const steps: WorkflowStep[] = [
    {
      stepNumber: 1,
      title: "INITIAL ASSESSMENT",
      description:
        "We begin with a thorough evaluation of your manuscript to identify areas requiring improvement, such as inconsistencies, redundancies, or gaps in logic. This initial assessment forms the basis of a customized editing plan.",
      iconSrc:
        "/images/academic-editorial-services/development-editing-service/Initial-Assessment.png",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "CONTENT ENHANCEMENT",
      description:
        "Our editors focus on strengthening the manuscript's core message. They restructure sections, clarify hypotheses, and refine arguments to ensure that your research is presented logically and persuasively. Figures, tables, and data presentation are reviewed for accuracy and clarity.",
      iconSrc:
        "/images/academic-editorial-services/development-editing-service/Content-Enhancement.png",
      position: "bottom",
    },
    {
      stepNumber: 3,
      title: "LANGUAGE AND STYLE REFINEMENT",
      description:
        "While development editing prioritizes content and structure, language quality is also crucial. Editors polish the manuscript for grammatical accuracy, sentence construction, readability, and adherence to academic style without altering your voice.",
      iconSrc:
        "/images/academic-editorial-services/development-editing-service/Language-and-Style-Refinement.png",
      position: "top",
    },
    {
      stepNumber: 4,
      title: "DETAILED FEEDBACK AND QUERIES",
      description:
        "Our editors provide a comprehensive report highlighting the changes made, suggestions for improvement, and queries that require your input. This transparent process encourages collaboration and ensures your vision remains central to the manuscript.",
      iconSrc:
        "/images/academic-editorial-services/development-editing-service/Detailed-Feedback-and-Queries.png",
      position: "bottom",
    },
    {
      stepNumber: 5,
      title: "FINAL REVIEW AND APPROVAL",
      description:
        "After addressing the editor's feedback, we conduct a final review to ensure the manuscript is coherent, concise, and ready for submission. By the end of this process, your research is transformed into a polished document that communicates your findings effectively and persuasively.",
      iconSrc:
        "/images/academic-editorial-services/development-editing-service/Final-Review-and-Approval.png",
      position: "top",
    },
  ];

  const stats = [
    { value: '1,433,495+', label: 'Papers edited' },
    { value: '326,583+', label: 'Authors served' },
    { value: '15+ years', label: 'Editing Experience' },
  ];

  const helpItems = [
    {
      text: 'Address big-picture elements to elevate your manuscript as a whole.',
      icon: '/images/academic-editorial-services/development-editing-service/Address-big-picture-elements-to-elevate-your-manuscript-as-a-whole.png',
    },
    {
      text: 'Refine your argument for seamless flow throughout the text.',
      icon: '/images/academic-editorial-services/development-editing-service/Refine-your-argument-for-seamless-flow-throughout-the-text.png',
    },
    {
      text: 'Organise sections to logically support your argument.',
      icon: '/images/academic-editorial-services/development-editing-service/Organise-sections-to-logically-support-your-argument.png',
    },
    {
      text: 'Strengthen your evidence for a compelling argument.',
      icon: '/images/academic-editorial-services/development-editing-service/Strengthen-your-evidence-for-a-compelling-argument.png',
    },
    {
      text: 'Respond to peer reviewer or reader feedback.',
      icon: '/images/academic-editorial-services/development-editing-service/Respond-to-peer-reviewer-or-reader-feedback.png',
    },
    {
      text: 'Ensure your tone and voice are targeted to your audience.',
      icon: '/images/academic-editorial-services/development-editing-service/Ensure-your-tone-and-voice-are-targeted-to-your-audience.png',
    },
    {
      text: 'Make large word count cuts without compromising clarity.',
      icon: '/images/academic-editorial-services/development-editing-service/Make-large-word-count-cuts-without-compromising-clarity.png',
    },
    {
      text: 'Suggest ways to expand your content while maintaining quality.',
      icon: '/images/academic-editorial-services/development-editing-service/Suggest-ways-to-expand-your-content-while-maintaining-quality.png',
    },
  ];

  const developmentEditingPackages: PackageItem[] = [
    {
      icon: "/images/publication-support/poster-preparation/S.png",
      title: "Standard Development",
      idealFor: "Early drafts and manuscripts needing structural guidance.",
      includes: [
        "Comprehensive review of manuscript structure and organization",
        "Clarity and flow improvements",
        "Identification of gaps in argument or logic",
        "Suggestions for paragraph and sentence-level enhancements",
        "Feedback on readability and coherence",
      ],
      turnaround: "7–10 business days",
      cardBgColor: "#c8d6d6",
      titleColor: "#1b3b36",
    },
    {
      icon: "/images/publication-support/peer-review-pre-submission/advanced.webp",
      title: "Advanced Development",
      idealFor:
        "Manuscripts with strong content that require detailed refinement.",
      includes: [
        "Everything in the Standard package",
        "In-depth assessment of research methodology and argumentation",
        "Alignment with journal or publisher guidelines",
        "Enhanced clarity, conciseness, and style improvements",
        "Consistency check for terminology, headings, and references",
      ],
      turnaround: "10–14 business days",
      cardBgColor: "#ccaacb",
      titleColor: "#7a4988",
    },
    {
      icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
      title: "Premium Development",
      idealFor:
        "Manuscripts intended for high-impact journals or publication.",
      includes: [
        "Everything in the Advanced package",
        "Expert review for content depth, originality, and scientific accuracy",
        "Integration of feedback from reviewers or advisors",
        "Detailed suggestions for strengthening conclusions and discussion",
        "Priority support and consultation with our expert editors",
      ],
      turnaround: "14–21 business days",
      cardBgColor: "#c8a87b",
      titleColor: "#714b23",
    },
  ];

  const experts: Expert[] = [
    {
      id: "aarav-mehta",
      name: "Dr. Aarav Mehta",
      title: "PhD in Life Sciences",
      institution: "Indian Institute of Technology, India",
      experience: "10+ Years of Experience",
      papersEdited: "950+ Papers Edited",
      avatarUrl:
        "/images/academic-editorial-services/development-editing-service/Dr.-Aarav-Mehta.png",
      flagUrl: "/images/country/india.png",
      bio: "Dr. Mehta specializes in comprehensive development editing, enhancing manuscript structure, logical flow, and argument clarity.",
      expertise:
        "Biomedical research, clinical studies, environmental sciences",
      journals: "The Lancet, Scientific Reports, PLOS Biology",
    },
    {
      id: "priya-rangan",
      name: "Dr. Priya Rangan",
      title: "PhD in Biochemistry",
      institution: "University of Delhi, Delhi, India",
      experience: "8+ Years of Experience",
      papersEdited: "740+ Papers Edited",
      avatarUrl:
        "/images/academic-editorial-services/development-editing-service/Dr.-Priya-Rangan.png",
      flagUrl: "/images/country/india.png",
      bio: "Dr. Rangan focuses on improving manuscript coherence, conceptual depth, and research storytelling.",
      expertise:
        "Molecular biology, pharmacology, biotechnology",
      journals:
        "Nature Communications, Journal of Biological Chemistry, BMC Biology",
    },
    {
      id: "rohan-verma",
      name: "Dr. Rohan Verma",
      title: "PhD in Neuroscience",
      institution:
        "All India Institute of Medical Sciences, India",
      experience: "9+ Years of Experience",
      papersEdited: "850+ Papers Edited",
      avatarUrl:
        "/images/academic-editorial-services/development-editing-service/Dr.-Rohan-Verma.png",
      flagUrl: "/images/country/india.png",
      bio: "Dr. Verma specializes in development editing for neuroscience and psychology manuscripts, focusing on logical flow, argument strength, and clarity of results.",
      expertise:
        "Neuroscience, cognitive science, behavioural studies",
      journals:
        "Neuron, Frontiers in Neuroscience, Brain Research",
    },
  ];

  return (
    <>
      <Head>
        <title>Pubrica's Development Editing Services and its Key Features</title>
        <meta
          name="description"
          content="Explore comprehensive Development Editing packages designed to strengthen your manuscript's structure, flow, and overall narrative quality."
        />
        <link
          rel="canonical"
          href="/services/academic-editorial-services/development-editing-service"
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">

        {/* =========================================================
            SECTION 1: Pubrica's Development Editing Services and its Key Features
            ========================================================= */}
        <section className="py-6 px-4 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3b36] mb-4">
            Pubrica's Development Editing Services and its Key Features
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
            Looking for a better way to structure your manuscript? Need help crafting more effective transitions? Want to improve the overall flow of your paper and get high-quality editing and formatting? Pubrica's Development Editing Services give you access to experienced English editors who help organize and optimize your manuscript's content according to international journal standards.
          </p>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

            {/* Card 1 - Yellow/Orange Border */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-l-[#facc15] border-t border-r border-b border-gray-100 flex items-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                A team of 3,000+ experienced developmental editors that focus on delivering an impeccably formatted manuscript, with proper sentence construction and grammar, and in-depth checks for missing structural elements or incomplete sections.
              </p>
            </div>

            {/* Card 2 - Teal Border */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-l-[#2dd4bf] border-t border-r border-b border-gray-100 flex items-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                Expertise across 1,600+ subject areas to match your manuscript with the most suitable experts in your field and ensure a clearly defined narrative and accurate use of technical terminology.
              </p>
            </div>

            {/* Card 3 - Purple Border */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-l-[#a855f7] border-t border-r border-b border-gray-100 flex items-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                A comprehensive 2-level editor review system that gets your paper checked by two leading experts in your subject area for excellent quality developmental editing. You can also benefit from free re-editing for over 12 months with our Premium editing and Scientific editing plans.
              </p>
            </div>

            {/* Card 4 - Blue Border */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-l-[#3b82f6] border-t border-r border-b border-gray-100 flex items-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                High standards of data security are maintained to ensure the confidentiality of manuscripts. Our editors honour a strict NDA, and our systems are ISO/IEC 27001:2013 certified, so any files you submit for editing are 100% safe and secure.
              </p>
            </div>

            {/* Card 5 - Coral/Red-Orange Border */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-l-[#f97316] border-t border-r border-b border-gray-100 flex items-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                Additional services, like a plagiarism check to eliminate any chance of accidental duplication in your paper when referring to previously published research articles.
              </p>
            </div>

            {/* Card 6 - Bright Green Border */}
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-l-[#4ade80] border-t border-r border-b border-gray-100 flex items-center">
              <p className="text-sm text-gray-700 leading-relaxed">
                Quality and delivery guaranteed with strict adherence to deadlines without compromising on quality
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            SECTION 2: How Our Development Editing Service Works (Step-by-Step)
            ========================================================= */}
        <EditorialWorkflowSection
          heading="How Our Development Editing Service Works"
          subheading="Our Step-by-Step Process"
          steps={steps}
        />
        {/* =========================================================
            SECTION 3: How Our Editors Can Help You
            ========================================================= */}
        <section className="w-full bg-[#f8fafc]">
          {/* ------------------- DARK GREEN METRICS BANNER ------------------- */}
          <div className="bg-[#0b3b2c] py-8 px-4 text-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              {stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 text-center">
                    <div className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-emerald-100 font-light">
                      {stat.label}
                    </div>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="hidden md:block w-[1px] h-10 bg-emerald-700/60" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ------------------- MAIN CONTENT & CARDS GRID ------------------- */}
          <div className="py-7 px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c] mb-10">
              How Our Editors Can Help You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {helpItems.map((item, index) => (
                <Link
                  key={index}
                  href="/services/research-services/medical-writing/"
                  className="p-6 bg-white border border-gray-200/80 rounded-xl shadow-xs transition-all duration-300 hover:border-[#0b3b2c] hover:shadow-md flex items-center space-x-4 min-h-[120px] group"
                >
                  {/* Icon Placeholder Container */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Text Description */}
                  <p className="text-xs md:text-sm text-gray-700 leading-snug font-normal group-hover:text-gray-900 transition-colors">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* =========================================================
            SECTION 4: Types Of Documents We Edit
            ========================================================= */}
        <section className="py-5 px-4 max-w-7xl mx-auto text-center bg-gray-50/50">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b36] mb-8">
            Types Of Documents We Edit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
            {[
              "Research manuscripts",
              "Thesis & dissertations",
              "Book chapters",
              "Academic textbooks",
              "Grants and funding proposals",
              "Systematic reviews & meta-analyses",
              "White papers and technical documents",
              "Reports, policy drafts, and educational materials"
            ].map((doc, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-2">
                <span className="text-[#008080] font-bold">➜</span>
                <span className="text-sm text-gray-700 font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 5: Meet Our Development Editing Experts
            ========================================================= */}
        <ExpertsSection
          heading="Meet Our Development Editing Experts"
          subheading="Our experienced development editors strengthen manuscript structure, logical flow, argument clarity, and overall research presentation to help prepare your work for publication."
          experts={experts}
        />

        {/* =========================================================
            EXPLORE SAMPLE WORK SECTION (Added right after ExpertsSection)
            ========================================================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Section Header */}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Explore Sample Work From Our Professional Development Editing Service
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              See how our expert editors help shape your manuscript&apos;s structure, strengthen your arguments, and ensure your content is coherent, compelling, and ready for publication in your target journal.
            </p>

            {/* Viewer Container Card */}
            <div className="mt-10 bg-white border border-slate-200 rounded-2xl shadow-lg p-4 sm:p-6 text-left relative">
              
              {/* Tabs */}
              <div className="flex space-x-2 border-b border-slate-200 pb-4 mb-4">
                <button
                  onClick={() => setActiveTab('Medicine')}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === 'Medicine'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Medicine
                </button>
              </div>

              {/* Document Viewer Mockup */}
              <div className="border border-slate-300 rounded-lg overflow-hidden bg-slate-900 shadow-inner">
                
                {/* Toolbar */}
                <div className="bg-slate-800 text-slate-300 px-4 py-2.5 flex items-center justify-between text-sm flex-wrap gap-2">
                  <div className="flex items-center space-x-3">
                    <button className="p-1.5 hover:bg-slate-700 rounded"><Menu size={18} /></button>
                    <span className="font-medium text-white truncate max-w-[150px] sm:max-w-xs">v1-Journal Selectio...</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-slate-700 rounded"><ChevronLeft size={16} /></button>
                    <span className="bg-slate-900 px-2.5 py-1 rounded text-xs font-mono text-white">1 / 1</span>
                    <button className="p-1 hover:bg-slate-700 rounded"><ChevronRight size={16} /></button>
                    <div className="h-4 w-[1px] bg-slate-700 mx-1"></div>
                    <button onClick={handleZoomOut} className="p-1.5 hover:bg-slate-700 rounded"><ZoomOut size={16} /></button>
                    <span className="text-xs font-mono">{zoomLevel}%</span>
                    <button onClick={handleZoomIn} className="p-1.5 hover:bg-slate-700 rounded"><ZoomIn size={16} /></button>
                    <button className="p-1.5 hover:bg-slate-700 rounded"><RotateCw size={16} /></button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 hover:bg-slate-700 rounded"><Undo size={16} /></button>
                    <button className="p-1.5 hover:bg-slate-700 rounded"><Redo size={16} /></button>
                    <div className="h-4 w-[1px] bg-slate-700 mx-1"></div>
                    <button onClick={handleDownload} className="p-1.5 hover:bg-slate-700 rounded" title="Download Document"><Download size={16} /></button>
                    <button onClick={handlePrint} className="p-1.5 hover:bg-slate-700 rounded" title="Print Document"><Printer size={16} /></button>
                    <button className="p-1.5 hover:bg-slate-700 rounded"><MoreVertical size={16} /></button>
                  </div>
                </div>

                {/* Viewer Workspace */}
                <div className="flex bg-slate-900 h-[480px] overflow-hidden">
                  
                  {/* Thumbnail Sidebar */}
                  <div className="w-48 bg-slate-950 p-4 border-r border-slate-800 flex flex-col items-center justify-start hidden sm:flex">
                    <div className="bg-white p-2 rounded shadow border border-slate-700 w-28 h-36 flex flex-col items-center justify-between">
                      <div className="w-full h-full bg-slate-100 flex flex-col p-1 space-y-1">
                        <div className="w-full h-2 bg-slate-300 rounded"></div>
                        <div className="w-3/4 h-1.5 bg-slate-200 rounded"></div>
                        <div className="w-full h-1.5 bg-slate-200 rounded"></div>
                        <div className="w-5/6 h-1.5 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 mt-2 font-mono">1</span>
                  </div>

                  {/* Main Document Text Area with Real Embedded PDF or Fallback */}
                  <div className="flex-1 bg-white relative overflow-hidden flex flex-col">
                    <iframe
                      src={`${documentPath}#zoom=${zoomLevel}`}
                      className="w-full h-full border-0"
                      title="Sample Work Document"
                    />
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Floating WhatsApp Button */}
          <div className="fixed bottom-6 left-6 z-50">
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={28} fill="white" />
            </a>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: Explore Sample Work & Packages
            ========================================================= */}
        <CommonPackages
          title="Development Editing Services – Our Packages"
          description="Explore our comprehensive Development Editing packages designed to strengthen your manuscript's structure, flow, and overall narrative quality. Each package is tailored to address the unique needs of authors, ensuring clarity, coherence, and impactful presentation at every stage of writing."
          packages={developmentEditingPackages}
        />
        <GetFreeQuoteButton />

      </main>
    </>
  );
}