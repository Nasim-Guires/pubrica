import React from 'react';

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
                            <a href="#ctd" className="text-blue-600 underline">CTD</a>).
                        </li>
                        <li>
                            To avoid delays and rejections caused by insufficient documentation, formatting errors, or non-compliance.
                        </li>
                    </ul>

                    <p className="pt-2">
                        Our experienced regulatory writers and experts in clinical{' '}
                        <a href="#regulatory-writing" className="text-blue-5 text-blue-600 underline">
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
                    <button className="bg-[#b90000] hover:bg-red-800 text-white font-medium px-6 py-2.5 rounded-full transition duration-300 shadow-sm">
                        View Brochure
                    </button>
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
                        <a href="#process" className="text-blue-600 underline">
                            regulatory writing process
                        </a>
                        —from data compilation to submission—helping you meet global compliance standards. Accelerate your approval timelines with Pubrica’s expert{' '}
                        <a href="#support" className="text-blue-600 underline">
                            regulatory writing support
                        </a>
                        , delivering clarity, consistency, and compliance in every document.
                    </p>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center justify-between min-h-[200px]">
                            <div className="text-gray-700 mb-4">
                                {/* Certificate/Shield Icon */}
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <p className="font-semibold text-gray-800 text-sm">
                                1000+ regulatory documents delivered successfully
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center justify-between min-h-[200px]">
                            <div className="text-gray-700 mb-4">
                                {/* Handshake/Gear Icon */}
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p className="font-semibold text-gray-800 text-sm">
                                Experienced writers with expertise in 40+ therapeutic areas
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center justify-between min-h-[200px]">
                            <div className="text-gray-700 mb-4">
                                {/* Confidentiality/Check Icon */}
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <p className="font-semibold text-gray-800 text-sm">
                                100% confidentiality & regulatory standards compliant
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center justify-between min-h-[200px]">
                            <div className="text-gray-700 mb-4">
                                {/* Global Standards Icon */}
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="font-semibold text-gray-800 text-sm">
                                Fully compliant with global regulatory authority standards FDA (US), EMA (EU), MHRA (UK), PMDA
                            </p>
                        </div>

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