import React from 'react';
import Image from 'next/image';

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

export default function CosmeceuticalAuthorsAndEditors({
    authorsPublishTitle = 'Where Our Authors Publish',
    authorsPublishDescription = 'Our authors share Pubrica\'s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.',
    publication = defaultPublication,
    editorsTitle = 'Our Expert Cosmeceutical Editors',
    editorsDescription = 'Pubrica\'s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.',
    editors = defaultEditors
}: CosmeceuticalAuthorsAndEditorsProps) {
    return (
        <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden py-7 px-6">

            {/* Where Our Authors Publish Section */}
            <section className="py-6 max-w-5xl mx-auto px-4 border-t border-gray-100">
                <div className="text-left max-w-2xl mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
                        {authorsPublishTitle}
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {authorsPublishDescription}
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
                        <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
                            <Image
                                src={publication.coverImage}
                                alt={publication.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 200px"
                                className="object-contain p-1"
                            />
                        </div>

                        <div className="space-y-3 text-sm md:text-base text-gray-700">
                            <div>
                                <span className="font-bold text-gray-900">Paper Title: </span>
                                <span className="text-gray-800">{publication.title}</span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Author: </span>
                                <span>{publication.author}</span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Journal Name: </span>
                                <span className="text-[#1b3b32] font-semibold">
                                    {publication.journal}
                                </span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Publisher: </span>
                                <span>{publication.publisher}</span>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900">Impact factor: </span>
                                <span>{publication.impactFactor}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Expert Cosmeceutical Editors Section */}
            <section className="py-6 max-w-6xl mx-auto px-4 border-t border-gray-100">
                <div className="text-left max-w-2xl mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
                        {editorsTitle}
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {editorsDescription}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {editors.map((editor, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200/60 rounded-xl p-6 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
                        >
                            <div className="flex items-center space-x-4 mb-4 w-full">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                                    <Image
                                        src={editor.image}
                                        alt={editor.name}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900 text-base">
                                        {editor.name}
                                    </h3>

                                    <p className="text-xs text-[#1b3b32] font-semibold">
                                        {editor.qualification}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full space-y-1.5 text-xs text-gray-600 pt-3 border-t border-gray-100">
                                <p>{editor.experience}</p>
                                <p>{editor.manuscripts}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}