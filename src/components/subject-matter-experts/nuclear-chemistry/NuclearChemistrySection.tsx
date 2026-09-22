"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const applicationsData = [
    {
        title: "",
        desc: "The use of Radiopharmaceuticals includes the introduction of new radiolabelled compounds that target therapies and diagnostic applications.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-chemistry/diagnostic-applications.webp",
    },
    {
        title: "",
        desc: "Nuclear Waste Management introduces innovative means of safely disposing of radioactive waste.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-chemistry/Nuclear-Waste-Management.webp",
    },
    {
        title: "",
        desc: "Nuclear Forensics includes a growing body of methods to trace nuclear materials for the sake of national security.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-chemistry/Nuclear-Forensics.webp",
    },
    {
        title: "",
        desc: "Medical Isotopes allows for efficient and effective production of isotopes used for treating cancer and imaging.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-chemistry/Medical-Isotopes.webp",
    },
    {
        title: "",
        desc: "Fusion Energy has yielded breakthroughs in nuclear fusion, a way to harness energy from the sun.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-chemistry/Fusion-Energy.webp",
    },
    {
        title: "",
        desc: "Environmental Radiochemistry provides a study of the impacts of radiation and possible methods of remediation.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-chemistry/Environmental-Radiochemistry.webp",
    },
];

const clinicalApplicationsData = [
    {
        title: 'Radiopharmaceutical Therapy',
        description: 'Advancing targeted radionuclide therapy for precise destruction of tumor cells while sparing healthy surrounding tissues.'
    },
    {
        title: 'Nuclear Reactor Safety',
        description: 'Improving materials science and coolant chemistry to enhance the safety and longevity of next-generation nuclear reactors.'
    },
    {
        title: 'Radiation Dosimetry',
        description: 'Developing advanced measurement techniques to accurately assess radiation exposure in medical and industrial environments.'
    },
    {
        title: 'Isotope Production & Sourcing',
        description: 'Optimizing accelerator and reactor production pathways for critical medical and industrial radioisotopes.'
    },
    {
        title: 'Decommissioning & Remediation',
        description: 'Engineering chemical separation and immobilization protocols for safe nuclear facility decommissioning.'
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Arun Patel",
        degree: "PhD in Nuclear Chemistry",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/food-science/Prof.-Daniel-Hughes.webp",
    },
    {
        name: "Dr. Priya Verma",
        degree: "PhD in Radiochemistry",
        experience: "9 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/nuclear-chemistry/Dr.-Priya-Verma.webp",
    },
    {
        name: "Dr. Kevin Thomas",
        degree: "PhD in Nuclear Physics & Chemistry",
        experience: "11 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/nuclear-chemistry/Dr.-Kevin-Thomas.webp",
    },
];

export default function NuclearChemistrySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Nuclear Chemistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in Nuclear Chemistry Research"
                    description="Nuclear chemistry is rapidly evolving with advancements in radiopharmaceuticals, waste management, and clean energy solutions. These emerging trends are driving innovations that will shape the future of medical, environmental, and energy sectors:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/nuclear-chemistry/Emerging-Trends-in-Nuclear-Chemistry-Research.webp"
                    imageAlt="Emerging Trends in Nuclear Chemistry Research"
                />

                <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed pt-2">
                    Our experts stay ahead of these trends to help researchers craft cutting-edge, publishable work that contributes meaningfully to the nuclear chemistry of knowledge.
                </p>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/nuclear-chemistry/sample-works-11-7.webp",
                    imageAlt: "Radiation Physics and Chemistry Journal Cover",
                    paperTitle:
                        "Selective T-cell depletion in stored whole blood using green-synthesised γ-Fe2O3 nanoparticles with gamma or laser irradiation: A comparative in-vitro study",
                    author: "Baydaa T. Sih, Alauldeen Alqasim",
                    journalName: "Radiation Physics and Chemistry",
                    publisher: "Elsevier",
                    impactFactor: "3.3",
                }}
            />

            {/* SECTION: Our Expert Nuclear Chemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Nuclear Chemistry Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}