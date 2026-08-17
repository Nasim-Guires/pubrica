"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, Activity, Watch, Stethoscope, Radio, Cpu, ChevronDown, ChevronUp } from 'lucide-react';

const emergingTrendsData = [
    {
        id: 'intelligent-smart',
        title: 'Intelligent and Smart Sensors',
        description: 'Through the incorporation of AI and machine learning techniques with sensors, sensor technologies can analyze data instantly, calibrate themselves, and make adaptive decisions thus creating opportunities for improved accuracy and efficiency.'
    },
    {
        id: 'wearable-implantable',
        title: 'Wearable and Implantable Sensors',
        description: "Wearable and implantable sensors enable the monitoring of patients' health continuously and remotely in a way that is more comfortable and dependable than the traditional models using very small and flexible sensors."
    },
    {
        id: 'iot-sensors',
        title: 'Sensors with Internet of Things (IOT) Functionality',
        description: 'IoT-enabled sensors can communicate with each other, which allows for real-time monitoring, the collection of large amounts of data and the ability to be designed in such a way that they can integrate seamlessly into our current systems.'
    },
    {
        id: 'nanomaterials',
        title: 'Sensor Development with Nanomaterials and Advanced Materials',
        description: 'Nanotechnology and advanced material are utilized to make this new generation of sensors more sensitive, specific, durable, and thereby enhancing all aspects of sensing such as environmental, biological, or chemical.'
    },
    {
        id: 'smart-efficient',
        title: 'Smart and Efficient Sensor Technology',
        description: "A few different technologies such as solar, piezoelectric, and thermal harvesting technologies can provide a sensor with the ability to use naturally occurring energy, thus supporting the need for longer-lasting sensors' operational lifetime while also creating an energy-efficient sensor."
    },
    {
        id: 'sensor-fusion',
        title: 'Fusion of Sensors and Data Analytics',
        description: 'The fusion of multiple sensors provides increased accuracy, reliability, and contextual understanding when working within complex environments.'
    }
];

const clinicalApplicationsData = [
    {
        title: 'Patient Monitoring',
            iconSrc: "/images/subject-matter-experts/sensor-technology/Patient-Monitoring.webp",
        description: 'Ongoing assessment of vital signs can facilitate the early identification of illness and produce better health results.',
        icon: Activity
    },
    {
        title: 'Wearable and Implantable Devices',
            iconSrc: "/images/subject-matter-experts/sensor-technology/Wearable-and-Implantable-Devices-1.webp",
        description: 'Sensors allow for prolonged health monitoring and customized therapy.',
        icon: Watch
    },
    {
        title: 'Diagnostic Support',
            iconSrc: "/images/subject-matter-experts/sensor-technology/Diagnostic-Support.webp",
        description: 'Advanced sensors will improve diagnosis of disease and improve the diagnostic image.',
        icon: Stethoscope
    },
    {
        title: 'Remote Healthcare',
            iconSrc: "/images/subject-matter-experts/sensor-technology/Remote-Healthcare.webp",
        description: 'Sensor based systems support remote medical care and telehealth services.',
        icon: Radio
    },
    {
        title: 'Precision Medicine',
            iconSrc: "/images/subject-matter-experts/sensor-technology/Precision-medicine.webp",
        description: 'The use of real-time data will provide tailored treatment and enhance the ability to make better clinical decisions.',
        icon: Cpu
    }
];

const sensorEditorsData = [
    {
        name: 'Dr. Alex Carter',
        degree: 'PhD in Sensor Technology',
        experience: '14 years of experience',
        manuscripts: '180+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/medical-animation/John-Miller.webp"
    },
    {
        name: 'Dr. Neha Rao',
        degree: 'PhD in Embedded Systems and Sensors',
        experience: '11 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp"
    },
    {
        name: 'Dr. Rahul Mehta',
        degree: 'PhD in Smart Sensor Systems',
        experience: '10 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-S.-Rao.webp"
    }
];

