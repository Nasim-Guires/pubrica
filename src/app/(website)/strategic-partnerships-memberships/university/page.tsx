import React from 'react';
import Image from 'next/image';

export default function UniversityPartnershipPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">

            {/* Hero Section */}
            <section className="bg-[#26373b] py-16 px-4 text-center text-white">
                <div className="max-w-4xl mx-auto border-2 border-gray-400 p-8 rounded-sm shadow-sm">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Enhancing Research Initiatives</h1>
                    <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">Top universities</p>
                </div>
            </section>

            {/* Intro Description & Badge */}
            <section className="py-12 px-4 text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md border-4 border-blue-200">
                        100% SATISFACTION
                    </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Pubrica offers a range of services to empower authors and help them achieve publication success by improving the quality of their manuscripts. Moreover, these services facilitate universities to boost their overall research output and improve their research performance. Pubrica is a preferred partner for leading universities and publishers worldwide
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b] mt-10">How Pubrica supports universities.</h2>
            </section>

            {/* 3 Colored Cards Section */}
            <section className="pb-16 px-4 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#3192c3] text-white p-6 rounded shadow-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <span className="text-4xl">📚</span>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3">Enhance success of manuscript</h3>
                            <p className="text-xs md:text-sm text-center leading-relaxed">
                                Enhance manuscript acceptance rate by up to 75% through Pubrica experts.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#8b2b91] text-white p-6 rounded shadow-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <span className="text-4xl">📖</span>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3">Enhance international research work</h3>
                            <p className="text-xs md:text-sm text-center leading-relaxed">
                                Enhance university&apos;s chances of publication in high-impact factor journals.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#6c64af] text-white p-6 rounded shadow-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <span className="text-4xl">📘</span>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3">Achieve global research goals</h3>
                            <p className="text-xs md:text-sm text-center leading-relaxed">
                                Enhance high-impact publications and foster international research collaborations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authoring Service Header */}
            <section className="py-8 bg-gray-50 border-t border-b border-gray-200 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b]">Authoring Service</h2>
            </section>

            {/* 4 White Columns Authoring Services */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Column 1 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">📄</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Language Editing & Formatting</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Academic English editors in your field will review the chapters, response to reviewers, slide and posters, technical drawing, letters, or academic book to ensure that your ideas are communicated clearly and accurately.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">✍️</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Translation Services</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Showcase your ideas by translating papers to your vernacular language with the translation. Our team 500+ certified translators are subject-matter experts who can translate your papers.
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">👥</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Publication Support</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                At Pubrica we translate your scientific writing to incisive reports. We offer a team of you through the entire life cycle for academic, scientific, and medical publication content. Partner with us today to publish your paper.
                            </p>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">🔍</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Research Support</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Pubrica&apos;s team of researchers and authors develop Scientific reports. We offer a team to understand the author requirements to ensure high scientific impact; support for all phases of Medical & scientific publication.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Explore Partnership Button */}
                <div className="text-center mt-10">
                    <button className="bg-[#1b3638] hover:bg-black text-white text-xs md:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors">
                        Explore Partnership Opportunities
                    </button>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-12 bg-gray-50 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b] mb-8">Workflow</h2>
                <div className="flex justify-center">
                    <div className="relative w-64 h-64 flex flex-col items-center justify-center space-y-4">
                        {/* Visual Workflow Mock Representation */}
                        <div className="w-12 h-12 bg-[#3192c3] rounded-full flex items-center text-white text-xs justify-center shadow">Step 1</div>
                        <div className="w-0.5 h-6 bg-gray-400"></div>
                        <div className="w-12 h-12 bg-[#3192c3] rounded-full flex items-center text-white text-xs justify-center shadow">Step 2</div>
                        <div className="w-0.5 h-6 bg-gray-400"></div>
                        <div className="w-12 h-12 bg-[#3192c3] rounded-full flex items-center text-white text-xs justify-center shadow">Step 3</div>
                    </div>
                </div>
            </section>

            {/* Collaboration Model Section */}
            <section className="py-12 px-4 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b] text-center mb-8">Collaboration Model</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dark Box */}
                    <div className="bg-[#1e383b] text-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-base mb-3">University-Specific Web Portals</h3>
                        <p className="text-xs text-gray-200 mb-4">
                            Universities get a customized and private web portal for easy manuscript submission for their researchers and faculty staff.
                        </p>
                        <h4 className="font-bold text-sm mb-2">Exclusive Recommendation</h4>
                        <p className="text-xs text-gray-200 mb-3">
                            Universities can exclusively recommend our services to their researchers and faculty staff with discounted pricing. You can recommend our services by:
                        </p>
                        <ul className="list-disc list-inside text-xs text-gray-200 space-y-1">
                            <li>Emailing your authors</li>
                            <li>Recommending us through your Intranet</li>
                        </ul>
                    </div>

                    {/* Green Box */}
                    <div className="bg-[#81b251] text-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-base mb-3">Features of collaboration</h3>
                        <ul className="list-disc list-inside text-xs text-white space-y-2 leading-relaxed">
                            <li>Attractive pricing for university researchers</li>
                            <li>Assured data security of client details and manuscript</li>
                            <li>MIS Reports – Dashboard to view all reports</li>
                            <li>Monthly billing and invoicing</li>
                            <li>Knowledge platform with comprehensive and up-to-date resources related to the publishing industry</li>
                            <li>Payment option either by university or an individual researcher or by both</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Knowledge Sharing Section */}
            <section className="py-12 px-4 bg-gray-50 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b] mb-2">Learn and Grow with Pubrica Academy, your Educational Community for Knowledge Sharing</h2>
                <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto mb-8">
                    Pubrica Academy is a forum for active discussion and knowledge sharing. It offers comprehensive and up-to-date resources for researchers, publishers, editors, and students to learn and share their experience about research and publishing.
                </p>

                {/* Mosaic Image Grid Placeholder */}
                <div className="max-w-md mx-auto grid grid-cols-2 gap-2 p-2 bg-white shadow-md rounded">
                    <div className="relative h-40 bg-gray-200 overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400" alt="Students" fill className="object-cover" />
                    </div>
                    <div className="relative h-40 bg-gray-200 overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400" alt="Meeting" fill className="object-cover" />
                    </div>
                    <div className="relative h-40 bg-gray-200 overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400" alt="Graduation" fill className="object-cover" />
                    </div>
                    <div className="relative h-40 bg-gray-200 overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400" alt="Speaker" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Latest from Pubrica Section */}
            <section className="py-10 px-4 max-w-4xl mx-auto">
                <h3 className="font-bold text-lg text-[#26373b] mb-4">The latest from Pubrica</h3>
                <ul className="space-y-2 text-xs text-blue-800">
                    <li>
                        <a href="#" className="hover:underline flex items-center gap-2">
                            <span>▶</span> COASP Meeting 2016: Pubrica Report in Science Editor
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline flex items-center gap-2">
                            <span>▶</span> Council of Science Editors (CSE) Annual Meeting 2016:Pubrica Report in CSE
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline flex items-center gap-2">
                            <span>▶</span> Open Access Publishing Decoded at the 8th COASP Meeting
                        </a>
                    </li>
                </ul>
                <div className="mt-4">
                    <button className="bg-[#1b3638] text-white text-xs px-4 py-2 rounded">
                        Explore Partnership Opportunities
                    </button>
                </div>
            </section>

            {/* Footer Stats Counter Bar */}
            <section className="bg-white border-t border-gray-200 py-6 px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="border-r last:border-none border-gray-200">
                        <p className="font-bold text-base text-[#26373b]">2 million+ authors</p>
                        <p className="text-[10px] text-gray-500">assisted in 125 countries</p>
                    </div>
                    <div className="border-r last:border-none border-gray-200">
                        <p className="font-bold text-base text-[#26373b]">PhD, Master&apos;s only</p>
                        <p className="text-[10px] text-gray-500">2000+ editors</p>
                    </div>
                    <div>
                        <p className="font-bold text-base text-[#26373b]">19.4+ years</p>
                        <p className="text-[10px] text-gray-500">of average editing experience</p>
                    </div>
                </div>
            </section>

        </div>
    );
}