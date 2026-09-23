"use client"

import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const WhereOurAuthorsPublishAndEditors: NextPage = () => {
  const [showAllEditors, setShowAllEditors] = useState(false);

  const authorPublications = [
    {
      title: 'Novel Approaches to Combat Medical Device-Associated Biofilms',
      author: 'Xin Li, Luyao Sun, Peng Zhang, and Yang Wang',
      journal: 'Coatings',
      publisher: 'MDPI',
      impactFactor: '2.8',
      image: '/images/industries/medical-device/sample-works.png'
    }
  ];

  const expertEditors: ExpertEditorItem[] = [
    {
      name: "Dr. Ravi Kumar",
      degree: "PHD, FIAMS, DMRD, DMRE, DNB - Medical",
      experience: "20 years of experience",
      manuscripts: "100+ manuscripts edited",
      avatar: "/images/industries/medical-device/DR-RAVIKUMAR.png",
      flag: "/images/country/gb.png",
    },
    {
      name: "Dr. Isaac Newton",
      degree: "MD - Medical",
      experience: "25 Years of Experience",
      manuscripts: "100+ manuscripts edited",
      avatar: "/images/industries/medical-device/DR-ISACC-NEWTON.png",
      flag: "/images/country/us.png",
    },
    {
      name: "Dr. Krishna",
      degree: "MD - Medical",
      experience: "15 Years of Experience",
      manuscripts: "100+ manuscripts edited",
      avatar: "/images/industries/medical-device/DR-KRISHNA.png",
      flag: "/images/country/us.png",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 py-2 px-4 md:px-8 space-y-2">

      {/* WHERE OUR AUTHORS PUBLISH SECTION */}
      <section className="py-1 max-w-5xl mx-auto px-4">
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={{
            imageSrc: "/images/industries/medical-device/sample-works.png",
            imageAlt: "Coatings Journal Cover",
            paperTitle: "Novel Approaches to Combat Medical Device-Associated Biofilms",
            author: "Xin Li, Luyao Sun, Peng Zhang, and Yang Wang",
            journalName: "Coatings",
            publisher: "MDPI",
            impactFactor: "2.8",
          }}
        />
      </section>

      {/* OUR EXPERT MEDICAL EDITORS SECTION */}
      <section className="py-1 max-w-6xl mx-auto px-4">
        <ExpertEditorsSection
          title="Our Expert Medical Editors"
          description="Pubrica's team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
          editors={expertEditors}
        />
      </section>

    </div>
  );
};

export default WhereOurAuthorsPublishAndEditors;