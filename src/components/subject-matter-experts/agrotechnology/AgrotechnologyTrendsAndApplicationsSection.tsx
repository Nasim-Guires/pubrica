"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sprout,
  Cpu,
  CloudSun,
  BarChart3,
  Zap,
  PawPrint,
  ShieldCheck,
  Warehouse,
  Sun,
} from "lucide-react";
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import ApplicationsSection, { ApplicationItem } from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function AgrotechnologyCompleteSection() {
  const [activeTab, setActiveTab] = useState(0);

  const emergingTrends = [
    {
      id: "ai-agriculture",
      title: "Artificial Intelligence (AI) in Agriculture",
      description:
        "AI-powered tools analyze crop and soil data, predict yields, and optimize farm management practices. AI is also being used in autonomous machinery for seeding, weeding, and harvesting.",
    },
    {
      id: "robotics",
      title: "Robotics and Automation",
      description:
        "Advanced robots perform tasks like harvesting fruits and vegetables, planting seeds, and managing weeds, reducing labour dependency and increasing operational efficiency.",
    },
    {
      id: "climate-smart",
      title: "Climate-Smart Agriculture",
      description:
        "Integration of agrotechnology with climate data helps farmers adapt to changing weather patterns, manage water efficiently, and select climate-resilient crops.",
    },
    {
      id: "big-data",
      title: "Big Data Analytics",
      description:
        "Collecting and analyzing vast amounts of agricultural data enables predictive insights, allowing farmers to make informed decisions regarding crop rotation, pest management, and resource allocation.",
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy Integration",
      description:
        "Solar-powered irrigation systems, bioenergy production, and other renewable energy solutions are being integrated into farms to reduce operational costs and carbon footprint.",
    },
  ];

  const applications: ApplicationItem[] = [
    {
      title: "Crop Production:",
      desc: "Enhanced seed varieties, precision farming tools, and smart irrigation systems increase yield, improve crop quality, and reduce losses.",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Crop-Production.png",
      icon: Sprout,
    },
    {
      title: "Livestock Management:",
      desc: "Automated feeding systems, health monitoring devices, and genetic selection improve animal health, reproduction rates, and overall productivity.",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Livestock-Management.png",
      icon: PawPrint,
    },
    {
      title: "Pest and Disease Control:",
      desc: "Integrated pest management systems, biological control agents, and disease-resistant crops reduce reliance on chemical pesticides.",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Pest-and-Disease-Control.png",
      icon: ShieldCheck,
    },
    {
      title: "Post-Harvest Management:",
      desc: "Storage technologies, cold chains, and automated processing equipment help minimize post-harvest losses and maintain product quality.",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Post-Harvest-Management.png",
      icon: Warehouse,
    },
    {
      title: "Agro-Energy Solutions:",
      desc: "Biofuels, solar-powered irrigation, and waste-to-energy systems contribute to sustainable energy use in agriculture.",
      iconSrc:
        "/images/subject-matter-experts/agrotechnology/Agro-Energy-Solutions.png",
      icon: Sun,
    },
  ];

  const publication: AuthorPublicationData = {
    imageSrc:
      "/images/subject-matter-experts/agrotechnology/sample-works-2.webp",
    imageAlt: "Agronomy Journal Cover",
    paperTitle:
      "Prohexadione-Calcium Mitigates the Overgrowth of Corn Seedlings",
    author: "Duong MV, Chung J-W, Ha VG, Moon H, Yu J-K, So Y-S",
    publisher: "MDPI",
    journalName: "Agronomy",
    impactFactor: "3.4",
  };


  const editors: ExpertEditorItem[] = [
    {
      name: "Dr. Anjali Verma",
      degree: "Ph.D. in Plant Biotechnology",
      flag: "/images/country/gb.png",
      avatar:
        "/images/subject-matter-experts/agriculture/Dr.-Neha-Verma.webp",
      experience: "9 years of experience",
      manuscripts: "90+ manuscripts edited",
    },
    {
      name: "Dr. Kavita Reddy",
      degree: "Ph.D. in Agricultural Engineering",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/agrotechnology/Dr.-Kavita-Reddy.webp",
      experience: "10 years of experience",
      manuscripts: "100+ manuscripts edited",
    },
    {
      name: "Dr. Priya Sharma",
      degree: "Ph.D. in Crop Science",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/agrotechnology/Dr.-Priya-Sharma.webp",
      experience: "8 years of experience",
      manuscripts: "85+ manuscripts edited",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50/50 font-sans text-gray-800 space-y-12">

      {/* SECTION 1: EMERGING TRENDS IN AGROTECHNOLOGY */}
        <EmergingTrendsSection
          title="Emerging Trends in Agrotechnology"
          description="The agricultural sector is witnessing rapid technological evolution. Some emerging trends include:"
          trends={emergingTrends}
          footerText=""
        />

      {/* SECTION 2: APPLICATIONS OF AGROTECHNOLOGY */}
        <ApplicationsSection
          title="Applications of Agrotechnology"
          description="Agrotechnology has a wide range of practical applications across crop cultivation, livestock management, and post-harvest processes:"
          applications={applications}
          imageSrc="/images/subject-matter-experts/agrotechnology/Applications-of-Agrotechnology.webp"
          imageAlt="Applications of Agrotechnology"
        />

      {/* SECTION 3: WHERE OUR AUTHORS PUBLISH */}
    
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={publication}
        />

      {/* SECTION 4: OUR EXPERT AGROTECHNOLOGY EDITORS */}
        <ExpertEditorsSection
          title="Our Expert Agrotechnology Editors"
          description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
          editors={editors}
        />

    </div>
  );
}