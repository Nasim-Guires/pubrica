"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// --- Types ---
interface ServiceCard {
  id: string;
  title: string;
  items: string[];
}

interface PackageCard {
  id: string;
  title: string;
  subtitle: string;
  titleColor: string;
  borderColor: string;
  bodyBgColor: string;
  bodyTextColor?: string;
  description?: string;
  section1Title?: string;
  section1Items?: string[];
  section2Title?: string;
  section2Items?: string[];
  toolsUsed?: string;
  weFollow?: string;
  weProvide?: string;
  weGuarantee?: string;
}

interface TherapeuticArea {
  id: string;
  name: string;
  iconSrc: string;
}

interface DisciplineCard {
  id: string;
  title: string;
  description: string;
}

// --- Data Definitions ---

// 1. Research & Academic Services
const PUBLICATION_SERVICES: ServiceCard[] = [
  {
    id: 'manuscript-dev',
    title: 'Manuscript Development',
    items: [
      'Scientific Writing & Ghost-writing',
      'Manuscript Editing (Substantive, Copy, and Line Editing)',
      'Manuscript Formatting (per journal guidelines)',
      'Graphical Abstracts & Infographics',
    ],
  },
  {
    id: 'journal-select',
    title: 'Journal Selection & Submission Support',
    items: [
      'Journal Identification & Matchmaking',
      'Scope & Impact Factor Evaluation',
      'Cover Letter Preparation',
      'Submission Portal Assistance',
    ],
  },
  {
    id: 'pre-submission',
    title: 'Pre-Submission Enhancements',
    items: [
      'Peer Review (Pre-submission Review)',
      'Language Polishing',
      'Plagiarism Checking & Removal',
      'Statistical Review & Data Validation',
    ],
  },
  {
    id: 'post-submission',
    title: 'Post-Submission Support',
    items: [
      'Rebuttal Letter Writing',
      'Response to Reviewers',
      'Manuscript Revision Support',
      'Resubmission to Alternative Journals',
    ],
  },
  {
    id: 'publishing-models',
    title: 'Publishing Models Assistance',
    items: [
      'Open Access Publishing Guidance',
      'Hybrid Journal Selection',
      'Assistance with APC Payments',
    ],
  },
  {
    id: 'indexing-archiving',
    title: 'Indexing & Archiving Services',
    items: [
      'DOI Assignment',
      'Assistance with PubMed, Scopus, WoS',
      'Institutional Repository Submission',
    ],
  },
  {
    id: 'ethical-compliance',
    title: 'Ethical Compliance & Quality Assurance',
    items: [
      'COPE Compliance Checks',
      'Authorship & Conflict of Interest Guidelines',
      'Predatory Journal Avoidance',
    ],
  },
];

const UNIVERSITY_SERVICES: ServiceCard[] = [
  {
    id: 'thesis-dissertation',
    title: 'Thesis & Dissertation Services',
    items: [
      'Thesis Writing Assistance',
      'Dissertation Editing',
      'Proposal Development',
      'Plagiarism Check & Correction',
      'Defense Presentation Preparation',
    ],
  },
  {
    id: 'research-support',
    title: 'Research Support Services',
    items: [
      'Literature Review Writing',
      'Research Design & Methodology Consulting',
      'Questionnaire & Tool Development',
      'Data Collection and Analysis',
      'SPSS, R, NVivo, STATA Support',
    ],
  },
  {
    id: 'department-faculty',
    title: 'Department & Faculty Services',
    items: [
      'Grant Proposal Writing',
      'Faculty Research Support',
      'Institutional Publication Planning',
      'Curriculum Development Consultation',
    ],
  },
];

