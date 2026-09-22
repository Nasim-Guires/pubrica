"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, Plus, Minus, Cpu, BookOpen, Layers, ShieldCheck, Zap } from 'lucide-react';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const importanceData = [
    {
        title: "Drug Discovery",
        description: "Creates drugs to treat conditions using drug candidates"
    },
    {
        title: "Optimizing Drug Formulations",
        description: "Drug Products are optimally formulated so that drugs are targeted and delivered effectively"
    },
    {
        title: "Safety Assessment",
        description: "To reduce the occurrence of drug side effects, toxicity testing will be conducted to promote patient safety."
    },
    {
        title: "Personalized Medicine",
        description: "Defines drugs for specific users by creating pharmacotherapy based on their genetic makeup, as well as their race and gender."
    },
    {
        title: "Improved Therapeutic Outcomes",
        description: "This improvement will increase the potential therapeutic value of a drug and its usefulness in the management of disease."
    }
];

const emergingTrendsData = [
    {
        id: 'ai-drug-discovery',
        title: 'AI and Machine Learning in Drug Design',
        description: 'Utilizing predictive algorithms to enable virtual screening of drug leads via lead optimization.'
    },
    {
        id: 'fragment-based',
        title: 'Fragment-Based Drug Discovery (FBDD)',
        description: 'Allows the identification and extended development of chemical compound small fragments to create future therapeutic medications.'
    },
    {
        id: "targeted-protein",
        title: "Targeted Protein Degradation",
        description: "Development of PROTACs and Adhesive Molecules for Specific Proteins as therapeutic agents."
    },
    {
        id: 'structure-based',
        title: 'Structure-Based Drug Design (SBDD)',
        description: 'Utilizes structure determination methods such as computer modelling and crystallography to generate ligands.'
    },
    {
        id: 'multi-target',
        title: 'Multi-Target Drug Design',
        description: 'Multi-Target Design of Compounds that have a biological effect on more than one target Increases efficacy when they are developed into medication.'
    },
    {
        id: 'peptide-macrocycle',
        title: 'Peptide and Macrocycle Therapeutics',
        description: 'Treatment Options for Biological Targets That Present Challenges in Drug Development'
    },
    {
        id: 'green-chemistry',
        title: 'Green and Sustainable Chemistry',
        description: 'Provide New Pathways for Developing Drug Development in an Environmentally Friendly Fashion with decreased use of chemicals'
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Rahul Mehta",
        degree: "PhD, Medicinal Chemistry",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/medicinal-chemistry/Dr.-Rahul-Mehta.webp",
    },
    {
        name: "Dr. Elena Petrova",
        degree: "PhD, Pharmaceutical Chemistry",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp",
    },
    {
        name: "Dr. Samuel Ochieng",
        degree: "PhD, Drug Discovery & Design",
        experience: "10 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp",
    },
];

const applicationsData = [
    {
        title: "",
        desc: "AI and Machine Learning in Drug Design – Utilizing predictive algorithms to enable virtual screening of drug leads via lead optimization.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Drug-Discovery-and-Lead-Identification.webp",
    },
    {
        title: "",
        desc: "Fragment-Based Drug Discovery (FBDD) – Allows the identification and extended development of chemical compound small fragments to create future therapeutic medications.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Cheminformatics-and-molecular-docking.webp",
    },
    {
        title: "",
        desc: "Targeted Protein Degradation – Development of PROTACs and Adhesive Molecules for Specific Proteins as therapeutic agents.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Organic-and-Synthetic-Chemistry.webp",
    },
    {
        title: "",
        desc: "Structure-Based Drug Design (SBDD) – Utilizes structure determination methods such as computer modelling and crystallography to generate ligands.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Pharmacokinetics-ADME-and-Pharmacodynamics.webp",
    },
    {
        title: "",
        desc: "Multi-Target Drug Design – Multi-Target Design of Compounds that have a biological effect on more than one target increases efficacy when they are developed into medication.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Bioorganic-and-Medicinal-Biochemistry.webp",
    },
    {
        title: "",
        desc: "Peptide and Macrocycle Therapeutics – Treatment Options for Biological Targets That Present Challenges in Drug Development",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Natural-Product-Chemistry.webp",
    },
    {
        title: "",
        desc: "Green and Sustainable Chemistry –Provide New Pathways for Developing Drug Development in an Environmentally Friendly Fashion with decreased use of chemicals",
        iconSrc:
            "/images/subject-matter-experts/medicinal-chemistry/Analytical-Chemistry-for-Drug-Development.webp",
    },
];

export default function MedicinalChemistrySections() {
    const [openImportanceIndex, setOpenImportanceIndex] = useState<number | null>(0);

    const toggleImportance = (index: number) => {
        setOpenImportanceIndex(openImportanceIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">


            {/* SECTION 1: Emerging Trends in Medicinal Chemistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in Medicinal Chemistry Research"
                    description="Medicinal chemistry research is rapidly evolving with the integration of advanced technologies and innovative approaches to drug discovery. These emerging trends are transforming how safer, more effective, and targeted therapies are designed and developed."
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/medicinal-chemistry/Emerging-Trends-in-Medicinal-Chemistry-Research.webp"
                    imageAlt="Researchers working with a microscope"
                />
            </section>

            {/* SECTION 2: Clinical Applications (omitted based on image inspection if not present, but keeping standard structure matching prompt text / instructions) -> wait, the prompt says "if the ciode has extra from image remobe that part" and shows specific images for Emerging Trends, Where Our Authors Publish, and Editors. Let's make sure it strictly matches the image content. */}

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. This will augment the authority of Pubrica as well as its overall visibility indicating it as one of the foremost professional publishers."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/medicinal-chemistry/RSC-Medicinal-Chemistry.webp",
                    imageAlt: "RSC Medicinal Chemistry Journal Cover",
                    paperTitle:
                        "Diversifying the triquinazine scaffold of a Janus kinase inhibitor",
                    author:
                        "Mulliri, K., Meier, K., Feuchter, J.-D., Javor, S., Meirelles, M. A., & Reymond, J.L",
                    journalName: "RSC Medicinal Chemistry",
                    publisher: "Royal Society of Chemistry",
                    impactFactor: "3.6",
                }}
            />

            {/* SECTION 4: Our Expert Medical And Pharmaceutical Chemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Medicinal Chemistry Editors"
                    description="The combination of specialized training and years of experience provides our team members with the background required to develop and implement a variety of different solutions to complex problems. We take pride in offering our clients quality services and solutions that exceed their expectations."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}