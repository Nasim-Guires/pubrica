"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Layers,
  Droplet,
  Cog,
  Dna,
  Leaf,
  Search,
  FileCheck,
  BarChart2,
  CheckCircle,
  FileText,
  Send,
  Compass,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function AgrotechnologySMEPage() {
  // --- CORE DISCIPLINES IN AGROTECHNOLOGY ---
  const coreDisciplines = [
    {
      title: "Crop Science & Management",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Crop-Science-Management.png",
      desc: "We focus on improving crop yield, quality, and resilience through modern cultivation practices, hybrid varieties, and integrated pest and disease management strategies.",
      icon: Sprout,
    },
    {
      title: "Soil Science & Fertility",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Soil-Science-Fertility.png",
      desc: "Our work emphasizes understanding soil properties and nutrient dynamics to enhance soil health, optimize fertilizer use, and ensure long-term land productivity.",
      icon: Layers,
    },
    {
      title: "Water & Irrigation Technology",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Water-Irrigation-Technology.png",
      desc: "We implement efficient water management solutions, including drip and sprinkler irrigation systems, to conserve water resources and enhance crop performance.",
      icon: Droplet,
    },
    {
      title: "Farm Mechanization",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Farm-Mechanization.png",
      desc: "Pubrica promotes the adoption of modern agricultural machinery for planting, harvesting, and post-harvest operations, reducing labour requirements and improving efficiency.",
      icon: Cog,
    },
    {
      title: "Plant Biotechnology",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Plant-Biotechnology.png",
      desc: "Through genetic improvement and biotechnological interventions, we develop crops with enhanced resistance, productivity, and nutritional value.",
      icon: Dna,
    },
    {
      title: "Agro-Ecology & Sustainable Farming",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Agro-Ecology-Sustainable-Farming.png",
      desc: "We advocate for environmentally responsible practices such as organic farming, crop rotation, and integrated farming systems to ensure sustainability and ecological balance.",
      icon: Leaf,
    },
  ];

  // --- WHY CHOOSE PUBRICA SERVICES (9 CARDS) ---
  const expertiseCards: ExpertiseCardItem[] = [
    {
      title: "Scientific Writing",
      desc: "Crafting clear, precise, and publication-ready research manuscripts.",
      icon: Search,
      imageUrl:
        "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
      href: "/services/research-services/scientific-writing/",
    },
    {
      title: "Editing & Proofreading",
      desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      icon: FileCheck,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
      href: "/services/editing-and-translation/",
    },
    {
      title: "Biostatistical Programming",
      desc: "Advanced statistical analysis to support your research findings.",
      icon: BarChart2,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Biostatistical-Programming.webp",
      href: "/services/research-services/biostatistics-and-statistical-programming-services/",
    },
    {
      title: "Peer-Review",
      desc: "Comprehensive review to refine and validate your research pre-submission.",
      icon: CheckCircle,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Peer-Review.webp",
      href: "/services/publication-support/peer-review-pre-submission/",
    },
    {
      title: "Journal Formatting",
      desc: "Tailored manuscript formatting to meet specific journal guidelines..",
      icon: FileText,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
      href: "/services/publication-support/journal-manuscript-formatting-services/",
    },
    {
      title: "Journal Submission",
      desc: "Helping select the right journals and manage the submission process seamlessly.",
      icon: Send,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
      href: "/services/publication-support/journal-submission/",
    },
    {
      title: "Journal Selection",
      desc: "Strategic journal selection to maximize publication success.",
      icon: Compass,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
      href: "/services/publication-support/journal-selection/",
    },
    {
      title: "Responding to Reviewers",
      desc: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
      icon: MessageSquare,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
      href: "/services/publication-support/responding-to-reviewers/",
    },
    {
      title: "Literature Review and Gap Analysis",
      desc: "Identifying research gaps and providing comprehensive literature reviews.",
      icon: BookOpen,
      imageUrl:
        "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
      href: "/services/research-services/literature-review-and-gap/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
      {/* Custom Scrollbar for Cards */}
      <style>{`
        .card-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .card-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb {
          background: #0d3630;
          border-radius: 4px;
        }
      `}</style>

      {/* HEADER HERO BANNER */}
      <HeroBanner
        title="Agrotechnology"
        description="Agrotechnology focuses on leveraging advanced methods and technologies to optimize agricultural processes, increase crop yields, and promote sustainable farming practices."
        headingAs="h1"
      />

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-2 space-y-16">

        {/* INTRO SECTION */}
        <section className="pt-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section heading placed entirely above the grid and image */}
              <div className="mb-5">
                <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                  Agrotechnology: Advancing Modern Agriculture Through Science and Innovation
                </h2>
              </div>

              <div className="flow-root">
                {/* Right Circular Image */}
                <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                    <Image
                      src="/images/subject-matter-experts/agrotechnology/Agrotechnology-Advancing-Modern-Agriculture-Through-Science-and-Innovation.webp"
                      alt="Agrotechnology and Modern Farming"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                    />
                  </div>
                </div>

                <div className="space-y-5 text-slate-700">
                  <div className="space-y-5 text-base leading-relaxed">
                    <p>
                      Agrotechnology refers to the application of various techniques in farming to enhance the growth and harvesting of plants and animals. The process begins with the mechanical preparation of the soil to create the ideal conditions for planting, incorporating added nutrients and trace elements to promote healthy plant growth. Soil texture analysis and seedbed preparation follow to ensure optimal conditions for seed germination and growth. There are multiple farming techniques, each with specific requirements and procedures.
                    </p>

                    <p>
                      With the global population projected to exceed 9 billion by 2050, the pressure on <Link href="/subject-matter-experts/agriculture/" className="text-blue-600">agriculture</Link> to produce more food efficiently is immense. Traditional farming methods alone are insufficient to meet these demands while preserving natural resources. Agrotechnology provides the tools and techniques necessary to increase yields, reduce resource wastage, and minimize environmental impact.
                    </p>
                  </div>

                  {/* Key Farming Techniques list matched to screenshot style */}
                  <div className="pt-2 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      Key Farming Techniques
                    </h3>

                    <div className="space-y-4 pl-4">
                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-slate-900">Tenant Farming:</strong> This agricultural system involves landowners receiving shares while management carries out the farming activities. It is often referred to as industrial farming.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-slate-900">Mechanized Farming:</strong> Uses large machinery for tasks like soil tillage, fertilization, planting, pest control, harvesting, irrigation, and water conservation, covering large areas efficiently and cost-effectively.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-slate-900">Modern Agricultural Machinery:</strong> Advanced machines perform complex operations, including precise water management, automated animal feeding, and specialized milk production processes.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-slate-900">Technological Developments in Agriculture:</strong> Innovations in agrotechnology have replaced traditional tools, enhanced efficiency, reduced manual labour, and increased overall farm productivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <GetFreeQuoteButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: OUR CORE DISCIPLINES IN AGROTECHNOLOGY (No Side Bar, Enhanced Hover Effect for Cards) */}
        <CoreAreasSection
          title="Our Core Disciplines In Agrotechnology"
          description="At Pubrica, we specialize in leveraging the latest advancements in agrotechnology to drive innovation, efficiency, and sustainability in agriculture. Our expertise spans multiple core disciplines designed to optimize productivity and support informed decision-making for farmers, researchers, and agribusinesses."
          items={coreDisciplines}
        />

        {/* SECTION: WHY CHOOSE PUBRICA FOR AGROTECHNOLOGY RESEARCH AND PUBLISHING? */}
        <CommonExpertiseCards
          title="Why Choose Pubrica for Agrotechnology Research and Publishing?"
          description="At Pubrica, we combine scientific precision with publishing excellence to support researchers, scholars, and institutions in the fast-evolving field of agrotechnology. From soil science and sustainable farming systems to agricultural biotechnology and precision agriculture, our experts help you transform research ideas into impactful publications that advance global agricultural innovation."
          cards={expertiseCards}
        />
      </main>
    </div>
  );
}