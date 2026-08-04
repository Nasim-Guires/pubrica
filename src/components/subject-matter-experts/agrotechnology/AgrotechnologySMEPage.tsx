"use client";

import React, { useState } from "react";
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

export default function AgrotechnologySMEPage() {
  // --- CORE DISCIPLINES IN AGROTECHNOLOGY ---
  const coreDisciplines = [
    {
      title: "Crop Science & Management",
      desc: "We focus on improving crop yield, quality, and resilience through modern cultivation practices, hybrid varieties, and integrated pest and disease management strategies.",
      icon: Sprout,
    },
    {
      title: "Soil Science & Fertility",
      desc: "Our work emphasizes understanding soil properties and nutrient dynamics to enhance soil health, optimize fertilizer use, and ensure long-term land productivity.",
      icon: Layers,
    },
    {
      title: "Water & Irrigation Technology",
      desc: "We implement efficient water management solutions, including drip and sprinkler irrigation systems, to conserve water resources and enhance crop performance.",
      icon: Droplet,
    },
    {
      title: "Farm Mechanization",
      desc: "Pubrica promotes the adoption of modern agricultural machinery for planting, harvesting, and post-harvest operations, reducing labour requirements and improving efficiency.",
      icon: Cog,
    },
    {
      title: "Plant Biotechnology",
      desc: "Through genetic improvement and biotechnological interventions, we develop crops with enhanced resistance, productivity, and nutritional value.",
      icon: Dna,
    },
    {
      title: "Agro-Ecology & Sustainable Farming",
      desc: "We advocate for environmentally responsible practices such as organic farming, crop rotation, and integrated farming systems to ensure sustainability and ecological balance.",
      icon: Leaf,
    },
  ];

  // --- WHY CHOOSE PUBRICA SERVICES (9 CARDS) ---
  const services = [
    {
      title: "Scientific Writing",
      subtitle: "Crafting clear, precise, and publication-ready research manuscripts.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      icon: Search,
    },
    {
      title: "Editing & Proofreading",
      subtitle: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      icon: FileCheck,
    },
    {
      title: "Biostatistical Programming",
      subtitle: "Advanced statistical analysis to support your research findings.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      icon: BarChart2,
    },
    {
      title: "Peer-Review",
      subtitle: "Comprehensive review to refine and validate your research pre-submission.",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      icon: CheckCircle,
    },
    {
      title: "Journal Formatting",
      subtitle: "Tailored manuscript formatting to meet specific journal guidelines..",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
      icon: FileText,
    },
    {
      title: "Journal Submission",
      subtitle: "Helping select the right journals and manage the submission process seamlessly.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      icon: Send,
    },
    {
      title: "Journal Selection",
      subtitle: "Strategic journal selection to maximize publication success.",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
      icon: Compass,
    },
    {
      title: "Responding to Reviewers",
      subtitle: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
      icon: MessageSquare,
    },
    {
      title: "Literature Review and Gap Analysis",
      subtitle: "Identifying research gaps and providing comprehensive literature reviews.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      icon: BookOpen,
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
      <header className="w-full bg-[#0d3630] text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-500/40 py-8 px-6 bg-[#0a2c27]/40 backdrop-blur-sm rounded-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Agrotechnology
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Agrotechnology focuses on leveraging advanced methods and technologies to optimize agricultural processes, increase crop yields, and promote sustainable farming practices.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* INTRO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight">
              Agrotechnology: Advancing Modern Agriculture Through Science and Innovation
            </h2>

            <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
              <p>
                Agrotechnology refers to the application of various techniques in farming to enhance the growth and harvesting of plants and animals. The process begins with the mechanical preparation of the soil to create the ideal conditions for planting, incorporating added nutrients and trace elements to promote healthy plant growth. Soil texture analysis and seedbed preparation follow to ensure optimal conditions for seed germination and growth. There are multiple farming techniques, each with specific requirements and procedures.
              </p>
              <p>
                With the global population projected to exceed 9 billion by 2050, the pressure on agriculture to produce more food efficiently is immense. Traditional farming methods alone are insufficient to meet these demands while preserving natural resources. Agrotechnology provides the tools and techniques necessary to increase yields, reduce resource wastage, and minimize environmental impact.
              </p>
            </div>

            {/* Key Farming Techniques list */}
            <div className="space-y-2 pt-2 text-xs md:text-sm">
              <h3 className="font-bold text-[#0d3630]">Key Farming Techniques</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong className="text-gray-800">Tenant Farming:</strong> This agricultural system involves landowners receiving shares while management carries out the farming activities. It is often referred to as industrial farming.
                </li>
                <li>
                  <strong className="text-gray-800">Mechanized Farming:</strong> Uses large machinery for tasks like soil tillage, fertilization, planting, pest control, harvesting, irrigation, and water conservation, covering large areas efficiently and cost-effectively.
                </li>
                <li>
                  <strong className="text-gray-800">Modern Agricultural Machinery:</strong> Advanced machines perform complex operations, including precise water management, automated animal feeding, and specialized milk production processes.
                </li>
                <li>
                  <strong className="text-gray-800">Technological Developments in Agriculture:</strong> Innovations in agrotechnology have replaced traditional tools, enhanced efficiency, reduced manual labour, and increased overall farm productivity.
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="#quote"
                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-sm shadow-sm transition-colors duration-150"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Right Circular Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800"
                alt="Agrotechnology and Modern Farming"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* SECTION: OUR CORE DISCIPLINES IN AGROTECHNOLOGY (No Side Bar, Enhanced Hover Effect for Cards) */}
        <section className="space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0d3630]">
              Our Core Disciplines In Agrotechnology
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, we specialize in leveraging the latest advancements in agrotechnology to drive innovation, efficiency, and sustainability in agriculture. Our expertise spans multiple core disciplines designed to optimize productivity and support informed decision-making for farmers, researchers, and agribusinesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreDisciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-48 relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-[#b81c1c] leading-snug mb-2">
                        {item.title}
                      </h3>
                      <div className="overflow-y-auto card-scrollbar pr-2 text-[11px] text-gray-600 leading-relaxed max-h-20">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    <div className="p-2 bg-[#0d3630]/10 rounded-lg text-[#0d3630] shrink-0 group-hover:bg-[#0d3630] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: WHY CHOOSE PUBRICA FOR AGROTECHNOLOGY RESEARCH AND PUBLISHING? */}
        <section className="space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0d3630]">
              Why Choose Pubrica for Agrotechnology Research and Publishing?
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, we combine scientific precision with publishing excellence to support researchers, scholars, and institutions in the fast-evolving field of agrotechnology. From soil science and sustainable farming systems to agricultural biotechnology and precision agriculture, our experts help you transform research ideas into impactful publications that advance global agricultural innovation.
            </p>
          </div>

          {/* GRID OF SERVICE CARDS (With Hover Slide Reveal + Hover Effect for all cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;

              return (
                <div
                  key={idx}
                  className="group relative bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-72"
                >
                  {/* Image Container taking up full top height by default */}
                  <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-gray-100">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark overlay that appears/deepens on hover for contrast */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Static White Bottom Banner / Floating Card Portion */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-72px)] group-hover:translate-y-0 flex flex-col h-44 z-10 shadow-lg">
                    
                    {/* Centered Circular Icon overlapping top border of the banner */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-full border border-gray-200 shadow-md group-hover:bg-[#0d3630] group-hover:text-white transition-colors duration-300">
                      <ServiceIcon className="w-4 h-4 text-[#0d3630] group-hover:text-white" />
                    </div>

                    {/* Title always visible at top of card */}
                    <div className="pt-3 text-center">
                      <h3 className="text-xs font-bold text-[#0d3630] leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Subtitle description revealed upon cursor hover */}
                    <div className="mt-3 text-center overflow-hidden flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <p className="text-[11px] text-gray-600 leading-relaxed px-1">
                        {service.subtitle}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}