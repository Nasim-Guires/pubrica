"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceBullet {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface TargetAudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const ThesisEditingPage: React.FC = () => {
  // State for active audience card (handles touch toggling on mobile)
  const [activeAudienceId, setActiveAudienceId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveAudienceId((prev) => (prev === id ? null : id));
  };

  // Top Overview Highlights
  const heroHighlights = [
    "Correction of sentence construction, grammar, spelling, and punctuation",
    "Ensure your terminology is consistent & accurate in your subject area",
    "Have a high accuracy rate with 2 levels of editor checks",
    "Top quality delivered by 3,163+ native English speakers in 1640+ subjects",
  ];

  // What We Do Detailed List
  const whatWeDoList: ServiceBullet[] = [
    {
      title: "Expert Editing Team",
      description:
        "Our editors possess advanced academic qualifications and extensive experience in thesis editing. They are skilled at addressing the unique challenges faced by ESL students, ensuring that every thesis is clear, coherent, and grammatically correct.",
    },
    {
      title: "Comprehensive Review Process",
      description:
        "We conduct a thorough review of your thesis, focusing on consistency, coherence, clarity, style usage, mechanics, and grammar. Our goal is to refine your thesis so that it effectively communicates your research findings.",
    },
    {
      title: "Support for All Academic Levels",
      description:
        "Whether you are an undergraduate, master’s, or PhD student, our editors are designed to cater to all levels of academic study. We understand the nuances of thesis writing and offer personalized guidance to help you succeed.",
    },
    {
      title: "Preparation for Dissertation Committee",
      description:
        "Our thesis editing and proofreading services prepare your document for presentation to your dissertation committee, boosting your confidence and increasing your chances of approval.",
      linkText: "proofreading",
      linkHref: "/services/editing-and-translation/proofreading",
    },
    {
      title: "Navigating the Thesis Journey",
      description:
        "We support you throughout your academic journey, from regular assignments and semester projects to your culminating thesis project. Our editors provide valuable feedback and actionable advice to improve your writing.",
    },
    {
      title: "Timely and Efficient Service",
      description:
        "We are committed to providing timely services to help you meet your academic deadlines without compromising on quality.",
    },
  ];

  // Who We Serve Grid Data
  const audienceCards: TargetAudienceCard[] = [
    {
      id: "masters-phd",
      title: "Master’s and PhD Students",
      description:
        "Ensuring your thesis meets university submission standards with clarity, accuracy, and scholarly precision.",
      imageSrc:
        "/images/editing-and-translation/thesis-editing/Masters-and-PhD-Students.png",
    },
    {
      id: "early-career",
      title: "Early-Career Researchers",
      description:
        "Helping you transform your thesis into a polished document that can lead to publications and future research opportunities.",
      imageSrc:
        "/images/editing-and-translation/thesis-editing/Early-Career-Researchers.png",
    },
    {
      id: "international-students",
      title: "International Students",
      description:
        "Assisting non-native English speakers in presenting their research with fluency, coherence, and academic style.",
      imageSrc:
        "/images/editing-and-translation/thesis-editing/International-Students.png",
    },
    {
      id: "universities-institutions",
      title: "Universities and Institutions",
      description:
        "Partnering with academic bodies to provide editing support that enhances student success and institutional reputation.",
      imageSrc:
        "/images/editing-and-translation/thesis-editing/Universities-and-Institutions.png",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      {/* ============================================================= */}
      {/* 1. HERO SECTION BANNER                                        */}
      {/* ============================================================= */}
   

      {/* ============================================================= */}
      {/* 3. WHAT WE DO SECTION                                         */}
      {/* ============================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-5 border-t border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-4">
          What We Do
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 max-w-5xl">
          Pubrica offers specialized{" "}
          <Link href="/insights/thesis-poster-example-for-students" className="text-blue-600 ">
            thesis editing services
          </Link>{" "}
          tailored for both native English speakers and those for whom English
          is a second language (ESL). Our services are designed to enhance the
          quality of your thesis, ensuring it meets the high standards required
          by academic institutions.
        </p>

        {/* What We Do Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Overlapping Image Collage Column */}
          <div className="lg:col-span-5 relative py-6 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="/images/editing-and-translation/thesis-editing/What-We-Do.png"
                alt="Thesis editing what we do"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text List Column */}
          <div className="lg:col-span-7 space-y-4">
            <ul className="space-y-4">
              {whatWeDoList.slice(0, 3).map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                >
                  <strong className="font-bold text-slate-900">
                    • {item.title}:{" "}
                  </strong>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Width Remaining Bullet Points */}
        <div className="mt-6 space-y-4">
          <ul className="space-y-4">
            {whatWeDoList.slice(3).map((item, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-600 leading-relaxed"
              >
                <strong className="font-bold text-slate-900">
                  • {item.title}:{" "}
                </strong>
                {item.title === "Preparation for Dissertation Committee" ? (
                  <>
                    Our thesis editing and{" "}
                    <Link
                      href={item.linkHref!}
                      className="text-blue-600 "
                    >
                      {item.linkText}
                    </Link>{" "}
                    services prepare your document for presentation to your
                    dissertation committee, boosting your confidence and
                    increasing your chances of approval.
                  </>
                ) : (
                  item.description
                )}
              </li>
            ))}
          </ul>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4">
            Choose Pubrica for comprehensive thesis editing services that ensure
            your thesis is well-prepared for submission. With our expert
            support, you can confidently present a polished, professionally
            edited thesis that stands out. Contact us today to learn how we can
            assist you in achieving academic excellence.
          </p>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. WHO WE SERVE SECTION                                        */}
      {/* ============================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 border-t border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
          Who We Serve
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-8 max-w-4xl">
          At Pubrica, we support a wide range of researchers and scholars in
          refining their academic work. Our thesis editing services are designed
          to meet the needs of:
        </p>

        {/* Target Audience Interactive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceCards.map((card) => {
            const isActive = activeAudienceId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                onMouseEnter={() => setActiveAudienceId(card.id)}
                onMouseLeave={() => setActiveAudienceId(null)}
                className="group relative h-64 sm:h-72 rounded-lg overflow-hidden bg-black shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Card Image Background */}
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-opacity duration-300 group-hover:opacity-20 ${
                    isActive ? "opacity-20" : "opacity-100"
                  }`}
                />

                {/* Gradient Overlay for Default Title State */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Default View (Title at Bottom) */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* Hover View (Black Overlay with Full Description) */}
                <div
                  className={`absolute inset-0 bg-black p-6 flex flex-col justify-center text-white transition-opacity duration-300 z-20 space-y-3 group-hover:opacity-100 ${
                    isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};