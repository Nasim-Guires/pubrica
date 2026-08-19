"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'integrated-photonics',
        title: 'Integrated Photonics and Silicon Photonics',
        description: 'Silicon and Integrated Photonics Minimising of optical components used in electronics has led to improved data transmission speeds, reduced requirements to power usage and performing better overall for Optical Communications systems.'
    },
    {
        id: 'advanced-optoelectronic',
        title: 'Advanced Optoelectronic Devices',
        description: 'Advancements in Optoelectronic Components Improving the quality of imaging sensing, Enhanced Optical Sensors will enable advances in future products by providing better quality images and sensor data to use for other electronic systems.'
    },
    {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence-Enabled Optical Systems',
        description: 'Artificial Intelligence in Optical Systems Combining Ai and optical electronic systems will allow for greater accuracy, faster analysis of images and the ability to recognize patterns of data in real time.'
    },
    {
        id: 'flexible-wearable',
        title: 'Flexible and Wearable Electronics',
        description: 'Flexible and Wearable Electronics Flexible electronic and Optical Technologies have opened many new possibilities for usage of Wearable Health Monitoring Systems, Smart Textiles, and Human-Machine Interaction applications.'
    },
    {
        id: 'nanophotonic-metamaterials',
        title: 'Nanophotonic and Metamaterials',
        description: 'Nanophotonic and Metamaterials The invention of Nanostructured materials is allowing for the creation of new materials that enable stunningly precise control over the use of Light for Sensing, Imaging, as well as Energy Efficiency.'
    },
    {
        id: 'energy-efficient',
        title: 'Energy-Efficient and Sustainable Technologies',
        description: 'Sustainable, Energy Efficient Technology Development of Low Power Electronics and Smart Energy Harvesting Systems are creating many new opportunities for the development of Green, Sustainable, and Long-Lasting Electronic Technologies.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Diagnostic Imaging and Its Applications',
        description: 'through Optical and Electronic Systems enable the precise visual detection of diseases at an earlier stage.'
    },
    {
        title: 'Patient Monitoring Technologies',
        description: 'are utilized to continuously monitor and track a patient\'s vitals (physiological processes) to provide timely and individualized care.'
    },
    {
        title: 'Minimally Invasive Techniques',
        description: 'use Optical Technologies for accurate guidance throughout surgery.'
    },
    {
        title: 'Therapeutic Uses',
        description: 'of Laser and Electrons provide increased accuracy and recovery time for patients.'
    },
    {
        title: 'Remote Healthcare Applications',
        description: 'include telehealth and remote monitoring of a Person\'s Health through Opto-Electronic Systems.'
    }
];

const editorsData = [
    {
        name: 'Dr. Rohan Patel',
        degree: 'PhD in Photonics and Optical Engineering',
        experience: '12 years of experience',
        manuscripts: '140+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/biomedical-imaging/Prof.-Chen-Li.webp"
    },
    {
        name: 'Dr. Elena Kovacs',
        degree: 'PhD in Electronic and Communication Engineering',
        experience: '13 years of experience',
        manuscripts: '155+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/cosmeceuticals/Dr.-Laura-Kim-1.webp"
    },
    {
        name: 'Dr. Vikram Iyer',
        degree: 'PhD in Applied Optics',
        experience: '10 years of experience',
        manuscripts: '125+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp"
    }
];

export default function OpticsAndElectronicsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Importance of Optics and Electronics in Research and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Importance of Optics and Electronics in Research and Healthcare
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Optics and electronics provide critical tools used to improve modern science, engineering and health care industries. These technologies form the basis of many sophisticated sensor systems, imaging systems and data processing systems used to perform various tasks in a high precision manner. The continuous development of optics and photonics technologies as well as the development of innovative electronic systems allow for accurate measurement, extremely fast data transfer and intelligent control of.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            Key contributions include:
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">High precision measurement: </strong>
                                    enables to have it correctly detected or accurately analysed for the following physical vs chemical vs biological parameters, respectively.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">Non-invasive Sensing: </strong>
                                    enables a means of safely performing analysis on materials and/or analysing biological systems in an invasive manner, i.e., not physically intrusive contact.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">Performance Enhancements: </strong>
                                    help improve systems' performance due to improvements in system signal processing efficiency and operational reliability.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5 shrink-0" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">Innovation and Technology Development: </strong>
                                    are utilized for creating and producing photonics, sensors, imaging and communication technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/optics-and-electronics/Minimally-Invasive.webp"
                            alt="Optics and electronics research setup"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Emerging Trends in Optics and Electronics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Optics and Electronics
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Advancements in optics and electronics are driving innovation across healthcare, communication, manufacturing, and scientific research. Key emerging trends include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTrendTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTrendTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
                                            ? 'bg-[#0e3b32] text-white shadow-sm'
                                            : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-250'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content Box */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {emergingTrendsData[activeTrendTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTrendTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Clinical Applications of Optics and Electronics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Clinical Applications of Optics and Electronics
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Modern Clinical Practice includes the utilization of Optics & Electronics to provide clinicians with accurate diagnostic tools, continual patient evaluation and treatment strategies. Optics and Electronics also deliver a higher overall result than if they had been employed by an individual practitioner alone:
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
                                    <strong className="text-gray-900 font-bold">{item.title} </strong>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/optics-and-electronics/clinical-application.webp"
                            alt="Clinical optics and electronics setup"
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
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
                        Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/optics-and-electronics/sample-works-11-10.webp"
                            alt="BMC Medical Imaging Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Computed tomography image quality parameter settings for the design and manufacture of craniofacial implants.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Muller, H
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            BMC Medical Imaging
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            BioMed Central
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            3.2 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Optics And Electronics Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Optics And Electronics Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
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