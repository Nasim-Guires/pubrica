import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import GraphicalAbstractDesignOptions from '@/components/services/research-impact/graphical-abstract/GraphicalAbstractDesignOptions'
import GraphicalAbstractPage from '@/components/services/research-impact/graphical-abstract/GraphicalAbstractPage'
import ResearchImpactGraphicalAbstract from '@/components/services/research-impact/graphical-abstract/ResearchImpactGraphicalAbstract'
import { graphicalAbstractFaqData, graphicalAbstractTestimonialData } from '@/lib/services/data/research-impact/graphical-abstract'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'Graphical Abstract Services for Research Authors',
  description: 'Transform research into engaging graphical abstracts with expert design support to improve visibility and meet journal publication standards.',
  keywords: ['graphical abstracts', 'graphical abstract service', 'graphical abstract for review paper'],
  slug: '/services/research-impact/graphical-abstract',
})

 const graphicalAbstractWhoWeServeData = {
    title: "Who We Serve",
    description: (
        <>
            At Pubrica, our{" "}
            <Link
                href="/services/research-impact/graphical-abstract/sox4-transcription-factor-kidney-fibrosis/" 
                className="text-blue-600"
            >
                graphical abstract
            </Link>{" "}
            service assists a broad range of academic and scientific professionals whose goals are to increase the visibility and understandability of their research through accurate visual representation:
        </>
    ),

    data: [
        {
            title: "PhD Scholars & Early-Career Researchers",
            bullets: [
                "To present complex findings clearly and meet journal submission requirements.",
            ],
            imageUrl: "/images/research-impact/graphical-abstract/PhD-Scholars-Early-Career-Researchers.png",
        },
        {
            title: "University Professors & Academic Authors",
            bullets: [
                "Seeking to increase readership and citation through high-impact graphical summaries.",
            ],
            imageUrl:
                "/images/research-impact/graphical-abstract/University-Professors-Academic-Authors.png",
        },
        {
            title: "Research Institutions & Laboratories",
            bullets: [
                "For consistent visual branding and dissemination of high-volume research outputs.",
            ],
            imageUrl:
                "/images/research-impact/graphical-abstract/Research-Institutions-Laboratories.png",
        },
        {
            title: "Medical & Life Science Researchers",
            bullets: [
                "To simplify intricate biomedical or clinical data for a broader scientific audience.",
            ],
            imageUrl:
                "/images/research-impact/graphical-abstract/Medical-Life-Science-Researchers.png",
        },
        {
            title: "Scientific Publishers & Journals",
            bullets: [
                "For standardized, visually accurate abstracts aligned with editorial standards.",
            ],
            imageUrl:
                "/images/research-impact/graphical-abstract/Scientific-Publishers-Journals.png",
        },
        {
            title: "Research Consultants & Grant Writers",
            bullets: [
                "To include engaging visuals in grant applications, white papers, and policy briefs.",
            ],
            imageUrl:
                "/images/research-impact/graphical-abstract/Research-Consultants-Grant-Writers.png",
        },
        {
            title: "Healthcare & Pharmaceutical Companies",
            bullets: [
                "For translating trial data and clinical studies into accessible visuals for stakeholders.",
            ],
            imageUrl:
                "/images/research-impact/graphical-abstract/Healthcare-Pharmaceutical-Companies.png",
        },
    ],
};

const page = () => {
    return (
        <>
            <GraphicalAbstractPage />
            <CommonWhoWeServe {...graphicalAbstractWhoWeServeData} />;
            <ResearchImpactGraphicalAbstract />
            <GraphicalAbstractDesignOptions />
            <CommonTestimonial {...graphicalAbstractTestimonialData} />
            <CommonFAQ {...graphicalAbstractFaqData} />
            <InsightsSection/>
        </>
    )
}

export default page