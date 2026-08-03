import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type ServiceFeature = {
    icon: string;
    title: string;
    description: string;
};

const serviceFeatures: ServiceFeature[] = [
    {
        icon: 'WCAG Icon', // Placeholder for SVG/Image
        title: 'WCAG Accessibility Compliance',
        description: 'Our firm guarantees that our written and submitted works are following the Web Content Accessibility...',
    },
    {
        icon: 'Section 508 Icon',
        title: 'Section 508 Compliance',
        description: 'The experts that we employ will prepare all your documentation in accordance with the Section...',
    },
    {
        icon: 'Publisher-Specific Icon',
        title: 'Publisher-Specific Accessibility Compliance',
        description: 'The way each publisher defines accessibility is different, which creates a challenge when trying to find...',
    },
    {
        icon: 'Quality Assurance Icon',
        title: 'Quality Assurance and Accessibility Validation',
        description: 'Every document goes through an extensive review and validation process to make sure that it is...',
    },
    {
        icon: 'Accessible Document Icon',
        title: 'Accessible Document Formatting',
        description: 'Pubrica structures your documents using semantic headings, styles, and tags to support screen readers and...',
    },
];

const AccessibilityCompliancePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Expert Accessibility Compliance Services for Scholarly Documents | Pubrica</title>
                <meta name="description" content="Ensure your academic manuscripts, research papers, and dissertations meet global accessibility standards (WCAG, Section 508) with Pubrica's professional editorial compliance services." />
                <link rel="canonical" href="https://pubrica.com/services/education-editorial-service/accessibility-compliance/" />
            </Head>

            <div className="min-h-screen bg-white text-gray-800">
                {/* Header Section - Dark Banner */}
                <header className="bg-[#1a3a3a] text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Compliance</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                            Accessibility is a priority, and we continuously improve this site to serve all visitors effectively.
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-12 md:py-16">
                    {/* Refine Your Manuscripts Section */}
                    <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a3a] mb-6 leading-tight">
                                Refine Your Manuscripts with Professional Accessibility Compliance
                            </h2>
                            <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                                <p>
                                    Pubrica's Professional Accessibility Compliance Services allows us to assist in meeting the accessibility and usability needs for those developing scholarly, scientific, academic manuscripts, e.g., Research Paper, Thesis or dissertation, textbooks, curriculum documents. In addition to the academic integrity of these documents, Pubrica has Accessibility Specialists who are trained to bring an individual's work into compliance with International Accessibility Standards while preparing it to be accessible, compliant, publication-ready for worldwide audience as well as for all Digital Platforms.
                                </p>
                                <p>
                                    Ensuring compliance with Accessibility mandates is a fundamental aspect of 21st Century Publishing. By collaborating with Pubrica, you will have a final document that meets the requirements of publishers and regulatory bodies and provides readers with assistive technology with:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Compliance to <Link href="#" className="text-[#b32821] hover:underline">International Accessibility Standards</Link>, including WCAG and Section 508</li>
                                    <li>Correct document structures, headings, and semantic Formatting</li>
                                    <li>Provision of appropriate Alternative text used to describe Figures, Tables, and any Visual Elements.</li>
                                    <li>Readability, navigability, and useability have been improved with the use of Screen Readers and Digital Platforms.</li>
                                    <li>Tables, Equations, References, and Supplementary Materials will be accessible.</li>
                                    <li>Compliance to <Link href="#" className="text-[#b32821] hover:underline">Publisher-Specific Accessibility and Formatting Guidelines.</Link></li>
                                </ul>
                                <p>
                                    Working with Pubrica will help you bring your Work into compliance to the Accessibility Standards and prepare your Manuscripts to Help You and Others in your Knowledge Distribution. You will also provide a greater audience base for your Manuscripts while fulfilling the Expectations set forth by Publishers, Institutions, and Funding Bodies.
                                </p>
                            </div>
                            <div className="mt-10">
                               <GetFreeQuoteButton/>
                            </div>
                        </div>

                        {/* Image Section (as requested: div placeholder) */}
                        <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center shadow-inner aspect-[4/3] relative overflow-hidden">
                            {/* This div represents the 'Compliance' image from the screenshot */}
                            <div className="absolute inset-4 bg-white rounded-lg shadow-lg flex flex-col p-4 border border-gray-200">
                                <div className="flex-grow bg-gray-50 rounded mb-3 relative">
                                    {/* Simulate image content */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Meeting compliance standards</div>
                                </div>
                                <div className="h-10 w-2/3 bg-gray-200 rounded flex items-center px-3 text-sm text-gray-600 font-mono border border-gray-300">
                                    Compliance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Types of Accessibility Compliance We Offer Section */}
                    <section>
                        <header className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a3a] mb-4">Types of Accessibility Compliance We Offer</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Pubrica provides specialized accessibility compliance solutions that support the development of inclusive academic and professional publishers. Our service offerings ensure that all types of manuscripts comply with global standards for accessibility and retain their integrity, intelligibility, and readiness for publication we provide:
                            </p>
                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceFeatures.map((service, index) => (
                                <article key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                    <div className="w-16 h-16 mb-6 bg-[#e6f2f2] rounded-full flex items-center justify-center text-[#1a3a3a] border-4 border-white ring-2 ring-[#1a3a3a]/10">
                                        {/* Icon Placeholder - In real app, use next/image or SVG component */}
                                        <span className="sr-only">{service.icon}</span>
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#1a3a3a] mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-base flex-grow">{service.description}</p>
                                    <Link href="#" className="inline-block mt-5 text-[#b32821] font-medium hover:underline group">
                                        Read more
                                        <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer Placeholder */}
                <footer className="bg-[#1a3a3a] text-gray-300 py-10 mt-16 border-t border-gray-700">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; {new Date().getFullYear()} Pubrica. All Rights Reserved.</p>
                    </div>
                </footer>

            </div>
        </>
    );
};

export default AccessibilityCompliancePage;