"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  ChevronRight, 
  FileText, 
  CheckCircle, 
  Layers, 
  FileCheck, 
  Briefcase,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

// Accordion Interface Data mapping text precisely from your images
const CONSULTING_SERVICES = [
  "Research Support for Researchers and Authors",
  "Medical and Scientific Writing for Researchers, Authors, and for Regulatory Submissions",
  "Regulatory Writing and Consulting",
  "Scientific Publication Support Services for Researchers and Authors",
  "Publishing Support Services for Publishers",
  "Health Economics and Outcomes Research (HEOR)",
  "New Product Discovery and Development",
  "Continuing Medical Education (CME) Content Development",
  "Branding Marketing & Communication content Development",
  "Patient Education",
  "Education Content Development",
  "Translation and Localization",
  "Ethics And Compliance",
  "Consulting Services",
  "Coding And Algorithm Development"
];

const NAV_ITEMS = [
  { label: "Our Editors", href: "/about/our-editors/" },
  { label: "Editor Profile", href: "/scientific-editor-profile" },
  { label: "Editor Speak", href: "/editor-speak" },
  { label: "Subject Area", href: "/subject-matter-experts/" },
  { label: "Therapeutic Expertise", href: "/therapeutic-expertise/" },
  { label: "Global Partners and Membership", href: "/strategic-partnerships-memberships/" },
];

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <header aria-label="Breadcrumb Navigation" className="bg-white py-2">
        <Breadcrumb items={[{ label: 'About Us', href: '/about' }]} />
      </header>

      <main className="bg-white min-h-screen text-gray-800 antialiased selection:bg-emerald-600 selection:text-white">
        
        {/* ========================================================================= */}
        {/* SECTION 1: CORE PROFILE HERO SPLIT LAYOUT                                 */}
        {/* ========================================================================= */}
        <section className="py-16 bg-white font-sans" aria-label="Company Overview">
          <Container className="max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Side: Medical Lab Microscope Narrative Image Mock */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/4] w-full rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shadow-xs">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-gray-400 bg-gray-50">
                    <span className="text-emerald-800 font-semibold text-xs uppercase tracking-widest mb-2">Pubrica Media Vector</span>
                    <span className="text-xs max-w-[200px] text-gray-500 font-light">Female researcher working with laboratory high-precision microscope setup</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Exact Content Transcription */}
              <div className="lg:col-span-7 flex flex-col">
                <span className="text-emerald-800 font-bold underline decoration-emerald-600 decoration-2 underline-offset-4 text-sm mb-4 tracking-wide font-display">
                  About Us
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#11231f] leading-tight mb-6 font-display">
                  With over 50 years of expertise in Life sciences, Healthcare and Medical Scientific Research, Pubrica excels in analyses, development, Publication and Communication.
                </h1>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                  At Pubrica, we transform your concepts into incisive reports with our comprehensive writing services. Our global team of experts supports industries, institutions, authors, researchers, and publishers in new product or process development, publishing and publications, branding, and educational content development. We have collaborated with researchers worldwide, enhancing the communication of their research and helping them achieve successful publication.
                </p>

                {/* Sub Vision & Mission Layout blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="p-2 h-10 w-10 border border-dashed border-emerald-700 text-emerald-800 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#11231f] font-display">Our Vision</h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                        To be the global leader in scientific research support and communication, driving innovation and excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 h-10 w-10 border border-dashed border-emerald-700 text-emerald-800 rounded-full flex items-center justify-center shrink-0">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#11231f] font-display">Our Mision</h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                        To empower researchers and institutions with expert services that streamline research development, publication, and communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: WHY CHOOSE PUBRICA MATRICES (DEEP EMERALD BLOCK)               */}
        {/* ========================================================================= */}
        <section className="bg-[#11231f] py-16 text-white font-sans" aria-label="Key Capabilities">
          <Container className="max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Navigation List Container Box */}
              <div className="lg:col-span-4 bg-white rounded-xs p-2 text-[#11231f] shadow-xl">
                <nav className="divide-y divide-gray-100 text-xs font-bold font-sans tracking-wide uppercase">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`flex items-center justify-between p-4 transition-colors group ${
                          isActive ? "bg-gray-100 text-[#1b8c6e]" : "bg-white hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 text-white bg-black rounded-full p-0.5 group-hover:scale-110 transition-transform" />
                          <span>{item.label} &gt;&gt;</span>
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Right Column Core Statistics Grid Layout */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="text-center lg:text-left mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-white mb-1">
                    Why Choose Pubrica ?
                  </h2>
                  <div className="h-0.5 w-20 bg-emerald-500 mx-auto lg:mx-0 my-3"></div>
                  <p className="text-xs md:text-sm text-gray-300 max-w-2xl font-light leading-relaxed mt-2">
                    Our dedicated team is ready to join your efforts across various diagnostic areas. With scientists helping scientists, we ensure collaborative excellence and innovation.
                  </p>
                </div>

                {/* Counter Metric Row blocks */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mt-8 pt-4 border-t border-emerald-950/40 text-left">
                  <div className="flex items-start gap-3">
                    <FileText className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">850,000 +</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Papers edited</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">260,000+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Authors served</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">1200+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Subjects covered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:col-start-2">
                    <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">2000+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">16+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">years of experience</p>
                    </div>
                  </div>
                </div>

                {/* Text Context Link Block */}
                <div className="mt-10 text-center lg:text-left text-xs font-medium tracking-wide">
                  To know more about purica research services{' '}
                  <a href="#contact" className="text-sky-400 underline hover:text-sky-300 transition-colors ml-1">
                    Reach Us
                  </a>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: STREAMLINED STEPPING WORKFLOW (SOFT BLUE BLOCK)                */}
        {/* ========================================================================= */}
        <section className="bg-[#ebf8f6] py-16 font-sans text-[#11231f]" aria-label="Our Operational Process">
          <Container className="max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-extrabold font-display">Our Working Process</h2>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-light">
              At Pubrica, we follow a streamlined process to ensure the highest quality of service:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 text-center max-w-6xl mx-auto">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-sky-400 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Addressing your queries</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  We begin by thoroughly understanding and addressing all your questions and concerns.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <FileText className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Confirmation of your Order</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Once your requirements are clear, we confirm your order and outline the project details.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Assigning your Order</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Your project is assigned to the most suitable expert from our team.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Review in Progress</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Our team rigorously reviews and works on your project, ensuring accuracy and quality.
                </p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Delivering the Polished Paper</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Finally, we deliver a meticulously polished paper, ready for your use or publication.
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: NARRATIVE IN-DEPTH VALUES & PILLARS                            */}
        {/* ========================================================================= */}
        <section className="py-16 bg-white font-sans text-gray-800" aria-label="Service Modalities">
          <Container className="max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column Image Component Placeholder */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-6">
                <div className="border border-gray-200 rounded-xs p-2 bg-gray-50 shadow-xs">
                  <div className="bg-gray-200 aspect-square w-full flex flex-col items-center justify-center text-gray-400 font-sans p-6 text-center rounded-xs">
                    <span className="text-xs uppercase font-bold tracking-wide text-gray-500 mb-1">[ Quality Assurance Visual ]</span>
                    <span className="text-[11px] font-light text-gray-400">Compliance &amp; Scientific Review Process Layout</span>
                  </div>
                </div>

                {/* Sub Narrative Column Block: Ethical Standards */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex gap-3 mb-2">
                    <div className="h-2 w-6 bg-emerald-800 mt-2 shrink-0 rounded-xs"></div>
                    <h4 className="text-sm font-bold text-[#11231f] uppercase tracking-wide font-display">
                      Ethical Standards:
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-light pl-9">
                    Pubrica strictly adheres to the ISMPP Code of Ethics in all our medical publication services. We follow Good Publication Practice (GPP) and the ethical principles outlined in the World Medical Association Declaration of Helsinki. Additionally, we comply with the Principles on Conduct of Clinical Trials and Communication of Clinical Trial Results (PhRMA), Joint Position on the Publication of Clinical Trial Results in Scientific Literature (IFPMA/EFPIA/JPMA/PhRMA), the EQUATOR Network, and Good Practices for Outcomes Research (ISPOR).
                  </p>
                </div>

                {/* Sub Narrative Column Block: Efficient Process */}
                <div className="pt-2">
                  <div className="flex gap-3 mb-2">
                    <div className="h-2 w-6 bg-emerald-800 mt-2 shrink-0 rounded-xs"></div>
                    <h4 className="text-sm font-bold text-[#11231f] uppercase tracking-wide font-display">
                      Efficient Process:
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-light pl-9">
                    Our streamlined process saves you time and money, making publishing in journals or obtaining regulatory drug approvals easy and hassle-free. Choose Pubrica for a seamless, high-quality, and ethically sound research and publication experience.
                  </p>
                </div>
              </div>

              {/* Right Column Value Framework Blocks */}
              <div className="lg:col-span-7 space-y-8 lg:pl-4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#11231f] font-display mb-2">Why Choose Pubrica?</h3>
                  <p className="text-xs text-gray-500 font-light">
                    Pubrica stands out as a leader in scientific research support and communication, offering unparalleled expertise and quality. Here's why you should choose us:
                  </p>
                </div>

                {/* Pillar 1 */}
                <div className="flex gap-4">
                  <div className="p-2 h-9 w-9 bg-emerald-50 text-emerald-800 rounded-sm flex items-center justify-center shrink-0 mt-1">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#11231f] font-display">Expert Team:</h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-light">
                      Our team of certified professionals, including the American Medical Writers Association (AMWA) and the European Medical Writers Association (EMWA) certified writers, ensures the highest standards in medical writing and research support.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex gap-4">
                  <div className="p-2 h-9 w-9 bg-emerald-50 text-emerald-800 rounded-sm flex items-center justify-center shrink-0 mt-1">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#11231f] font-display">Comprehensive Compliance:</h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-light">
                      We guarantee 100% quality assurance by adhering to guidelines set by the International Conference on Harmonization (ICH), Conformité Européenne (CE), EU General Data Protection Regulation (GDPR), Food and Drug Administration Amendment Act (FDAAA), Foreign Corrupt Practices Act (FCPA), Good Clinical Practice (GCP), and Clinical Data Interchange Standards Consortium (CDISC), among others.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex gap-4">
                  <div className="p-2 h-9 w-9 bg-emerald-50 text-emerald-800 rounded-sm flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#11231f] font-display">Comprehensive Support:</h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-light">
                      Our team includes PhD-level Subject-Matter Experts (SMEs) across life sciences, computer science, medicine, and technology. These PhD-level experts with specialized therapeutic knowledge are available at every stage of your project. Our Scientific Writing &amp; Publishing team is dedicated to aiding you in publishing in journals or obtaining regulatory drug approvals, making the process efficient and cost-effective.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: ACCORDION GRID COMPONENT LIST (LIGHT GRAY BACKGROUND)          */}
        {/* ========================================================================= */}
        <section className="bg-gray-50 py-16 font-sans border-t border-gray-100" aria-label="Outsourcing Domains">
          <Container className="max-w-6xl px-4">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#11231f] font-display">
                Our Generics Contract Research &amp; Development Consulting &amp; Outsourcing Services
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1.5 font-light leading-relaxed max-w-5xl">
                Pubrica provides a wide array of services targeting various aspects of research, development, publication, and communication across multiple industries:
              </p>
            </div>

            {/* Accordion List Component mapping from layout array data */}
            <div className="space-y-2 max-w-5xl mt-6">
              {CONSULTING_SERVICES.map((title, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-gray-200/80 rounded-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left px-5 py-3.5 flex items-center justify-between text-xs md:text-sm font-semibold text-gray-800 hover:text-emerald-800 transition-colors bg-white focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 tracking-wide leading-snug">{title}</span>
                      <span className="shrink-0 text-emerald-700">
                        {isOpen ? <Minus className="h-4 w-4 stroke-[2.5]" /> : <Plus className="h-4 w-4 stroke-[2.5]" />}
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-gray-500 leading-relaxed font-light border-t border-gray-50 bg-gray-50/20">
                        Pubrica delivers custom development guidelines, metrics validation tools, and submission auditing for {title.toLowerCase()}. Contact our technical alignment coordinators to structure clear delivery metrics matching global regulatory demands.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

      </main>
    </>
  );
}