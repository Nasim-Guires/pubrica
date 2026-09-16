"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import ApplicationsSection from "@/components/common/ApplicationsSection";
import Link from "next/link";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const applicationsData = [
    {
        title: "PhD-Qualified Subject Experts",
        desc: "Our editors and writers hold advanced degrees in gynaecology, reproductive biology, and clinical sciences.",
        iconSrc:
            "/images/subject-matter-experts/gynecology/PhD-Qualified-Subject-Experts.webp",
    },
    {
        title: "15+ Years of Experience",
        desc: "Over a decade of expertise in supporting gynaecologic research and publication across international journals.",
        iconSrc:
            "/images/subject-matter-experts/gynecology/15-Years-of-Experience.webp",
    },
    {
        title: "Comprehensive Publication Support",
        desc: "From study design to peer-review response, we ensure your manuscript meets global publishing standards.",
        iconSrc:
            "/images/subject-matter-experts/gynecology/Comprehensive-Publication-Support.webp",
    },
    {
        title: "Ethical and Compliant Approach",
        desc: (
            <>
                We strictly adhere to{" "}
                <Link
                    href="https://publicationethics.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 "
                >
                    COPE
                </Link>
                ,{" "}
                <Link
                    href="https://www.consort-spirit.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 "
                >
                    CONSORT
                </Link>
                , and{" "}
                <Link
                    href="https://www.icmje.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 "
                >
                    ICMJE
                </Link>{" "}
                guidelines for transparency and research integrity.
            </>
        ),
        iconSrc:
            "/images/subject-matter-experts/gynecology/Ethical-and-Compliant-Approach.webp",
    },
    {
        title: "Global Experience",
        desc: "Having assisted researchers in over 30 countries, we understand diverse publication expectations and journal scopes.",
        iconSrc:
            "/images/subject-matter-experts/gynecology/Global-Experience.webp",
    },
    {
        title: "Client-Centric Collaboration",
        desc: "Every project is handled with confidentiality, quality assurance, and personalized attention.",
        iconSrc:
            "/images/subject-matter-experts/gynecology/Client-Centric-Collaboration.webp",
    },
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

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Alicia Fernandez",
        degree: "PhD in Reproductive Biology",
        experience: "12 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/gynecology/Dr.-Alicia-Fernandez.webp",
    },
    {
        name: "Dr. Meera Krishnan",
        degree: "PhD in Obstetrics and Gynaecological Sciences",
        experience: "13 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biopolymers/Dr.-Ananya-Krishnan-1.webp",
    },
    {
        name: "Dr. James Holloway",
        degree: "PhD in Maternal-Fetal Medicine",
        experience: "14 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/gynecology/Dr.-James-Holloway.webp",
    },
];
const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/gynecology/sample-works-8.webp",
    imageAlt: "Journal of Obstetrics and Gynaecology Cover",
    paperTitle:
        "Comparison of the efficacy of vaginal micronised progesterone tablet and gel for in vitro fertilisation",
    author:
        "Han, S. J., Kim, H., Hong, Y. S., Kim, S. W., Ku, S. Y., & Suh, C. S.",
    publisher: "Informa",
    journalName: "Journal of Obstetrics and Gynaecology",
    impactFactor: "1.2 (2024)",
};
export default function GynecologySection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

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
                <ApplicationsSection
                    title="Why Choose Pubrica for Gynaecology Research and Publishing?"
                    description="Pubrica stands apart for its scientific expertise, editorial excellence, and global publishing experience. Our value proposition lies in:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/gynecology/sample-works-6-2.webp"
                    imageAlt="Why Choose Pubrica for Gynaecology Research and Publishing"
                />
            </section>

            {/* SECTION: Areas of Study (Dark Theme Container matched with reference image) */}
            <section className="w-full bg-[#092c25] py-7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Areas of Study
                        </h2>
                        <div className="w-16 h-1 bg-[#145345] mx-auto rounded-full"></div>
                        <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                            Pubrica supports a broad spectrum of gynaecology research. Whether it&apos;s reproductive health, gynaecologic oncology, or obstetrics, Pubrica&apos;s expertise ensures that your gynaecology research is robust, well-documented, and ready for publication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* Left Side: Cards wrapped horizontally row-by-row */}
                        <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                            {areasOfStudyData.map((app, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-md px-3 py-2 shadow-sm flex items-center space-x-2 text-gray-900"
                                >
                                    <div className="text-[#0e3b32] bg-[#eef2f1] p-1 rounded shrink-0">
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-semibold text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                                        {app.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Image Container */}
                        <div className="lg:col-span-5 rounded-lg overflow-hidden shadow-xl border border-white/10">
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
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION: Our Expert Gynaecology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Gynaecology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}