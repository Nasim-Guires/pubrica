import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import GraphicalAbstractDesignOptions from '@/components/services/research-impact/graphical-abstract/GraphicalAbstractDesignOptions'
import GraphicalAbstractPage from '@/components/services/research-impact/graphical-abstract/GraphicalAbstractPage'
import ResearchImpactGraphicalAbstract from '@/components/services/research-impact/graphical-abstract/ResearchImpactGraphicalAbstract'
import { graphicalAbstractFaqData, graphicalAbstractTestimonialData, graphicalAbstractWhoWeServeData } from '@/lib/services/data/research-impact/graphical-abstract'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

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