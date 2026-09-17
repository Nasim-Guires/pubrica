"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const importanceOfMedicalImagingData = [
    {
        title: 'Early Diagnosis',
        description: 'Imaging allows the detection of disease before symptoms manifest, significantly improving patient outcomes.'
    },
    {
        title: 'Non-invasive Monitoring',
        description: 'Imaging provides a non-invasive window into internal organs, reducing the need for exploratory surgery or invasive procedures.'
    },
    {
        title: 'Precision Treatment',
        description: 'Imaging-guided interventions enhance treatment accuracy in oncology, cardiology, and neurosurgery.'
    },
    {
        title: 'Drug Development and Clinical Trials',
        description: 'Functional and molecular imaging provide critical biomarkers for assessing drug efficacy and safety.'
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence (AI) and Machine Learning",
        description:
            "AI algorithms enhance image interpretation, lesion detection, and workflow efficiency. AI-based tools reduce human error and provide quantitative assessments for precision medicine.",
    },
    {
        id: "molecular-imaging",
        title: "Molecular Imaging",
        description:
            "Targeted radiotracers and contrast agents allow visualization at the molecular and cellular levels, aiding early disease detection and therapy monitoring.",
    },
    {
        id: "3d-4d-imaging",
        title: "3D and 4D Imaging",
        description:
            "Advanced imaging techniques provide volumetric and dynamic views, improving surgical planning and interventional procedures.",
    },
    {
        id: "portable-imaging",
        title: "Portable and Point-of-Care Imaging",
        description:
            "Miniaturized devices allow bedside imaging in emergency, rural, and resource-limited settings, improving accessibility and patient outcomes.",
    },
    {
        id: "hybrid-imaging-systems",
        title: "Hybrid Imaging Systems",
        description:
            "Integration of modalities such as PET/CT or PET/MRI provides both anatomical and functional information in a single scan..",
    },
];;

const applicationsData = [
    {
        title: "Cardiology",
        desc: "Echocardiography, cardiac MRI, and CT angiography help assess heart structure, function, and vascular abnormalities.",
        iconSrc:
            "/images/subject-matter-experts/medical-imaging-techniques/Cardiology.webp",
    },
    {
        title: "Neurology",
        desc: "MRI, fMRI, PET, and CT are used to diagnose stroke, neurodegenerative diseases, brain tumours, and epilepsy.",
        iconSrc:
            "/images/subject-matter-experts/medical-imaging-techniques/Neurology-1.webp",
    },
    {
        title: "Oncology",
        desc: "CT, MRI, PET, and SPECT aid in tumour detection, staging, treatment monitoring, and surgical planning.",
        iconSrc:
            "/images/subject-matter-experts/medical-imaging-techniques/Oncology.webp",
    },
    {
        title: "Orthopaedics",
        desc: "X-ray, CT, and MRI are essential for diagnosing fractures, ligament injuries, and degenerative joint disorders.",
        iconSrc:
            "/images/subject-matter-experts/medical-imaging-techniques/Orthopaedics.webp",
    },
    {
        title: "Prenatal and Reproductive Health",
        desc: "Ultrasound and foetal MRI monitor foetal development and detect congenital anomalies.",
        iconSrc:
            "/images/subject-matter-experts/medical-imaging-techniques/Prenatal-and-Reproductive-Health.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ethan Miller",
        degree: "PhD in Medical Imaging",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/enzymes/Dr.-Ethan-Matthews.webp",
    },
    {
        name: "Dr. Sophia Mehta",
        degree: "PhD in Radiological Sciences",
        experience: "11 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp",
    },
    {
        name: "Dr. Arjun Menon",
        degree: "PhD in Clinical Radiology",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/animal-science/karrel.png",
    },
];

export default function MedicalImagingTechniquesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);
    const [openImportanceIndex, setOpenImportanceIndex] = useState<number | null>(
        null
    );

    const toggleImportanceCard = (index: number) => {
        setOpenImportanceIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Importance of Medical Imaging in Research and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Importance of Medical Imaging in Research and Healthcare
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Medical imaging has revolutionized both clinical practice and biomedical research. Clinically, imaging enables early disease detection, accurate diagnosis, treatment planning, and monitoring of therapy outcomes. In research, imaging technologies facilitate the study of anatomy, physiology, and pathology in both preclinical models and human subjects. Key benefits include:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {importanceOfMedicalImagingData.map((item, index) => {
                        const isOpen = openImportanceIndex === index;

                        return (
                            <div
                                key={item.title}
                                className="w-full self-start border border-gray-200 rounded-lg bg-[#f7f8f8] overflow-hidden transition-all duration-200 shadow-sm"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleImportanceCard(index)}
                                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="text-[#0e3b32]">
                                            <FileText className="w-5 h-5 shrink-0" />
                                        </div>

                                        <span className="font-bold text-[#0e3b32] text-base sm:text-lg">
                                            {item.title}
                                        </span>
                                    </div>

                                    <div className="text-[#0e3b32] bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                                        {isOpen ? (
                                            <Minus className="w-4 h-4 shrink-0" />
                                        ) : (
                                            <Plus className="w-4 h-4 shrink-0" />
                                        )}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-3 text-gray-700 text-base sm:text-lg leading-relaxed border-t border-gray-200/60">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION: Emerging Trends in Medical Imaging */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Medical Imaging"
                    description="The field of medical imaging is rapidly evolving, driven by technological innovation and computational advancements. Key trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Clinical Applications of Medical Imaging */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Clinical Applications of Medical Imaging"
                    description="Medical imaging plays a critical role in early diagnosis, disease monitoring, and treatment planning. Key applications include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/medical-imaging-techniques/Clinical-Applications-of-Medical-Imaging.webp"
                    imageAlt="Clinical Applications of Medical Imaging"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/medical-imaging-techniques/BMC-Medical-Imaging.webp",
                    imageAlt: "BMC Medical Imaging Journal Cover",
                    paperTitle:
                        "Computed tomography image quality parameter settings for the design and manufacture of craniofacial implants",
                    author: "Muller, H",
                    journalName: "BMC Medical Imaging",
                    publisher: "BioMed Central",
                    impactFactor: "3.2 (2024)",
                }}
            />
            {/* SECTION: Our Expert Medical Imaging Technique Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Medical Imaging Technique Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}