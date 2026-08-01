import type { NextPage } from 'next';
import Head from 'next/head';

const AssessmentExamReviewBanner: NextPage = () => {
    return (
        <>
            <Head>
                <title>Assessment and Exam Review Services at Pubrica</title>
                <meta
                    name="description"
                    content="A streamlined assessment and exam review service that helps identify areas of knowledge lacking as well as providing them with guidance on how to succeed on upcoming exams."
                />
            </Head>

            {/* EXACT FULL WIDTH BANNER MATCHING THE REFERENCE IMAGE */}
            <div className="w-full bg-[#0a2e22] text-white py-12 px-4 md:px-12 text-center space-y-2">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                    Assessment and Exam Review Services at Pubrica
                </h2>
                <p className="text-xs md:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    A streamlined assessment and exam review service that helps identify areas of knowledge lacking as well as providing them with guidance on how to succeed on upcoming exams.
                </p>
            </div>
        </>
    );
};

export default AssessmentExamReviewBanner;