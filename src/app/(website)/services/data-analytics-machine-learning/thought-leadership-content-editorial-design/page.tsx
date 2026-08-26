import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import ThoughtLeadershipEditorialDesignView from '@/components/services/data-analytics-machine-learning/thought-leadership-content-editorial-design/ThoughtLeadershipEditorialDesignView'
import ThoughtLeadershipEditorialServicePage from '@/components/services/data-analytics-machine-learning/thought-leadership-content-editorial-design/ThoughtLeadershipContentEditorialDesign'
import { thoughtLeadershipContentEditorialDesignFaqData, thoughtLeadershipContentEditorialDesignTestimonialData, thoughtLeadershipContentEditorialDesignWhoWeServeData } from '@/lib/services/data/data-analytics-machine-learning/thought-leadership-content-editorial-design/thought-leadership-content-editorial-design'
import React from 'react'
import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonFAQ from '@/components/common/FAQ'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Thought Leadership Content & Editorial Design - Pubrica',
    description: "Pubrica’s subject experts create curated, unique content that transforms rich insights into measurable growth for your audience.",
    slug: '/services/data-analytics-machine-learning/thought-leadership-content-editorial-design',
})

const page = () => {
    return (
        <>
            <ThoughtLeadershipEditorialDesignView />
            <CommonWhoWeServe
                {...thoughtLeadershipContentEditorialDesignWhoWeServeData}
            />
            <ThoughtLeadershipEditorialServicePage />
            <CommonTestimonial
                {...thoughtLeadershipContentEditorialDesignTestimonialData}
            />
            <CommonFAQ
                {...thoughtLeadershipContentEditorialDesignFaqData}
            />
            <InsightsSection />
        </>
    )
}

export default page