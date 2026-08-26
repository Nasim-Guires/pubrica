import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import GraphicalAbstractDesignOptions from '@/components/services/research-impact/graphical-abstract/GraphicalAbstractDesignOptions'
import GraphicalAbstractPage from '@/components/services/research-impact/graphical-abstract/GraphicalAbstractPage'
import ResearchImpactGraphicalAbstract from '@/components/services/research-impact/graphical-abstract/ResearchImpactGraphicalAbstract'
import { graphicalAbstractFaqData, graphicalAbstractTestimonialData, graphicalAbstractWhoWeServeData } from '@/lib/services/data/research-impact/graphical-abstract'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Graphical Abstract Services for Research Authors',
  description: 'Transform research into engaging graphical abstracts with expert design support to improve visibility and meet journal publication standards.',
  keywords: ['graphical abstracts', 'graphical abstract service', 'graphical abstract for review paper'],
  slug: '/services/research-impact/graphical-abstract',
})

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