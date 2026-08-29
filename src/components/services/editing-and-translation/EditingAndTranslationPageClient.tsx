"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import {
  heroBulletPoints,
  mainServicesList,
  audienceList,
  editingTypesList,
  translationServicesList,
  workflowSteps,
  packages,
  mainServicesData,
  trustPartners,
  testimonialsData,
  faqData,
} from "@/lib/services/editing-and-translation";
import DynamicInsightsSection from "@/components/services/DynamicInsightsSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EditorialWorkflowSection } from "@/components/common/EditorialWorkflowSection";
import CommonPackages from "@/components/common/CommonPackages";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import HeroBanner from "@/components/common/HeroBanner";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const EditingAndTranslationPageClient = () => {
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

  const testimonials = [
    {
      image:
        "/images/editing-and-translation/asian-journal-of-psychiatry-1.png",
      quote:
        "Pubrica's editing and translation support helped me publish my manuscript in a high-impact journal. Their attention to language, grammar, and formatting ensured my research was communicated clearly and professionally.",
      name: "DR. MARIA SCHNEIDER",
      designation: "Academic Researcher",
      organization: "Germany",
      flag: "/images/editing-and-translation/germany-1-1.png",
    },
    {
      image:
        "/images/editing-and-translation/jama-oncology-journal-5.png",
      quote:
        "I had my clinical study translated from Japanese to English, and the team maintained both accuracy and medical terminology integrity. The reviewers appreciated the clarity, and my paper was accepted without major revisions.",
      name: "DR. HIROSHI TANAKA",
      designation: "Clinical Practitioner",
      organization: "Japan",
      flag: "/images/editing-and-translation/japan.png",
    },
    {
      image:
        "/images/editing-and-translation/british-journal-of-clinical-pharmacology.png",
      quote:
        "The editorial team not only refined my writing but also ensured consistency in style and tone across my thesis. Their guidance improved readability and strengthened my arguments significantly.",
      name: "ANANYA RAO",
      designation: "PhD Scholar",
      organization: "India",
      flag: "/images/editing-and-translation/flag.png",
    },
  ];

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

  const heroBulletPoints = [
    {
      title: "Professional Writing Support",
      text: "Access to skilled English writers and editors with expertise in specialized niche areas.",
    },
    {
      title: "Advanced Editing Techniques",
      text: "Focus on concise content, reducing jargon, and enhancing readability through multiple revisions.",
    },
    {
      title: "Quality Assurance",
      text: "Rigorous proofreading to eliminate errors in grammar, spelling, and vocabulary, ensuring submission-ready manuscripts.",
    },
    {
      title: "High-Impact Journal Publishing",
      text: "Assistance in publishing with leading firms, enhancing visibility and impact.",
    },
  ];

  const faqs = [
    {
      question:
        "1. How to translate a research paper into English for journal submission?",
      answer:
        "Use professional translation with academic translation tools, maintain terminology, consider context, follow journal requirements, and post-edit the translation with utmost accuracy before submitting.",
    },
    {
      question:
        "2. What is the difference between academic translation and language editing?",
      answer:
        "Academic translation is the translation of content from one language to another with utmost accuracy, whereas language editing is the improvement of grammar, content, writing style, and readability of already written content.",
    },
    {
      question:
        "3. Can a translated research manuscript be edited for journal publication?",
      answer:
        "Yes, translated manuscripts may be edited professionally with regard to language accuracy, clarity, terminology, formatting, etc., for the purpose of publication in a journal.",
    },
    {
      question:
        "4. Why is professional editing important after translating a research paper?",
      answer:
        "Professional editing ensures that translated papers are not only accurate, contextually appropriate, grammatically polished, and terminologically precise but also perfectly aligned with journal requirements before they are submitted for publication.",
    },
    {
      question:
        "5. Where to find reliable academic translation and editing services?",
      answer:
        "Trustworthy academic translation and editing services can be accessed through university writing centers, professional language service firms, research support firms, and individual freelance academic editors.",
    },
    {
      question:
        "6. How does translation and editing improve the quality of research manuscripts?",
      answer:
        "Translation and editing of an academic manuscript enhance it by ensuring linguistic accuracy, clarity, consistency, structure, and presentation, and conformity to academic and journal standards.",
    },
    {
      question:
        "7. Do journals accept manuscripts translated from other languages?",
      answer:
        "Yes, they accept translated manuscripts as long as they are original, ethical, well-translated, well-edited, and completely compliant with the submission guidelines of the journal.",
    },
    {
      question:
        "8. What are the common language issues in translated research papers?",
      answer:
        "Grammatical errors, unnatural wording, terminology, literal translation, unclear sentence structure, poor readability, and contextual errors are some of the common problems that may occur.",
    },
    {
      question:
        "9. How can non-native English researchers prepare manuscripts for international journals?",
      answer:
        "Non-native authors may improve their manuscripts by engaging professional language services, proofreading, following the submission guidelines, using clear language, avoiding ambiguity, and ensuring the manuscript is of good quality before submission.",
    },
  ];

  // Split items evenly into two clean layout lists for desktop grids
  const leftColumnFaqs = faqData.filter((item) => item.id <= 5);
  const rightColumnFaqs = faqData.filter((item) => item.id > 5);
  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-teal-500 selection:text-white">
      <HeroBanner
        title="Editing and Translation Services"
        description="Pubrica offers comprehensive academic editing and professional translation services, ensuring clarity, precision, and compliance with international publishing standards."
        headingAs="h1"
      />
      {/* SECTION 1: HERO / PRECISION SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-5 font-sans">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-[40px] font-bold leading-tight text-[#083B3A]">
            Precision Editing & Translation Services for Researchers and
            Academics
          </h2>

          <p className="mt-3 text-[19px] leading-8 text-slate-600 max-w-6xl">
            From scientific manuscripts to multilingual reports. Our experts
            enhance grammar, style, technical accuracy, and subject-specific
            terminology, making your manuscripts journal-ready, globally
            accessible, and impactful.
          </p>
        </div>

        {/* First Row */}
        <div className="relative">
          {/* Floating image with correct border decoration wrapper */}
          <div className="hidden lg:block float-right ml-12 mb-8 w-[420px]">
            <div className="relative pt-6 pl-6">
              {/* Vertical shape */}
              <div />

              {/* Bottom shape */}


              {/* Image box container */}
              <div className="relative z-10 p-2">
                <Image
                  src="/images/editing-and-translation/Precision-Editing-Translation-Services-for-Researchers-and-Academics.webp"
                  alt="Editing Service"
                  width={380}
                  height={260}
                  className="rounded-xl object-cover  w-full h-[260px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-[17px] leading-8 text-slate-700">
            Pubrica provides{" "}
            <Link href="/academy/editing-and-translation/importance-of-editing-proofreading-manuscript-submission" className="text-[#4180A8]">
              manuscript editing
            </Link>{" "}
            and academic translation services tailored for healthcare,
            <Link href="/subject-matter-experts/life-sciences" className="text-[#4180A8]">
              {" "}
              life sciences
            </Link>
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
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <GetFreeQuoteButton />

            <Link
              href="/uploads/editing-and-translation/Editing-and-Translation-Services.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none"
            >
              View Brochure
            </Link>
          </div>
        </div>
      </section>
      <hr className="border-slate-100" />
      {/* SECTION 2: OUR SERVICES */}
      <section className="py-6 bg-white px-6 max-w-7xl mx-auto font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Title elements */}
          <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">
            Our Services
          </h2>
          <p className="text-[14px] text-slate-600 max-w-5xl mb-12 leading-relaxed">
            At Pubrica, we provide end-to-end{" "}
            <Link href="/academy/editing-and-translation/manuscript-editing-process-steps" className="text-[#4080A8] hover:underline font-normal">
              Editing and Translation Services
            </Link>{" "}
            designed to refine, enhance, and globalize your content. From
            manuscripts and theses to books and multilingual translations, our
            expert team ensures clarity, precision, and publication-ready
            quality.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Next.js Optimized Image Stack Component */}
            <div className="lg:col-span-5 relative flex justify-center items-center min-h-[360px] pt-4 select-none">
              {/* Soft decorative background circular bubble */}
              <div className="absolute w-64 h-64 bg-slate-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-70"></div>

              {/* Centered Image Layer matching the target layout */}
              <div className="relative w-[320px] z-10 flex flex-col items-center">
                <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden mb-3">
                  <Image
                    src="/images/editing-and-translation/Our-Services-1.png"
                    alt="Working on laptop"
                    fill
                    sizes="(max-w-7xl) 320px"
                    className="object-cover"
                    priority
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
                        className={`text-[15px] font-semibold tracking-wide transition ${isOpen
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
      <section className="py-7 px-4 max-w-7xl mx-auto">
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
              className="group relative h-64 bg-black rounded-none overflow-hidden cursor-pointer"
            >
              {/* Background Image (fades out on hover) */}
              <img
                src={audience.bgImage}
                alt={audience.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Default Overlay & Title (bottom-aligned, hides on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg leading-snug">
                  {audience.title}
                </h3>
              </div>

              {/* Hover Content (solid black background with title + description, shows on hover) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white">
                <h3 className="font-bold text-lg leading-snug mb-3">
                  {audience.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-300">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* SECTION 4: TYPES OF EDITING SERVICES */}
      <section className="py-6 bg-white px-6 max-w-7xl mx-auto font-sans">
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
                  className={`transition-all duration-200 rounded-md border ${isOpen
                    ? "border-[#0A4D4A]/20 bg-white shadow-sm"
                    : "border-transparent bg-[#F4FAF8] hover:bg-[#EAF5F2]"
                    }`}
                >
                  {/* Header Toggle Wrapper Frame */}
                  <div
                    onClick={() => toggleCard(type.id)}
                    className={`px-4 py-3.5 flex justify-between items-center cursor-pointer select-none ${isOpen ? "border-b border-slate-100" : ""
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
      <section className="py-7 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#004D40] mb-2">
            Our Comprehensive Translation Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Pubrica delivers professional academic and scientific translation
            services designed to ensure accuracy, cultural adaptation, and
            publication-ready quality. Our translators are{" "}
            <Link href="/subject-matter-experts" className="text-teal-600 font-medium underline">
              subject-matter experts
            </Link>{" "}
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
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
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
      <section className="bg-[#00332c] text-white py-6 px-4 text-center">
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


      {/* Connected Process Grid */}
      <EditorialWorkflowSection
        heading="How Our Editing and Translation Service Works"
        subheading="Our Step-by-Step Process"
        description="At Pubrica, we follow a clear, step-by-step process to ensure your documents are accurate, polished, and publication-ready."
        steps={[
          {
            stepNumber: 1,
            title: "PROJECT CONSULTATION & REQUIREMENT ANALYSIS",
            description:
              "We begin by understanding your project goals, target audience, document type, language preferences, and formatting needs.",
            iconSrc: "/images/publication-support/video-abstract/Send-Materials.png",
            position: "top",
          },
          {
            stepNumber: 2,
            title: "CONTENT ASSESSMENT",
            description:
              "Our team reviews your materials to define the scope of work, evaluating language quality, structure, clarity, and technical terminology.",
            iconSrc:
              "/images/publication-support/video-abstract/Script-Content-Development.png",
            position: "bottom",
          },
          {
            stepNumber: 3,
            title: "EXPERT EDITING & TRANSLATION",
            description: (
              <>
                Your document is refined by subject-matter experts:
                <br />
                • Editing → grammar, punctuation, style, readability, and journal
                compliance.
                <br />• Translation → linguistic accuracy, cultural adaptation, and
                technical precision.
              </>
            ),
            iconSrc:
              "/images/publication-support/video-abstract/Video-Development.png",
            position: "top",
          },
          {
            stepNumber: 4,
            title: "QUALITY ASSURANCE REVIEW",
            description:
              "Every document undergoes multi-level checks by senior editors to ensure consistency, accuracy, and adherence to international standards.",
            iconSrc: "/images/publication-support/video-abstract/Author-Feedback.png",
            position: "bottom",
          },
          {
            stepNumber: 5,
            title: "CLIENT FEEDBACK & REVISIONS",
            description:
              "You review the refined document. We incorporate your feedback and provide unlimited revisions until you are fully satisfied.",
            iconSrc:
              "/images/publication-support/video-abstract/Add-Captions-and-Subtitles.png",
            position: "top",
          },
          {
            stepNumber: 6,
            title: "FINAL DELIVERY",
            description:
              "Your polished, publication-ready document is delivered in the preferred format, ready for submission, publication, or professional use.",
            iconSrc:
              "/images/publication-support/video-abstract/Author-Accepts-the-Video-and-Abstract.png",
            position: "bottom",
          },
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION NAME: WHY AUTHORS CHOOSE PUBRICA                                  */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 px-4 md:px-8 font-sans max-w-7xl mx-auto selection:bg-teal-100/60">
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
                <Link href="/services/publication-support/journal-selection" className="text-sky-500 underline hover:text-sky-600">
                  journal selection service
                </Link>
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
          <div className="overflow-hidden bg-slate-50/50 p-4 rounded-md border border-slate-100">
            <div
              className="flex w-max items-center gap-8 animate-[marquee_25s_linear_infinite]"
              style={{
                animationName: "marquee",
              }}
            >
              {[...trustPartners, ...trustPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="relative h-14 w-32 flex-shrink-0"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <style jsx>{`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION NAME: EDITING & TRANSLATION SERVICE SAMPLE WORK                  */}
        {/* ========================================================================= */}
        <section className="border-t border-slate-100 pt-6">
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

          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="relative w-full aspect-[1379/776] overflow-hidden rounded-sm border border-slate-200 shadow-xl">
              <Image
                src="/images/editing-and-translation/Editing-and-Translation-Services.png"
                alt="Editing and Translation Services sample work"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* SECTION NAME: EDITING & TRANSLATION SERVICE SAMPLE WORK                  */}
      {/* ========================================================================= */}

      {/* SECTION 7: PACKAGES & PRICING */}
      <CommonPackages
        title="Our Editing & Translation Packages"
        packages={packages}
      />

      {/* Testimonials */}
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica’s expert editing and translation services have helped researchers and businesses deliver clear, publication-ready manuscripts that enhance credibility, ensure accuracy, and increase global visibility. Here’s what our clients say:"
        testimonials={testimonials}
      />
      {/* Frequently Asked Questions Section */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      {/* Insights Section inserted cleanly right below FAQ (live from Academy) */}
      <InsightsSection/>
    </div>
  );
};

export default EditingAndTranslationPageClient;
