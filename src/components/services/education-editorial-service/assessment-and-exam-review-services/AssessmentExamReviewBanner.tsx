import ServiceBanner from '@/components/common/ServiceBanner';
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
            <ServiceBanner
                imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Assessment and Exam Review Services at Pubrica"
                description="A streamlined assessment and exam review service that helps identify areas of knowledge lacking as well as providing them with guidance on how to succeed on upcoming exams."
            />
        </>
    );
};

export default AssessmentExamReviewBanner;