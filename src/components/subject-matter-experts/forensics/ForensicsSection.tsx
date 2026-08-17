import Image from "next/image";
    "use client";
    import React, { useState } from 'react';
    import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

    const trustItemsData = [
        {
            title: 'PhD Subject-Matter Experts',
            description: 'Specialists with deep expertise across forensic pathology, toxicology, digital forensics, DNA profiling, and forensic anthropology.'
        },
        {
            title: '100% Confidential & Secure',
            description: 'Your data, research results, and manuscripts remain fully protected.'
        },
        {
            title: '15+ Years of Research Excellence',
            description: 'Trusted globally by researchers, academicians, and industry professionals.'
        },
        {
            title: 'End-to-End Support',
            description: 'From ideation to publication, we assist at every stage with consistency and precision.'
        },
        {
            title: 'Journal-Compliant Deliverables',
            description: 'We ensure adherence to the formatting and editorial standards of Scopus, SCI, and top forensic science journals.'
        }
    ];

    const emergingTrendsData = [
        {
            id: 'developments-in-dna-profiling',
            title: 'Developments in DNA Profiling',
            description: 'New technologies, such as Next-Generation Sequencing (NGS), are providing significant advancements for analysing degraded samples, in addition to other applications of DNA analysis.'
        },
        {
            id: 'digital-and-cyber-forensics',
            title: 'Digital and Cyber Forensics',
            description: 'The growing emphasis on recovering and analysing digital evidence from computers and smartphones has become increasingly important in the fight against Cybercrime.'
        },
        {
            id: 'forensic-genomics',
            title: 'Forensic Genomics',
            description: 'By utilizing genomic data outside of traditional DNA profiling techniques, investigators can increase their ability to identify victims and solve long-cold cases.'
        },
        {
            id: '3d-forensic-imaging',
            title: '3D Forensic Imaging',
            description: 'Creating detailed digital reconstructions of crime scenes is allowing for better visual representation of evidence in criminal investigations and courtroom proceedings.'
        },
        {
            id: 'environmental-forensic-science',
            title: 'Environmental Forensic Science',
            description: 'The study of pollutants contaminants in the environment has become more common as a means of providing legal support to environmental damage claims.'
        },
        {
            id: 'forensic-psychology',
            title: 'Forensic Psychology',
            description: 'There is an increasing use of psychological evaluations as an approach to understanding criminal behaviour and assisting law enforcement during an investigation.'
        }
    ];

    const applicationsData = [
        {
            title: 'Criminal Investigations',
            description: 'DNA, fingerprints, and ballistics are utilized to help identify suspects and to solve crimes.'
        },
        {
            title: 'Forensic Pathology',
            description: '(through autopsy) is used to ascertain the cause of death.'
        },
        {
            title: 'Digital Forensics',
            description: 'Cyber crimes can be investigated via the examination of electronic information.'
        },
        {
            title: 'Forensic Toxicology',
            description: 'Biological specimens can be tested for the presence of poisons or drugs.'
        },
        {
            title: 'Forensic Anthropology',
            description: 'Can be used to identify human remains and estimate time since death.'
        }
    ];

    const areasOfStudyData = [
        { title: 'Forensic Pathology and Histology' },
        { title: 'Forensic Toxicology and Pharmacology' },
        { title: 'Digital and Cyber Forensics' },
        { title: 'Forensic DNA Profiling and Serology' },
        { title: 'Forensic Anthropology and Osteology' },
        { title: 'Crime Scene Investigation and Reconstruction' },
        { title: 'Forensic Psychology and Psychiatry' },
        { title: 'Forensic Odontology' },
        { title: 'Environmental and Wildlife Forensics' },
        { title: 'Forensic Document Examination' },
        { title: 'Ballistics and Firearm Examination' },
        { title: 'Forensic Nursing and Clinical Practice' }
    ];

    const editorsData = [
        {
            name: 'Dr. Emily Carter',
            degree: 'PhD in Forensic Toxicology',
            experience: '15 years of experience',
            manuscripts: '200+ manuscripts edited',
            countryFlag: '🇬🇧',
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp"
        },
        {
            name: 'Dr. Rajesh Nair',
            degree: 'PhD in Forensic Biochemistry',
            experience: '12 years of experience',
            manuscripts: '170+ manuscripts edited',
            countryFlag: '🇮🇳',
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Rajesh-Nair.webp"
        },
        {
            name: 'Dr. Laura Mitchell',
            degree: 'PhD in Forensic Pathology',
            experience: '16 years of experience',
            manuscripts: '210+ manuscripts edited',
            countryFlag: '🇺🇸',
            avatar: '/images/subject-matter-experts/forensics/Forensic.webp'
        }
    ];

    export default function ForensicsSection() {
        const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
        const [activeTrendTab, setActiveTrendTab] = useState(0);

        const toggleTrustItem = (index: number) => {
            setOpenTrustIndex(openTrustIndex === index ? null : index);
        };

        return (
            <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">



                {/* SECTION: Emerging Trends in Forensic */}
                <section className="max-w-6xl mx-auto space-y-6">
                    <div className="space-y-3 text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Emerging Trends in Forensic
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                            The area of forensic science is continually adapting and growing due to the introduction of emerging technologies and new methods of collecting, analysing and interpreting evidence. Some examples are as follow.
                        </p>
                    </div>

                    {/* Tab Buttons Container */}
                    <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
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

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
                        AI, DNA advancements, and digital forensics are revolutionizing forensics. 3D imaging, drones, and better toxicology tests aid investigations, while forensic psychology and environmental forensics continue to grow.
                    </p>
                </section>

                {/* SECTION: Applications of Forensic */}
                <section className="max-w-6xl mx-auto space-y-6">
                    <div className="space-y-3 text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Applications of Forensic
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Forensic science is vital in solving crimes and supporting legal cases. Key applications include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            {applicationsData.map((app, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="mt-1 text-[#0e3b32]">
                                        <ChevronRight className="w-5 h-5 shrink-0" />
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        <strong className="text-gray-900 font-bold">{app.title}: </strong>
                                        {app.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <img
                                src="/images/subject-matter-experts/forensics/Forensic-Pathology.webp"
                                alt="Forensic laboratory setup"
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
                            Our authors share Forensic publications in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                        </p>
                    </div>

                    {/* Featured Publication Card */}
                    <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Journal Cover Image */}
                        <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                            <img
                                src="/images/subject-matter-experts/forensics/Forensic-Toxicology.webp"
                                alt="Journal of Forensic and Legal Medicine Cover"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Paper Details */}
                        <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                            <p>
                                <strong className="text-gray-900 font-bold">Paper Title: </strong>
                                Postmortem microbiome dynamics: Review of forensic microbial clock
                            </p>
                            <p>
                                <strong className="text-gray-900 font-bold">Author: </strong>
                                Kalanjali Y, Arjun Rao Isukapatla
                            </p>
                            <p>
                                <strong className="text-gray-900 font-bold">Journal Name: </strong>
                                Journal of Forensic and Legal Medicine
                            </p>
                            <p>
                                <strong className="text-gray-900 font-bold">Publisher: </strong>
                                Elsevier
                            </p>
                            <p>
                                <strong className="text-gray-900 font-bold">Impact factor: </strong>
                                1.2 (2014)
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION: Our Expert Forensic Editors */}
                <section className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Our Expert Forensic Editors
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                            Pubrica&apos;s team of Forensic experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
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