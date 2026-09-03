import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import AbstractServicePackages from '@/components/services/research-impact/simplified-abstract-services/AbstractServicePackages'
import SimplifiedAbstractPage from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractPage'
import SimplifiedAbstractServices from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractServices'
import SimplifiedAbstractTypesAndWorkflow from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractWorkflowProcess'
import SimplifiedAbstractWorkflowProcess from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractWorkflowProcess'
import { simplifiedAbstractServicesFaqData, simplifiedAbstractServicesTestimonialData } from '@/lib/services/data/research-impact/simplified-abstract-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'Simplified Abstract Services for Research – Pubrica',
  description: 'Get clear, jargon-free research summaries with our expert abstract writing services. Ideal for journal submissions, academic publishing, and wider reach.',
  keywords: ['Simplified abstracts service', 'research abstract', 'simplified abstracts'],
  slug: '/services/research-impact/simplified-abstract-services',
})


 const simplifiedAbstractServicesWhoWeServeData = {
    title: "Who We Serve",
    description: (
        <>
            Our{" "}
            <Link
                href="/insights/sample-work/diabetes-pregnancy-stillbirth-victoria/"
                className="text-blue-600"
            >
                simplified abstract
            </Link>{" "}
            writing services are tailored for a broad spectrum of academic, scientific, and professional researchers. Whether you’re preparing a{" "}
            <Link 
                href="/services/publication-support/journal-submission/"
                className="text-blue-600 "
            >
                journal submission
            </Link>
            , seeking funding, or communicating research to a non-specialist audience, we support your goals with accurate, accessible, and publication-ready abstracts.
        </>
    ),

    data: [
        {
            title: "PhD Scholars & Early-Stage Researchers",
            bullets: [
                "Ideal for those needing clear, concise academic abstracts for supervisors, examiners, or cross-disciplinary presentations.",
                "We simplify complex ideas while retaining scientific depth.",
            ],
            imageUrl:
                "/images/research-impact/simplified-abstract-services/PhD-Scholars-Early-Stage-Researchers.png",
        },
        {
            title: "Journal Authors & Manuscript Submitters",
            bullets: [
                "We help you meet strict abstract formatting guidelines with structured, keyword-optimized summaries ready for peer-reviewed journals and conferences.",
            ],
            imageUrl:
                "/images/research-impact/simplified-abstract-services/journal-Authors-Manuscript-Submitters.png",
        },
        {
            title: "Grant Applicants & Research Project Leads",
            bullets: [
                "Craft compelling research abstracts for funding proposals and institutional reports, emphasizing innovation, impact, and alignment with grantor priorities.",
            ],
            imageUrl:
                "/images/research-impact/simplified-abstract-services/Grant-Applicants-Research-Project-Leads.png",
        },
        {
            title: "Universities & Research Institutes",
            bullets: [
                "Support for students and faculty in developing thesis, dissertations, and repository abstracts aligned with academic standards and institutional formatting.",
            ],
            imageUrl:
                "/images/research-impact/simplified-abstract-services/Universities-Research-Institutes.png",
        },
        {
            title: "Medical, Clinical & Life Science Professionals",
            bullets: [
                "Professionals submitting to medical journals, clinical trials, or systematic reviews benefit from our structured, statistics-informed abstracts tailored to clinical relevance and evidence synthesis.",
            ],
            imageUrl:
                "/images/research-impact/simplified-abstract-services/Medical-Clinical-Life-Science-Professionals.png",
        },
        {
            title: "Science Communicators & Research Outreach Teams",
            bullets: [
                "Convert highly technical content into lay summaries, policy briefs, or public-facing abstracts for websites, podcasts, media engagement, or stakeholder reporting.",
            ],
            imageUrl:
                "/images/research-impact/simplified-abstract-services/Science-Communicators-Research-Outreach-Teams.png",
        },
    ],
};

const page = () => {
    return (
        <>
            <SimplifiedAbstractServices />
            <CommonWhoWeServe {...simplifiedAbstractServicesWhoWeServeData} />
            {/* <SimplifiedAbstractTypesAndWorkflow /> */}
            <SimplifiedAbstractPage />
            <CommonTestimonial {...simplifiedAbstractServicesTestimonialData} />
            <AbstractServicePackages />
            <CommonFAQ {...simplifiedAbstractServicesFaqData} />
            <InsightsSection />
        </>
    )
}

export default page