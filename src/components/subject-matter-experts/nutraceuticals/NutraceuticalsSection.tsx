"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Briefcase,
    FileText,
    HeartPulse,
    Brain,
    Shield,
    Activity,
    Bone,
    Sparkles
} from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'personalized-nutrition',
        title: 'Personalized Nutrition & Nutrigenomics',
        description: 'Tailoring dietary recommendations and nutraceutical interventions based on individual genetic profiles, microbiome analysis, and metabolic needs.'
    },
    {
        id: 'microbiome-health',
        title: 'Microbiome & Gut Health Innovations',
        description: 'Advanced prebiotics, probiotics, synbiotics, and postbiotics aimed at optimizing gut flora and systemic wellness.'
    },
    {
        id: 'plant-based-bioactives',
        title: 'Plant-Based & Botanical Bioactives',
        description: 'Novel extraction techniques to isolate high-purity phytochemicals, polyphenols, and bioactive adaptogens.'
    },
    {
        id: 'nanotechnology-delivery',
        title: 'Nanotechnology for Bioavailability Enhancement',
        description: 'Utilizing liposomes, nano-emulsions, and encapsulation technologies to improve nutrient absorption and stability.'
    },
    {
        id: 'regulatory-compliance',
        title: 'Global Regulatory & Safety Compliance',
        description: 'Navigating EFSA, FDA, and international guidelines for novelty, safety dossiers, and health claim substantiation.'
    },
    {
        id: 'clinical-validation',
        title: 'Clinical Validation & Evidence-Based Formulations',
        description: 'Rigorous double-blind clinical trials to scientifically validate the efficacy and safety of novel nutraceutical ingredients.'
    },
    {
        id: 'clean-label',
        title: 'Clean-Label & Sustainable Sourcing',
        description: 'Consumer-driven demand for organic, non-GMO, sustainably harvested, and transparently labeled ingredient sources.'
    },
    {
        id: 'functional-beverages',
        title: 'Functional Foods & Fortified Beverages',
        description: 'Integrating bioactive compounds seamlessly into everyday food products, snacks, and ready-to-drink formulations.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Cardiovascular Health',
        description: 'Omega-3 fatty acids, plant sterols, and polyphenols help reduce cholesterol, improve endothelial function, and mitigate the risk of heart disease.',
        icon: HeartPulse
    },
    {
        title: 'Cognitive Function',
        description: 'Nutraceuticals like ginkgo biloba, phosphatidylserine, and DHA support memory, focus, and neuroprotection.',
        icon: Brain
    },
    {
        title: 'Immune Modulation',
        description: 'Vitamins C and D, zinc, and probiotics enhance immune response and protect against infections.',
        icon: Shield
    },
    {
        title: 'Metabolic Health',
        description: 'Compounds such as berberine, cinnamon extracts, and chromium contribute to glucose regulation and metabolic syndrome management.',
        icon: Activity
    },
    {
        title: 'Bone and Joint Health',
        description: 'Calcium, Vitamin D, glucosamine, and chondroitin support skeletal integrity and reduce the risk of osteoporosis.',
        icon: Bone
    },
    {
        title: 'Anti-Aging and Skin Health',
        description: 'Antioxidants like coenzyme Q10, resveratrol, and lycopene protect cells from oxidative damage and support skin vitality.',
        icon: Sparkles
    }
];

const editorsData = [
    {
        name: 'Dr. Ethan Caldwell',
        degree: 'PhD in Nutritional Science',
        experience: '12 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '/images/subject-matter-experts/nutraceuticals/gb.png',
        avatar: "/images/subject-matter-experts/nutraceuticals/Dr.-Michael-Anderson.webp"
    },
    {
        name: 'Dr. Priya Mehta',
        degree: 'MSc in Food and Nutraceutical Technology',
        experience: '10 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '/images/subject-matter-experts/nutraceuticals/us.png',
        avatar: "/images/subject-matter-experts/nutraceuticals/Dr.-Priya-Mehta.webp"
    },
    {
        name: 'Dr. Ananya Rao',
        degree: 'PhD in Pharmacognosy',
        experience: '11 years of experience',
        manuscripts: '160+ manuscripts edited',
        countryFlag: '/images/subject-matter-experts/nutraceuticals/us.png',
        avatar: "/images/subject-matter-experts/nutraceuticals/Dr.-Ananya-Rao.webp"
    }
];

export default function NutraceuticalsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Applications of Nutraceuticals */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Nutraceuticals
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Nutraceuticals have a wide range of applications in preventive health, therapeutic support, and overall wellness. Some notable applications include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-5">
                        {clinicalApplicationsData.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="mt-1 text-[#0e3b32] bg-[#eef2f1] p-1.5 rounded-full shrink-0">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        <strong className="text-gray-900 font-bold">{item.title}: </strong>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="/images/subject-matter-experts/nutraceuticals/Applications-of-Nutraceuticals.webp"
                                alt="Researcher evaluating nutraceutical formulations"
                                fill
                                sizes="(max-width: 1024px) 100vw, 340px"
                                className="object-cover"
                            />
                        </div>
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
                        Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white relative h-[280px]">
                        <Image
                            src="/images/subject-matter-experts/nutraceuticals/Nutraceuticals.webp"
                            alt="Nutraceuticals in Immune Function Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Analysis of Osmotic Pump-Administered Xylitol in a Syngeneic Mouse Melanoma Model
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Cannon, M., Dempsey, E., Cosentino, A., & Ghoreishi, N
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Nutraceuticals
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            MDPI
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.944 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Nutraceuticals Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Nutraceuticals Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
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
                                {/* Header with Avatar and Flag Image */}
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <Image
                                            src={editor.avatar}
                                            alt={editor.name}
                                            width={56}
                                            height={56}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                                        />
                                        <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full border border-white overflow-hidden shadow-xs bg-white flex items-center justify-center">
                                            <Image
                                                src={editor.countryFlag}
                                                alt="Country Flag"
                                                width={20}
                                                height={20}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
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