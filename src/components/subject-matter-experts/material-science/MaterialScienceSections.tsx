"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData = [
  {
    id: "renewable-energy",
    title: "Materials for Renewable Energy",
    description:
      "Materials enabling solar cells, lithium batteries, supercapacitors, hydrogen storage, and fuel cells are central to the clean energy revolution.",
  },
  {
    id: "quantum-materials",
    title: "2D & Quantum Materials",
    description:
      "Atomically thin materials such as graphene, MoS₂, and topological insulators enable extreme miniaturization of electronics and new physical properties at nanoscale dimensions.",
  },
  {
    id: "ai-materials",
    title: "AI-Driven Materials Design",
    description:
      "Machine learning and computational models now accelerate material discovery by predicting properties before laboratory synthesis—dramatically reducing development cycles.",
  },
  {
    id: "sustainable-materials",
    title: "Sustainable & Circular Materials",
    description:
      "Green material development prioritizes recyclability, minimal environmental footprint, and efficient resource use, critical for global sustainability goals.",
  },
  {
    id: "smart-materials",
    title: "Smart and Responsive Materials",
    description:
      "Shape-memory alloys, self-healing polymers, and stimuli-responsive systems are being developed for robotics, adaptive structures, and medical devices.",
  },
];

const editorsData: ExpertEditorItem[] = [
  {
    name: "Dr. Ananya Sharma",
    degree: "PhD in Materials Engineering",
    experience: "12 years of experience",
    manuscripts: "160+ manuscripts edited",
    flag: "/images/country/gb.png",
    avatar:
      "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp",
  },
  {
    name: "Dr. Sneha Varghese",
    degree: "PhD in Material Chemistry",
    experience: "9 years of experience",
    manuscripts: "120+ manuscripts edited",
    flag: "/images/country/us.png",
    avatar:
      "/images/subject-matter-experts/material-science/Dr.-Sneha-Varghese-2.webp",
  },
  {
    name: "Dr. Ayesha Kapoor",
    degree: "PhD in Materials Engineering",
    experience: "11 years of experience",
    manuscripts: "150+ manuscripts edited",
    flag: "/images/country/gb.png",
    avatar:
      "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp",
  },
];

const whereAuthorsPublishData: AuthorPublicationData = {
  imageSrc:
    "/images/subject-matter-experts/material-science/sample-works-13-7.webp",
  imageAlt: "Advanced Materials Journal Cover",
  paperTitle:
    "Colloidal Heterostructures Enable Interfacial Transport of Immiscible Molecules in Printable Organohydrogels",
  author:
    "Dowdy-Green, R. E., Waheibi, R., Shakoury, N., Ye, Y., & Hsiao, L. C",
  publisher: "Wiley",
  journalName: "Advanced Materials",
  impactFactor: "26.8",
}

export default function MaterialScienceSections() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

      {/* SECTION 1: Emerging Trends in Material Science Research */}
      <EmergingTrendsSection
        title="Emerging Trends in Material Science Research"
        description="Material Science is evolving rapidly, driven by global demands for efficiency, sustainability, miniaturization, and smart technology. Key futuristic directions include:"
        trends={emergingTrendsData}
        footerText=""
      />

      {/* SECTION 2: Where Our Authors Publish */}
      <WhereAuthorsPublish
        title="Where Our Authors Publish"
        description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
        publication={whereAuthorsPublishData}
      />
      {/* SECTION 3: Our Expert Material Science Editors */}
      <ExpertEditorsSection
        title="Our Expert Material Science Editors"
        description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
        editors={editorsData}
      />

    </div>
  );
}