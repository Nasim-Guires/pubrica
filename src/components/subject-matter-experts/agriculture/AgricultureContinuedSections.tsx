"use client";

import Image from "next/image";
import {
  Cpu,
  CloudSun,
  Dna,
  Sprout,
  TrendingUp,
  Award,
  FileText,
} from "lucide-react";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function AgricultureContinuedSections() {
  // --- 1. EDITORS DATA ---
  const editors: ExpertEditorItem[] = [
    {
      name: "Dr. Arjun Rao",
      degree: "PhD in Agronomy",
      flag: "/images/country/gb.png",
      avatar: "/images/subject-matter-experts/animal-science/warvien.png",
      experience: "18 years of experience",
      manuscripts: "200+ manuscripts edited",
    },
    {
      name: "Dr. Kavita Nair",
      degree: "PhD in Horticulture",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/agriculture/Dr.-Kavita-Nair.webp",
      experience: "14 years of experience",
      manuscripts: "130+ manuscripts edited",
    },
    {
      name: "Dr. Meera Iyer",
      degree: "PhD in Crop Science",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/agriculture/Dr.-Meera-Iyer.webp",
      experience: "12 years of experience",
      manuscripts: "150+ manuscripts edited",
    },
  ];


  const applications = [
    {
      title: "Precision Agriculture",
      desc: "Adoption of IoT, sensors, and GPS technologies to enhance productivity and resource efficiency.",
      icon: Cpu,
    },
    {
      title: "Climate-Smart Farming",
      desc: "Integrating sustainable practices to mitigate climate change effects and ensure food security.",
      icon: CloudSun,
    },
    {
      title: "Biotechnology and Genomics",
      desc: "Advancing crop improvement, pest resistance, and nutritional value through genetic innovations.",
      icon: Dna,
    },
    {
      title: "Sustainable Resource Management",
      desc: "Promoting soil health, water conservation, and eco-friendly farming inputs.",
      icon: Sprout,
    },
    {
      title: "Agri-Business and Value Chain Innovation",
      desc: "Strengthening market access, post-harvest technology, and rural entrepreneurship.",
      icon: TrendingUp,
    },
  ];

  const publication: AuthorPublicationData = {
    imageSrc:
      "/images/subject-matter-experts/agriculture/sample-works.webp",
    imageAlt: "Farmer examining field",
    paperTitle:
      "Optimising Long-Range Agricultural Land Use Under Climate Uncertainty",
    author: "Schiller K, Montgomery J, Randall M, Lewis A, Alam MS.",
    publisher: "MDPI",
    journalName: "Agriculture",
    impactFactor: "3.6",
  };
  return (
    <div className="w-full bg-[#fcfcfc] font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-20">

        {/* SECTION 1: EMERGING TRENDS IN AGRICULTURE */}
        <ApplicationsSection
          title="Emerging Trends in Agriculture"
          description="Agriculture is rapidly evolving with innovative technologies and sustainable practices reshaping the sector. At Pubrica, we stay aligned with these global advancements to support researchers in producing impactful studies."
          applications={applications}
          imageSrc="/images/subject-matter-experts/agriculture/Emerging-Trends-in-Agriculture.webp"
          imageAlt="Emerging trends in agriculture"
        />

        {/* SECTION 2: WHERE OUR AUTHORS PUBLISH */}
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={publication}
        />

        {/* SECTION 3: OUR EXPERT AGRICULTURE EDITORS */}
        <ExpertEditorsSection
          title="Our Expert Agriculture Editors"
          description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
          editors={editors}
        />

      </div>
    </div>
  );
}