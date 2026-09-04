import CommonPackages from '@/components/common/CommonPackages'
import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton'
import AssessmentAndExamReviewServicesSample from '@/components/services/education-editorial-service/assessment-and-exam-review-services/AssessmentAndExamReviewServicesSample'
import AssessmentAndExamReviewServicesWhyChoose from '@/components/services/education-editorial-service/assessment-and-exam-review-services/AssessmentAndExamReviewServicesWhyChoose'
import AssessmentExamReviewBanner from '@/components/services/education-editorial-service/assessment-and-exam-review-services/AssessmentExamReviewBanner'
import AssessmentExamReviewPage from '@/components/services/education-editorial-service/assessment-and-exam-review-services/AssessmentExamReviewPage'
import { educationEditorialAssessmentAndExamReviewFaq, educationEditorialAssessmentAndExamReviewPackages, educationEditorialAssessmentAndExamReviewTestimonials, educationEditorialAssessmentAndExamReviewWorkflow } from '@/lib/services/education-editorial-service/assessment-and-exam-review-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Assessment and Exam Review Services | Pubrica',
    description: "Improve academic results with Pubrica’s Assessment & Exam Review Services, delivering structured reviews, expert insights, and focused support for success.",
    keywords: ['Assessment and Exam Review Services', 'Assessment review services', 'exam review services', 'academic assessment validation', 'exam content review'],
    slug: '/services/education-editorial-service/assessment-and-exam-review-services',
})

export const educationEditorialAssessmentAndExamReviewWhoWeServe = {
    title: "Who We Serve",

    description: (
        <>
            Our Assessment &{" "}
            <a href="/" className="text-blue-600">
                Exam Review Services
            </a>{" "}
            support a wide range of educational and professional stakeholders seeking
            reliable, fair, and high-quality evaluations.
        </>
    ),

    data: [
        {
            title: "Colleges and universities",
            imageUrl:
                "/images/education-editorial-service/assessment-and-exam-review-services/Colleges-and-universities.webp",
            bullets: [
                "have the responsibility to develop a better quality of testing and evaluation based on the types of tests and assignments offered. This is done in conjunction with faculty members and educators who aid using these services to improve the clarity and quality of the assessments as well as the effectiveness of what is being learned.",
            ],
        },
        {
            title: "Educational Technology",
            imageUrl:
                "/images/education-editorial-service/assessment-and-exam-review-services/Educational-Technology.webp",
            bullets: [
                "(Ed-Tech) and Online Learning Platforms are utilized by Ed-Tech and Online Educational Institutions to verify the accuracy and reliability of assessments made through assessment processes, such as certification, MOOCs, and professional development.",
            ],
        },
        {
            title: "Corporations and educational institutions",
            imageUrl:
                "/images/education-editorial-service/assessment-and-exam-review-services/Corporations-and-educational-institutions.webp",
            bullets: [
                "utilize a Comprehensive Assessment process when assessing skills, ensuring that the skills being evaluated are verified through the works and offering job and workforce readiness.",
            ],
        },
        {
            title: "Governments and other professional",
            imageUrl:
                "/images/education-editorial-service/assessment-and-exam-review-services/Governments-and-other-professional.webp",
            bullets: [
                "agencies assist in developing Standardized Testing Products and Process, as well as maintaining the Integrity of High Stakes Testing Programs",
            ],
        },
        {
            title: "Accrediting Agencies and Examination Boards",
            imageUrl:
                "/images/education-editorial-service/assessment-and-exam-review-services/Accrediting-Agencies-and-Examination-Boards.webp",
            bullets: [
                "We provide support to accrediting agencies and examination boards in maintaining consistency, compliance, and credibility of assessments across all educational programs.",
            ],
        },
        {
            title: "Testing and accreditation Agencies",
            imageUrl:
                "/images/education-editorial-service/assessment-and-exam-review-services/Testing-and-accreditation-Agencies.webp",
            bullets: [
                "will provide support to testing boards, which will ensure that they maintain the standards for Fair and Safely Complying Assessment. In addition, they will work with educational institutions to ensure that all assessments conducted by educational institutions are credible and consistent across all degree programs.",
            ],
        },
    ],
};

const page = () => {
    return (
        <>
            <AssessmentExamReviewPage />
            <CommonWhoWeServe {...educationEditorialAssessmentAndExamReviewWhoWeServe} />
            <AssessmentExamReviewBanner />
            <EditorialWorkflowSection {...educationEditorialAssessmentAndExamReviewWorkflow} />
            <AssessmentAndExamReviewServicesWhyChoose />
            <CommonPackages {...educationEditorialAssessmentAndExamReviewPackages} />
            <GetFreeQuoteButton />
            <AssessmentAndExamReviewServicesSample />
            <CommonTestimonial {...educationEditorialAssessmentAndExamReviewTestimonials} />
            <CommonFAQ {...educationEditorialAssessmentAndExamReviewFaq} />
            <InsightsSection />
        </>
    )
}

export default page