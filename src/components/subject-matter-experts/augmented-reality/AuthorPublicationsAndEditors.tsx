"use client";

import React from "react";
import Image from "next/image";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function AuthorPublicationsAndEditors() {
  const editors: ExpertEditorItem[] = [
    {
      name: "Dr. Robert Klein",
      degree: "PhD in Computer Vision",
      flag: "/images/country/gb.png",
      avatar:
        "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp",
      experience: "15 years of experience",
      manuscripts: "200+ manuscripts edited",
    },
    {
      name: "Dr. Ananya Iyer",
      degree: "PhD in Human-Computer Interaction",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/algorithm/Dr.-Ananya-Iyer-1.webp",
      experience: "12 years of experience",
      manuscripts: "160+ manuscripts edited",
    },
    {
      name: "Dr. David Chen",
      degree: "PhD in AR Systems Engineering",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/algorithm/Dr.-David-Chen.webp",
      experience: "11 years of experience",
      manuscripts: "150+ manuscripts edited",
    },
  ];

  const publication: AuthorPublicationData = {
    imageSrc:
      "/images/subject-matter-experts/augmented-reality/sample-works-13-2.webp",
    imageAlt: "Journal Cover Sample",
    paperTitle:
      "Advances in Augmented Reality Systems for Real-Time Applications",
    author: "John R. Anderson",
    publisher: "Elsevier",
    journalName: "Computers & Graphics",
    impactFactor: "3.8",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 bg-white font-sans text-gray-800 space-y-16">

      {/* WHERE OUR AUTHORS PUBLISH SECTION */}

      <WhereAuthorsPublish
        title="Where Our Authors Publish"
        description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
        publication={publication}
      />

      {/* OUR EXPERT AUGMENTED REALITY EDITORS SECTION */}
      <ExpertEditorsSection
        title="Our Expert Augmented Reality Editors"
        description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialisation, they ensure excellence in every project they undertake."
        editors={editors}
      />
    </div>
  );
}