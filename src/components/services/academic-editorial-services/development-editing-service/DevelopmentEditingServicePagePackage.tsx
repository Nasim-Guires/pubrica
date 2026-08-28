import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

export default function DevelopmentEditingServicePagePackage() {
  const steps = [
    {
      step: 1,
      title: 'INITIAL ASSESSMENT',
      imageSrc:
        '/images/academic-editorial-services/development-editing-service/Initial-Assessment.png',
      alt: 'Initial Assessment',
      description:
        'We begin with a thorough evaluation of your manuscript to identify areas requiring improvement, such as inconsistencies, redundancies, or gaps in logic. This initial assessment forms the basis of a customized editing plan.',
    },
    {
      step: 2,
      title: 'CONTENT ENHANCEMENT',
      imageSrc:
        '/images/academic-editorial-services/development-editing-service/Content-Enhancement.png',
      alt: 'Content Enhancement',
      description:
        "Our editors focus on strengthening the manuscript's core message. They restructure sections, clarify hypotheses, and refine arguments to ensure that your research is presented logically and persuasively. Figures, tables, and data presentation are reviewed for accuracy and clarity.",
    },
    {
      step: 3,
      title: 'LANGUAGE AND STYLE REFINEMENT',
      imageSrc:
        '/images/academic-editorial-services/development-editing-service/Language-and-Style-Refinement.png',
      alt: 'Language and Style Refinement',
      description:
        'While development editing prioritizes content and structure, language quality is also crucial. Editors polish the manuscript for grammatical accuracy, sentence construction, readability, and adherence to academic style without altering your voice.',
    },
    {
      step: 4,
      title: 'DETAILED FEEDBACK AND QUERIES',
      imageSrc:
        '/images/academic-editorial-services/development-editing-service/Detailed-Feedback-and-Queries.png',
      alt: 'Detailed Feedback and Queries',
      description:
        'Our editors provide a comprehensive report highlighting the changes made, suggestions for improvement, and queries that require your input. This transparent process encourages collaboration and ensures your vision remains central to the manuscript.',
    },
    {
      step: 5,
      title: 'FINAL REVIEW AND APPROVAL',
      imageSrc:
        '/images/academic-editorial-services/development-editing-service/Final-Review-and-Approval.png',
      alt: 'Final Review and Approval',
      description:
        "After addressing the editor's feedback, we conduct a final review to ensure the manuscript is coherent, concise, and ready for submission. By the end of this process, your research is transformed into a polished document that communicates your findings effectively and persuasively.",
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
        <section className="py-6 px-4 max-w-7xl mx-auto text-center bg-gray-50/50">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b36] mb-2">
            How Our Development Editing Service Works
          </h2>
          <p className="text-gray-600 mb-12 text-sm md:text-base">
            Our Step-by-Step Process
          </p>

          {/* 5 Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left items-stretch">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 group hover:bg-black hover:border-black relative flex flex-col justify-start"
              >
                {/* Step Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center font-bold text-sm mb-4 shrink-0">
                  {item.step}
                </div>

                {/* Image Placeholder Container */}
                <div className="relative w-full h-16 mb-4 shrink-0">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm lg:text-base mb-2 text-[#1b3b36] group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
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
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-100 rounded-xl shadow-md transition-all duration-300 group hover:bg-black hover:border-black flex items-center space-x-4 min-h-[120px]"
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
                  <p className="text-xs md:text-sm text-gray-700 leading-snug group-hover:text-white transition-colors duration-300 font-normal">
                    {item.text}
                  </p>
                </div>
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
        <section className="py-6 px-4 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b36] mb-8">
            Meet Our Development Editing Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Aarav Mehta",
                degree: "PhD in Life Sciences",
                institute: "Indian Institute of Technology, India",
                exp: "10+ Years of Experience",
                papers: "950+ Papers Edited",
                photo: "/images/academic-editorial-services/development-editing-service/Dr.-Aarav-Mehta.png",
              },
              {
                name: "Dr. Priya Rangan",
                degree: "PhD in Biochemistry",
                institute: "University of Delhi, Delhi, India",
                exp: "8+ Years of Experience",
                papers: "740+ Papers Edited",
                photo: "/images/academic-editorial-services/development-editing-service/Dr.-Priya-Rangan.png",
              },
              {
                name: "Dr. Rohan Verma",
                degree: "PhD in Neuroscience",
                institute: "All India Institute of Medical Sciences, India",
                exp: "9+ Years of Experience",
                papers: "850+ Papers Edited",
                photo: "/images/academic-editorial-services/development-editing-service/Dr.-Rohan-Verma.png",
              }
            ].map((expert, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
                <div className="relative w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image src={expert.photo} alt={expert.name} fill className="object-cover" sizes="64px" />
                </div>
                <h3 className="font-bold text-base text-[#1b3b36]">{expert.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{expert.degree}</p>
                <p className="text-xs text-gray-500 mb-4">{expert.institute}</p>
                <div className="text-xs font-semibold text-gray-700 border-t pt-3 mb-4">
                  {expert.exp} | {expert.papers}
                </div>
                <Link href="/about-us/our-editors" className="text-xs text-[#008080] font-bold hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 6: Explore Sample Work & Packages
            ========================================================= */}
        <section className="py-6 px-4 max-w-7xl mx-auto text-center">
          {/* Header Titles */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#1b3b36] mb-3">
            Development Editing Services – Our Packages
          </h3>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto mb-12">
            Explore our comprehensive Development Editing packages designed to strengthen your manuscript's structure, flow, and overall narrative quality. Each package is tailored to address the unique needs of authors, ensuring clarity, coherence, and impactful presentation at every stage of writing.
          </p>

          {/* 3 Pricing / Service Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">

            {/* Card 1: Standard Development */}
            <div className="bg-[#c8d6d6] rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200/50">
              {/* Header */}
              <div className="bg-white p-5 border-b border-gray-100 flex items-center space-x-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/publication-support/poster-preparation/S.png"
                    alt="Standard"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-xl text-[#1b3b36]">
                  Standard Development
                </h4>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-gray-800">
                <div className="space-y-6">
                  {/* Ideal For */}
                  <div className="flex items-start space-x-3">
                    <span className="text-black text-lg leading-none mt-0.5">➔</span>
                    <p className="text-sm font-semibold leading-snug">
                      Ideal For: <span className="font-normal">Early drafts and manuscripts needing structural guidance.</span>
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-black text-lg leading-none">➔</span>
                      <p className="text-sm font-bold">Includes:</p>
                    </div>
                    <ul className="pl-8 space-y-3 text-xs md:text-sm font-medium text-gray-800 leading-relaxed">
                      <li>Comprehensive review of manuscript structure and organization</li>
                      <li>Clarity and flow improvements</li>
                      <li>Identification of gaps in argument or logic</li>
                      <li>Suggestions for paragraph and sentence-level enhancements</li>
                      <li>Feedback on readability and coherence</li>
                    </ul>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-center space-x-3 pt-8 mt-6">
                  <span className="text-black text-lg leading-none">➔</span>
                  <p className="text-sm font-bold text-gray-900">
                    Turnaround : <span className="font-semibold">7–10 business days</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Advanced Development */}
            <div className="bg-[#ccaacb] rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200/50">
              {/* Header */}
              <div className="bg-white p-5 border-b border-gray-100 flex items-center space-x-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/publication-support/peer-review-pre-submission/advanced.webp"
                    alt="Advanced"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-xl text-[#7a4988]">
                  Advanced Development
                </h4>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-gray-800">
                <div className="space-y-6">
                  {/* Ideal For */}
                  <div className="flex items-start space-x-3">
                    <span className="text-black text-lg leading-none mt-0.5">➔</span>
                    <p className="text-sm font-semibold leading-snug">
                      Ideal For: <span className="font-normal">Manuscripts with strong content that require detailed refinement.</span>
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-black text-lg leading-none">➔</span>
                      <p className="text-sm font-bold">Includes:</p>
                    </div>
                    <ul className="pl-8 space-y-3 text-xs md:text-sm font-medium text-gray-800 leading-relaxed">
                      <li>Everything in the Standard package</li>
                      <li>In-depth assessment of research methodology and argumentation</li>
                      <li>Alignment with journal or publisher guidelines</li>
                      <li>Enhanced clarity, conciseness, and style improvements</li>
                      <li>Consistency check for terminology, headings, and references</li>
                    </ul>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-center space-x-3 pt-8 mt-6">
                  <span className="text-black text-lg leading-none">➔</span>
                  <p className="text-sm font-bold text-gray-900">
                    Turnaround : <span className="font-semibold">10–14 business days</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Premium Development */}
            <div className="bg-[#c8a87b] rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200/50">
              {/* Header */}
              <div className="bg-white p-5 border-b border-gray-100 flex items-center space-x-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/editing-and-translation/translation-with-editing/pro.webp"
                    alt="Premium"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-xl text-[#714b23]">
                  Premium Development
                </h4>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-gray-800">
                <div className="space-y-6">
                  {/* Ideal For */}
                  <div className="flex items-start space-x-3">
                    <span className="text-black text-lg leading-none mt-0.5">➔</span>
                    <p className="text-sm font-semibold leading-snug">
                      Ideal For: <span className="font-normal">Manuscripts intended for high-impact journals or publication.</span>
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-black text-lg leading-none">➔</span>
                      <p className="text-sm font-bold">Includes:</p>
                    </div>
                    <ul className="pl-8 space-y-3 text-xs md:text-sm font-medium text-gray-800 leading-relaxed">
                      <li>Everything in the Advanced package</li>
                      <li>Expert review for content depth, originality, and scientific accuracy</li>
                      <li>Integration of feedback from reviewers or advisors</li>
                      <li>Detailed suggestions for strengthening conclusions and discussion</li>
                      <li>Priority support and consultation with our expert editors</li>
                    </ul>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-center space-x-3 pt-8 mt-6">
                  <span className="text-black text-lg leading-none">➔</span>
                  <p className="text-sm font-bold text-gray-900">
                    Turnaround: <span className="font-semibold">14–21 business days</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        <GetFreeQuoteButton/>

      </main>
    </>
  );
}