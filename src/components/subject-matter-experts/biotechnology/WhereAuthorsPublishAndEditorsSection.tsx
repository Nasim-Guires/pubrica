"use client";

import React from "react";
import Image from "next/image";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function WhereAuthorsPublishAndEditorsSection() {
  const editors: ExpertEditorItem[] = [
    {
      name: "Dr. Ananya Verma",
      degree: "PhD in Biotechnology",
      flag: "/images/country/gb.png",
      avatar:
        "/images/subject-matter-experts/biotechnology/Dr.-Ananya-Singh.webp",
      experience: "12 years of experience",
      manuscripts: "100+ manuscripts edited",
    },
    {
      name: "Dr. Michael Thompson",
      degree: "PhD in Molecular Biotechnology",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/animal-science/victor.png",
      experience: "16 years of experience",
      manuscripts: "130+ manuscripts edited",
    },
    {
      name: "Dr. Sofia Martinez",
      degree: "PhD in Industrial Biotechnology",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/biotechnology/Dr.-Sofia-Martinez.webp",
      experience: "14 years of experience",
      manuscripts: "110+ manuscripts edited",
    },
  ];

  const publication: AuthorPublicationData = {
    imageSrc:
      "/images/subject-matter-experts/biotechnology/sample-works-1-1.webp",
    imageAlt: "Biotechnology Advances Journal Cover",
    paperTitle:
      "Advances on the biosynthesis of ergothioneine using microbial chassis",
    author: "Kang, X., Wu, P., Han, Z., & Luo, W.",
    publisher: "Elsevier",
    journalName: "Biotechnology Advances",
    impactFactor: "12.5",
  };


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50/50 font-sans text-gray-800 space-y-12">

      {/* SECTION 1: WHERE OUR AUTHORS PUBLISH */}
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={publication}
        />

      {/* SECTION 2: OUR EXPERT BIOTECHNOLOGY EDITORS */}
        <ExpertEditorsSection
          title="Our Expert Biotechnology Editors"
          description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
          editors={editors}
        />

    </div>
  );
}