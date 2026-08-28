"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProcessStep {
  stepNumber: string;
  tabTitle: string;
  heading: string;
  subheading: string;
  keyFeatures: string[];
  imageSrc: string;
  imageAlt: string;
}

export const BookEditingOverviewAndProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsData: ProcessStep[] = [
    {
      stepNumber: "STEP 01",
      tabTitle: "Publisher Selection",
      heading: "Publisher Selection",
      subheading:
        "Find the best publishers for your book and increase your readership with our publisher selection assistance.",
      keyFeatures: [
        "Personalized list of 3-5 publishers for your specific book",
        "Just share your manuscript, target audience, authorship details, and publishing goals in a simple questionnaire",
      ],
      imageSrc:
        "/images/editing-and-translation/book-editing/Publisher-Selection.png",
      imageAlt: "Publisher Selection Process",
    },
    {
      stepNumber: "STEP 02",
      tabTitle: "Book Proposal Creation",
      heading: "Book Proposal Creation",
      subheading:
        "Make the publisher pay attention with a quality book proposal and maximize your potential for publication",
      keyFeatures: [
        "Customized based on your manuscript draft, target audience, author bio, and comparative title research",
        "Specifically built proposals for each publisher you’ve selected to avoid delays in publishing",
      ],
      imageSrc:
        "/images/editing-and-translation/book-editing/Book-Proposal-Creation.png",
      imageAlt: "Book Proposal Creation",
    },
    {
      stepNumber: "STEP 03",
      tabTitle: "Showcase Chapter Preparation",
      heading: "Showcase Chapter Preparation",
      subheading:
        "Strengthen your proposal with an edited and formatted sample chapter, ensuring book publishers understand your book’s potential",
      keyFeatures: [
        "Get advice on which chapter to showcase from experts in the field",
        "No need to look for separate book formatting services: our experts will ensure your showcase chapter matches all publisher requirements.",
      ],
      imageSrc:
        "/images/editing-and-translation/book-editing/Showcase-Chapter-Preparation.png",
      imageAlt: "Showcase Chapter Preparation",
    },
    {
      stepNumber: "STEP 04",
      tabTitle: "Book Editing",
      heading: "Book Editing",
      subheading:
        "Appeal to your readers with a book that is edited by a language expert from your subject area who ensures the structure and tone match your target audience",
      keyFeatures: [
        "Technical accuracy and domain-specific terminology",
        "Language and grammar improvements for enhanced communication",
        "Structural checks to ensure the flow of information is easy to understand",
        "Multi-round support to re-edit modified sections",
      ],
      imageSrc:
        "/images/editing-and-translation/book-editing/who-we-serve-.png",
      imageAlt: "Book Editing Process",
    },
    {
      stepNumber: "STEP 05",
      tabTitle: "Submission Management",
      heading: "Submission Management",
      subheading:
        "Take the hassle out of book publication and focus on your research while our experts streamline communication and expedite the submission process",
      keyFeatures: [
        "Expert support in coordinating with publishers: we help you draft your emails and find the correct email addresses",
        "Constant and seamless communication throughout the publication process so that you never feel alone on this journey",
      ],
      imageSrc:
        "/images/editing-and-translation/book-editing/Submission-Management.png",
      imageAlt: "Submission Management",
    },
  ];

  const currentStep = stepsData[activeStep];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      {/* 1. Dark Green Banner Header */}
      <section className="w-full bg-[#03231a] py-5 px-4 sm:px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-wide">
            Book Editing Services at Pubrica
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Our editors ensure that your book manuscript is polished, engaging,
            and publication-ready through meticulous editing and professional
            guidance.
          </p>
        </div>
      </section>

      {/* 2. Overview & Support Services Section */}
      <section className="w-full py-6 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-2">
          Book Editing and Peer-reviewing Support Services
        </h2>
        <p className="text-sm sm:text-base font-medium text-slate-700 mb-8">
          Pubrica supports book authors and has a significant reputation in
          academic book publishing
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative w-full aspect-square overflow-hidden rounded shadow-sm border border-slate-200 bg-white">
            <Image
              src="/images/editing-and-translation/book-editing/Book-Editing-and-Peer-reviewing-Support-Services-1.png"
              alt="Book editing and peer-reviewing support services"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
            />
          </div>

          {/* Right: Detailed Text Content */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              Typically, scientific academic books are lengthy; they are highly
              technical and most of the time have a stiff publication timeline.
              They are often classified by subjects, chapters, and authorship;
              moreover, books must comply with strict formatting guidelines to
              meet the requirements of each publisher. Book editing requires
              rigor and excruciating attention to detail. Pubrica experts are
              cognizant of this, as we have assisted clients in every phase of
              the book publication process. PHD, MPHARM, MD, ME, and MS. These
              are the qualifications of our book editors. We provide advice,
              feedback, and reports. Let Pubrica experts edit your book, with
              timely and quick delivery – at a great price.
            </p>
          </div>
        </div>
      </section>

      {/* 3. "How Our Book Editing Service Works" Horizontal Tabs Section */}
      <section className="w-full py-6 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
            How Our Book Editing Service Works
          </h2>
          <h3 className="text-base sm:text-lg font-medium text-[#0d3b36] mb-3">
            Assistance for Every Step of Your Book Journey — Pick the Services
            That Suit You
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Pubrica, we follow a tailored process for authors aiming for top
            publishers. Our transparent, collaborative process transforms your
            manuscript into a submission-ready book with maximum clarity,
            credibility, and commercial/academic impact.
          </p>
        </div>

        {/* Tab Header Bar */}
        <div className="bg-white rounded-t-xl border border-slate-200 shadow-sm overflow-x-auto scrollbar-none">
          <div className="flex min-w-[700px] border-b border-slate-200">
            {stepsData.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-1 py-4 px-3 text-center transition-all duration-200 relative ${
                    isActive
                      ? "bg-white text-blue-600 font-bold border-b-2 border-blue-600"
                      : "bg-slate-50 text-slate-600 hover:text-slate-900 font-semibold"
                  }`}
                >
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs sm:text-sm">{step.tabTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Body Display */}
        <div className="bg-white border-x border-b border-slate-200 rounded-b-xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentStep.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentStep.subheading}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  KEY FEATURES
                </h4>
                <ul className="space-y-2.5">
                  {currentStep.keyFeatures.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start text-xs sm:text-sm text-slate-700"
                    >
                      <span className="text-red-500 font-bold mr-2 text-sm leading-none">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md border border-slate-100">
                <Image
                  src={currentStep.imageSrc}
                  alt={currentStep.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
