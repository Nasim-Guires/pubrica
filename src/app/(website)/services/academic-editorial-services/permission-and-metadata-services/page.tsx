import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import PermissionAndMetadataComplete from '@/components/services/academic-editorial-services/permission-and-metadata-services/PermissionAndMetadataComplete'
import PermissionAndMetadataServices from '@/components/services/academic-editorial-services/permission-and-metadata-services/PermissionAndMetadataServices'
import { permissionAndMetadataServicesFaqData, permissionAndMetadataServicesTestimonialData, permissionAndMetadataServicesWhoWeServeData } from '@/lib/services/academic-editorial-services/permission-and-metadata-services/permission-and-metadata-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Expert Permission & Metadata Services | Pubrica',
    description: "Ensure copyright compliance, secure permissions, and optimize metadata with Pubrica’s expert academic editorial support.",
    slug: '/services/academic-editorial-services/permission-and-metadata-services',
})

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