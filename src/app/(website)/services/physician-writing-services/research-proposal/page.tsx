import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import PhysicianResearchProposalProcessWorkflow from '@/components/services/physician-writing-services/research-proposal/PhysicianResearchProposalProcessWorkflow'
import PhysicianResearchProposalService from '@/components/services/physician-writing-services/research-proposal/PhysicianResearchProposalService'
import ResearchProposalWritingPackages from '@/components/services/physician-writing-services/research-proposal/ResearchProposalWritingPackages'
import { researchProposalFaqs, researchProposalTestimonials, researchProposalWhoWeServe } from '@/lib/services/data/research-proposal/researchProposalTestimonials'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = constructMetadata({
    title: 'Clinical & Medical Research Proposal Writing | Pubrica',
    description: 'Expert proposal writing for clinical and medical research tailored for physicians and surgeons to boost funding success now',
    keywords: ['research proposal', 'Research proposal writing', 'medical research proposal', 'clinical research protocol', 'physician research proposal'],
    slug: '/services/physician-writing-services/research-proposal',
})

const page = () => {
    return (
        <>
            <PhysicianResearchProposalService />
            <CommonWhoWeServe
                title="Who We Serve"
                description={
                    <p>
                        At Pubrica, our{" "}
                        <Link href="/academy/research-proposal/how-to-write-a-research-proposal-a-complete-guide/">
                            research proposal writing services
                        </Link>{" "}
                        are designed to support a diverse range of academic and scientific stakeholders.
                    </p>
                }
                data={researchProposalWhoWeServe}
            />
            <PhysicianResearchProposalProcessWorkflow />
            <ResearchProposalWritingPackages />
            <CommonTestimonial
                title="Testimonials"
                description="At Pubrica, researchers trust our expertise and compliance-driven approach to craft impactful, approval-ready research proposals. Here's what they say about our service:"
                testimonials={researchProposalTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions – Research Protocol & Proposal Writing Service"
                faqs={researchProposalFaqs}
            />
        </>
    )
}

export default page