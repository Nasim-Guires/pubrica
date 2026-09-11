"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Factory,
  Sprout,
  Leaf,
  Zap,
  Award,
} from "lucide-react";
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function BiomolecularTrendsAndApplicationsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const biomolecularTrends: EmergingTrendItem[] = [
    {
      id: 1,
      title: "AI-driven biomolecule design",
      description: "enabling faster discovery and optimization.",
    },
    {
      id: 2,
      title: "CRISPR advancements",
      description: "leading to more precise and safer gene-editing tools.",
    },
    {
      id: 3,
      title: "Cell-free systems",
      description: "for on-demand biomolecule synthesis.",
    },
    {
      id: 4,
      title: "Microbial cell factories",
      description: "engineered for sustainable chemical production.",
    },
    {
      id: 5,
      title: "Programmable therapeutics",
      description: "using engineered cells for targeted treatment.",
    },
    {
      id: 6,
      title: "Nanobiotechnology",
      description: "combines nanoscale materials with biological molecules.",
    },
  ];

  const applicationsData = [
    {
      title: "Healthcare",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      desc: "Development of targeted biologics, vaccines, and personalized medicine tools.",
      icon: HeartPulse,
    },
    {
      title: "Industrial Biotechnology",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Metabolic-Engineering.webp",
      desc: "Biosynthesis of chemicals, materials, and environmentally friendly alternatives.",
      icon: Factory,
    },
    {
      title: "Agriculture",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Synthetic-Biology.webp",
      desc: "Engineering stress-tolerant crops, biosensors for soil health, and microbial inoculants.",
      icon: Sprout,
    },
    {
      title: "Environmental Technologies",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      desc: "Bioremediation, pollutant degradation, and microbial fuel cells.",
      icon: Leaf,
    },
    {
      title: "Energy",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      desc: "Biofuel production, hydrogen generation, and metabolic design for renewable energy pathways.",
      icon: Zap,
    },
  ];

  const biomolecularEditorsData: ExpertEditorItem[] = [
    {
      name: "Dr. Evelyn Carter",
      degree: "PhD in Biomolecular Engineering",
      experience: "12 years of experience",
      manuscripts: "150+ manuscripts edited",
      avatar: "/images/subject-matter-experts/biomolecular-engineering/Dr.-Evelyn-Carter.webp",
      flag: "/images/country/gb.png",
    },
    {
      name: "Dr. Maya Chen",
      degree: "PhD in Chemical & Biomolecular Engineering",
      experience: "10 years of experience",
      manuscripts: "145+ manuscripts edited",
      avatar: "/images/subject-matter-experts/biomolecular-engineering/Dr.-Maya-Chen.webp",
      flag: "/images/country/us.png",
    },
    {
      name: "Dr. Arjun Mehta",
      degree: "PhD in Biomolecular Engineering",
      experience: "13 years of experience",
      manuscripts: "170+ manuscripts edited",
      avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Arjun-Mehta-1.webp",
      flag: "/images/country/us.png",
    },
  ];
  const publicationData: AuthorPublicationData = {
    imageSrc: "/images/subject-matter-experts/biomolecular-engineering/sample-works-8-1.webp",
    imageAlt: "Journal cover",
    paperTitle: "CRISPR Tools for Engineering Prokaryotic Systems: Recent Advances and New Applications",
    author: "Burbano, D. A., Klattisewee, C., Karanjia, A. V., Cardiff, R. A. L., Faulkner, I. D., Sugianto, W., & Carothers, J. M",
    publisher: "Annual Reviews Inc",
    journalName: "Annual Review of Chemical and Biomolecular Engineering",
    impactFactor: "12.8",
  };

  return (
    <div className="font-sans text-gray-800 bg-white py-6 px-4 space-y-16">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* SECTION 1: Emerging Trends */}
        <EmergingTrendsSection
          title="Emerging Trends in Biomolecular Engineering"
          description="The field is rapidly evolving, driven by breakthroughs in technology and multidisciplinary research. Major emerging trends include:"
          trends={biomolecularTrends}
          footerText="These trends highlight the tremendous potential of biomolecular engineering in shaping the future of science and technology.

"
        />
        {/* SECTION 2: Applications of Biomolecular Engineering */}
        <ApplicationsSection
          title="Applications of Biomolecular Engineering"
          description="Biomolecular engineering has wide-ranging applications that contribute to solutions to major global challenges:"
          applications={applicationsData}
          imageSrc="/images/subject-matter-experts/biomolecular-engineering/Applications-of-Biomolecular-Engineering.webp" // Update with your actual workspace image path
          imageAlt="Biomolecular Engineering workspace illustration"
        />
        <p>These applications reflect the multidisciplinary potential of biomolecular engineering in shaping the future of science and technology.</p>
        {/* SECTION 3: Where Our Authors Publish */}
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={publicationData}
        />

        {/* SECTION 4: Our Expert Biomolecular Engineering Editors */}
        <ExpertEditorsSection
          title="Our Expert Biomolecular Engineering Editors"
          description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
          editors={biomolecularEditorsData}
        />

      </div>
    </div>
  );
}