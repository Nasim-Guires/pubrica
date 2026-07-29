import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonFAQ from '@/components/common/FAQ'
import PhysicianManuscriptWorkflowSection from '@/components/services/physician-writing-services/physician-manuscript/ManuScriptWhoWEServe'
import PhysicianManuscriptPackagesSection from '@/components/services/physician-writing-services/physician-manuscript/PhysicianManuscriptPackagesSection'
import PhysicianManuscriptsPage from '@/components/services/physician-writing-services/physician-manuscript/PhysicianManuscriptsPage'
import { physicianManuscriptWritingFaqs, physicianManuscriptWritingTestimonials } from '@/lib/services/data/physician-manuscript/physicianManuscriptWritingTestimonials '
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <PhysicianManuscriptsPage />
            <PhysicianManuscriptWorkflowSection />
            <PhysicianManuscriptPackagesSection />
            <CommonTestimonial
                title="Testimonials"
                description="Learn how Pubrica’s Physician Manuscript Writing Service has supported clinicians in publishing high-quality, peer-reviewed research across a range of medical specialties. Here is what our clients say:"
                testimonials={physicianManuscriptWritingTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions"
                faqs={physicianManuscriptWritingFaqs}
            />
            <InsightsSection/>
        </>
    )
}

export default page
