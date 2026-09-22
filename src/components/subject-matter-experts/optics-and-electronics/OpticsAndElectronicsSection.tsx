"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import Link from "next/link";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "integrated-photonics",
        title: "Integrated Photonics and Silicon Photonics",
        description:
            "Silicon and Integrated Photonics Minimising of optical components used in electronics has led to improved data transmission speeds, reduced requirements to power usage and performing better overall for Optical Communications systems.",
    },
    {
        id: "advanced-optoelectronic",
        title: "Advanced Optoelectronic Devices",
        description:
            "Advancements in Optoelectronic Components Improving the quality of imaging sensing, Enhanced Optical Sensors will enable advances in future products by providing better quality images and sensor data to use for other electronic systems.",
    },
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence-Enabled Optical Systems",
        description: (
            <>
                <Link
                    href="/services/ai-ml-support/"
                    className="text-blue-600"
                >
                    Artificial Intelligence
                </Link>{" "}
                in Optical Systems Combining Ai and optical electronic systems will allow for greater accuracy, faster analysis of images and the ability to recognize patterns of data in real time.
            </>
        ),
    },
    {
        id: "flexible-wearable",
        title: "Flexible and Wearable Electronics",
        description:
            "Flexible and Wearable Electronics Flexible electronic and Optical Technologies have opened many new possibilities for usage of Wearable Health Monitoring Systems, Smart Textiles, and Human-Machine Interaction applications.",
    },
    {
        id: "nanophotonic-metamaterials",
        title: "Nanophotonic and Metamaterials",
        description:
            "Nanophotonic and Metamaterials The invention of Nanostructured materials is allowing for the creation of new materials that enable stunningly precise control over the use of Light for Sensing, Imaging, as well as Energy Efficiency.",
    },
    {
        id: "energy-efficient",
        title: "Energy-Efficient and Sustainable Technologies",
        description:
            "Sustainable, Energy Efficient Technology Development of Low Power Electronics and Smart Energy Harvesting Systems are creating many new opportunities for the development of Green, Sustainable, and Long-Lasting Electronic Technologies.",
    },
];

const applicationsData = [
    {
        title: "",
        desc: "Diagnostic Imaging and Its Applications through Optical and Electronic Systems enable the precise visual detection of diseases at an earlier stage.",
        iconSrc:
            "/images/subject-matter-experts/optics-and-electronics/Diagnostic-Imaging.webp",
    },
    {
        title: "",
        desc: "Patient Monitoring Technologies are utilized to continuously monitor and track a patient's vitals (physiological processes) to provide timely and individualized care.",
        iconSrc:
            "/images/subject-matter-experts/optics-and-electronics/Patient-Monitoring-1.webp",
    },
    {
        title: "",
        desc: "Minimally Invasive Techniques use Optical Technologies for accurate guidance throughout surgery.",
        iconSrc:
            "/images/subject-matter-experts/optics-and-electronics/Minimally-Invasive.webp",
    },
    {
        title: "",
        desc: "Therapeutic Uses of Laser and Electrons provide increased accuracy and recovery time for patients.",
        iconSrc:
            "/images/subject-matter-experts/optics-and-electronics/Therapeutic-Uses.webp",
    },
    {
        title: "",
        desc: "Remote Healthcare Applications include telehealth and remote monitoring of a Person’s Health through Opto-Electronic Systems.",
        iconSrc:
            "/images/subject-matter-experts/optics-and-electronics/Remote-Healthcare-Applications.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Rohan Patel",
        degree: "PhD in Photonics and Optical Engineering",
        experience: "12 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Prof.-Chen-Li.webp",
    },
    {
        name: "Dr. Elena Kovacs",
        degree: "PhD in Electronic and Communication Engineering",
        experience: "13 years of experience",
        manuscripts: "155+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cosmeceuticals/Dr.-Laura-Kim-1.webp",
    },
    {
        name: "Dr. Vikram Iyer",
        degree: "PhD in Applied Optics",
        experience: "10 years of experience",
        manuscripts: "125+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp",
    },
];

export default function OpticsAndElectronicsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Importance of Optics and Electronics in Research and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
                <div className="space-y-2 text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                        Importance of Optics and Electronics in Research and Healthcare
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base max-w-5xl leading-relaxed">
                        Optics and electronics provide critical tools used to improve modern science, engineering and health care industries. These technologies form the basis of many sophisticated sensor systems, imaging systems and data processing systems used to perform various tasks in a high precision manner. The continuous development of optics and photonics technologies as well as the development of innovative electronic systems allow for accurate measurement, extremely fast data transfer and intelligent control of various systems in many different application areas:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    <div className="space-y-3">
                        <h3 className="text-[#0e3b32] text-lg sm:text-xl font-bold mb-2">
                            Key contributions include:
                        </h3>
                        <div className="space-y-2.5">
                            <div className="flex items-start space-x-2.5">
                                <div className="mt-0.5 text-[#0e3b32]">
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                   High precision measurement enables to have it correctly detected or accurately analysed for the following physical vs chemical vs biological parameters, respectively.
                                </p>
                            </div>
                            <div className="flex items-start space-x-2.5">
                                <div className="mt-0.5 text-[#0e3b32]">
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                  Non-invasive Sensing enables a means of safely performing analysis on materials and/or analysing biological systems in an invasive manner, i.e., not physically intrusive contact.
                                </p>
                            </div>
                            <div className="flex items-start space-x-2.5">
                                <div className="mt-0.5 text-[#0e3b32]">
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                   Performance Enhancements help improve systems' performance due to improvements in system signal processing efficiency and operational reliability.
                                </p>
                            </div>
                            <div className="flex items-start space-x-2.5">
                                <div className="mt-0.5 text-[#0e3b32]">
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                   Innovation and Technology Development are utilized for creating and producing photonics, sensors, imaging and communication technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <img
                            src="/images/subject-matter-experts/optics-and-electronics/Importance-of-Optics-and-Electronics-in-Research-and-Healthcare-1.webp"
                            alt="Optics and electronics research setup"
                            className="w-full h-auto object-cover max-w-full"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Emerging Trends in Optics and Electronics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Optics and Electronics"
                    description="Advancements in optics and electronics are driving innovation across healthcare, communication, manufacturing, and scientific research. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Clinical Applications of Optics and Electronics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Clinical Applications of Optics and Electronics"
                    description="Modern Clinical Practice includes the utilization of Optics & Electronics to provide clinicians with accurate diagnostic tools, continual patient evaluation and treatment strategies. Optics and Electronics also deliver a higher overall result than if they had been employed by an individual practitioner alone:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/optics-and-electronics/clinical-application.webp"
                    imageAlt="Clinical Applications of Optics and Electronics"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/optics-and-electronics/sample-works-11-10.webp",
                    imageAlt: "BMC Medical Imaging Cover",
                    paperTitle:
                        "Computed tomography image quality parameter settings for the design and manufacture of craniofacial implants.",
                    author: "Muller, H",
                    journalName: "BMC Medical Imaging",
                    publisher: "BioMed Central",
                    impactFactor: "3.2 (2024)",
                }}
            />

            {/* SECTION: Our Expert Optics And Electronics Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Optics And Electronics Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}