"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'neurodegenerative-diseases',
        title: 'Neurodegenerative Diseases',
        description: 'Advanced research and therapeutic developments targeting conditions such as Alzheimer’s, Parkinson’s, and other neurodegenerative disorders.'
    },
    {
        id: 'neural-engineering',
        title: 'Neural Engineering',
        description: 'The integration of engineering principles with neuroscience to develop neuroprosthetics, brain-computer interfaces, and neural repair systems.'
    },
    {
        id: 'ai-in-neurology',
        title: 'Artificial Intelligence (AI) in Neurology',
        description: 'The application of machine learning and AI for early diagnosis, predictive modeling of neurological decline, and analysis of neuroimaging data.'
    },
    {
        id: 'cognitive-neuroscience',
        title: 'Cognitive Neuroscience',
        description: 'Investigating the biological foundations underlying cognition, memory, language, and behavioral functions.'
    },
    {
        id: 'stroke-and-cerebrovascular',
        title: 'Stroke and Cerebrovascular Disorders',
        description: 'Novel interventions, acute care strategies, and neuroprotective treatments for ischemic and hemorrhagic strokes.'
    },
    {
        id: 'neuropharmacology',
        title: 'Neuropharmacology',
        description: 'The study of how drugs affect cellular function in the nervous system to develop targeted therapeutics for neurological disorders.'
    },
    {
        id: 'neuroimaging-advancements',
        title: 'Advanced Neuroimaging',
        description: 'Cutting-edge imaging techniques including fMRI, PET, and high-resolution MRI for precise mapping of brain structures and functions.'
    },
    {
        id: 'pediatric-neurology',
        title: 'Pediatric Neurology',
        description: 'Specialized diagnostic and therapeutic approaches for developmental and neurological disorders affecting infants, children, and adolescents.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Diagnostic Evaluation',
        description: 'Comprehensive neurological assessments, electroencephalography (EEG), and advanced neuroimaging for accurate diagnosis.'
    },
    {
        title: 'Therapeutic Intervention',
        description: 'Targeted pharmacological treatments, surgical interventions, and neuromodulation therapies for chronic neurological conditions.'
    },
    {
        title: 'Rehabilitation and Recovery',
        description: 'Physical, occupational, and cognitive rehabilitation programs designed to restore function and improve patient outcomes post-stroke or injury.'
    },
    {
        title: 'Neuroprotection',
        description: 'Strategies and compounds aimed at preventing neuronal cell death and slowing the progression of neurodegenerative diseases.'
    },
    {
        title: 'Brain-Computer Interfaces',
        description: 'Developing assistive technologies that allow direct communication between the brain and external devices for paralyzed patients.'
    },
    {
        title: 'Clinical Research and Trials',
        description: 'Conducting rigorous clinical studies to evaluate the safety and efficacy of novel neurological therapeutics and devices.'
    },
    {
        title: 'Pain Management',
        description: 'Specialized interventions and neuromodulation techniques for managing chronic neuropathic and migraine pain disorders.'
    },
    {
        title: 'Preventive Neurology',
        description: 'Identifying risk factors and implementing lifestyle or medical interventions to prevent cerebrovascular and neurodegenerative events.'
    }
];

const editorsData = [
    {
        name: 'Dr. Ethan Caldwell',
        degree: 'PhD in Neurobiology',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: '/images/subject-matter-experts/neurology/Neurology.webp'
    },
    {
        name: 'Dr. Priya Mehta',
        degree: 'PhD in Clinical Neurology',
        experience: '10 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: '/images/subject-matter-experts/neurology/Clinical-Neurology.webp'
    },
    {
        name: 'Dr. Ananya Rao',
        degree: 'PhD in Cognitive Neuroscience',
        experience: '11 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: '/images/subject-matter-experts/neurology/Cognitive-and-Behavioural-Neurology.webp'
    }
];

export default function NeurologySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Applications of Neurology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Neurology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Neurology encompasses a wide array of clinical and research applications dedicated to understanding and treating disorders of the nervous system. Some notable applications include:
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
                                    <strong className="text-gray-900 font-bold">{item.title} - </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/neurology/Emerging-Trends-in-Neurology-Research.webp"
                            alt="Neurology clinical research"
                            width={600}
                            height={450}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximising recognition and global reach.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white relative h-[280px]">
                        <Image
                            src="/images/subject-matter-experts/neurology/sample-works-6-3.webp"
                            alt="Neurology Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Advances in Therapeutic Interventions for Neurodegenerative Disorders
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Caldwell, E., Mehta, P., & Rao, A.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Neurology and Neuroscience
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            4.2 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Neurology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Neurology Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editorsData.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3c3bb] rounded-xl p-6 text-gray-900 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                {/* Header with Avatar and Flags */}
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            width={56}
                                            height={56}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                {/* Editor Stats */}
                                <div className="space-y-2 text-xs sm:text-sm font-semibold text-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32]" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FileText className="w-4 h-4 text-[#0e3b32]" />
                                        <span>{editor.manuscripts}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}