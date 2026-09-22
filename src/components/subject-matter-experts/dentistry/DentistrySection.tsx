"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData = [
    {
        id: 'regenerative-endodontics',
        title: 'Regenerative Endodontics',
        description: 'Advancing pulp revascularization techniques and stem cell applications to restore vital tooth functions and biological integrity in compromised teeth.'
    },
    {
        id: 'digital-workflow',
        title: 'Digital Workflow & CAD/CAM',
        description: 'Leveraging intraoral scanning, 3D printing, and computer-aided design to fabricate highly precise crowns, bridges, and orthodontic appliances.'
    },
    {
        id: 'ai-in-diagnostics',
        title: 'AI in Dental Diagnostics',
        description: 'Using artificial intelligence and machine learning algorithms to detect early carious lesions, periodontal bone loss, and oral pathologies from imaging datasets.'
    },
    {
        id: 'minimally-invasive',
        title: 'Minimally Invasive Dentistry',
        description: 'Focusing on preventive protocols, resin infiltration, and micro-dentistry approaches to conserve healthy tooth structure and enhance patient comfort.'
    },
    {
        id: 'biomaterials-implants',
        title: 'Biomaterials & Osseointegration',
        description: 'Investigating novel bioactive bone grafts, surface modifications, and zirconia implants to improve success rates and long-term osseointegration.'
    },
    {
        id: 'laser-dentistry',
        title: 'Laser Dentistry',
        description: 'Utilizing hard and soft tissue lasers for precise surgical interventions, bacterial reduction, periodontal therapy, and accelerated wound healing.'
    }
];

const applicationsData = [
    {
        title: "",
        desc: "Digital Dentistry and CAD/CAM Technologies – Enabling precision design and fabrication of restorations and prosthetics.",
        iconSrc:
            "/images/subject-matter-experts/dentistry/Digital-Dentistry-and-CAD.png",
    },
    {
        title: "",
        desc: "Implantology and Bone Regeneration – Improving implant survival through novel biomaterials and surface modifications.",
        iconSrc:
            "/images/subject-matter-experts/dentistry/Implantology-and-Bone-Regeneration.png",
    },
    {
        title: "",
        desc: "Laser and Aesthetic Dentistry – Enhancing patient comfort and cosmetic outcomes with minimally invasive techniques.",
        iconSrc:
            "/images/subject-matter-experts/dentistry/Laser-and-Aesthetic-Dentistry.png",
    },
    {
        title: "",
        desc: "Oral Cancer Diagnostics – Leveraging molecular markers, imaging modalities, and AI-driven histopathology.",
        iconSrc:
            "/images/subject-matter-experts/dentistry/Oral-Cancer-Diagnostics.png",
    },
    {
        title: "",
        desc: "Tele-dentistry – Expanding remote diagnosis, consultation, and oral health education in underserved regions.",
        iconSrc:
            "/images/subject-matter-experts/dentistry/Tele-dentistry.png",
    },
    {
        title: "",
        desc: "Nanotechnology In Dentistry – Introducing nanocomposites and nano-coatings for superior restorative outcomes.",
        iconSrc:
            "/images/subject-matter-experts/dentistry/Nanotechnology-In-Dentistry.png",
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Amelia Hart",
        degree: "PhD in Dentistry",
        experience: "15 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/dentistry/Dr.-Amelia-Hart.webp",
    },
    {
        name: "Dr. Jason Lee",
        degree: "DDS, MS in Orthodontics",
        experience: "12 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/big-data-hadoop/Dr.-M.-Chen.webp",
    },
    {
        name: "Dr. Emily Chen",
        degree: "PhD in Prosthodontics",
        experience: "13 years of experience",
        manuscripts: "105+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cell-biology/Dr.-Emily-Chen.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/dentistry/sample-works-5.webp",
    imageAlt: "Journal of Dentistry Book Cover",
    paperTitle:
        "The Effect of Different White Spot Lesion Treatments on the Enamel Microhardness – An In Vitro Pilot Study",
    author:
        "Milanović M, Beloica M, Mandinić Z, Juloski J, Petrović M, Kosanović D, Todorović M, Dimitrijević M, Jakovljević A, Vorkapić M",
    publisher: "MDPI",
    journalName: "Dentistry Journal",
    impactFactor: "3.1",
};
export default function DentistrySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Dentistry */}
            {/* SECTION 2: Applications of Dentistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Dentistry Research"
                    description="Dental science is evolving rapidly, integrating innovations from regenerative medicine, biomaterials, and artificial intelligence. Pubrica’s dental research support enables innovations in:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/dentistry/Applications-of-Dentistry-Research.webp"
                    imageAlt="Applications of Dentistry"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 4: Our Expert Dentistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Dentistry Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}