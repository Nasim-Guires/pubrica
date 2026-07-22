"use client";

import {
  heroBulletPoints,
  mainServicesList,
  audienceList,
  editingTypesList,
  translationServicesList,
  workflowSteps,
  packagesList,
  mainServicesData,
  trustPartners,
  testimonialsData,
  faqData,
  insightsData,
} from "@/lib/services/editing-and-translation";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  type CardId = "proofreading" | "manuscript";

  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    proofreading: true,
    manuscript: true,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Since we show 2 cards per view (Slide 0: Items 0 & 1, Slide 1: Items 1 & 2)

  // Determine items to display based on the active slide dot index
  const visibleItems =
    currentSlide === 0
      ? [testimonialsData[0], testimonialsData[1]]
      : [testimonialsData[1], testimonialsData[2]];
  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Store an object tracking open/close state for each FAQ ID independently
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({
    1: true, // Default open as shown in your image mockup
    6: true, // Default open as shown in your image mockup
  });

  const toggleFAQ = (id: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Split items evenly into two clean layout lists for desktop grids
  const leftColumnFaqs = faqData.filter((item) => item.id <= 5);
  const rightColumnFaqs = faqData.filter((item) => item.id > 5);
  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-teal-500 selection:text-white">
      <section className="w-full bg-[#0b2b30] text-white py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto border border-white/70 rounded-sm p-6 sm:p-8 md:p-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          Editing and Translation Services
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl mx-auto font-light">
          Pubrica offers comprehensive academic editing and professional translation services,
          ensuring clarity, precision, and compliance with international publishing standards.
        </p>
      </div>
    </section>
      {/* SECTION 1: HERO / PRECISION SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-[40px] font-bold leading-tight text-[#083B3A]">
            Precision Editing & Translation Services for Researchers and
            Academics
          </h1>

          <p className="mt-3 text-[19px] leading-8 text-slate-600 max-w-6xl">
            From scientific manuscripts to multilingual reports. Our experts
            enhance grammar, style, technical accuracy, and subject-specific
            terminology, making your manuscripts journal-ready, globally
            accessible, and impactful.
          </p>
        </div>

        {/* First Row */}
        <div className="relative">
          {/* Floating image */}
          <div className="hidden lg:block float-right ml-12 mb-8 w-[420px]">
            <div className="relative">
              {/* Vertical */}
              <div className="absolute left-0 top-5 h-[270px] w-7 bg-[#083B3A] rounded-l-2xl" />

              {/* Bottom */}
              <div className="absolute left-7 bottom-0 h-7 w-[270px] bg-[#083B3A] rounded-b-2xl" />

              <div className="relative ml-6">
                <Image
                  src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Editing Service"
                  width={220}
                  height={70}
                  className="rounded-xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-[17px] leading-8 text-slate-700">
            Pubrica provides{" "}
            <a href="#" className="text-[#4180A8]">
              manuscript editing
            </a>{" "}
            and academic translation services tailored for healthcare,
            <a href="#" className="text-[#4180A8]">
              {" "}
              life sciences
            </a>
            , and multidisciplinary research. From scientific manuscripts,
            theses, and clinical reports to multilingual translations, our
            experts ensure clarity, accuracy, and journal compliance. We help
            authors achieve publication success by enhancing language,
            structure, and readability, meeting the standards of high-impact
            international journals.
          </p>

          {/* Bullets */}
          <ul className="mt-8 space-y-5">
            {heroBulletPoints.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 mt-2 text-red-600 text-lg">•</span>

                <p className="text-[17px] leading-8 text-slate-700">
                  <strong>{item.title}:</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>

          {/* Bottom */}
          <p className="mt-8 text-[17px] leading-8 text-slate-700">
            With native English experts educated in Europe and the US, Pubrica
            transforms complex research into clear, engaging narratives. We
            ensure the integrity of your work while incorporating feedback to
            refine content, making significant contributions to the scientific
            community.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-5">
            <button className="rounded-full bg-[#BA0000] px-8 py-3 text-white font-semibold hover:bg-[#980000]">
              Get a Free Quote
            </button>

            <button className="rounded-full bg-[#BA0000] px-8 py-3 text-white font-semibold hover:bg-[#980000]">
              View Brochure
            </button>
          </div>
        </div>
      </section>
      <hr className="border-slate-100" />
      {/* SECTION 2: OUR SERVICES */}
      <section className="py-12 bg-white px-6 max-w-7xl mx-auto font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Title elements */}
          <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">
            Our Services
          </h2>
          <p className="text-[14px] text-slate-600 max-w-5xl mb-12 leading-relaxed">
            At Pubrica, we provide end-to-end{" "}
            <a href="#" className="text-[#4080A8] hover:underline font-normal">
              Editing and Translation Services
            </a>{" "}
            designed to refine, enhance, and globalize your content. From
            manuscripts and theses to books and multilingual translations, our
            expert team ensures clarity, precision, and publication-ready
            quality.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Next.js Optimized Image Stack Component */}
            <div className="lg:col-span-5 relative flex justify-center items-center min-h-[360px] pt-4 select-none">
              {/* Soft decorative background circular bubble */}
              <div className="absolute w-64 h-64 bg-slate-100 rounded-full left-12 top-12 -z-10 opacity-70"></div>

              {/* Top Left Image Layer */}
              <div className="absolute top-0 left-4 w-60 z-10 transform -rotate-3">
                <div className="relative w-full h-44 rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
                    alt="Working on laptop"
                    fill
                    sizes="(max-w-7xl) 240px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bottom Right Image Layer */}
              <div className="absolute bottom-4 right-4 w-64 z-20 transform rotate-2">
                <div className="relative w-full h-48 rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400"
                    alt="Editing paper document"
                    fill
                    sizes="(max-w-7xl) 256px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Custom Interactive Accordion Row Group */}
            <div className="lg:col-span-7 border-t border-[#0A4D4A] divide-y divide-slate-200">
              {mainServicesData.map((service, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="w-full">
                    {/* Service Heading Row Trigger */}
                    <button
                      onClick={() => setActiveIndex(isOpen ? -1 : index)}
                      className="w-full py-3.5 flex items-center gap-4 text-left transition focus:outline-none"
                    >
                      <span className="text-[#0A4D4A] text-sm font-medium w-3 flex justify-center">
                        {isOpen ? "−" : "+"}
                      </span>
                      <span
                        className={`text-[15px] font-semibold tracking-wide transition ${
                          isOpen
                            ? "text-[#0A4D4A]"
                            : "text-slate-800 hover:text-[#0A4D4A]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </button>

                    {/* Accordion Content Block */}
                    {isOpen && (
                      <div className="pl-7 pb-5 pr-4 space-y-3 animate-fadeIn">
                        <p className="text-[13.5px] text-slate-700 leading-relaxed font-normal">
                          {service.description}
                        </p>
                        {service.subtext && (
                          <p className="text-[13px] text-slate-500 italic font-normal leading-relaxed">
                            {service.subtext}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3: WHO WE SERVE */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#004D40] mb-2">
            Who We Serve
          </h2>
          <p className="text-slate-600">
            Our Editing and Translation Services cater to a diverse range of
            clients who require precision, clarity, and cultural accuracy in
            their written content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceList.map((audience, index) => (
            <div
              key={index}
              className="relative h-48 rounded-xl overflow-hidden group shadow-md"
            >
              <img
                src={audience.bgImage}
                alt={audience.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-lg leading-snug">
                  {audience.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* SECTION 4: TYPES OF EDITING SERVICES */}
      <section className="py-12 bg-white px-6 max-w-7xl mx-auto font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header Content */}
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">
              Types of Editing Services We Provide
            </h2>
            <p className="text-[14px] text-slate-600 max-w-5xl leading-relaxed">
              Each type of editing serves a unique purpose and is suited to
              different stages of the writing and publication process. By
              selecting the appropriate kind of editing, authors can
              significantly enhance the quality of their manuscripts and
              increase their chances of achieving their publication, research
              visibility, and communication objectives.
            </p>
          </div>

          {/* 4-Column Card Grid Component with internal drop alignment items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            {editingTypesList.map((type) => {
              const isOpen = !!openCards[type.id];
              return (
                <div
                  key={type.id}
                  className={`transition-all duration-200 rounded-md border ${
                    isOpen
                      ? "border-[#0A4D4A]/20 bg-white shadow-sm"
                      : "border-transparent bg-[#F4FAF8] hover:bg-[#EAF5F2]"
                  }`}
                >
                  {/* Header Toggle Wrapper Frame */}
                  <div
                    onClick={() => toggleCard(type.id)}
                    className={`px-4 py-3.5 flex justify-between items-center cursor-pointer select-none ${
                      isOpen ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 pr-2 min-w-0">
                      <div className="relative w-7 h-7 flex-shrink-0 opacity-80">
                        <Image
                          src={type.icon}
                          alt={`${type.title} Icon`}
                          fill
                          sizes="28px"
                          className="object-contain filter grayscale contrast-125"
                        />
                      </div>
                      <span className="font-semibold text-[#0A4D4A] text-[13.5px] leading-tight truncate-two-lines">
                        {type.title}
                      </span>
                    </div>

                    {/* Plus/Minus Indicator */}
                    <span className="text-[#0A4D4A] font-medium text-sm flex-shrink-0 pl-1 w-3 text-center">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {/* Dynamic Interior Accordion Text Block */}
                  {isOpen && (
                    <div className="p-4 bg-white animate-fadeIn">
                      <p className="text-[13px] text-slate-700 leading-relaxed font-normal">
                        {type.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .truncate-two-lines {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-2px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}</style>
      </section>
      {/* SECTION 5: TRANSLATION SERVICES */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#004D40] mb-2">
            Our Comprehensive Translation Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Pubrica delivers professional academic and scientific translation
            services designed to ensure accuracy, cultural adaptation, and
            publication-ready quality. Our translators are{" "}
            <span className="text-teal-600 font-medium underline">
              subject-matter experts
            </span>{" "}
            who refine content to meet the standards of international journals,
            institutions, and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {translationServicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* MID-BANNER CACHE LINE */}
      <section className="bg-[#00332c] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
            Speed up your Editing and Translation with Pubrica
          </h3>
          <p className="text-teal-100 text-sm lg:text-base opacity-90">
            Gain access to your personal assistant who will expertly guide you
            through intricate Editing and translation processes, shielding you
            from rejection and ensuring a faster path to getting your work
            published.
          </p>
        </div>
      </section>
      {/* SECTION 6: HOW IT WORKS STEP-BY-STEP */}
      <section className="py-16 bg-[#F4F6F6] px-6 font-sans overflow-x-auto selection:bg-teal-100/50">
        <div className="max-w-7xl mx-auto min-w-[1000px] lg:min-w-0">
          {/* Header Block */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">
              Our Step-by-Step Process
            </h2>
            <p className="text-[13.5px] text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At Pubrica, we follow a clear, step-by-step process to ensure your
              documents are accurate, polished, and publication-ready.
            </p>
          </div>

          {/* Connected Process Grid */}
          <div className="relative grid grid-cols-6 gap-3 pt-6 pb-6">
            {/* Continuous baseline timeline connector layout bar */}
            <div className="absolute top-[124px] left-0 right-0 h-3 bg-[#0A7E8C] -z-10 rounded-full"></div>

            {workflowSteps.map((item, index) => {
              const isOdd = index % 2 === 0; // Steps 1, 3, 5 hang below the timeline line

              return (
                <div
                  key={index}
                  className="flex flex-col items-center relative"
                >
                  {/* Condition A: EVEN STEPS (2, 4, 6) Render content block at the TOP */}
                  {!isOdd && (
                    <>
                      {/* Content Card Panel with dynamic group-hover color inversion */}
                      <div className="group w-full bg-white border border-slate-200/80 rounded-sm p-4 shadow-sm min-h-[240px] flex flex-col items-start text-left mb-6 relative transition-all duration-200 hover:bg-[#4D4D4D] hover:border-[#4D4D4D]">
                        <div className="relative w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 group-hover:invert group-hover:brightness-200 transition-all">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            sizes="32px"
                            className="object-contain filter grayscale contrast-125"
                          />
                        </div>
                        <h3 className="text-[12.5px] font-bold text-slate-800 tracking-wide mb-2 leading-tight uppercase group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-slate-600 text-[11.5px] leading-relaxed whitespace-pre-line group-hover:text-slate-200 transition-colors">
                          {item.description}
                        </div>
                      </div>

                      {/* Vertical connecting line vector */}
                      <div className="w-[1px] h-10 bg-slate-300 absolute top-[240px]"></div>

                      {/* Timeline Number Bubble */}
                      <div className="w-10 h-10 rounded-full bg-[#0A7E8C] text-white flex items-center justify-center font-semibold text-sm shadow-md mt-11 z-20">
                        {item.step}
                      </div>
                    </>
                  )}

                  {/* Condition B: ODD STEPS (1, 3, 5) Render number bubble at the TOP */}
                  {isOdd && (
                    <>
                      {/* Timeline Number Bubble */}
                      <div className="w-10 h-10 rounded-full bg-[#0A7E8C] text-white flex items-center justify-center font-semibold text-sm shadow-md mb-11 z-20">
                        {item.step}
                      </div>

                      {/* Vertical connecting line vector */}
                      <div className="w-[1px] h-10 bg-slate-300 absolute top-[40px]"></div>

                      {/* Content Card Panel with dynamic group-hover color inversion */}
                      <div className="group w-full bg-white border border-slate-200/80 rounded-sm p-4 shadow-sm min-h-[240px] flex flex-col items-start text-left mt-6 relative transition-all duration-200 hover:bg-[#4D4D4D] hover:border-[#4D4D4D]">
                        <div className="relative w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 group-hover:invert group-hover:brightness-200 transition-all">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            sizes="32px"
                            className="object-contain filter grayscale contrast-125"
                          />
                        </div>
                        <h3 className="text-[12.5px] font-bold text-slate-800 tracking-wide mb-2 leading-tight uppercase group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-slate-600 text-[11.5px] leading-relaxed whitespace-pre-line group-hover:text-slate-200 transition-colors">
                          {item.description}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ========================================================================= */}
      {/* SECTION NAME: WHY AUTHORS CHOOSE PUBRICA                                  */}
      {/* ========================================================================= */}
      <div className="bg-white py-12 px-4 md:px-8 font-sans max-w-7xl mx-auto selection:bg-teal-100/60">
        {/* ========================================================================= */}
        {/* SECTION NAME: WHY AUTHORS CHOOSE PUBRICA                                  */}
        {/* ========================================================================= */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#0A4D5C] mb-6 tracking-tight">
            Reasons Why Authors Choose Pubrica&apos;s Editing And Translation
            Services
          </h2>

          {/* Bullet points with red custom indicators */}
          <ul className="space-y-4 max-w-6xl mb-8">
            <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed">
              <span className="text-red-500 font-bold text-lg leading-none mt-[2px]">
                &bull;
              </span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Unlock Pubrica&apos;s 20+ years of academic publishing
                  expertise:
                </strong>{" "}
                Our team has helped over 800,000 researchers succeed in renowned
                journals. With our{" "}
                <span className="text-sky-500 underline cursor-pointer hover:text-sky-600">
                  journal selection service
                </span>
                , we streamline the process, enhancing your paper&apos;s
                publication prospects.
              </div>
            </li>

            <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed">
              <span className="text-red-500 font-bold text-lg leading-none mt-[2px]">
                &bull;
              </span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Trust Pubrica&apos;s Editing and Translation Service
                </strong>{" "}
                for expert guidance in navigating credible, peer-reviewed
                journals. Our team ensures meticulous assessment and tailored
                recommendations, safeguarding you from predatory publishing
                practices.
              </div>
            </li>
          </ul>

          {/* Brand/Journal Partner Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center bg-slate-50/50 p-4 rounded-md border border-slate-100">
            {trustPartners.map((partner, index) => (
              <div
                key={index}
                className="relative h-12 w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-w-758px) 33vw, 120px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION NAME: EDITING & TRANSLATION SERVICE SAMPLE WORK                  */}
        {/* ========================================================================= */}
        <section className="border-t border-slate-100 pt-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#0A4D5C] mb-4 tracking-tight">
            Editing And Translation Services Sample Work
          </h2>
          <p className="text-slate-600 text-xs md:text-sm max-w-5xl leading-relaxed mb-8">
            Explore our editing and translation sample work, designed to meet
            rigorous quality standards, journal-specific formatting
            requirements, and project deadlines. We deliver precise, polished,
            and publication-ready documents that enhance clarity, accuracy, and
            impact for academic, clinical, and professional research.
          </p>

          {/* Shadowed Manuscript Showcase Frame */}
          <div className="border border-slate-300 rounded-sm bg-white shadow-xl max-w-5xl mx-auto overflow-hidden">
            {/* Top Banner Tab Header */}
            <div className="bg-[#D9DEE0] text-center py-3 border-b border-slate-300">
              <h3 className="text-sm md:text-base font-bold text-[#0A4D5C]">
                Check out Our Editing and Translation Services Sample Work
              </h3>
            </div>

            {/* Manuscript Compare Grid View Container */}
            <div className="p-6 md:p-10 relative bg-white">
              {/* Watermark Element */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none z-0">
                <span className="text-6xl md:text-9xl font-black tracking-widest uppercase rotate-[330deg]">
                  SAMPLE
                </span>
              </div>

              {/* Showcase Core Content */}
              <div className="relative z-10">
                {/* Branding Header Area */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-6 h-6 bg-[#1F2431] rounded-sm flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">🧠</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#0A4D5C] font-black tracking-wider text-xl leading-none">
                      PUBRICA
                    </div>
                    <span className="text-[8px] tracking-widest text-slate-500 block uppercase font-semibold">
                      Knowledge Works
                    </span>
                  </div>
                </div>

                {/* Two Column Comparative Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
                  {/* Left Side: English Original */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-800 mb-3">
                      Original Manuscript(English)
                    </h4>
                    <div className="text-slate-700 text-[11px] md:text-xs leading-relaxed space-y-3 font-normal">
                      <p>
                        The ability of non-invasive radiofrequency treatments to
                        treat several dermatological issues at once is one of
                        its main benefits. Radiofrequency technology provides
                        customizable treatment choices that may be personalized
                        to match the individual needs and preferences of each
                        patient, whether it is being utilized for scar
                        correction, skin tightening, or wrinkle reduction.
                        Non-invasive radiofrequency techniques also involve less
                        discomfort and recovery time, which makes them
                        appropriate for those with hectic schedules who cannot
                        afford lengthy recuperation times.
                      </p>
                      <p>
                        There are several varieties of non-invasive
                        radiofrequency devices on the market, and they all work
                        in different ways to rejuvenate skin. Using a single
                        electrode, monopolar radiofrequency devices penetrate
                        the skin deeply to produce heat energy that tightens
                        loose skin and promotes the formation of collagen.
                        Contrarily, bipolar radiofrequency devices target fine
                        lines and wrinkles by delivering energy to a superficial
                        depth through the use of two electrodes positioned near
                        to one another.
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Spanish Translated */}
                  <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                    <h4 className="text-base md:text-lg font-bold text-green-600 mb-3">
                      Translated Manuscript(Spanish)
                    </h4>
                    <div className="text-slate-700 text-[11px] md:text-xs leading-relaxed space-y-3 font-normal">
                      <p>
                        La capacidad de los tratamientos de radiofrecuencia no
                        invasivos para tratar varios problemas dermatológicos a
                        la vez es uno de sus principales beneficios. La
                        tecnología de radiofrecuencia ofrece opciones de
                        tratamiento personalizables que pueden personalizarse
                        para satisfacer las necesidades y preferencias
                        individuales de cada paciente, ya sea que se utilice
                        para corregir cicatrices, tensar la piel o reducir las
                        arrugas. Las técnicas de radiofrecuencia no invasiva
                        también implican menos molestias y tiempo de
                        recuperación, lo que las hace apropiadas para quienes
                        tienen agendas agitadas y no pueden permitirse tiempos
                        de recuperación prolongados.
                      </p>
                      <p>
                        Existen varias variedades de dispositivos de
                        radiofrecuencia no invasivos en el mercado y todos
                        funcionan de destas matras para rejer Udicado a la
                        destrado dispositivos de radiofrecuencia monopolar
                        penetran profundamente en la piel para producir energía
                        térmica que tensa la piel flácida y promueve la
                        formación de colágeno. Por el contrario, los
                        dispositivos de radiofrecuencia bipolar atacan las
                        líneas finas y las arrugas entregando energía a una
                        profundidad superficial mediante el uso de dos
                        electrodos colocados uno cerca del otro.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document Disclaimer / Footer Line */}
                <div className="mt-12 pt-4 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400">
                    Copyright &copy; 2026 pubrica. No part of this document may
                    be published without permission of the author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* SECTION NAME: EDITING & TRANSLATION SERVICE SAMPLE WORK                  */}
      {/* ========================================================================= */}

      {/* SECTION 7: PACKAGES & PRICING */}
      <section className="py-16 px-4 max-w-7xl mx-auto font-sans selection:bg-teal-100/60">
        {/* Header Block */}
        <div className="text-left mb-12">
          <h2 className="text-2xl font-bold text-[#0A4D5C] mb-4 tracking-tight">
            Editing and Translation Services – Our Packages
          </h2>
          <p className="text-slate-700 max-w-6xl text-[13.5px] leading-relaxed">
            At Pubrica, we understand that every manuscript, report, or document
            has unique requirements. That&apos;s why we offer flexible and
            tailored editing and translation packages designed to meet the needs
            of researchers, publishers, businesses, and healthcare
            professionals.
          </p>
        </div>

        {/* Packages Grid - Loops Exactly Once */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {packagesList.map((pkg, index) => (
            <div
              key={index}
              className={`${pkg.cardBg} rounded-md p-5 shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col justify-between transition hover:shadow-[0_6px_16px_rgba(0,0,0,0.16)]`}
            >
              <div>
                {/* Header White Card Area */}
                <div className="bg-white rounded-sm p-4 mb-6 flex items-center gap-4 border border-slate-100 shadow-sm">
                  <div
                    className={`w-14 h-14 rounded-full bg-[#EBF3F5] ${pkg.badgeTextColor} font-serif font-semibold text-3xl flex items-center justify-center border-2 border-dashed border-slate-300 shadow-inner select-none`}
                  >
                    {pkg.badge}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium tracking-wide">
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                {/* Package Content Attributes */}
                <div className="space-y-6 px-1">
                  {/* Ideal For */}
                  <div className="text-slate-900 text-[13px] leading-relaxed">
                    <span className="font-bold inline-flex items-center gap-2 mr-1">
                      <span className="text-black text-sm">&#10144;</span> Ideal
                      For:
                    </span>
                    {pkg.idealFor}
                  </div>

                  {/* Inclusions */}
                  <div>
                    <span className="text-[13px] font-bold text-slate-900 inline-flex items-center gap-2 mb-3">
                      <span className="text-black text-sm">&#10144;</span>{" "}
                      Includeds:
                    </span>
                    <ul className="space-y-3 pl-8 text-[12.5px] text-slate-800 leading-relaxed list-none relative">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="relative">
                          <span className="text-red-600 font-bold text-lg absolute -left-5 -top-[3px]">
                            &bull;
                          </span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons */}
                  <div className="pt-2">
                    <span className="text-[13px] font-bold text-slate-900 inline-flex items-center gap-2 mb-3">
                      <span className="text-black text-sm">&#10144;</span>{" "}
                      Add-ons:
                    </span>
                    <ul className="space-y-2 pl-8 text-[12.5px] text-slate-800 font-normal">
                      {pkg.addons.map((add, i) => (
                        <li key={i} className="list-none">
                          {add}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Turnaround Footer Section */}
              <div className="mt-8 pt-4 border-t border-black/10 text-[13px] text-slate-900 px-1">
                <span className="font-bold inline-flex items-center gap-2">
                  <span className="text-black text-sm">&#10144;</span>{" "}
                  Turnaround Time:
                </span>{" "}
                <span className="font-medium">{pkg.turnaround}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-sans selection:bg-teal-100">
        <div className="max-w-7xl mx-auto">
          {/* Header Block */}
          <h2 className="text-2xl font-bold text-[#0A4D4A] mb-4">
            Testimonials
          </h2>
          <p className="text-[14px] text-slate-600 max-w-6xl mb-10 leading-relaxed font-normal">
            Learn how Pubrica’s expert editing and translation services have
            helped researchers and businesses deliver clear, publication-ready
            manuscripts that enhance credibility, ensure accuracy, and increase
            global visibility. Here’s what our clients say:
          </p>

          {/* Testimonials Window Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#0A4D4A]/20 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between min-h-[280px]"
              >
                {/* Gray Inner Bubble Box */}
                <div className="bg-[#D9D9D9]/50 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start flex-grow">
                  {/* Visual Journal Cover Mockup Thumbnail */}
                  <div
                    className={`w-32 h-24 rounded border border-slate-200 shadow-sm flex flex-col justify-between p-2 text-white shrink-0 ${item.bgAccent} select-none`}
                  >
                    <span className="text-[7px] tracking-widest uppercase font-semibold opacity-70">
                      Pubrica Indexed
                    </span>
                    <span className="text-[10px] font-black leading-tight tracking-tight mt-1">
                      {item.journalTitle}
                    </span>
                    <div className="w-full h-[3px] bg-white/30 rounded-full mt-auto" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-[13px] text-slate-700 leading-relaxed font-normal italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Flag Info Row */}
                <div className="mt-4 pt-2 flex justify-between items-center px-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13.5px] tracking-wide">
                      &mdash; {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 italic mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  {/* Rounded Country Flag Badge */}
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
                    <img
                      src={item.flagSrc}
                      alt={item.role}
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Indicator Slider Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? "bg-[#0A7E8C] scale-110"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-sans selection:bg-teal-100/60">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#0A4D4A] mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>

          {/* Two Column Grid Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-0 items-start">
            {/* Left Column (Items 1 to 5) */}
            <div className="border border-slate-200 divide-y divide-slate-200 rounded-sm">
              {leftColumnFaqs.map((item) => {
                const isOpen = !!openStates[item.id];
                return (
                  <div
                    key={item.id}
                    className="w-full bg-white transition-colors"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none select-none group"
                    >
                      <span className="text-[13.5px] font-bold text-slate-800 leading-snug tracking-normal pr-4 group-hover:text-[#0A4D4A] transition-colors">
                        {item.question}
                      </span>
                      <span className="text-slate-700 font-black text-base shrink-0 w-4 text-center">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-white animate-fadeIn">
                        <p className="text-[13px] text-slate-700 leading-relaxed font-normal text-justify">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column (Items 6 to 9) */}
            <div className="border border-slate-200 divide-y divide-slate-200 rounded-sm mt-6 lg:mt-0">
              {rightColumnFaqs.map((item) => {
                const isOpen = !!openStates[item.id];
                return (
                  <div
                    key={item.id}
                    className="w-full bg-white transition-colors"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none select-none group"
                    >
                      <span className="text-[13.5px] font-bold text-slate-800 leading-snug tracking-normal pr-4 group-hover:text-[#0A4D4A] transition-colors">
                        {item.question}
                      </span>
                      <span className="text-slate-700 font-black text-base shrink-0 w-4 text-center">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-white animate-fadeIn">
                        <p className="text-[13px] text-slate-700 leading-relaxed font-normal text-justify">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Embedded Component Scope Animation Styling */}
        <style jsx>{`
          @keyframes fadeInFAQ {
            from {
              opacity: 0;
              transform: translateY(-2px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeInFAQ 0.18s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Insights Section inserted cleanly right below FAQ */}
      <section className="bg-white py-12 px-6 max-w-7xl mx-auto font-sans selection:bg-teal-100/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A4D4A] mb-8 tracking-tight">
            Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsData.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-sm border border-slate-200/60 overflow-hidden shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative w-full h-[210px] bg-slate-100">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-350"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[15px] font-bold text-[#0A4D4A] leading-snug mb-3 tracking-normal line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-600 leading-relaxed font-normal line-clamp-3 mt-auto">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
