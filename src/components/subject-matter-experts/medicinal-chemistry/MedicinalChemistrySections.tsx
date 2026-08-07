"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, Plus, Minus, Cpu, BookOpen, Layers, ShieldCheck, Zap } from 'lucide-react';

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

const editorsData = [
    {
        name: 'Dr. Rahul Mehta',
        degree: 'PhD, Medicinal Chemistry',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Elena Petrova',
        degree: 'PhD, Pharmaceutical Chemistry',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇪🇸',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Samuel Ochieng',
        degree: 'PhD, Drug Discovery & Design',
        experience: '10 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
];

export default function MedicinalChemistrySections() {
    const [openImportanceIndex, setOpenImportanceIndex] = useState<number | null>(0);

    const toggleImportance = (index: number) => {
        setOpenImportanceIndex(openImportanceIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">


            {/* SECTION 1: Emerging Trends in Medicinal Chemistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Medicinal Chemistry Research
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Medicinal chemistry research is rapidly evolving with the integration of advanced technologies and innovative approaches to drug discovery. These emerging trends are transforming how safer, more effective, and targeted therapies are designed and developed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left List of Trends */}
                    <div className="lg:col-span-7 space-y-4">
                        {[
                            {
                                title: "AI and Machine Learning in Drug Design",
                                desc: "Utilizing predictive algorithms to enable virtual screening of drug leads via lead optimization.",
                                icon: Cpu
                            },
                            {
                                title: "Fragment-Based Drug Discovery (FBDD)",
                                desc: "Allows the identification and extended development of chemical compound small fragments to create future therapeutic medications.",
                                icon: BookOpen
                            },
                            {
                                title: "Targeted Protein Degradation",
                                desc: "Development of PROTACs and Adhesive Molecules for Specific Proteins as therapeutic agents.",
                                icon: Layers
                            },
                            {
                                title: "Structure-Based Drug Design (SBDD)",
                                desc: "Utilizes structure determination methods such as computer modelling and crystallography to generate ligands.",
                                icon: FileText
                            },
                            {
                                title: "Multi-Target Drug Design",
                                desc: "Multi-Target Design of Compounds that have a biological effect on more than one target Increases efficacy when they are developed into medication.",
                                icon: Zap
                            },
                            {
                                title: "Peptide and Macrocycle Therapeutics",
                                desc: "Treatment Options for Biological Targets That Present Challenges in Drug Development",
                                icon: ShieldCheck
                            },
                            {
                                title: "Green and Sustainable Chemistry",
                                desc: "Provide New Pathways for Developing Drug Development in an Environmentally Friendly Fashion with decreased use of chemicals",
                                icon: Briefcase
                            }
                        ].map((trend, i) => {
                            const IconComp = trend.icon;
                            return (
                                <div key={i} className="flex items-start space-x-3 bg-[#fafafa] border border-gray-200 p-4 rounded-lg">
                                    <div className="p-2 bg-[#0e3b32]/10 text-[#0e3b32] rounded-md shrink-0 mt-0.5">
                                        <IconComp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0e3b32] text-base">{trend.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{trend.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Researchers working with a microscope"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Clinical Applications (omitted based on image inspection if not present, but keeping standard structure matching prompt text / instructions) -> wait, the prompt says "if the ciode has extra from image remobe that part" and shows specific images for Emerging Trends, Where Our Authors Publish, and Editors. Let's make sure it strictly matches the image content. */}

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. This will augment the authority of Pubrica as well as its overall visibility indicating it as one of the foremost professional publishers.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white relative h-[280px]">
                        <Image
                            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400"
                            alt="RSC Medicinal Chemistry Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Diversifying the triquinazine scaffold of a Janus kinase inhibitor
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Mulliri, K., Meier, K., Feuchter, J.-D., Javor, S., Meirelles, M. A., & Reymond, J.L
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            RSC Medicinal Chemistry
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Royal Society of Chemistry
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.6
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Medical And Pharmaceutical Chemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Medicinal Chemistry Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        The combination of specialized training and years of experience provides our team members with the background required to develop and implement a variety of different solutions to complex problems. We take pride in offering our clients quality services and solutions that exceed their expectations.
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
                                    <div className="relative w-14 h-14 shrink-0">
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            fill
                                            className="rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <span className="absolute bottom-0 right-0 text-sm bg-white rounded-full px-1 shadow-xs z-10">
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