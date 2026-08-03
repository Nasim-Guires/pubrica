"use client";

import React from "react";
import Link from "next/link";

export interface QualityFeature {
  id: string;
  title: string;
  description: string;
  iconPlaceholder: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  iconPlaceholder: string;
}

export interface GuaranteeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconPlaceholder: string;
  ctaText: string;
  ctaLink: string;
}

export interface QualityPageProps {
  className?: string;
}

export default function QualityPage({ className = "" }: QualityPageProps) {
  // Features Grid Data
  const mainFeatures: QualityFeature[] = [
    {
      id: "specializations",
      title: "Experts from different specializations",
      description:
        "Pubrica: Experts from various fields collaborate, ensuring top-quality publications tailored to diverse disciplines.",
      iconPlaceholder: "[ Icon: Book / Experts ]",
    },
    {
      id: "native-writers",
      title: "Native English writers",
      description:
        "Pubrica: Native English writers ensure impeccable manuscripts, meeting the highest standards of academic and scientific publishing.",
      iconPlaceholder: "[ Icon: Book / Native Writers ]",
    },
    {
      id: "project-coordinator",
      title: "Specific project coordinator guidance",
      description:
        "Pubrica's project coordinators offer tailored guidance, ensuring seamless execution of your specific project needs.",
      iconPlaceholder: "[ Icon: Book / Coordinator ]",
    },
    {
      id: "phase-quality",
      title: "Quality assured at every phase",
      description:
        "Pubrica ensures quality at every phase, guaranteeing meticulous attention to detail throughout the publication process.",
      iconPlaceholder: "[ Icon: Book / Quality Phase ]",
    },
  ];

  // Key Metrics Data
  const metrics: MetricItem[] = [
    {
      id: "papers",
      value: "972,000+",
      label: "papers edited",
      iconPlaceholder: "[ Icon: Edit ]",
    },
    {
      id: "authors",
      value: "260,000+",
      label: "authors served",
      iconPlaceholder: "[ Icon: Author ]",
    },
    {
      id: "subjects",
      value: "1200+",
      label: "subjects covered",
      iconPlaceholder: "[ Icon: Calendar / Subjects ]",
    },
    {
      id: "experts",
      value: "2000+",
      label: "experts",
      iconPlaceholder: "[ Icon: Shield Expert ]",
    },
    {
      id: "experience",
      value: "16+",
      label: "years of experience",
      iconPlaceholder: "[ Icon: Sparkles ]",
    },
  ];

  // Guarantee Cards Data
  const guarantees: GuaranteeItem[] = [
    {
      id: "global-experts",
      title: "GLOBAL EXPERTS",
      subtitle: "All specializations",
      description:
        "We have a team of 200+ professional, experienced editors in Science, Technology, and Management who work on 170 specializations. Ensure your content is succinct, structured, cohesive, and collated. We help you through the entire lifecycle for academic, scientific, and medical content. We help you with selection, review, preparation, artwork, review, and submission.",
      iconPlaceholder: "[ Icon: Laptop / Experts ]",
      ctaText: "Contact us",
      ctaLink: "/contact",
    },
    {
      id: "swift-response",
      title: "SWIFT RESPONSE",
      subtitle: "Thorough review",
      description:
        "Every project is vetted by couple of experts in language and the core subject. And we have a team of editors and reviewers who check quality of content; moreover, our knowledge at the publication process means your work has a higher chance of being published.",
      iconPlaceholder: "[ Icon: Laptop / Response ]",
      ctaText: "Contact us",
      ctaLink: "/contact",
    },
    {
      id: "privacy-confidentiality",
      title: "PRIVACY & CONFIDENTIALITY",
      subtitle: "Safeguarding data",
      description:
        "Your data, work, concepts, ideas, creative—these are all kept confidential and we guarantee you privacy of your information; you will be have a project coordinator who will work with you every day of the project.",
      iconPlaceholder: "[ Icon: Laptop / Security ]",
      ctaText: "Contact us",
      ctaLink: "/contact",
    },
    {
      id: "all-genres",
      title: "ALL GENRES",
      subtitle: "Writing styles",
      description:
        "We can help you in all types of writing projects—Science, Technology, Engineering and Mathematics (STEM). Certified writing experts available in academic, scientific, medical, fiction, and non-fiction. Let us know your requirements today.",
      iconPlaceholder: "[ Icon: Laptop / Genres ]",
      ctaText: "Contact us",
      ctaLink: "/contact",
    },
  ];

  return (
    <main className={`w-full bg-[#fcfcfd] font-sans text-slate-800 ${className}`}>
      {/* 1. Top Banner Section */}
      <section className="w-full bg-[#1b2b28] text-white py-14 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto border border-[#2d4842] p-8 sm:p-10 rounded-sm bg-[#162422]/60 text-center shadow-inner">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Quality of Publications
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 font-medium">
            100% quality assurance at every stage
          </p>
        </div>
      </section>

      {/* 2. ISO Certification Banner */}
      <section className="w-full bg-white border-b border-slate-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-2">
            Quality Assurance
          </h2>
          <p className="text-base font-semibold text-[#146e56] mb-4">
            100% quality assured
          </p>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            We are <span className="font-bold text-slate-800">ISO 9001:2015</span> certified organization. | Quality assurance in every phase of the project.
          </p>
        </div>
      </section>

      {/* 3. Main Intro & Dark Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-4">
            Pubrica academic and scientific publishing.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pubrica is a leading academic and scientific publishing platform, offering comprehensive editorial services and global dissemination for researchers and scholars worldwide. With a commitment to quality and innovation, Pubrica facilitates the publication of cutting-edge research across diverse disciplines.
          </p>
        </div>

        {/* 2x2 Dark Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mainFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-[#0b3328] hover:bg-[#07271e] transition-colors text-white p-6 sm:p-7 rounded-xl flex items-start gap-5 shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-[#14483a] border border-dashed border-emerald-400/40 flex-shrink-0 flex items-center justify-center p-1 text-center">
                <span className="text-[9px] text-emerald-200 leading-tight font-medium">
                  {item.iconPlaceholder}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="w-full bg-slate-50 border-y border-slate-200/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-8 text-center">
          {metrics.map((stat) => (
            <div key={stat.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100/60 border border-emerald-300 flex items-center justify-center text-center p-1">
                <span className="text-[8px] font-bold text-emerald-800 leading-tight">
                  {stat.iconPlaceholder}
                </span>
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-[#1b2b28]">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 font-medium capitalize">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Editorial & Tag Cloud Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
          {/* Word Cloud Visual Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-xs h-56 rounded-xl bg-emerald-50/50 border-2 border-dashed border-emerald-300 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-2xl font-extrabold text-[#0d4738] mb-1">Quality</span>
              <span className="text-lg font-bold text-slate-700">ISO | MLA | APA</span>
              <span className="text-xs text-slate-500 mt-2">[ Interactive Tag Cloud Visual ]</span>
            </div>
          </div>

          {/* Description Text */}
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We have a team of 200+ professional, experienced editors in Science, Technology, and Management who work on 170 specializations. Ensure your content is succinct, structured, cohesive, and collated. We guide you through the entire lifecycle for academic, scientific, and medical content. We help you with selection, review, preparation, artwork, review, and submission.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#1b2b28]">
              Partner with us today to publish your paper; contact us through{" "}
              <a href="tel:+919884350005" className="text-[#1b8c6e] hover:underline font-bold">
                +91 9884350005
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 6. Guarantee Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-3">
            We guarantee
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pubrica assures academic and scientific publishing excellence, delivering unparalleled support and satisfaction to researchers globally. Trust us for your scholarly journey.
          </p>
        </div>

        {/* 2x2 Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {guarantees.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-between"
            >
              <div>
                {/* Icon Placeholder */}
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 p-2">
                  <span className="text-[9px] font-bold text-emerald-800 leading-tight">
                    {item.iconPlaceholder}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1b2b28] tracking-wider uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={item.ctaLink}
                className="text-xs font-bold text-slate-800 hover:text-[#1b8c6e] border border-slate-300 hover:border-[#1b8c6e] px-6 py-2 rounded-md transition-colors inline-block"
              >
                {item.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Added Section: Quality Commitment & Values */}
      <section className="w-full bg-slate-50/70 border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10 text-left">
          {/* Quality of your work */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#1b2b28]">
              Quality of your work
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We are ISO 9001:2015 certified organization; 100% quality assurance in every phase of the project. This is our commitment.
            </p>
          </div>

          {/* Your delight is ours too—always */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#1b2b28]">
              Your delight is ours too—always
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your work will be on par with international standards and we publish in acclaimed journals and renowned publications. Scientific Writing & Publishing circumvents rejection through a pool of experts who vet your work before sending to the publisher.
            </p>
          </div>

          {/* We value your time */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#1b2b28]">
              We value your time
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You may be in the midst of some important work and may not have the time to write that novel or paper. We understand this and help you complete your writing project.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}