import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type ServiceFeature = {
    icon: string;
    title: string;
    description: string;
};

const serviceFeatures: ServiceFeature[] = [
    {
        icon: '/images/education-editorial-service/accessibility-compliance/WCAG-Accessibility-Compliance.webp',
        title: 'WCAG Accessibility Compliance',
        description:
            'Our firm guarantees that our written and submitted works are following the Web Content Accessibility Guidelines (WCAG 2) and allow readers using assistive technology such as screen readers. All will be supportive through properly formatted documents, clear, organized layouts, and visual elements that can be interpreted visually.',
    },
    {
        icon: '/images/education-editorial-service/accessibility-compliance/Section-508-Compliance.webp',
        title: 'Section 508 Compliance',
        description:
            'The experts that we employ will prepare all your documentation in accordance with the Section 508 Accessibility Requirements; thus, all your federally funded research publication documents will be accessible to the disabled community.',
    },
    {
        icon: '/images/education-editorial-service/accessibility-compliance/Publisher-Specific-Accessibility-Compliance.webp',
        title: 'Publisher-Specific Accessibility Compliance',
        description:
            'The way each publisher defines accessibility is different, which creates a challenge when trying to find the appropriate journal university press platform for your work. Pubrica will help you match the requirements of the journal university press platform to your manuscript so that it meets the submission and acceptance criteria without issue.',
    },
    {
        icon: '/images/education-editorial-service/accessibility-compliance/Quality-Assurance-and-Accessibility-Validation.webp',
        title: 'Quality Assurance and Accessibility Validation',
        description:
            'Every document goes through an extensive review and validation process to make sure that it is accessible before publishing or providing it for use by the community; this is regardless of where they come from (a vendor, internal department, etc.).',
    },
    {
        icon: '/images/education-editorial-service/accessibility-compliance/Accessible-Document-Formatting.webp',
        title: 'Accessible Document Formatting',
        description:
            'Pubrica structures your documents using semantic headings, styles, and tags to support screen readers and digital navigation. This includes accessible layouts for theses, dissertations, textbooks, and curricula.',
    },
];

const AccessibilityCompliancePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Expert Accessibility Compliance Services for Scholarly Documents | Pubrica</title>
                <meta
                    name="description"
                    content="Ensure your academic manuscripts, research papers, and dissertations meet global accessibility standards (WCAG, Section 508) with Pubrica's professional editorial compliance services."
                />
                <link
                    rel="canonical"
                    href="/services/education-editorial-service/accessibility-compliance"
                />
            </Head>

            <div className="min-h-screen bg-white text-gray-800">
                {/* Header Section - Dark Banner */}
                <header className="bg-[#1a3a3a] text-white py-7">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Compliance</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                            Accessibility is a priority, and we continuously improve this site to serve all visitors effectively.
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6 md:py-7 max-w-7xl">
                    {/* Refine Your Manuscripts Section */}
                    <section className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a3a] mb-6 leading-tight">
                            Refine Your Manuscripts with Professional Accessibility Compliance
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            Pubrica's Professional Accessibility Compliance Services allows us to assist in meeting the accessibility and usability needs for those developing scholarly, scientific, academic manuscripts, e.g., Research Paper, Thesis or dissertation, textbooks, curriculum documents. In addition to the academic integrity of these documents, Pubrica has Accessibility Specialists who are trained to bring an individual's work into compliance with International Accessibility Standards while preparing it to be accessible, compliant, publication-ready for worldwide audience as well as for all Digital Platforms.
                        </p>

                        <div className="grid md:grid-cols-12 gap-8 items-center my-6">
                            {/* Left Content Column */}
                            <div className="md:col-span-7 space-y-4 text-gray-700">
                                <p>
                                    Ensuring compliance with Accessibility mandates is a fundamental aspect of 21st Century Publishing. By collaborating with Pubrica, you will have a final document that meets the requirements of publishers and regulatory bodies and provides readers with assistive technology with:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>
                                        Compliance to <Link href="/services/education-editorial-service/accessibility-compliance/web-accessibility-compliance-wcag-standards" className="text-blue-600 no-underline hover:no-underline">International Accessibility Standards</Link>, including WCAG and Section 508
                                    </li>
                                    <li>Correct document structures, headings, and semantic Formatting</li>
                                    <li>
                                        Provision of appropriate Alternative text used to describe Figures, Tables, and any Visual Elements.
                                    </li>
                                    <li>
                                        Readability, navigability, and useability have been improved with the use of Screen Readers and Digital Platforms.
                                    </li>
                                    <li>Tables, Equations, References, and Supplementary Materials will be accessible.</li>
                                    <li>
                                        Compliance to Publisher-Specific Accessibility and Formatting Guidelines.
                                    </li>
                                </ul>
                            </div>

                            {/* Right Image Column with Backdrop Card Styling */}
                            <div className="md:col-span-5 relative flex justify-center py-2 px-4">
                                <div className="relative w-full max-w-md aspect-[4/3]">
                                    {/* Single Dark Green Offset Backdrop */}
                                    <div className="absolute inset-0 translate-y-6 -translate-x-6 bg-[#163832] rounded-[20px]" />

                                    {/* Image Container */}
                                    <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden">
                                        <Image
                                            src="/images/education-editorial-service/accessibility-compliance/Refine-Your-Manuscripts-with-Professional-Accessibility-Compliance.webp"
                                            alt="Refine Your Manuscripts with Professional Accessibility Compliance"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width:768px) 100vw, 40vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mt-6 mb-8">
                            Working with Pubrica will help you bring your Work into compliance to the Accessibility Standards and prepare your Manuscripts to Help You and Others in your Knowledge Distribution. You will also provide a greater audience base for your Manuscripts while fulfilling the Expectations set forth by Publishers, Institutions, and Funding Bodies.
                        </p>

                        <div>
                            <GetFreeQuoteButton />
                        </div>
                    </section>

                    {/* Types of Accessibility Compliance We Offer Section */}
                    <section>
                        <header className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a3a] mb-4">
                                Types of Accessibility Compliance We Offer
                            </h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Pubrica provides specialized accessibility compliance solutions that support the development of inclusive academic and professional publishers. Our service offerings ensure that all types of manuscripts comply with global standards for accessibility and retain their integrity, intelligibility, and readiness for publication we provide:
                            </p>
                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceFeatures.map((service, index) => (
                                <article
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                                >
                                    <div className="w-16 h-16 mb-6 relative">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                            sizes="64px"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#1a3a3a] mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-base leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Footer Placeholder */}
               
            </div>
        </>
    );
};

export default AccessibilityCompliancePage;