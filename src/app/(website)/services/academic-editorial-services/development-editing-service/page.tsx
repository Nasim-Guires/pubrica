import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import DevelopmentEditingServiceComplete from '@/components/services/academic-editorial-services/development-editing-service/DevelopmentEditingServiceComplete'
import DevelopmentEditingServicePagePackage from '@/components/services/academic-editorial-services/development-editing-service/DevelopmentEditingServicePagePackage'
import DevelopmentEditingServicePage from '@/components/services/academic-editorial-services/development-editing-service/DevelopmentEditingServicePagePackage'
import { devEditingFaqData, devEditingTestimonialData, developmentEditingServiceWhoWeServeData } from '@/lib/services/academic-editorial-services/development-editing-service/development-editing-service'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <DevelopmentEditingServiceComplete />
            <CommonWhoWeServe
                {...developmentEditingServiceWhoWeServeData}
            />
            <DevelopmentEditingServicePagePackage />
            <CommonTestimonial {...devEditingTestimonialData} />
            <CommonFAQ {...devEditingFaqData} />
            <InsightsSection />
        </>
    )
}

export default page