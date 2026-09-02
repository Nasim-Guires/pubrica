"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  BookOpen,
  ClipboardList,
  GraduationCap,
  Award,
  FileSpreadsheet,
  Send,
  Presentation,
  Users,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Link from "next/link";
import HeroBanner from "@/components/common/HeroBanner";

interface OfferCard {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

const offerItems: OfferCard[] = [
  {
    id: 1,
    title: "Manuscript Development",
    description:
      "Original research articles, systematic reviews, case reports, and abstracts, structured to match clinical relevance and academic rigor.",
    icon: FileText,
    href: "/services/publication-support/journal-selection/",
  },
  {
    id: 2,
    title: "Thesis and Dissertation Writing",
    description:
      "Support for physician-researchers pursuing advanced academic degrees (MD, DM, PhD, etc.), with content aligned to institutional and regulatory criteria.",
    icon: BookOpen,
    href: "/services/publication-support/peer-review-pre-submission/",
  },
  {
    id: 3,
    title: "Regulatory and Clinical Documents",
    description:
      "Clinical protocols, CSRs, and investigator brochures are developed with physician investigators in mind, ensuring regulatory compliance and scientific clarity.",
    icon: ClipboardList,
    href: "/services/publication-support/journal-submission/",
  },
  {
    id: 4,
    title: "Continuing Medical Education Content",
    description:
      "Evidence-based modules and training materials developed for physician education, certification, and knowledge advancement.",
    icon: GraduationCap,
    href: "/services/publication-support/responding-to-reviewers/",
  },
  {
    id: 5,
    title: "Grant Proposal Writing",
    description:
      "Strategically crafted funding proposals tailored to the needs of physician-scientists targeting national and international funding bodies.",
    icon: Award,
    href: "/services/publication-support/poster-preparation/",
  },
  {
    id: 6,
    title: "Case Series and Clinical Insights Documentation",
    description:
      "Development of multi-case narratives, procedural overviews, and clinical technique reports that support knowledge sharing among peers and specialists.",
    icon: FileSpreadsheet,
    href: "/services/publication-support/journal-manuscript-formatting-services/",
  },
  {
    id: 7,
    title: "Journal Submission Support",
    description:
      "End-to-end assistance with cover letters, conflict of interest statements, author contributions, and handling revisions and reviewer comments, particularly useful for busy physicians.",
    icon: Send,
    href: "/services/publication-support/art-work-preparation/",
  },
  {
    id: 8,
    title: "Medical Conference Presentations",
    description:
      "Creation of slide decks, speaker notes, posters, and oral presentation scripts tailored to scientific or clinical meetings.",
    icon: Presentation,
    href: "/services/publication-support/plagiarism-services/",
  },
  {
    id: 9,
    title: "Patient Education Materials",
    description:
      "Though physician-facing, providing customized, evidence-based materials for patient communication supports physicians in improving patient engagement and understanding.",
    icon: Users,
    href: "/services/publication-support/video-abstract/",
  },
  {
    id: 10,
    title: "Publication Planning and Strategy",
    description:
      "Strategic support for physician-authors or medical KOLs with long-term publication goals across journals, meetings, and therapeutic areas.",
    icon: Calendar,
    href: "/services/",
  },
  {
    id: 11,
    title: "Peer Review Response and Rebuttal Letter Writing",
    description:
      "Assistance with professionally crafted responses to reviewer comments improves the chances of manuscript acceptance.",
    icon: MessageSquare,
    href: "/services/",
  },
  {
    id: 12,
    title: "Custom Content & Strategic Support",
    description:
      "Tailored medical writing to meet unique needs, hospital reports, white papers, medico-legal content, and institutional documentation publication planning, journal selection guidance, and editorial consulting.",
    icon: Sparkles,
    href: "/services/",
  },
];

export default function CustomizedPhysicianMedicalWritingService() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">

