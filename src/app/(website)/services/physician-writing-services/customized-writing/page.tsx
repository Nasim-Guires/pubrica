import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import CustomizedPhysicianMedicalWritingService from '@/components/services/physician-writing-services/customized-writing/CustomizedPhysicianMedicalWritingService'
import CustomizedWritingGuidelineStandards from '@/components/services/physician-writing-services/customized-writing/CustomizedWritingGuidelineStandards'
import CustomizedWritingPage from '@/components/services/physician-writing-services/customized-writing/CustomizedWritingServiceWork'
import PhysicianSpecialtiesAndAddons from '@/components/services/physician-writing-services/customized-writing/PhysicianSpecialtiesAndAddons'
import { customizedMedicalWritingFaqs, customizedMedicalWritingTestimonials, physicianWritingWhoWeServe } from '@/lib/services/data/customized-writing/CustomizedWritingTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Customized Clinical and Medical Writing for Physicians | Pubrica',
    description: "Physician-focused writing support for manuscripts, grants, regulatory, CME & thesis work—expert, submission-ready documents by Pubrica.",
    keywords: ['customized writing', 'Customized medical writing for physicians', 'Clinical manuscript writing services', 'Regulatory document writing for doctors', 'Physician-focused academic writing'],
    slug: '/services/physician-writing-services/customized-writing',
})

const page = () => {
    return (
        <>
            <CustomizedPhysicianMedicalWritingService />
            <CommonWhoWeServe
                title="Why Choose Our Customized Medical Writing Services for Physicians"
                description="Our writing solutions combine clinical insight, discipline-specific expertise, and adherence to global publishing and regulatory standards. Each document is crafted to meet the exact needs of practicing physicians, physician-researchers, and medical academics."
                data={physicianWritingWhoWeServe}
            />
            <PhysicianSpecialtiesAndAddons />
            {/* <CustomizedWritingPage/> */}
            <CustomizedWritingGuidelineStandards />
            <CommonTestimonial
                title="Testimonials"
                description="Physicians, researchers, and professionals across disciplines rely on our customized writing services to meet journal standards, institutional requirements, and publication deadlines. Here's what our clients say:"
                testimonials={customizedMedicalWritingTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions – Customized Medical Writing Services"
                faqs={customizedMedicalWritingFaqs}
            />
            <InsightsSection/>
        </>
    )
}

export default page