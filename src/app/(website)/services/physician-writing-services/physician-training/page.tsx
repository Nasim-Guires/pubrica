import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonFAQ from '@/components/common/FAQ'
import PhysicianTrainingHeroSection from '@/components/services/physician-writing-services/physician-training/PhysicianTrainingHeroSection'
import PhysicianTrainingPackage from '@/components/services/physician-writing-services/physician-training/PhysicianTrainingPckage'
import PhysicianTrainingWorkflowSection from '@/components/services/physician-writing-services/physician-training/PhysicianTrainingWorkflowSection'
import { physicianTrainingMaterialsFaqs, physicianTrainingMaterialsTestimonials } from '@/lib/services/data/physician-training/physicianTrainingMaterialsTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Physician Training Content Development Service - Elevate',
    description: 'Pubrica offers physician training content development services to refine medical expertise. Tailored programs ensure skill enhancement.',
    keywords: ['physician Training', 'Physician training services', 'clinical research training for physicians', 'medical writing training for doctors', 'scientific writing for physicians'],
    slug: '/services/physician-writing-services/physician-training',
})

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