// 2. Packages (Exact design & color themes from screenshots)
const PACKAGES_DATA: PackageCard[] = [
  {
    id: 'manuscript-writing',
    title: 'Manuscript Writing',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#0b3b36]',
    borderColor: 'border-[#0b3b36]',
    bodyBgColor: 'bg-[#cfdedd]',
    bodyTextColor: 'text-slate-800',
    description: 'Custom research manuscript development tailored for journal submission.',
    section1Title: 'Services include:',
    section1Items: [
      'Original research articles',
      'Review articles',
      'Case reports & technical notes',
      'Abstract writing',
      'Graphical & text summaries',
    ],
    section2Title: 'What you get:',
    section2Items: [
      'Structured formatting (IMRaD)',
      'Journal guideline compliance',
      'Plagiarism-checked, ready-to-submit files',
    ],
  },
  {
    id: 'literature-review',
    title: 'Literature Review Writing',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#8e52a2]',
    borderColor: 'border-[#8e52a2]',
    bodyBgColor: 'bg-[#dfcce6]',
    bodyTextColor: 'text-slate-800',
    description: 'In-depth synthesis and critical evaluation of existing research.',
    section1Title: 'Types we cover:',
    section1Items: [
      'Narrative Literature Reviews',
      'Thematic Reviews',
      'Historical or Conceptual Reviews',
    ],
    section2Title: 'Features:',
    section2Items: [
      'Up-to-date sources',
      'Organized thematic flow',
      'Gap identification for new research',
    ],
  },
  {
    id: 'systematic-review',
    title: 'Systematic Review & Meta-Analysis',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#8c653a]',
    borderColor: 'border-[#8c653a]',
    bodyBgColor: 'bg-[#d8c09a]',
    bodyTextColor: 'text-slate-800',
    description: 'Rigorous, protocol-based review services using PRISMA and Cochrane standards.',
    section1Title: 'Support areas:',
    section1Items: [
      'Protocol writing (PROSPERO registration)',
      'Database search strategy (PubMed, Scopus, Embase)',
      'Data extraction & quality appraisal',
      'Meta-analysis with statistical interpretation',
    ],
    toolsUsed: 'RevMan, Rayyan, EndNote, NVivo, STATA/SPSS',
  },
  {
    id: 'thesis-support',
    title: 'Thesis & Dissertation Support',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#2b4c7e]',
    borderColor: 'border-[#2b4c7e]',
    bodyBgColor: 'bg-[#e4ebf8]',
    bodyTextColor: 'text-slate-800',
    description: 'Comprehensive support for master\'s and PhD research work.',
    section1Title: 'Services include:',
    section1Items: [
      'Full or chapter-wise thesis writing',
      'Proposal & synopsis development',
      'Methodology design',
      'Editing & formatting as per university guidelines',
      'defence presentation slides & coaching',
    ],
    weFollow: 'APA, MLA, Harvard, Chicago, Vancouver styles',
  },
  {
    id: 'ai-ml',
    title: 'AI and Machine Learning Service',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#d9532f]',
    borderColor: 'border-[#d9532f]',
    bodyBgColor: 'bg-[#f49371]',
    bodyTextColor: 'text-slate-900',
    description: 'Sophisticated solutions that use data-driven intelligence and automation.',
    section1Title: 'Services offered are:',
    section1Items: [
      'Predictive modelling',
      'Natural Language Processing (NLP)',
      'Image analysis (e.g., regarding radiology or pathology)',
    ],
    weProvide: 'Tailored models, scalable algorithms, and domain specific AI solutions to use in research or industry applications.',
  },
  {
    id: 'data-science',
    title: 'Data Science & Stats',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#21a8b8]',
    borderColor: 'border-[#21a8b8]',
    bodyBgColor: 'bg-[#98e2ea]',
    bodyTextColor: 'text-slate-900',
    description: 'An in-depth analysis to aid in data-driven decisions, and support research.',
    section1Title: 'Some offerings include:',
    section1Items: [
      'Exploratory data analysis (EDA)',
      'Hypothesis testing',
      'Visualization & dashboards',
    ],
    toolsUsed: 'Python, R, SPSS, STATA, Tableau',
    weProvide: 'Accurate interpretations, clear visuals, and useful insights – all customized to meet your goals.',
  },
  {
    id: 'data-collection',
    title: 'Data Collection Services',
    subtitle: 'HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW',
    titleColor: 'text-[#e25353]',
    borderColor: 'border-[#e25353]',
    bodyBgColor: 'bg-[#f79999]',
    bodyTextColor: 'text-slate-900',
    description: 'Comprehensive options for guaranteed quality in sourcing and collecting data.',
    section1Title: 'Services include:',
    section1Items: [
      'Primary and secondary data collection',
      'Web scraping and API integration',
      'Survey design and implementation (Qualtrics, Google Forms, etc.)',
    ],
    weGuarantee: 'Accuracy and ethically focused, and customized approaches for all academic and professional purposes.',
  },
];

