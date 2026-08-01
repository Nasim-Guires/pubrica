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
    coverImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
};

const defaultEditors: EditorProfile[] = [
    {
        name: 'Dr. Meera Nair',
        qualification: 'PhD - Cosmetic Science & Dermatology',
        experience: '18 Years of Experience',
        manuscripts: '120+ manuscripts edited',
        image: 'https://images.unsplash.com/photo-1594824813554-5a485556a297?auto=format&fit=crop&w=300&q=80'
    },
    {
        name: 'Dr. Shalini Verma',
        qualification: 'MD - Dermatology & Skin Pharmacology',
        experience: '22 Years of Experience',
        manuscripts: '110+ manuscripts edited',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
    },
    {
        name: 'Dr. Rajesh Iyer',
        qualification: 'PhD - Cosmeceutical Research & Innovation',
        experience: '17 Years of Experience',
        manuscripts: '95+ manuscripts edited',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80'
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
        <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden py-16 px-6">

            {/* Where Our Authors Publish Section */}
            <section className="max-w-5xl mx-auto mb-20 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">{authorsPublishTitle}</h2>
                <div className="w-12 h-1 bg-[#0f2824] mx-auto mb-6"></div>
                <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-10">
                    {authorsPublishDescription}
                </p>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center text-left">
                    <div className="relative w-full md:w-[260px] h-[340px] flex-shrink-0 rounded-xl overflow-hidden shadow border border-gray-100">
                        <Image
                            src={publication.coverImage}
                            alt={publication.title}
                            fill
                            sizes="260px"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className="flex-1 space-y-3">
                        <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Featured Publication</div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                            <span className="text-gray-700 font-medium">Paper Title:</span> {publication.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            <span className="font-semibold">Author:</span> {publication.author}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-semibold">Journal Name:</span> {publication.journal}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-semibold">Publisher:</span> {publication.publisher}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-semibold">Impact factor:</span> {publication.impactFactor}
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Expert Cosmeceutical Editors Section */}
            <section className="max-w-6xl mx-auto text-center border-t border-gray-100 pt-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{editorsTitle}</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-12">
                    {editorsDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editors.map((editor, index) => (
                        <div key={index} className="bg-[#e8f0ec]/60 border border-emerald-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                                <Image
                                    src={editor.image}
                                    alt={editor.name}
                                    fill
                                    sizes="80px"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <h3 className="font-bold text-base sm:text-lg text-[#0f2824] mb-1">{editor.name}</h3>
                            <p className="text-gray-600 text-xs mb-4 min-h-[32px] leading-snug">{editor.qualification}</p>

                            <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-emerald-200/50 mt-auto text-xs text-gray-700 font-medium">
                                <div className="bg-white/80 rounded-lg py-2 px-1 shadow-2xs">
                                    <div className="font-bold text-[#0f2824]">{editor.experience}</div>
                                </div>
                                <div className="bg-white/80 rounded-lg py-2 px-1 shadow-2xs">
                                    <div className="font-bold text-[#0f2824]">{editor.manuscripts}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}