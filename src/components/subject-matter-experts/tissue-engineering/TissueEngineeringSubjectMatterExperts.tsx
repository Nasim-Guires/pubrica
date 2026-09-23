"use client";
import React from 'react';
import Image from 'next/image';
import { Briefcase, FileText } from 'lucide-react';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const applicationsData = [
    {
        title: "",
        desc: "Printing and making 3D Bioprinting using layers build of cells and/or materials to form new Printed Tissue Use and Organs.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/Printing-and-making-3D-Bioprinting.webp",
    },
    {
        title: "",
        desc: "Organoids and Microtissues (Mini Organ Models) for drug development, testing new medications, creating diseases to help test new treatments.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/Organoids-and-Microtissues.webp",
    },
    {
        title: "",
        desc: "New stem cell advancements – Creating ways of taking stem cells from an individual and reprogramming them to enhance the growth of tissues.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/New-stem-cell-advancements.webp",
    },
    {
        title: "",
        desc: "Biomaterials Innovation – Developing advanced materials such as smart hydrogel and Nanomaterial to create a better performance in scaffold material.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/Biomaterials-Innovation.webp",
    },
    {
        title: "",
        desc: "Vascularization – Creating a vascular supply within the tissue to increase the longevity of the implanted tissue.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/Vascularization.webp",
    },
    {
        title: "",
        desc: "Customized Tissue Engineering – Using a patient's cells to develop a more effective therapy option.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/Customized-Tissue-Engineering.webp",
    },
    {
        title: "",
        desc: "Artificial Intelligence Machine Learning – Using data-driven insight to create an improved tissue engineering process.",
        iconSrc:
            "/images/subject-matter-experts/tissue-engineering/Artificial-Intelligence-Machine-Learning.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ayesha Patel",
        degree: "PhD in Tissue Engineering",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/data-mining/Dr.-Mark-Robinson.webp",
    },
    {
        name: "Dr. Mark Thompson",
        degree: "PhD in Biomaterials Science",
        experience: "9 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/tissue-engineering/Dr.-Mark-Thompson.webp",
    },
    {
        name: "Dr. Emily Zhao",
        degree: "PhD in Regenerative Medicine",
        experience: "7 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/tissue-engineering/Dr.-Emily-Zhao.webp",
    },
];

export default function TissueEngineeringSubjectMatterExperts() {
    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Tissue Engineering Research (Exact Image Layout) */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in Tissue Engineering Research"
                    description="Tissue engineering is revolutionizing the way we approach regenerative medicine, offering groundbreaking solutions for creating functional tissues and organs. Advancements like 3D bioprinting, stem cell innovations, and AI integration are shaping the future of healthcare and personalized treatments:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/tissue-engineering/Emerging-Trends-in-Tissue-Engineering-Research.webp"
                    imageAlt="Emerging Trends in Tissue Engineering Research"
                />

                <p className="text-gray-700 text-base sm:text-lg pt-2">
                    These trends are transforming tissue engineering, offering new opportunities for personalized healthcare.
                </p>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/tissue-engineering/sample-works-11-4.webp",
                    imageAlt:
                        "Journal of Tissue Engineering and Regenerative Medicine Cover",
                    paperTitle:
                        "The Chorioallantois Membrane as a Platform for Developing Vascularized Cell Microencapsulation Devices",
                    author:
                        "Murillo D. L. Bernardi, Sonny F. de Jong, Maarten B. Rookmaker, Andrej Shoykhet, Roel Deckers, Silvia M. Mihăilă, Rosalinde Masereeuw, Marianne C. Verhaar",
                    journalName: "Journal of Tissue Engineering and Regenerative Medicine",
                    publisher: "Wiley",
                    impactFactor: "2.6",
                }}
            />

            {/* SECTION: Our Expert Tissue Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Tissue Engineering Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}