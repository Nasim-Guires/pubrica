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
import { educationEditorialAssessmentAndExamReviewFaq, educationEditorialAssessmentAndExamReviewPackages, educationEditorialAssessmentAndExamReviewTestimonials, educationEditorialAssessmentAndExamReviewWhoWeServe, educationEditorialAssessmentAndExamReviewWorkflow } from '@/lib/services/education-editorial-service/assessment-and-exam-review-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


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