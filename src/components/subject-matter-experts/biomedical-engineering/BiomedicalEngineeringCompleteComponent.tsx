"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Activity,
    FileText,
    Edit3,
    CheckCircle2,
    Wrench,
    BookOpen,
    HeartPulse,
    Cpu,
    Stethoscope,
    ShieldCheck,
    Award,
} from "lucide-react";
import CoreDisciplinesBiomedicalEngineering from "./CoreDisciplinesBiomedicalEngineering";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function BiomedicalEngineeringCompleteComponent() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const coreDisciplines = [
        {
            title: "Biomechanics",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            desc: "Biomechanics applies mechanical engineering principles to biological systems. It helps analyse movement, tissue mechanics,",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            icon: Activity,
        },
        {
            title: "Biomaterials and Tissue Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
            desc: "This discipline focuses on biocompatible materials used in implants, prosthetics, regenerative",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
            icon: FileText,
        },
        {
            title: "Biomedical Imaging and Instrumentation",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
            desc: "Innovations in MRI, CT, PET, ultrasound, and optical imaging rely heavily on engineering",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
            icon: Edit3,
        },
        {
            title: "Medical Devices and Therapeutic Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            desc: "From ventilators and infusion pumps to surgical robots and neuroprosthetics, medical device",
            img: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            icon: Cpu,
        },
        {
            title: "Bioinformatics and Computational Biology",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            desc: "This field involves analysing biological datasets, developing predictive models, and supporting",
            img: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
            icon: Stethoscope,
        },
        {
            title: "Rehabilitation Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
            desc: "It develops technologies such as exoskeletons, prosthetics, communication tools, and therapeutic robots to enhance",
            img: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Engineering.webp",
            icon: HeartPulse,
        },
    ];

    const researchServices: ExpertiseCardItem[] = [
        {
            title: "Research Services",
            desc: "Guidance on project planning, execution, and data analysis.",
            href: "#research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "#editing-proofreading",
            imageUrl: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
            icon: Edit3,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            href: "#peer-reviewing",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            iconSrc: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: CheckCircle2,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "#publication-support",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            icon: Wrench,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "#scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            iconSrc: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: BookOpen,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "#journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            iconSrc: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Activity,
        },
    ];

    const biomedicalTrends: EmergingTrendItem[] = [
        {
            id: 1,
            title: "AI-Driven Healthcare Technologies",
            description: "Artificial Intelligence enhances diagnostics, imaging analysis, personalized care, and predictive modelling. Pubrica supports AI-based biomedical engineering research writing for clinical applications.",
        },
        {
            id: 2,
            title: "Wearable Devices and Remote Monitoring",
            description: "Smart sensors and IoT-enabled technologies enable real-time monitoring and proactive healthcare management. Pubrica assists researchers working on sensor design, data analysis, and wearable health studies.",
        },
        {
            id: 3,
            title: "3D Bioprinting and Regenerative Medicine",
            description: "Advances in tissue engineering enable customised tissues, scaffolds, and organ structures. We provide editorial and publication support for cutting-edge regenerative medicine studies.",
        },
        {
            id: 4,
            title: "Robotics and Automation in Surgery",
            description: "Surgical robots enhance precision, reduce invasiveness, and improve patient outcomes. Robotic exoskeletons support rehabilitation and assist mobility.",
        },
        {
            id: 5,
            title: "Precision Medicine and Genomic Engineering",
            description: "Biomedical engineers contribute to technologies that analyse genetic information, develop personalised treatment strategies, and improve drug delivery mechanisms.",
        },
        {
            id: 6,
            title: "Nanobiotechnology",
            description: "Nanocarriers, nano-diagnostics, and nano-enabled drug delivery systems continue to redefine therapeutic efficiency.",
        },
    ];

    const applicationsData = [
        {
            title: "Diagnostic and Imaging Solutions",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Diagnostic-and-Imaging-Solutions.webp",
            desc: "Biomedical innovations enable accurate diagnostics through imaging systems, biosensors, and point-of-care devices.",
            icon: Activity,
        },
        {
            title: "Therapeutic and Surgical Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
            desc: "From implants to sophisticated robotic surgical systems, therapeutic technologies are central to improving clinical outcomes.",
            icon: Cpu,
        },
        {
            title: "Healthcare Technology and Equipment Management",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Healthcare-Technology-and-Equipment-Management.webp",
            desc: "Biomedical engineers ensure safe operation, calibration, and optimisation of hospital equipment.",
            icon: Stethoscope,
        },
        {
            title: "Drug Delivery and Biopharmaceutical Research",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Drug-Delivery-and-Biopharmaceutical-Research.webp",
            desc: "Biomedical engineering supports targeted therapies, controlled drug release systems, and advanced bioprocessing techniques.",
            icon: HeartPulse,
        },
        {
            title: "Assistive and Rehabilitation Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Assistive-and-Rehabilitation-Technologies.webp",
            desc: "Prosthetics, orthotics, exoskeletons, and brain-computer interfaces significantly enhance patient independence.",
            icon: ShieldCheck,
        },
        {
            title: "Public Health and Predictive Healthcare Tools",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Public-Health-and-Predictive-Healthcare-Tools.webp",
            desc: "Wearables, mobile health apps, and AI-based tools help track health trends and support preventive care.",
            icon: Award,
        },
    ];

    const biomedicalEditorsData: ExpertEditorItem[] = [
        {
            name: "Dr. Aidan Matthews",
            degree: "PhD in Biomedical Engineering",
            experience: "12 years of experience",
            manuscripts: "150+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomedical-engineering/Dr.-Aidan-Matthews-1.webp",
            flag: "/images/country/gb.png",
        },
        {
            name: "Dr. Sophia Raman",
            degree: "PhD in Biomedical Engineering",
            experience: "10 years of experience",
            manuscripts: "145+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomedical-engineering/Dr.-Sophia-Raman-1.webp",
            flag: "/images/country/us.png",
        },
        {
            name: "Dr. Ethan Varghese",
            degree: "PhD in Biomedical Engineering",
            experience: "13 years of experience",
            manuscripts: "170+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomedical-engineering/Dr.-Ethan-Varghese-1.webp",
            flag: "/images/country/us.png",
        },
    ];

    const publicationData: AuthorPublicationData = {
        imageSrc: "/images/subject-matter-experts/biomedical-engineering/sample-works-7.webp",
        imageAlt: "Journal cover",
        paperTitle: "Targeting and tracking mRNA lipid nanoparticles at the particle, transcript, and protein level",
        author: "Kang, D.D., Marks, A., Maria-Polch, J. et al.",
        publisher: "Springer Science and Business Media LLC",
        journalName: "Nature Biomedical Engineering",
        impactFactor: "29.2",
    };
    return (
        <div className="font-sans text-gray-800 bg-white py-6 px-4 space-y-16">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* SECTION 1: Our Core Disciplines In Biomedical Engineering */}
                <CoreDisciplinesBiomedicalEngineering />

                {/* SECTION 2: Our Expertise in Biomedical Engineering Research and Publication */}

                {/* Common Expertise Cards Component */}
                <CommonExpertiseCards
                    title=" Our Expertise in Biomedical Engineering Research and Publication"
                    description="  Pubrica is globally recognised for delivering accurate, high-quality, and customised support for biomedical engineering research and publication. We support scholars, PhD candidates, universities, R&D teams, and clinical researchers with end-to-end scientific assistance tailored to biomedical engineering domains:"
                    cards={researchServices}
                />


                {/* SECTION 3: Emerging Trends in Biomedical Engineering */}
                <EmergingTrendsSection
                    title="Emerging Trends in Biomedical Engineering"
                    description="Biomedical Engineering is rapidly evolving, driven by technological breakthroughs and global healthcare needs. Some emerging trends include:"
                    trends={biomedicalTrends}
                    footerText="These pioneering developments continue to revolutionize healthcare delivery, clinical outcomes, and therapeutic precision."
                />

                {/* SECTION 4: Applications of Biomedical Engineering */}
                <ApplicationsSection
                    title="Applications of Biomedical Engineering"
                    description="Biomedical engineering supports a wide range of real-world applications that directly impact clinical practice, healthcare delivery, and medical research:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/biomedical-engineering/Applications-of-Biomedical-Engineering.webp" // Update with your actual workspace image path
                    imageAlt="Biomedical Engineering workspace illustration"
                />

                {/* SECTION 5: Where Our Authors Publish */}
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publicationData}
                />
                {/* SECTION 6: Our Expert Biomedical Engineering Editors */}
                <ExpertEditorsSection
                    title="Our Expert Biomedical Engineering Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={biomedicalEditorsData}
                />

            </div>
        </div>
    );
}