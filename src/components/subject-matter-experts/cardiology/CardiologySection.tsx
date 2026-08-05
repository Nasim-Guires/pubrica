"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
    Briefcase, 
    FileText, 
    ChevronDown,
    Activity,
    HeartPulse
} from 'lucide-react';

// Tabbed Data for Common Cardiovascular Conditions
const conditionsTabs = [
    {
        id: 'cad',
        label: 'Coronary Artery Disease (CAD)',
        title: 'Coronary Artery Disease (CAD)',
        description: 'This condition occurs when the arteries that supply blood to the heart become narrowed or blocked, often due to plaque buildup. CAD can lead to chest pain (angina), heart attacks, and heart failure.'
    },
    {
        id: 'hf',
        label: 'Heart Failure',
        title: 'Heart Failure',
        description: 'Heart failure arises when the heart is unable to pump blood efficiently, leading to fluid accumulation in the lungs, legs, and other organs. Symptoms often include shortness of breath, fatigue, and swelling.'
    },
    {
        id: 'arrhythmias',
        label: 'Arrhythmias',
        title: 'Arrhythmias',
        description: 'These are abnormal heart rhythms, which can range from harmless to life-threatening. Common types include atrial fibrillation, ventricular tachycardia, and bradycardia.'
    },
    {
        id: 'vhd',
        label: 'Valvular Heart Disease',
        title: 'Valvular Heart Disease',
        description: 'Damage to one or more of the heart valves can disrupt blood flow and cause symptoms such as breathlessness, palpitations, and fatigue. Valve repair or replacement may be necessary in severe cases. '
    },
    {
        id: 'chd',
        label: 'Congenital Heart Defects',
        title: 'Congenital Heart Defects',
        description: 'These are structural abnormalities of the heart present from birth. They can vary from simple defects, such as small holes in the heart, to complex malformations that require surgical intervention.'
    }
];

// Accordion Data for Applications of Cardiology
const applicationsAccordionData = [
    {
        title: "Diagnostic Applications",
        icon: Activity,
        content: (
            <div className="space-y-3">
                <p>
                    Cardiology has evolved with cutting-edge diagnostic technologies that allow for early detection and comprehensive assessment of cardiovascular conditions.
                </p>
                <p>
                    <strong className="font-bold text-gray-900">Electrocardiography (ECG) and Echocardiography</strong> help identify rhythm abnormalities and evaluate cardiac function.<br />
                    <strong className="font-bold text-gray-900">Cardiac MRI and CT imaging</strong> deliver precise anatomical visualization for congenital, structural, and ischemic heart diseases.<br />
                    <strong className="font-bold text-gray-900">Holter Monitoring and Stress Testing</strong> provide valuable data for long-term cardiac assessment and risk stratification.
                </p>
                <p>
                    At Pubrica, we assist researchers in developing diagnostic protocols, preparing manuscripts, and interpreting imaging data for publication in high-impact cardiology journals.
                </p>
            </div>
        )
    },
    {
        title: "Interventional and Therapeutic Applications",
        icon: HeartPulse,
        content: (
            <div className="space-y-3">
                <p>
                    Modern cardiology relies heavily on interventional and minimally invasive techniques that have transformed patient care.
                </p>
                <p>
                    <strong className="font-bold text-gray-900">Angioplasty, Stenting, and Catheter Ablation</strong> have replaced traditional open-heart procedures in many cases.<br />
                    <strong className="font-bold text-gray-900">Pacemakers, ICDs, and TAVR (Transcatheter Aortic Valve Replacement)</strong> are pivotal in treating complex rhythm and valvular disorders.
                </p>
                <p>
                    Pubrica's team provides systematic review support, clinical trial documentation, and regulatory-compliant medical writing for interventional cardiology research, ensuring your findings align with journal and ethical standards.
                </p>
            </div>
        )
    }
];

// Cardiology Editors Data
const editorsData = [
    {
        name: 'Dr. Samuel Hart',
        degree: 'PhD in Cardiology',
        experience: '12 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Rakesh Menon',
        degree: 'PhD in Cardiovascular Medicine',
        experience: '15 years of experience',
        manuscripts: '150+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Dr. Alicia Verma',
        degree: 'MD, Cardiology Specialist',
        experience: '10 years of experience',
        manuscripts: '90+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: 'https://images.unsplash.com/photo-1594824813566-78a9c0490b4d?auto=format&fit=crop&q=80&w=200'
    }
];

export default function CardiologySection() {
    // Active Tab State for Common Cardiovascular Conditions
    const [activeTab, setActiveTab] = useState('cad');

    // Accordion State for Applications of Cardiology (Both closed by default)
    const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordionIdx(openAccordionIdx === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Common Cardiovascular Conditions */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Common Cardiovascular Conditions
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Understanding common heart conditions is essential for effective diagnosis and management. Some of the most prevalent cardiovascular diseases include:
                    </p>
                </div>

                {/* Tabbed Component Box */}
                <div className="border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                    {/* Tabs Navigation Header */}
                    <div className="grid grid-cols-2 md:grid-cols-5 border-b border-gray-200 text-center text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100">
                        {conditionsTabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-3.5 px-3 transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center ${
                                        isActive
                                            ? 'bg-[#0e3b32] text-white'
                                            : 'hover:bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content Panel */}
                    <div className="p-6 bg-white min-h-[140px] space-y-2">
                        {conditionsTabs.map((tab) => {
                            if (tab.id !== activeTab) return null;
                            return (
                                <div key={tab.id} className="space-y-2 transition-opacity duration-200">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                        {tab.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        {tab.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Applications of Cardiology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Cardiology
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        At Pubrica, we recognize that cardiology is one of the most dynamic and impactful fields in medical science, dedicated to understanding, diagnosing, and managing disorders of the heart and vascular system. Our expert scientific writers, researchers, and editors support cardiology professionals, clinicians, and academicians in advancing cardiovascular research, clinical practice, and publication excellence.
                    </p>
                </div>

                {/* Collapsible Accordions for Applications */}
                <div className="space-y-4">
                    {applicationsAccordionData.map((item, idx) => {
                        const isOpen = openAccordionIdx === idx;
                        return (
                            <div key={idx} className="border border-gray-200 rounded-md overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full bg-[#0e3b32] text-white px-6 py-3.5 flex items-center justify-between font-semibold text-sm sm:text-base transition-colors duration-150 hover:bg-[#0a2f28]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
                                        <span>{item.title}</span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isOpen && (
                                    <div className="p-6 bg-[#fafafa] border-t border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <Image
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
                            alt="Journal of Cardiovascular Development and Disease Cover"
                            width={224}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-xs sm:text-sm leading-relaxed pt-2">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Bioactive Compounds and Cardiac Fibrosis: Current Insight and Future Prospect.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Majid A, Hassan FO, Hoque MM, Gbade goye JO, Lebeche D.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Cardiovascular Development and Disease
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            MDPI
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            2.3
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Cardiology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Cardiology Editors
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed">
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
                                        <span className="absolute bottom-0 right-0 text-xs bg-white rounded-full px-1 shadow-xs">
                                            {editor.countryFlag}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base text-[#0a2923]">
                                            {editor.name}
                                        </h3>
                                        <p className="text-xs font-medium text-gray-800">
                                            {editor.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full border-t border-[#88b1a8] my-2"></div>

                                {/* Editor Stats */}
                                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                                    <div className="flex items-center space-x-1.5">
                                        <Briefcase className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                        <span>{editor.experience}</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <FileText className="w-4 h-4 text-[#0e3b32] shrink-0" />
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