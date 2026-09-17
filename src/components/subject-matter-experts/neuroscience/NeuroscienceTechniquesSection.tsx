"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const importanceOfNeuroscienceData = [
    {
        title: 'Understanding Brain Function',
        description: 'Neuroscience helps decode how neural circuits process sensory information, regulate emotions, and govern cognitive abilities.'
    },
    {
        title: 'Advancing Neurological Treatments',
        description: 'Research drives the development of targeted therapies for neurodegenerative disorders, psychiatric conditions, and brain injuries.'
    },
    {
        title: 'Brain-Computer Interfaces',
        description: 'Innovations in neurotechnology bridge the gap between biological neural systems and external digital devices.'
    },
    {
        title: 'Cognitive Enhancement and Plasticity',
        description: 'Studies on neuroplasticity reveal how the brain adapts, learns, and recovers following trauma or stroke.'
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "neuroinformatics-big-data",
        title: "Neuroinformatics and Big Data",
        description:
            "Large-scale brain mapping projects like the Human Connectome Project are generating vast amounts of data. Advanced computational tools now allow researchers to integrate and analyze this data to better understand brain connectivity.",
    },
    {
        id: "neurogenetics",
        title: "Neurogenetics",
        description:
            "Genetic research is uncovering how specific genes influence brain structure and function, offering new hope for understanding inherited neurological disorders.",
    },
    {
        id: "brain-computer-interfaces",
        title: "Brain-Computer Interfaces (BCIs)",
        description:
            "BCIs enable direct communication between the brain and external devices, opening possibilities for restoring mobility in paralyzed individuals and advancing human–AI integration.",
    },
    {
        id: "neuroethics",
        title: "Neuroethics",
        description:
            "As neuroscience progresses, ethical considerations surrounding brain privacy, cognitive enhancement, and artificial intelligence are becoming central to research discussions.",
    },
    {
        id: "neuroimmunology",
        title: "Neuroimmunology",
        description:
            "This emerging field explores the interaction between the nervous system and the immune system, revealing how inflammation affects neurological diseases and behavior.",
    },
];

const clinicalApplicationsData = [
    {
        title: 'Neurodegenerative Diseases',
        description: 'Investigating mechanisms and therapeutic interventions for Alzheimer\'s, Parkinson\'s, and amyotrophic lateral sclerosis (ALS).'
    },
    {
        title: 'Psychiatric Disorders',
        description: 'Examining the neurobiological underpinnings of depression, schizophrenia, anxiety, and PTSD to improve intervention strategies.'
    },
    {
        title: 'Stroke and Neurovascular Health',
        description: 'Developing acute neuroprotection strategies and advanced rehabilitation protocols following cerebrovascular events.'
    },
    {
        title: 'Epilepsy and Seizure Disorders',
        description: 'Mapping epileptic foci using advanced neuroimaging and electrophysiology to guide surgical and neuromodulatory treatments.'
    },
    {
        title: 'Neurodevelopmental Conditions',
        description: 'Studying autism spectrum disorder, ADHD, and intellectual disabilities to understand early brain development pathways.'
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Aria Bennett",
        degree: "PhD in Neuroscience",
        experience: "15 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/neuroscience/Dr.-Aria-Bennett.webp",
    },
    {
        name: "Dr. Ethan Morales",
        degree: "PhD in Neurobiology",
        experience: "10 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/neuroscience/Dr.-Ethan-Morales.webp",
    },
    {
        name: "Dr. Priya Nair",
        degree: "PhD in Cognitive Neuroscience",
        experience: "12 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/neuroscience/Dr.-Priya-Nair-2.webp",
    },
];

export default function NeuroscienceTechniquesSection() {
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

            {/* SECTION: Emerging Trends in Neuroscience Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Neuroscience Research"
                    description="The 21st century has seen revolutionary advancements in neuroscience. Some of the most exciting trends shaping the future of the field include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Clinical Applications of Neuroscience */}
            {/* <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Clinical Applications of Neuroscience
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Neuroscience plays a critical role in early diagnosis, disease monitoring, and treatment planning for brain and nervous system disorders. Key applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {clinicalApplicationsData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{item.title}: </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/neuroscience/Comprehensive-Support-for-Neuroscience-Research-Writing-and-Publication.webp"
                            alt="Neuroscience research setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section> */}

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/neuroscience/sample-works-9.webp",
                    imageAlt: "Journal of Neuroscience Research Cover",
                    paperTitle:
                        "High-pressure freezing EM tomography of entire ribbon synapses in the retina",
                    author:
                        "Zhang, J., Aronova, M. A., Yu, X., Sousa, A. A., Leapman, R. D., & Diamond, J. S.",
                    journalName: "Journal of Neuroscience",
                    publisher: "Society for Neuroscience",
                    impactFactor: "4.0 (2024)",
                }}
            />
            {/* SECTION: Our Expert Neuroscience Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Neuroscience Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}