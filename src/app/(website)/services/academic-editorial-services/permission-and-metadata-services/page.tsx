import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import PermissionAndMetadataComplete from '@/components/services/academic-editorial-services/permission-and-metadata-services/PermissionAndMetadataComplete'
import PermissionAndMetadataServices from '@/components/services/academic-editorial-services/permission-and-metadata-services/PermissionAndMetadataServices'
import { permissionAndMetadataServicesFaqData, permissionAndMetadataServicesTestimonialData, permissionAndMetadataServicesWhoWeServeData } from '@/lib/services/academic-editorial-services/permission-and-metadata-services/permission-and-metadata-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (

        <>
            <PermissionAndMetadataServices />
            <CommonWhoWeServe
                {...permissionAndMetadataServicesWhoWeServeData}
            />
            <PermissionAndMetadataComplete />
            <CommonTestimonial
                {...permissionAndMetadataServicesTestimonialData}
            />
            <CommonFAQ
                {...permissionAndMetadataServicesFaqData}
            />
            <InsightsSection />
        </>
    )
}

export default page