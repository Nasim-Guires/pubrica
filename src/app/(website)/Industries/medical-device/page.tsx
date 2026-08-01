import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import WhatClientsSays from '@/components/common/WhatClientsSays'
import WhereOurAuthorsPublishAndEditors from '@/components/industries/medical-device/MedicalDeviceAuthorsAndEditorsPage'
import WhereOurAuthorsPublish from '@/components/industries/medical-device/MedicalDeviceAuthorsAndEditorsPage'
import MedicalDeviceAuthorsAndEditorsPage from '@/components/industries/medical-device/MedicalDeviceAuthorsAndEditorsPage'
import MedicalDeviceIndustry from '@/components/industries/medical-device/MedicalDeviceIndustry'
import MedicalDeviceIndustryPage from '@/components/industries/medical-device/MedicalDeviceIndustryPage'
import { medicalDeviceClinicalEvaluationReportWorkflow, medicalDeviceTestimonials } from '@/lib/industries/medical-device'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <MedicalDeviceIndustryPage />
            <EditorialWorkflowSection {...medicalDeviceClinicalEvaluationReportWorkflow} />
            <MedicalDeviceIndustry />
            <WhereOurAuthorsPublishAndEditors />
            <WhatClientsSays
                heading="What Our Client Says About Us"
                testimonials={medicalDeviceTestimonials}
                itemsPerPage={2}
            />
            <InsightsSection/>
        </>
    )
}

export default page