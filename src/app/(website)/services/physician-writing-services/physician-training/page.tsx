import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonFAQ from '@/components/common/FAQ'
import PhysicianTrainingHeroSection from '@/components/services/physician-writing-services/physician-training/PhysicianTrainingHeroSection'
import PhysicianTrainingPackage from '@/components/services/physician-writing-services/physician-training/PhysicianTrainingPckage'
import PhysicianTrainingWorkflowSection from '@/components/services/physician-writing-services/physician-training/PhysicianTrainingWorkflowSection'
import { physicianTrainingMaterialsFaqs, physicianTrainingMaterialsTestimonials } from '@/lib/services/data/physician-training/physicianTrainingMaterialsTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <PhysicianTrainingHeroSection />
            <PhysicianTrainingWorkflowSection />

            <PhysicianTrainingPackage />
            <CommonTestimonial
                title="Testimonials"
                description="Learn how Pubrica’s Custom Physician Training Materials have helped clinicians across specialties enhance their clinical competencies, stay aligned with evidence-based guidelines, and achieve their CME and professional development goals. Here is what our clients say:"
                testimonials={physicianTrainingMaterialsTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions"
                faqs={physicianTrainingMaterialsFaqs}
            />
            <InsightsSection />
        </>
    )
}

export default page
