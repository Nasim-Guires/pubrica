import React from 'react';
import Image from 'next/image';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Publisher - Pubrica',
  description: 'Top Publishers',
  slug: '/strategic-partnerships-memberships/publisher',
});

export default function PublisherPartnershipPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">

            {/* Hero Section */}
            <section className="bg-[#26373b] py-16 px-4 text-center text-white">
                <div className="max-w-4xl mx-auto border-2 border-gray-400 p-8 rounded-sm shadow-sm">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Enhancing Research Initiatives</h1>
                    <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">Top Publishers</p>
                </div>
            </section>

            {/* Intro Description & Badge */}
            <section className="py-12 px-4 text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 relative flex items-center justify-center">
                        <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md border-4 border-amber-200">
                            100% SATISFACTION
                        </div>
                    </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Pubrica offers a range of services to help authors enhance the quality and presentation of their manuscripts in order to achieve publication success. Our services make it possible for publishers to improve the manuscript acceptance rate and increase visibility of their journals. Pubrica is a preferred partner for leading universities and publishers from around the world.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b] mt-10">How Publishers Benefit from us?</h2>
            </section>

            {/* 3 Colored Cards Section */}
            <section className="pb-16 px-4 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#3192c3] text-white p-6 rounded shadow-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4 text-4xl">📚</div>
                            <h3 className="text-lg font-bold text-center mb-3">Enhance success of publication</h3>
                            <p className="text-xs md:text-sm text-center leading-relaxed">
                                Enhance publication acceptance rate by up to 75% through Pubrica experts.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#8b2b91] text-white p-6 rounded shadow-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4 text-4xl">📖</div>
                            <h3 className="text-lg font-bold text-center mb-3">Enhance international journal publication</h3>
                            <p className="text-xs md:text-sm text-center leading-relaxed">
                                Enhance publication chances in high-impact factor journals.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#6c64af] text-white p-6 rounded shadow-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-center mb-4 text-4xl">📘</div>
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
                            <p className="text-xs text-gray-600 leading-relaxed mb-6">
                                Academic English editors in your field will review the language in your manuscript, abstract, thesis, grant, galley proofs, review articles, book chapters, response to reviewers, slide and posters, technical drawing, letters, or academic book to ensure that your ideas are communicated clearly and accurately.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <button className="text-red-500 border border-red-500 hover:bg-red-50 text-xs px-4 py-1.5 rounded-full transition-colors">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">✍️</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Translation Services</h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-6">
                                Showcase your ideas by translating papers to your vernacular language with the help of Pubrica&apos;s translators who will ensure your novel ideas are not lost in the process of translation. Our team 500+ certified translators are subject-matter experts who can translate your papers.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <button className="text-red-500 border border-red-500 hover:bg-red-50 text-xs px-4 py-1.5 rounded-full transition-colors">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">👥</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Publication Support</h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-6">
                                At Pubrica we translate your scientific writing to incisive reports. We offer a team of 200+ professionals and editors in Science, Technology, and Management (STEM). We guide you through the entire life cycle for academic, scientific, and medical publication content. Partner with us today to publish your paper.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <button className="text-red-500 border border-red-500 hover:bg-red-50 text-xs px-4 py-1.5 rounded-full transition-colors">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="bg-white border border-gray-200 p-6 rounded shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <div className="text-3xl mb-3 flex justify-center">🔍</div>
                            <h4 className="font-bold text-base text-[#26373b] mb-3">Research Support</h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-6">
                                Pubrica&apos;s team of researchers and authors develop Scientific and medical research papers that can act as an indispensable tool to the practitioner/authors. We understand the author requirements to ensure high scientific impact; support for all phases of Medical & scientific publication.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <button className="text-red-500 border border-red-500 hover:bg-red-50 text-xs px-4 py-1.5 rounded-full transition-colors">
                                Read more
                            </button>
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

            {/* Collaboration Model Section */}
            <section className="py-12 px-4 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#26373b] text-center mb-8">Collaboration Model</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Dark Box */}
                    <div className="bg-[#1e383b] text-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-base mb-3">Co-branding with Publishers</h3>
                        <p className="text-xs text-gray-200 mb-4">
                            Publishers get a customized and private web portal for easy publication submission for their researchers and faculty staff.
                        </p>
                        <h4 className="font-bold text-sm mb-2">Exclusive Recommendation</h4>
                        <p className="text-xs text-gray-200 mb-3">
                            Publishers can exclusively recommend our services to their researchers and faculty staff with discounted pricing. You can recommend our services by
                        </p>
                        <ul className="list-disc list-inside text-xs text-gray-200 space-y-1">
                            <li>Emailing your authors</li>
                            <li>Recommending us through your intranet</li>
                        </ul>
                    </div>

                    {/* Green Box */}
                    <div className="bg-[#81b251] text-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-base mb-3">Co-branding with Publishers</h3>
                        <ul className="list-disc list-inside text-xs text-white space-y-2 leading-relaxed">
                            <li>Attractive pricing for publication agencies</li>
                            <li>Assured data security of client details and manuscript</li>
                            <li>MIS Reports – Dashboard to view all reports</li>
                            <li>Monthly billing and invoicing</li>
                            <li>Knowledge platform with comprehensive and up-to-date resources related to the publishing industry</li>
                            <li>Payment option either by publisher, researcher, or both</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Footer Stats Counter Bar */}
            <section className="bg-white border-t border-gray-200 py-6 px-4 mt-8">
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