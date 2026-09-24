import React from 'react';
import Image from 'next/image';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

interface EditorProfile {
    name: string;
    qualification: string;
    experience: string;
    manuscripts: string;
    image: string;
}

interface PublicationItem {
    title: string;
    author: string;
    journal: string;
    publisher: string;
    impactFactor: string;
    coverImage: string;
}

interface CosmeceuticalAuthorsAndEditorsProps {
    authorsPublishTitle?: string;
    authorsPublishDescription?: string;
    publication?: PublicationItem;
    editorsTitle?: string;
    editorsDescription?: string;
    editors?: EditorProfile[];
}

const defaultPublication: PublicationItem = {
    title: 'Aging of the Human Lip: Current Knowledge and Clinical Implications',
    author: 'Fanghui Sun, Yue Liu, Tao Zhang',
    journal: 'Journal of Cosmetic Dermatology',
    publisher: 'Wiley',
    impactFactor: '2.5',
    coverImage: '/images/industries/cosmeceutical-research/sample-works-4.webp'
};

const defaultEditors: EditorProfile[] = [
    {
        name: 'Dr. Meera Nair',
        qualification: 'PhD - Cosmetic Science & Dermatology',
        experience: '18 Years of Experience',
        manuscripts: '120+ manuscripts edited',
        image: '/images/education-editorial-service/accessibility-compliance/Dr.-Aditi-Mehta.webp'
    },
    {
        name: 'Dr. Shalini Verma',
        qualification: 'MD - Dermatology & Skin Pharmacology',
        experience: '22 Years of Experience',
        manuscripts: '110+ manuscripts edited',
        image: '/images/industries/cosmeceutical-research/Dr.-Shalini-Verma.webp'
    },
    {
        name: 'Dr. Rajesh Iyer',
        qualification: 'PhD - Cosmeceutical Research & Innovation',
        experience: '17 Years of Experience',
        manuscripts: '95+ manuscripts edited',
        image: '/images/education-editorial-service/accessibility-compliance/Dr.-Vikram-Joshi.webp'
    }
];

const expertEditors: ExpertEditorItem[] = [
    {
        name: "Dr. Meera Nair",
        degree: "PhD – Cosmetic Science & Dermatology",
        experience: "18 years of experience",
        manuscripts: "120+ manuscripts edited",
        avatar: "/images/education-editorial-service/accessibility-compliance/Dr.-Aditi-Mehta.webp",
        flag: "/images/country/gb.png",
    },
    {
        name: "Dr. Shalini Verma",
        degree: "MD – Dermatology & Skin Pharmacology",
        experience: "22 Years of Experience",
        manuscripts: "110+ manuscripts edited",
        avatar: "/images/industries/cosmeceutical-research/Dr.-Shalini-Verma.webp",
        flag: "/images/country/us.png",
    },
    {
        name: "Dr. Rajesh Iyer",
        degree: "PhD – Cosmeceutical Research & Innovation",
        experience: "17 Years of Experience",
        manuscripts: "95+ manuscripts edited",
        avatar: "/images/education-editorial-service/accessibility-compliance/Dr.-Vikram-Joshi.webp",
        flag: "/images/country/us.png",
    },
];

export default function CosmeceuticalAuthorsAndEditors({
    authorsPublishTitle = 'Where Our Authors Publish',
    authorsPublishDescription = 'Our authors share Pubrica\'s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.',
    publication = defaultPublication,
    editorsTitle = 'Our Expert Cosmeceutical Editors',
    editorsDescription = 'Pubrica\'s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.',
    editors = defaultEditors
}: CosmeceuticalAuthorsAndEditorsProps) {
    return (
        <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden space-y-2">

            {/* Where Our Authors Publish Section */}
            <section className="py-2 max-w-5xl mx-auto px-4 border-t border-gray-100">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={{
                        imageSrc:
                            "/images/industries/cosmeceutical-research/sample-works-4.webp",
                        imageAlt: "Journal of Cosmetic Dermatology Journal Cover",
                        paperTitle: "Aging of the Human Lip: Current Knowledge and Clinical Implications",
                        author: "Fanghui Sun, Yue Liu, Tao Zhang",
                        journalName: "Journal of Cosmetic Dermatology",
                        publisher: "Wiley",
                        impactFactor: "2.5",
                    }}
                />
            </section>

            {/* Our Expert Cosmeceutical Editors Section */}
            <section className="py-2 max-w-6xl mx-auto px-4 border-t border-gray-100">
                <ExpertEditorsSection
                    title="Our Expert Cosmeceutical Editors"
                    description="Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
                    editors={expertEditors}
                />
            </section>

        </div>
    );
}