// 3. Therapeutic Areas
const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  { id: 'oncology', name: 'Oncology', iconSrc: '/images/medical-writing/Oncology-.png' },
  { id: 'cardiology', name: 'Cardiology', iconSrc: '/images/medical-writing/Cardiology.png' },
  { id: 'neurology', name: 'Neurology', iconSrc: '/images/medical-writing/Neurology.png' },
  { id: 'paediatrics', name: 'Paediatrics', iconSrc: '/images/medical-writing/Paediatrics.png' },
  { id: 'immunology', name: 'Immunology', iconSrc: '/images/medical-writing/Immunology.png' },
];

// 4. Disciplines Supported
const DISCIPLINES: DisciplineCard[] = [
  {
    id: 'life-sciences',
    title: 'Life Sciences',
    description: 'We help authors with their complex life sciences research, compliance to ethical standards, and clarity in writing ranging from molecular biology to genetics.',
  },
  {
    id: 'medical-health',
    title: 'Medical & Health Sciences',
    description: 'We offer author services for authors completing clinical research, systematic reviews, case reports, and regulatory submissions that are consistent with the world\'s regulatory bodies.',
  },
  {
    id: 'engineering-tech',
    title: 'Engineering & Technology',
    description: 'We bring technical rigour and accuracy, and academic honesty to the subjects of electrical, mechanical, civil and computer engineering disciplines.',
  },
  {
    id: 'social-sciences',
    title: 'Social Sciences',
    description: 'We support authors with disciplines in social sciences subjects like psychology, sociology, anthropology, and education by structuring their research clearly and accurately while adhering to academic referencing standards.',
  },
  {
    id: 'business-management',
    title: 'Business & Management',
    description: 'We support management, finance, marketing, and entrepreneurship researchers in completing academic writing services that meet journals requirements.',
  },
  {
    id: 'humanities',
    title: 'Humanities',
    description: 'We provide humanities-focused writing that is thoughtful, academic, and well-referenced for journals with various subjects like philosophy, literature, history, and the arts.',
  },
];

