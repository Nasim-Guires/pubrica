import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RW = '/images/medical-writing/regulatory-writing';

const whyChoose = [
    {
        title: '1000+ regulatory documents delivered successfully',
        icon: `${RW}/1000-regulatory-documents-delivered-successfully.png`,
    },
    {
        title: 'Experienced writers with expertise in 40+ therapeutic areas',
        icon: `${RW}/Experienced-writers-with-expertise-in-40-therapeutic-areas.png`,
    },
    {
        title: '100% confidentiality & regulatory standards compliant',
        icon: `${RW}/100-confidentiality-regulatory-standards-compliant.png`,
    },
    {
        title: 'Fully compliant with global regulatory authority standards FDA (US), EMA (EU), MHRA (UK), PMDA',
        icon: `${RW}/Fully-compliant-with-global-regulatory-authority.png`,
    },
];

const RegulatoryWritingPage = () => {
    return (
        <div className="w-full bg-white text-gray-800 font-sans">

            {/* 1. Hero / Header Banner Section */}
            <section className="bg-[#122b2b] text-white py-16 px-4 md:px-8 text-center">
                <div className="max-w-4xl mx-auto border border-white/40 p-8 rounded-sm">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                        Regulatory Writing
                    </h1>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                        Our knowledgeable professionals produce clear, content-ready to submit and compliant with globally accepted regulatory standards.
                    </p>
                </div>
            </section>

            {/* 2. Main Content Section */}
            <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#122b2b] mb-6">
                    Regulatory Writing for Life Sciences, Pharma and Research <br className="hidden md:inline" />
                    Full Compliance, Clarity, and Accuracy in Scientific Data Submission
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    <p>
                        At Pubrica, we specialize in regulatory writing services for pharmaceutical, biotech, and medical device companies, ensuring your scientific and clinical data is translated into clear, accurate, and regulatory-compliant documents that meet global submission standards.
                    </p>

                    <p>
                        Whether you’re preparing for an IND, NDA, BLA, MAA, or CTD submission, our team of experienced regulatory writers ensures that your data is well-organized, truthful, and fully aligned with international guidelines such as ICH, FDA, EMA, PMDA, and MHRA.
                    </p>

                    <p className="pt-2 font-medium text-gray-700">
                        We help pharmaceutical companies, clinical research organizations (CROs), and medical device manufacturers by:
                    </p>

                    {/* Bullet points with red highlights */}
                    <ul className="space-y-2 pl-4 list-disc marker:text-red-600">
                        <li>
                            To help you translate your complex scientific and clinical data into organized and compliant, submission-ready documents.
                        </li>
                        <li>
                            To help you comply with international regulatory regulations (ICH, FDA, EMA, PMDA,{' '}
                            <a href="#ctd" className="text-blue-600 ">CTD</a>).
                        </li>
                        <li>
                            To avoid delays and rejections caused by insufficient documentation, formatting errors, or non-compliance.
                        </li>
                    </ul>

                    <p className="pt-2">
                        Our experienced regulatory writers and experts in clinical{' '}
                        <a href="#regulatory-writing" className="text-blue-5 text-blue-600">
                            regulatory writing
                        </a>{' '}
                        understand that and provide services to help you develop your data into organized, compliant documents ready for regulatory submission.
                    </p>

                    <p>
                        We work in close collaboration with your project teams to produce documents with a clear understanding of the expected clarity required for investigational submissions, marketing applications and reporting, and regulatory expectations. Our tailored writing service seeks to minimize approval timelines and facilitate a successful regulatory strategy, Partner with Pubrica to ensure your regulatory documents are clear, compliant, and submission ready.
                    </p>
                </div>

                {/* View Brochure Button */}
                <div className="mt-8">
                    <Link href="/uploads/medical-writing/regulatory-writing/17-03-2026-REGULATORY-WRITING-SUPPORT-.pdf" className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none">
                        View Brochure
                    </Link>
                </div>
            </section>

            {/* 3. Why Choose Pubrica Section */}
            <section className="bg-gray-50 py-14 px-6 md:px-8 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#122b2b] mb-4">
                        Why Choose Pubrica
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base max-w-4xl mb-10 leading-relaxed">
                        We simplify the{' '}
                        <a href="#process" className="text-blue-600 ">
                            regulatory writing process
                        </a>
                        —from data compilation to submission—helping you meet global compliance standards. Accelerate your approval timelines with Pubrica’s expert{' '}
                        <a href="#support" className="text-blue-600 ">
                            regulatory writing support
                        </a>
                        , delivering clarity, consistency, and compliance in every document.
                    </p>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {whyChoose.map((item) => (
                            <div key={item.title} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center justify-between min-h-[200px]">
                                <div className="mb-4 relative w-12 h-12">
                                    <Image src={item.icon} alt="" fill className="object-contain" sizes="48px" />
                                </div>
                                <p className="font-semibold text-gray-800 text-sm">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Consultation Button */}
                    <div className="text-center">
                        <button className="bg-[#b90000] hover:bg-red-800 text-white font-medium px-8 py-3 rounded-full transition duration-300 shadow-md">
                            Request Free Consultation
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RegulatoryWritingPage;