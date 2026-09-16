"use client";


import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const trustItemsData = [
    {
        title: 'PhD Subject-Matter Experts',
        description: 'Specialists with deep expertise across forensic pathology, toxicology, digital forensics, DNA profiling, and forensic anthropology.'
    },
    {
        title: '100% Confidential & Secure',
        description: 'Your data, research results, and manuscripts remain fully protected.'
    },
    {
        title: '15+ Years of Research Excellence',
        description: 'Trusted globally by researchers, academicians, and industry professionals.'
    },
    {
        title: 'End-to-End Support',
        description: 'From ideation to publication, we assist at every stage with consistency and precision.'
    },
    {
        title: 'Journal-Compliant Deliverables',
        description: 'We ensure adherence to the formatting and editorial standards of Scopus, SCI, and top forensic science journals.'
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "developments-in-dna-profiling",
        title: "Developments in DNA Profiling",
        description:
            "New technologies, such as Next-Generation Sequencing (NGS), are providing significant advancements for analysing degraded samples, in addition to other applications of DNA analysis.",
    },
    {
        id: "digital-and-cyber-forensics",
        title: "Digital and Cyber Forensics",
        description:
            "The growing emphasis on recovering and analysing digital evidence from computers and smartphones has become increasingly important in the fight against Cybercrime.",
    },
    {
        id: "forensic-genomics",
        title: "Forensic Genomics",
        description:
            "By utilizing genomic data outside of traditional DNA profiling techniques, investigators can increase their ability to identify victims and solve long-cold cases.",
    },
    {
        id: "3d-forensic-imaging",
        title: "3D Forensic Imaging",
        description:
            "Creating detailed digital reconstructions of crime scenes is allowing for better visual representation of evidence in criminal investigations and courtroom proceedings.",
    },
    {
        id: "environmental-forensic-science",
        title: "Environmental Forensic Science",
        description:
            "The study of pollutants contaminants in the environment has become more common as a means of providing legal support to environmental damage claims.",
    },
    {
        id: "forensic-psychology",
        title: "Forensic Psychology",
        description:
            "There is an increasing use of psychological evaluations as an approach to understanding criminal behaviour and assisting law enforcement during an investigation.",
    },
];

const applicationsData = [
    {
        title: "Criminal Investigations",
        desc: "DNA, fingerprints, and ballistics are utilized to help identify suspects and to solve crimes.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Criminal-Investigations.webp",
    },
    {
        title: "Forensic Pathology",
        desc: '(through autopsy) is used to ascertain the "cause of death".',
        iconSrc:
            "/images/subject-matter-experts/forensics/Forensic-Pathology-1.webp",
    },
    {
        title: "Digital Forensics",
        desc: "Cyber-crimes can be investigated via the examination of electronic information.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Digital-Forensics-1.webp",
    },
    {
        title: "Forensic Toxicology",
        desc: "Biological specimens can be tested for the presence of poisons or drugs.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Forensic-Toxicology-1.webp",
    },
    {
        title: "Forensic Anthropology",
        desc: "Can be used to identify human remains and estimate time since death.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Forensic-Anthropology.webp",
    },
    {
        title: "Forensic Psychology",
        desc: "Looks at the mental state and the likely behaviour of a criminal.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Forensic-psychology.webp",
    },
    {
        title: "Forensic Odontology",
        desc: "Forensic odontology uses dental records to identify victims and suspects.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Forensic-Odontology.webp",
    },
    {
        title: "Environmental Forensics",
        desc: "Gives investigators the ability to determine the cause of pollution and other environmental crimes.",
        iconSrc:
            "/images/subject-matter-experts/forensics/Environmental-Forensics.webp",
    },
];

const areasOfStudyData = [
    { title: 'Forensic Pathology and Histology' },
    { title: 'Forensic Toxicology and Pharmacology' },
    { title: 'Digital and Cyber Forensics' },
    { title: 'Forensic DNA Profiling and Serology' },
    { title: 'Forensic Anthropology and Osteology' },
    { title: 'Crime Scene Investigation and Reconstruction' },
    { title: 'Forensic Psychology and Psychiatry' },
    { title: 'Forensic Odontology' },
    { title: 'Environmental and Wildlife Forensics' },
    { title: 'Forensic Document Examination' },
    { title: 'Ballistics and Firearm Examination' },
    { title: 'Forensic Nursing and Clinical Practice' }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Emily Carter",
        degree: "PhD in Forensic Toxicology",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp",
    },
    {
        name: "Dr. Rajesh Nair",
        degree: "PhD in Forensic Biochemistry",
        experience: "12 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biomonitoring/Dr.-Rajesh-Nair.webp",
    },
    {
        name: "Dr. Laura Mitchell",
        degree: "PhD in Forensic Pathology",
        experience: "16 years of experience",
        manuscripts: "210+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/forensics/—-Dr.-Laura-Mitchell-1.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/forensics/sample-works-13-2.webp",
    imageAlt: "Journal of Forensic and Legal Medicine Cover",
    paperTitle: "Postmortem microbiome dynamics: Review of forensic microbial clock",
    author: "Kalanjali Y, Arjun Rao Isukapatla",
    publisher: "Elsevier",
    journalName: "Journal of Forensic and Legal Medicine",
    impactFactor: "1.2 (2014)",
};

export default function ForensicsSection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">



            {/* SECTION: Emerging Trends in Forensic */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Forensic"
                    description="The area of forensic science is continually adapting and growing due to the introduction of emerging technologies and new methods of collecting, analysing and interpreting evidence. Some examples are as follow."
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Forensic */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Forensic"
                    description="Forensic science is vital in solving crimes and supporting legal cases. Key applications include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/forensics/Applications-of-Forensic.webp"
                    imageAlt="Applications of Forensic"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Forensic publications in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION: Our Expert Forensic Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Forensic Editors"
                    description="Pubrica's team of Forensic experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}