      {/* 1. Full-Width Dark Banner matching exact site design */}
      <HeroBanner
        title="Customized Medical Writing Service for Physicians"
        description="Pubrica's customer medical writing service provides tailored solutions for physician researchers and academics, ensuring meticulously crafted scientific manuscripts that meet exacting global standards and exceed expectations across diverse academic fields."
        headingAs="h1"
      />

      {/* Main Page Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-16">

        {/* 2. Overview Section with Image Block */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a2b49] leading-snug">
              Customized Medical Writing Services Exclusively for Physicians: Precision-Crafted Academic and Clinical Manuscripts Aligned with Physician Research and Practice Goals
            </h2>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              At Pubrica, we provide customized medical writing services tailored for physicians, clinicians, and educators to produce high-impact and publication-ready content. We develop academic and clinical manuscripts that are technically accurate and contextually appropriate, while also aligning with your career trajectory, research objectives, and patient care.
            </p>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              We prioritize physician-driven research, education about clinical standards and regulatory requirements, and we write customized documents that comply with journal mandates, institutional policies, and international publishing quality standards. We support each step of the physician&apos;s academic and clinical journey through our writing, from research manuscripts to CME.
            </p>

            {/* Key Features Bullet List */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-bold text-slate-900">Key Features</h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Authored by domain-specific <Link href="/subject-matter-experts" className="text-blue-600  no-underline hover:no-underline">subject matter experts</Link> with a clinical background
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Adheres to <Link href="https://www.icmje.org/" className="text-blue-600">ICMJE</Link>, GPP3, and target journal formatting standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Includes technical editing, <Link href="/services/publication-support/plagiarism-services/" className="text-blue-600">plagiarism</Link> screening, and language refinement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Fully customizable to your clinical specialty, format, and level of detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Seamless integration with{" "}
                    <Link
                      href="/services/editing-and-translation/manuscript-editing/"
                      className="text-blue-600 "
                    >
                      manuscript editing
                    </Link>
                    ,{" "}
                    <Link
                      href="/services/publication-support/peer-review-pre-submission/"
                      className="text-blue-600 "
                    >
                      peer review
                    </Link>
                    , and{" "}
                    <Link
                      href="/services/publication-support/journal-submission/"
                      className="text-blue-600 "
                    >
                      journal submission
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Image Block with Offset Backdrop */}
          <div className="lg:col-span-5 relative pt-4">
            <div className="relative">
              {/* Dark Green Offset Backdrop */}
              <div className="absolute inset-0 rounded-xl transform translate-x-3 translate-y-3 -z-0"></div>

              {/* Foreground Image */}
              <div className="relative z-10 rounded-xl overflow-hidden  border-slate-200">
                <Image
                  src="/images/physician-writing-services/customized-writing/Customized-Medical-Writing-Services-Exclusively-for-Physicians.webp"
                  alt="Physicians reviewing clinical documents"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. What We Offer Section */}
        <section className="space-y-6 pt-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2b49] mb-2">
              What We Offer
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-5xl">
              We provide customized <Link
                href="/services/research-services/medical-writing/"
                className="text-blue-600"
              >
                medical writing
              </Link> services tailored to the needs of physicians in clinical, academic, educational, and professional development settings. From publishing articles to grant applications, training programs, to clinical documentation, we provide accurate, publication-ready content that meets your needs.
            </p>
            <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">
              Our physician-oriented writing solutions are based on your specialty, institution, and goal.
            </p>
          </div>

          {/* 12-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offerItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="bg-white hover:bg-[#dbeafe] border border-slate-200/80 rounded-md p-5 transition-all duration-300 shadow-xs flex flex-col items-start space-y-3 cursor-pointer group block"
                >
                  {/* Badge Icon Header */}
                  <div className="w-10 h-10 rounded-full bg-amber-100/80 border border-amber-300/60 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200/90 transition-colors">
                    <IconComponent className="w-5 h-5 text-amber-800" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[11px] text-slate-600 group-hover:text-slate-800 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}