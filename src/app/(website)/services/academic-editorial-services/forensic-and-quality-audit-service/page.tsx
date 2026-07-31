import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import ForensicAndQualityAuditComplete from '@/components/services/academic-editorial-services/forensic-and-quality-audit-service/ForensicAndQualityAuditComplete'
import ForensicAndQualityAuditService from '@/components/services/academic-editorial-services/forensic-and-quality-audit-service/ForensicAndQualityAuditService'
import { forensicAndQualityAuditServiceFaqData, forensicAndQualityAuditServiceTestimonialData, forensicAndQualityAuditServiceWhoWeServeData } from '@/lib/services/academic-editorial-services/forensic-and-quality-audit-service/forensic-and-quality-audit-service'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <ForensicAndQualityAuditService />
            <CommonWhoWeServe
                {...forensicAndQualityAuditServiceWhoWeServeData}
            />
            <ForensicAndQualityAuditComplete />
            <CommonTestimonial
                {...forensicAndQualityAuditServiceTestimonialData}
            />
            <CommonFAQ
                {...forensicAndQualityAuditServiceFaqData}
            />
            <InsightsSection/>
        </>
    )
}

export default page