// --- Main Component ---
export const ScientificServicesAndPackages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'publication' | 'university'>('publication');

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ================= SECTION 1: RESEARCH & ACADEMIC SERVICES ================= */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b36]">
              Our Research and Academic Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
              We understand the importance of academic writing which involves submitting to high level of academic standards.
            </p>

            {/* Tab Pill Switcher */}
            <div className="pt-4 flex justify-center">
              <div className="inline-flex bg-[#0b3b36] p-1 rounded-full shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveTab('publication')}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeTab === 'publication'
                      ? 'bg-[#155e54] text-white shadow-sm'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Publication-Related Academic Service
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('university')}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeTab === 'university'
                      ? 'bg-[#155e54] text-white shadow-sm'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  University Related Academic Services
                </button>
              </div>
            </div>
          </div>

          {/* Service Cards Grid - Hover turns dark */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(activeTab === 'publication' ? PUBLICATION_SERVICES : UNIVERSITY_SERVICES).map((service) => (
              <div
                key={service.id}
                className="
                  group bg-white p-6 rounded-sm border border-slate-200/70 shadow-sm
                  transition-all duration-300 cursor-pointer flex flex-col justify-between
                  hover:bg-[#0f2421] hover:text-white hover:shadow-xl
                "
              >
                <div className="space-y-4">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-teal-400 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: OUR PACKAGES (EXACT MATCH TO SCREENSHOTS - NO HOVER EFFECT) ================= */}
        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b36]">
              Our Packages
            </h2>
          </div>

          {/* Row 1: Top 4 Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PACKAGES_DATA.slice(0, 4).map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-sm shadow-md border-t-8 ${pkg.borderColor} overflow-hidden flex flex-col`}
              >
                {/* White Header */}
                <div className="p-5 border-b border-slate-100 bg-white">
                  <h3 className={`text-lg font-bold leading-tight ${pkg.titleColor}`}>
                    {pkg.title}
                  </h3>
                  <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-1">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Colored Body */}
                <div className={`p-5 flex-1 flex flex-col space-y-4 text-xs ${pkg.bodyBgColor} ${pkg.bodyTextColor}`}>
                  {pkg.description && (
                    <p className="leading-relaxed font-semibold">
                      {pkg.description}
                    </p>
                  )}

                  {/* Section 1 */}
                  {pkg.section1Title && (
                    <div className="space-y-1.5">
                      <p className="font-bold">
                        {pkg.section1Title}
                      </p>
                      {pkg.section1Items && (
                        <ul className="space-y-1 pl-3 list-disc marker:text-slate-700">
                          {pkg.section1Items.map((item, i) => (
                            <li key={i} className="leading-tight">
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Section 2 */}
                  {pkg.section2Title && (
                    <div className="space-y-1.5">
                      <p className="font-bold">
                        {pkg.section2Title}
                      </p>
                      {pkg.section2Items && (
                        <ul className="space-y-1 pl-3 list-disc marker:text-slate-700">
                          {pkg.section2Items.map((item, i) => (
                            <li key={i} className="leading-tight">
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Footer metadata */}
                  {pkg.toolsUsed && (
                    <div className="pt-2">
                      <p className="font-bold">Tools used:</p>
                      <p className="leading-snug">{pkg.toolsUsed}</p>
                    </div>
                  )}

                  {pkg.weFollow && (
                    <div className="pt-2">
                      <p className="font-bold">We follow:</p>
                      <p className="leading-snug">{pkg.weFollow}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Bottom 3 Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {PACKAGES_DATA.slice(4, 7).map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-sm shadow-md border-t-8 ${pkg.borderColor} overflow-hidden flex flex-col`}
              >
                {/* White Header */}
                <div className="p-5 border-b border-slate-100 bg-white">
                  <h3 className={`text-lg font-bold leading-tight ${pkg.titleColor}`}>
                    {pkg.title}
                  </h3>
                  <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-1">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Colored Body */}
                <div className={`p-5 flex-1 flex flex-col space-y-4 text-xs ${pkg.bodyBgColor} ${pkg.bodyTextColor}`}>
                  {pkg.description && (
                    <p className="leading-relaxed font-semibold">
                      {pkg.description}
                    </p>
                  )}

                  {/* Section 1 */}
                  {pkg.section1Title && (
                    <div className="space-y-1.5">
                      <p className="font-bold">
                        {pkg.section1Title}
                      </p>
                      {pkg.section1Items && (
                        <ul className="space-y-1 pl-3 list-disc marker:text-slate-800">
                          {pkg.section1Items.map((item, i) => (
                            <li key={i} className="leading-tight">
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tools / Additional Footers */}
                  {pkg.toolsUsed && (
                    <div className="pt-1">
                      <p className="font-bold">More tools we have used:</p>
                      <p className="leading-snug">{pkg.toolsUsed}</p>
                    </div>
                  )}

                  {pkg.weProvide && (
                    <div className="pt-1">
                      <p className="font-bold">We provide:</p>
                      <p className="leading-snug">{pkg.weProvide}</p>
                    </div>
                  )}

                  {pkg.weGuarantee && (
                    <div className="pt-1">
                      <p className="font-bold">We guarantee:</p>
                      <p className="leading-snug">{pkg.weGuarantee}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: THERAPEUTIC AREAS WE COVER ================= */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0b3b36]">
              Our Therapeutic Areas We Cover
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {THERAPEUTIC_AREAS.map((area) => {
              return (
                <div 
                  key={area.id} 
                  className="bg-white p-6 rounded-sm border border-slate-200/60 shadow-xs flex flex-col items-center justify-center space-y-3 hover:shadow-md transition-shadow"
                >
                  <Image src={area.iconSrc} alt={area.name} width={40} height={40} className="object-contain" />
                  <span className="font-bold text-xs text-slate-800">
                    {area.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SECTION 4: DISCIPLINES WE SUPPORT ================= */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#0b3b36]">
              Disciplines We Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
              With our scientific and academic writing services, we work across many disciplines. Whether you conduct research, are an academic or a practitioner in a discipline or profession, we have the subject expertise to ensure your writing is factually correct, powerful, and ready for publication.
            </p>
            <p className="text-xs font-bold text-slate-800 pt-1">
              Look at our services by subject area:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DISCIPLINES.map((disc) => (
              <div 
                key={disc.id}
                className="
                  group relative bg-white p-6 rounded-sm border border-slate-200/70 shadow-sm
                  transition-all duration-300 cursor-pointer flex flex-col space-y-3
                  hover:bg-[#0f2421] hover:text-white hover:shadow-xl
                "
              >
                {/* Left Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0b3b36] group-hover:bg-teal-400 transition-colors"></div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-white transition-colors">
                  {disc.title}
                </h3>
                <p className="text-xs text-slate-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                  {disc.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ScientificServicesAndPackages;