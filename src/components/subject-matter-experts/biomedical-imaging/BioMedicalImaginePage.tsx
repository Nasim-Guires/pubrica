import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from "@/components/common/HeroBanner";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import {
    Edit3,
    Database,
    PenTool,
    Send,
    FileText,
    ClipboardList,
} from "lucide-react";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";


export default function BioMedicalImaginePage() {
    const disciplines = [
        {
            title: "X-ray Imaging",
            iconSrc:
                "/images/subject-matter-experts/biomedical-imaging/X-ray-Imaging.webp",
            description:
                "It is one of the oldest and most widely used diagnostic tools. It utilizes ionizing radiation to produce images of bones and certain tissues. Innovations such as digital radiography and computed tomography (CT) have significantly improved image quality, reduced exposure, and expanded clinical applications.",
        },
        {
            title: "Computed Tomography (CT)",
            iconSrc:
                "/images/subject-matter-experts/biomedical-imaging/Computed-Tomography-CT.webp",
            description:
                "CT combines multiple X-ray images taken from different angles to produce cross-sectional views of the body. This technique allows precise visualization of internal organs, blood vessels, and skeletal structures. Modern CT imaging is critical for trauma assessment, cancer detection, and cardiovascular evaluations.",
        },
        {
            title: "Magnetic Resonance Imaging (MRI)",
            iconSrc:
                "/images/subject-matter-experts/biomedical-imaging/Magnetic-Resonance-Imaging-MRI-1.webp",
            description:
                "MRI employs powerful magnetic fields and radio waves to generate detailed images of soft tissues. Unlike X-rays, MRI does not involve ionizing radiation, making it safe for repeated use. MRI is particularly valuable in neurological studies, musculoskeletal assessments, and cardiac imaging.",
        },
        {
            title: "Ultrasound Imaging",
            iconSrc:
                "/images/subject-matter-experts/biomedical-imaging/Ultrasound-Imaging-1.webp",
            description:
                "Ultrasound uses high-frequency sound waves to create real-time images of organs and tissues. It is non-invasive, portable, and widely used in obstetrics, cardiology, and abdominal diagnostics. Advanced techniques like Doppler ultrasound can visualize blood flow and vascular health.",
        },
        {
            title: "Nuclear Medicine and PET Imaging",
            iconSrc:
                "/images/subject-matter-experts/biomedical-imaging/Nuclear-Medicine-and-PET-Imaging.webp",
            description:
                "Nuclear imaging involves the use of radioactive tracers to evaluate physiological processes. Positron Emission Tomography (PET) and Single Photon Emission Computed Tomography (SPECT) provide functional insights into metabolism, organ function, and disease activity, complementing structural imaging methods.",
        },
        {
            title: "Optical Imaging",
            iconSrc:
                "/images/subject-matter-experts/biomedical-imaging/Optical-Imaging.webp",
            description:
                "Optical imaging techniques, including fluorescence and bioluminescence imaging, are predominantly used in research and preclinical studies. They enable the visualization of cellular and molecular processes in real-time, advancing our understanding of disease mechanisms.",
        },
    ];

    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: Edit3,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileText,
        },
        {
            title: "Case Report Writing",
            desc: "Assistance in drafting and editing case reports for rare diseases.",
            href: "/services/physician-writing-services/case-report/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: ClipboardList,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Biomedical Imaging"
                description="Biomedical Imaging utilizes advanced technologies to visualize and analyze the internal structures and functions of the human body, aiding in medical diagnosis and treatment."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Biomedical Imaging Solutions for Advanced Research &amp; Clinical Innovation
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/biomedical-imaging/Biomedical-Imaging.webp"
                                        alt="Doctor inspecting medical scan"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Biomedical imaging is one of the most transformative pillars of modern healthcare and life sciences. By enabling the non-invasive visualization of internal organs, tissues, cells, and biological processes, biomedical imaging serves as a bridge between clinical medicine, engineering, physics, and computational sciences. From early disease detection to complex physiological assessments and advanced therapeutic planning, biomedical imaging technologies continue to redefine the standards of precision, accuracy, and patient-centred care.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide comprehensive biomedical imaging solutions that empower researchers, clinicians, pharmaceutical companies, and academic institutions to generate high-quality, publication-ready data. Our advanced medical imaging services are designed to enhance the clarity, precision, and scientific integrity of your imaging research, ensuring that your findings meet the highest global standards. Biomedical imaging provides crucial support to healthcare and research by:
                                    </p>

                                    {/* List Section */}
                                    <div className="space-y-3 pt-2">
                                        <h3 className="text-base font-bold text-[#0F393B]">
                                            Our Expertise in Animal Science Includes
                                        </h3>

                                        <ul className="space-y-3 text-base leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">→</span>
                                                <span>Detecting disease at early stages</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">→</span>
                                                <span>Guiding clinicians in selecting optimal treatment strategies</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">→</span>
                                                <span>Measuring progress and treatment response</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">→</span>
                                                <span>Understanding structural and physiological abnormalities</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#C4161C] font-bold">→</span>
                                                <span>Supporting research discoveries and scientific publications</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <GetFreeQuoteButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <CoreAreasSection
                        title="Our Core Modalities in Biomedical Imaging"
                        description="Biomedical imaging has revolutionized modern medicine by providing clinicians and researchers with non-invasive techniques to visualize the structure and function of the human body. These imaging modalities are fundamental in diagnostics, treatment planning, monitoring, and clinical imaging support, making them central to diagnostic imaging research."
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (3 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Biomedical Imaging Research and Publication"
                    description={
                        <>
                            At Pubrica, we specialize in advancing biomedical imaging research by offering comprehensive support across all stages of study design, data interpretation, and scholarly publication. Our team of experts combines scientific rigor with technical proficiency to ensure that your research is presented clearly, accurately, and in alignment with the highest standards of the field.
                        </>
                    }
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}