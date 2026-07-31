import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import ScientificNewsReportPackages from '@/components/services/research-impact/scientific-news-report/ScientificNewsReportPackages'
import ScientificNewsReportServices from '@/components/services/research-impact/scientific-news-report/ScientificNewsReportServices'
import ScientificNewsWorkflowProcess from '@/components/services/research-impact/scientific-news-report/ScientificNewsWorkflowProcess'
import { scientificNewsReportFaqData, scientificNewsReportTestimonialData, scientificNewsReportWhoWeServeData } from '@/lib/services/data/research-impact/scientific-news-report'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


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