export default function SensorTechnologySubjectMatterExpertsSection() {
    // Tab State for Emerging Trends in Sensor Technology
    const [activeTechTab, setActiveTechTab] = useState(0);

    // Toggle State for Importance of Sensor Technology list items (all closed by default)
    const [openImportanceItems, setOpenImportanceItems] = useState<{ [key: number]: boolean }>({});

    const toggleImportanceItem = (index: number) => {
        setOpenImportanceItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const importanceList = [
        {
            title: 'Real-Time Tracking',
            content: 'Continuous tracking of physiological, environmental and operational parameters, enables quick identification of changes to the system and abnormalities in the Physiological parameters being monitored.'
        },
        {
            title: 'Early Identification and Prevention',
            content: 'The use of advanced sensors provides the ability to identify and/or eliminate many problems at the earliest possible time, thereby enhancing preventive medical treatment, predictive maintenance, and risk prosperity.'
        },
        {
            title: 'Non-Invasively and Remote',
            content: 'The data gathered by most sensor technologies can be done without the need for any kind of physical interventions; thus, they provide for comfort, safety and access in both industrial and healthcare settings.'
        },
        {
            title: 'Improved Accuracy and Automation',
            content: 'High-precision radar sensors produce improved dependability of measurements and are the foundation of automated systems and equipment such as diagnostic, manufacturing, and intelligent infrastructures.'
        },
        {
            title: 'Decision Making Based on Data',
            content: 'The data generated from sensors is utilized to provide intelligent analytic processes along with real-time information required for making informed decisions across many medical, industrial, and environmental sectors.'
        }
    ];

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Importance of Sensor Technology and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Importance of Sensor Technology and Healthcare
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Modern-day healthcare, industries, and smart systems depend heavily on sensor technology since it allows for real-time data gathering and decision-making for a variety of uses. The advancement of sensor technology has allowed for the monitoring, assessing, and collecting information on physical, chemical, and biological variables with great accuracy, allowing for intelligent decision-making in a multitude of different types of applications and areas of use. Here are some of the most notable advantages of sensor technology:
                        </p>
                        <div className="space-y-2 pt-2">
                            {importanceList.map((item, index) => {
                                const isOpen = !!openImportanceItems[index];
                                return (
                                    <div key={index} className="border-b border-gray-100 pb-2">
                                        <button
                                            onClick={() => toggleImportanceItem(index)}
                                            className="w-full flex items-center justify-between text-left text-sm sm:text-base font-semibold text-gray-800 hover:text-[#0e3b32] transition-colors py-1 focus:outline-none"
                                        >
                                            <span className="flex items-center space-x-2">
                                                <span className="text-[#0e3b32] font-bold text-lg w-5 text-center">
                                                    {isOpen ? '−' : '+'}
                                                </span>
                                                <span>{item.title}</span>
                                            </span>
                                            {isOpen ? (
                                                <ChevronUp className="w-4 h-4 text-gray-500" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-500" />
                                            )}
                                        </button>
                                        {isOpen && (
                                            <div className="pl-7 pr-4 py-2 text-xs sm:text-sm text-gray-600 bg-gray-50 rounded-md mt-1 animate-fadeIn">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/sensor-technology/Sensor-Technology.webp"
                            alt="Importance of Sensor Technology and Healthcare"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Emerging Trends in Sensor Technology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Sensor Technology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        The acceleration of sensor technology is being driven by notable advancements made in the fields of material sciences, artificial intelligence, and connectivity. With these advancements comes the development of a large variety of sensor capabilities that address healthcare, industrial applications, environmental monitoring, and smart infrastructures. The trends that are currently emerging include:
                    </p>
                </div>

                {/* Tab Navigation Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTechTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTechTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
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
                            {emergingTrendsData[activeTechTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTechTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Clinical Applications of Sensor Technology */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Clinical Applications of Sensor Technology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Sensor technology plays a transformative role in modern clinical practice by enabling accurate diagnosis, continuous monitoring, and personalized patient care. Advanced sensors enhance clinical efficiency, improve patient outcomes, and support data-driven medical decisions across a wide range of healthcare settings:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {clinicalApplicationsData.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-[#0e3b32] shrink-0 mt-1">
                                        {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                        <span className="relative w-6 h-6">
                                            <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                        </span>
                                    ) : (
                                        <IconComponent className="w-6 h-6 stroke-[1.5]" />
                                    )}
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                        <strong className="text-gray-900 font-bold">{item.title}: </strong>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            src="/images/subject-matter-experts/sensor-technology/Design-Development-of-Sensors.webp"
                            alt="Clinical Applications of Sensor Technology"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Where Our Authors Publish
                    </h2>
                    <div className="w-16 h-1 bg-[#0e3b32] mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Journal Publication */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-white">
                        <img
                            src="/images/subject-matter-experts/sensor-technology/Wearable-Portable-Sensors.webp"
                            alt="Biosensors & Bioelectronics Journal Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Article Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Extended Strand-Mediated Target Unmasking Synergized with Lyophilized Hairpin Probes for One-Step Viral RNA Detection.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Jiwei Wang, Chuankun Yang, Ran Xu, Shuo Ma, Ai Chen, YumingYao, Guoqiu Wu.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Biosensors & Bioelectronics
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Elsevier
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            2.0 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Our Expert Sensor Technology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Sensor Technology Editors
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                        Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
                    </p>
                </div>

                {/* Editors Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sensorEditorsData.map((editor, index) => (
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