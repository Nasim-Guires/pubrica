import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import ScientificNewsReportPackages from '@/components/services/research-impact/scientific-news-report/ScientificNewsReportPackages'
import ScientificNewsReportServices from '@/components/services/research-impact/scientific-news-report/ScientificNewsReportServices'
import ScientificNewsWorkflowProcess from '@/components/services/research-impact/scientific-news-report/ScientificNewsWorkflowProcess'
import { scientificNewsReportFaqData, scientificNewsReportTestimonialData, scientificNewsReportWhoWeServeData } from '@/lib/services/data/research-impact/scientific-news-report'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Scientific News Report Service | Pubrica',
  description: 'Turn your manuscript into media-ready scientific news to boost research visibility, coverage, and citations with Pubrica.',
  keywords: ['scientific New Report', 'Scientific News Report Service', 'scientific news report', 'manuscript citation', 'research updates'],
  slug: '/services/research-impact/scientific-news-report',
})


const page = () => {
    return (
        <>
            <ScientificNewsReportServices />
            <CommonWhoWeServe {...scientificNewsReportWhoWeServeData} />
            <ScientificNewsWorkflowProcess />
            <CommonTestimonial {...scientificNewsReportTestimonialData} />
            <ScientificNewsReportPackages />
            <CommonFAQ {...scientificNewsReportFaqData} />
            <InsightsSection />
        </>
    )
}

export default page