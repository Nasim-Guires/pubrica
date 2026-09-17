"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "ai-deep-learning",
        title: "Artificial Intelligence (AI) and Deep Learning",
        description:
            "Automated image analysis, anomaly detection, and workflow optimization.",
    },
    {
        id: "precision-personalized-imaging",
        title: "Precision and Personalized Imaging",
        description:
            "Tailoring imaging protocols based on genetic, physiological, and clinical data.",
    },
    {
        id: "teleradiology",
        title: "Teleradiology",
        description:
            "Remote image interpretation enabling global diagnostic support and healthcare access",
    },
    {
        id: "3d-printing-vr",
        title: "3D Printing and Virtual Reality (VR)",
        description:
            "Creating patient-specific anatomical models for surgical planning and education.",
    },
    {
        id: "quantitative-imaging-biomarkers",
        title: "Quantitative Imaging Biomarkers",
        description:
            "Linking imaging features with molecular and genetic data for predictive analytics.",
    },
    {
        id: "radiology-informatics",
        title: "Radiology Informatics",
        description:
            "Integration of big data, electronic health records (EHRs), and picture archiving and communication systems (PACS) to improve efficiency and data management.",
    },
];

const whyTrustTabsData = [
    {
        id: 'expertise-led',
        title: 'Expertise-Led Support',
        description: 'Our company has an array of seasoned radiology research experts, editors and statisticians who are well-versed in the intricacies of diagnostic imaging and medical technology.'
    },
    {
        id: 'full-service',
        title: 'Full-Service Research Support',
        description: 'We provide comprehensive support from study design to data analysis, manuscript writing, and submitting to journals, covering all aspects of the research process.'
    },
    {
        id: 'high-standards',
        title: 'High Standards of Quality and Ethics',
        description: 'We adhere to the highest ethical standards, and are committed to providing researchers with accuracy, transparency, and compliance with guidelines for international publication.'
    },
    {
        id: 'expertise-publishing',
        title: 'Expertise in Publishing Worldwide',
        description: 'Having an in-depth knowledge of the most prestigious journals and the expectations of their editors will lead researchers to successful publication outcomes.'
    },
    {
        id: 'individualized-assistance',
        title: 'Individualized Assistance for Researchers',
        description: 'Projects will receive individualized assistance tailored to meet research goals, publication needs, and timelines, to help researchers achieve their objectives as efficiently as possible.'
    }
];

const applicationsData = [
    {
        title: "Radiographs",
        desc: "X-rays to look at bones, the chest, or the abdomen.",
        iconSrc:
            "/images/subject-matter-experts/radiology/Radiographs.webp",
    },
    {
        title: "CT (Computed Tomography)",
        desc: "A CT captures multiple x-ray angles of the patient using a doughnut-shaped machine, then creates computer-processed images.",
        iconSrc:
            "/images/subject-matter-experts/radiology/CT-Computed-Tomography.webp",
    },
    {
        title: "MRI (Magnetic Resonance Imaging)",
        desc: "An MRI uses magnetic fields and radio waves with computer processing to create images.",
        iconSrc:
            "/images/subject-matter-experts/radiology/MRI-Magnetic-Resonance-Imaging.webp",
    },
    {
        title: "Mammograms",
        desc: "Specialized X-rays that look at breast tissue.",
        iconSrc:
            "/images/subject-matter-experts/radiology/Mammograms.webp",
    },
    {
        title: "Ultrasound",
        desc: "An ultrasound uses sound waves to create moving images that display on a monitor, commonly used for echocardiograms and examining the womb during pregnancy.",
        iconSrc:
            "/images/subject-matter-experts/radiology/Ultrasound.webp",
    },
    {
        title: "Fluoroscopy",
        desc: "X-rays that make moving images of the body in real time. This imaging is crucial for many procedures, especially those involving the gastrointestinal tract.",
        iconSrc:
            "/images/subject-matter-experts/radiology/Fluoroscopy.webp",
    },
    {
        title: "Nuclear medicine",
        desc: "These are short-acting radioactive substances that generate light from bodily processes. A camera collects the light, so a computer can process it and develop an image.",
        iconSrc:
            "/images/subject-matter-experts/radiology/Nuclear-Medicine.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sarah Mitchell",
        degree: "PhD in Radiological Sciences",
        experience: "15 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/cell-biology/Dr.-Sarah-Mitchell.webp",
    },
    {
        name: "Dr. Rajesh Kumar",
        degree: "MD in Radiology",
        experience: "12 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/radiology/Dr.-Rajesh-Kumar.webp",
    },
    {
        name: "Dr. Emily Zhao",
        degree: "PhD in Biomedical Imaging",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/neurology/Dr.-Laura-Stein.webp",
    },
];

export default function RadiologyExpertsSection() {
    // Accordion State: Default closed (-1)
    const [openTrendAccordion, setOpenTrendAccordion] = useState<number | null>(null);

    // Why Trust Pubrica Tab State
    const [activeTrustTab, setActiveTrustTab] = useState(0);

    const toggleTrendAccordion = (index: number) => {
        setOpenTrendAccordion(openTrendAccordion === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">
            {/* SECTION 1: Emerging Trends in Radiology Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Radiology Research"
                    description="Radiology is rapidly transforming with digital technologies and cross-disciplinary innovations. Key trends shaping the future of the field include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: What Is Radiology Used For? */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="What Is Radiology Used For?"
                    description="Radiology is used for a wide range of conditions, and is classified depending on the type of radiology and the exact imaging test used. The various imaging exams include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/radiology/What-Is-Radiology-Used-For.webp"
                    imageAlt="What Is Radiology Used For"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica radiology services content across top-tier journals, conferences, and platforms, maximizing recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={{
                        imageSrc:
                            "/images/subject-matter-experts/radiology/sample-works-7.webp",
                        imageAlt: "Radiology Journal Cover",
                        paperTitle:
                            "Using AI to Select Women with Intermediate Breast Cancer Risk for Breast Screening with MRI",
                        author:
                            "Van Winkel, S. L., Samperna, R., Loehrer, E. A., Kroes, J., Rodriguez-Ruiz, A., & Mann, R. M.",
                        journalName: "Radiology",
                        publisher: "Radiological Society of North America (RSNA)",
                        impactFactor: "12.1",
                    }}
                />
            </section>

            {/* SECTION 4: Our Expert Radiology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Radiology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}