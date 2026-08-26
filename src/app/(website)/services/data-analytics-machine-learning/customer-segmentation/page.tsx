import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import CustomerSegmentationPackages from '@/components/services/data-analytics-machine-learning/customer-segmentation/CustomerSegmentationPackages'
import CustomerSegmentationPage from '@/components/services/data-analytics-machine-learning/customer-segmentation/CustomerSegmentationPage'
import CustomerSegmentationSections from '@/components/services/data-analytics-machine-learning/customer-segmentation/CustomerSegmentationSections'
import { customerSegmentationFaqs, customerSegmentationTestimonials, customerSegmentationWhoWeServe } from '@/lib/services/data/data-analytics-machine-learning/CustomerSegmentationTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Customer Segmentation Research - Pubrica',
    description: 'Pubrica enables data-driven customer segmentation for pharma, biotech, hospitals, and medical devices using AI & analytics.',
    slug: '/services/data-analytics-machine-learning/customer-segmentation',
})


const page = () => {
    return (
        <>
            <CustomerSegmentationPage />
            <CommonWhoWeServe
                title="Who We Serve"
                description="At Pubrica, we provide data-driven customer segmentation services to empower organizations in understanding their target audiences and driving strategic growth. Our expertise in advanced analytics, machine learning, and market research allows us to deliver actionable insights tailored to diverse industries."
                data={customerSegmentationWhoWeServe}
            />
            <CustomerSegmentationSections />
            <CustomerSegmentationPackages />
            <CommonTestimonial
                title="Testimonials"
                description="Learn how Pubrica’s customer segmentation solutions have helped businesses and researchers gain actionable, data-driven insights that improve targeting, drive strategic decisions, and enhance customer engagement. Here’s what our clients say:"
                testimonials={customerSegmentationTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions"
                faqs={customerSegmentationFaqs}
            />
            <InsightsSection />
        </>
    )
}

export default page