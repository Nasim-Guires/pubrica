"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, ClipboardList, Syringe, Stethoscope, HeartPulse } from 'lucide-react';

const advancesInSurgeryData = [
    {
        id: 'mis',
        title: 'Minimally Invasive Surgery (MIS)',
        description: 'Techniques such as laparoscopy, endoscopy, and robotic surgery reduce incision size, recovery time, and postoperative pain.'
    },
    {
        id: 'robotic-surgery',
        title: 'Robotic Surgery',
        description: 'Robots provide high precision, better visualization, and enhanced dexterity for complex procedures.'
    },
    {
        id: 'imaging-navigation',
        title: 'Imaging and Navigation Systems',
        description: 'MRI, CT scans, and intraoperative navigation assist surgeons in accurate targeting and planning.'
    },
    {
        id: '3d-printing-prosthetics',
        title: '3D Printing and Prosthetics',
        description: 'Custom implants and surgical models improve outcomes in orthopaedics, craniofacial surgery, and reconstructive procedures.'
    },
    {
        id: 'telemedicine-remote-surgery',
        title: 'Telemedicine and Remote Surgery',
        description: 'Digital technology allows for remote consultations, surgical planning, and even robotic-assisted interventions across distances.'
    }
];

const surgicalProcessData = [
    {
        title: 'Preoperative Assessment',
            iconSrc: "/images/subject-matter-experts/surgery/Preoperative-Assessment.webp",
        description: 'Before surgery, patients undergo thorough evaluations, including medical history review, physical examination, imaging, and laboratory tests. This ensures appropriate risk assessment and surgical planning.',
        icon: ClipboardList
    },
    {
        title: 'Anaesthesia and Preparation',
            iconSrc: "/images/subject-matter-experts/surgery/Anaesthesia-and-Preparation.webp",
        description: 'Administered by specialized anaesthesiologists, anaesthesia ensures patient comfort and safety during the procedure. Preoperative preparation also includes sterilization protocols, patient positioning, and equipment readiness.',
        icon: Syringe
    },
    {
        title: 'Surgical Procedure',
            iconSrc: "/images/subject-matter-experts/surgery/Surgical-Procedure.webp",
        description: 'Surgeons operate using a variety of techniques, ranging from traditional open surgery to advanced minimally invasive surgery research techniques such as laparoscopy or robotic-assisted surgery.',
        icon: Stethoscope
    },
    {
        title: 'Postoperative Care',
            iconSrc: "/images/subject-matter-experts/surgery/Postoperative-Care.webp",
        description: 'Recovery begins immediately after surgery with careful monitoring of vital signs, pain management, and prevention of complications. Rehabilitation may include physical therapy, wound care, and lifestyle modifications.',
        icon: HeartPulse
    }
];

const editorsData = [
    {
        name: 'Dr. Arjun Mehta',
        degree: 'MS in General Surgery',
        experience: '8 years of experience',
        manuscripts: '100+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/surgery/Dr.-Arjun-Mehta.webp"
    },
    {
        name: 'Dr. Sophia Reynolds',
        degree: 'PhD in Surgical Sciences',
        experience: '8 years of experience',
        manuscripts: '70+ manuscripts edited',
        countryFlag: '🇦🇺',
        avatar: "/images/subject-matter-experts/surgery/Dr.-Sophia-Reynolds.webp"
    },
    {
        name: 'Dr. Michael Carter',
        degree: 'PhD in Surgical Oncology',
        experience: '7 years of experience',
        manuscripts: '80+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/surgery/Dr.-Michael-Carter.webp"
    }
];

export default function SurgerySubjectMatterExpertsSection() {
    // Tab State for Advances in Surgical Technology
    const [activeTechTab, setActiveTechTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* SECTION 1: The Surgical Process */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-3 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        The Surgical Process
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The journey of a surgical patient is structured and meticulous, emphasizing safety and efficacy at every step:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {surgicalProcessData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={index} 
                                className="relative flex flex-col items-center text-center px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-200 last:border-r-0 last:border-b-0"
                            >
                                <div className="mb-4 text-[#0e3b32] p-3 rounded-full bg-gray-50 border border-gray-100">
                                    <IconComponent className="w-10 h-10 stroke-[1.5]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b32] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 2: Advances in Surgical Technology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Advances in Surgical Technology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Surgical practice has undergone a significant transformation due to technological innovation. Key advancements include:
                    </p>
                </div>

                {/* Tab Navigation Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 border-b border-gray-200">
                        {advancesInSurgeryData.map((tab, idx) => {
                            const isActive = activeTechTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTechTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${
                                        isActive
                                            ? 'bg-[#0e3b32] text-white shadow-sm'
                                            : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {advancesInSurgeryData[activeTechTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {advancesInSurgeryData[activeTechTab].description}
                        </p>
                    </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base pt-2">
                    These innovations have not only improved surgical safety but also expanded the range of treatable conditions.
                </p>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content in top tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Journal Publication */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="/images/subject-matter-experts/surgery/Advancing-Surgical-Science.webp"
                            alt="Annals of Surgery Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Provider Perceptions Regarding Cardiopulmonary Resuscitation in Surgical Patients With Frailty
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Allen, M. B., Reich, A. J., Collins, P., et al
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Annals of Surgery
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            American Surgical Association
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            6.4
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Expert Surgery Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Surgery Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editorsData.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3c3bb] rounded-xl p-6 text-gray-900 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <img
                                            src={editor.avatar}
                                            alt={editor.name}
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