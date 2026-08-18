"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';

const trustItemsData = [
    {
        title: 'PhD-Qualified Subject Experts',
        description: 'Our editors and writers hold advanced degrees in gynaecology, reproductive biology, and clinical sciences.'
    },
    {
        title: '15+ Years of Experience',
        description: 'Over a decade of expertise in supporting gynaecologic research and publication across international journals.'
    },
    {
        title: 'Comprehensive Publication Support',
        description: 'From study design to peer-review response, we ensure your manuscript meets global publishing standards.'
    },
    {
        title: 'Ethical and Compliant Approach',
        description: 'We strictly adhere to COPE, CONSORT, and ICMJE guidelines for transparency and research integrity.'
    },
    {
        title: 'Global Experience',
        description: 'Having assisted researchers in over 30 countries, we understand diverse publication expectations and journal scopes.'
    },
    {
        title: 'Client-Centric Collaboration',
        description: 'Every project is handled with confidentiality, quality assurance, and personalized attention.'
    }
];

const emergingTrendsData = [
    {
        id: 'artificial-intelligence-and-machine-learning',
        title: 'Artificial Intelligence and Machine Learning',
        description: 'AI-assisted imaging and predictive analytics for ovarian and cervical cancers.'
    },
    {
        id: 'molecular-diagnostics',
        title: 'Molecular Diagnostics',
        description: 'Genomic profiling for fertility assessment and disease prediction.'
    },
    {
        id: 'minimally-invasive-and-robotic-surgery',
        title: 'Minimally Invasive and Robotic Surgery',
        description: 'Enhanced precision in hysterectomy, myomectomy, and endometriosis management.'
    },
    {
        id: 'tele-gynaecology-and-digital-health',
        title: 'Tele-Gynaecology and Digital Health',
        description: 'Expanding access to care for women in remote or underserved regions.'
    },
    {
        id: 'regenerative-medicine',
        title: 'Regenerative Medicine',
        description: 'Stem cell therapies for ovarian dysfunction and pelvic floor repair.'
    },
    {
        id: 'integrative-and-preventive-gynaecology',
        title: 'Integrative and Preventive Gynaecology',
        description: 'Combining nutrition, lifestyle, and complementary medicine approaches for holistic health.'
    }
];

const areasOfStudyData = [
    { title: 'Menstrual Disorders' },
    { title: 'Contraception' },
    { title: 'Obstetrics' },
    { title: 'Gynaecologic Oncology' },
    { title: 'Reproductive Health' },
    { title: 'Menopause Management' },
    { title: 'Maternal-Fetal Medicine' },
    { title: 'Reproductive Endocrinology and Infertility' },
    { title: 'Pelvic Pain and Endometriosis' }
];

const editorsData = [
    {
        name: 'Dr. Alicia Fernandez',
        degree: 'PhD in Reproductive Biology',
        experience: '12 years of experience',
        manuscripts: '95+ manuscripts edited',
        countryFlag: '🇬🇧',
        avatar: "/images/subject-matter-experts/gynecology/Dr.-Alicia-Fernandez.webp"
    },
    {
        name: 'Dr. Meera Krishnan',
        degree: 'PhD in Obstetrics and Gynaecological Sciences',
        experience: '13 years of experience',
        manuscripts: '120+ manuscripts edited',
        countryFlag: '🇮🇳',
        avatar: "/images/subject-matter-experts/biopolymers/Dr.-Ananya-Krishnan-1.webp"
    },
    {
        name: 'Dr. James Holloway',
        degree: 'PhD in Maternal-Fetal Medicine',
        experience: '14 years of experience',
        manuscripts: '130+ manuscripts edited',
        countryFlag: '🇺🇸',
        avatar: "/images/subject-matter-experts/gynecology/Dr.-James-Holloway.webp"
    }
];

export default function GynecologySection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Gynaecology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Gynaecology
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The future of gynaecologic research lies in the intersection of technology, genetics, and personalized medicine. Some of the most promising emerging areas include:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-gray-200">
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

            {/* SECTION: Why Choose Pubrica for Gynaecology Research and Publishing? */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Choose Pubrica for Gynaecology Research and Publishing?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Pubrica stands apart for its scientific expertise, editorial excellence, and global publishing experience. Our value proposition lies in:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {trustItemsData.map((item, index) => (
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

                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/gynecology/sample-works-6-2.webp"
                            alt="Gynaecology research setup"
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: Areas of Study (Dark Theme Container matched with reference image) */}
            <section className="w-full bg-[#092c25] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Areas of Study
                        </h2>
                        <div className="w-16 h-1 bg-[#145345] mx-auto rounded-full"></div>
                        <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                            Pubrica supports a broad spectrum of gynaecology research. Whether it&apos;s reproductive health, gynaecologic oncology, or obstetrics, Pubrica&apos;s expertise ensures that your gynaecology research is robust, well-documented, and ready for publication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                            {areasOfStudyData.map((app, index) => (
                                <div key={index} className="bg-white rounded-md px-4 py-3 shadow-sm flex items-center space-x-3 text-gray-900">
                                    <div className="text-[#0e3b32] bg-[#eef2f1] p-1 rounded">
                                        <ChevronRight className="w-4 h-4 shrink-0" />
                                    </div>
                                    <span className="font-bold text-sm sm:text-base text-gray-900">
                                        {app.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg overflow-hidden shadow-xl border border-white/10">
                            {/* <img
                                src="/images/subject-matter-experts/gynecology/Comprehensive-Research-Writing-and-Publication-Support-in-Gynaecology.webp"
                                alt="Gynaecology medical setup"
                                className="w-full h-auto object-cover"
                            /> */}
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
                        Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                {/* Featured Publication Card */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8 shadow-xs max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Journal Cover Image */}
                    <div className="w-48 sm:w-56 shrink-0 rounded-md overflow-hidden shadow-md border border-gray-200 bg-black">
                        <img
                            src="/images/subject-matter-experts/gynecology/sample-works-8.webp"
                            alt="Journal of Obstetrics and Gynaecology Cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
                        <p>
                            <strong className="text-gray-900 font-bold">Paper Title: </strong>
                            Comparison of the efficacy of vaginal micronised progesterone tablet and gel for <span className="italic">in vitro</span> fertilisation
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Author: </strong>
                            Han, S. J., Kim, H., Hong, Y. S., Kim, S. W., Ku, S. Y., & Suh, C. S.
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Journal Name: </strong>
                            Journal of Obstetrics and Gynaecology
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Publisher: </strong>
                            Informa
                        </p>
                        <p>
                            <strong className="text-gray-900 font-bold">Impact factor: </strong>
                            1.2 (2024)
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Expert Gynaecology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Our Expert Gynaecology Editors
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