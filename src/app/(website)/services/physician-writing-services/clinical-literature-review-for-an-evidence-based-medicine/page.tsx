import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import ClinicalReviewScopeAndApproach from '@/components/services/physician-writing-services/clinical-literature-review/ClinicalLiteratureOurApproach'
import ClinicalLiteratureReviewHero from '@/components/services/physician-writing-services/clinical-literature-review/ClinicalLiteratureReviewHero'
import ClinicalLiteratureReviewPackages from '@/components/services/physician-writing-services/clinical-literature-review/ClinicalLiteratureReviewPackages'
import ClinicalLiteratureReviewWorkflowAndCompliance from '@/components/services/physician-writing-services/clinical-literature-review/ClinicalLiteratureReviewWorkflowAndCompliance'
import { clinicalLiteratureReviewFaqs, clinicalLiteratureReviewTestimonials, literatureSearchWhoWeServe } from '@/lib/services/data/clinical-literature-review/ClinicliteratureTestimonialsReview'
const page = () => {
    return (
        <>
            <ClinicalLiteratureReviewHero />
            <ClinicalReviewScopeAndApproach />
            {/* <CommonWhoWeServe
                title="Who We Serve"
                description="Pubrica provides comprehensive literature search, evidence synthesis, and citation support for healthcare, life sciences, academia, regulatory organizations, and industry professionals seeking high-quality, publication-ready research."
                data={literatureSearchWhoWeServe}
            /> */}
            <ClinicalLiteratureReviewWorkflowAndCompliance />
            <ClinicalLiteratureReviewPackages />
            <CommonTestimonial
                title="Testimonials"
                description="Our clinical literature review services have helped global researchers, clinicians, and industry experts publish high-quality, evidence-based reviews in top-tier journals. Here's what our clients say:"
                testimonials={clinicalLiteratureReviewTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions – Clinical Literature Review Service"
                faqs={clinicalLiteratureReviewFaqs}
            />
        </>
    )
}

export default page