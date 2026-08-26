import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton'
import BioinformaticsServiceContent from '@/components/services/bioinformatics/BioinformaticsServiceContent'
import BioinformaticsServices from '@/components/services/bioinformatics/BioinformaticsServices'
import TherapeuticAreasAndTools from '@/components/services/bioinformatics/TherapeuticAreasAndTools'
import { bioinformaticsFaqs, bioinformaticsTestimonials, bioinformaticsWhoWeServe } from '@/lib/services/data/bioinformatics/bioinformaticTestimonilas'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Bioinformatics Services | Genomic, Proteomic & NGS Analysis',
    description: 'Pubrica delivers expert bioinformatics services for genomics, transcriptomics, proteomics, metabolomics & NGS with global compliance.',
    slug: '/services/bioinformatics',
})


const page = () => {
    return (
        <>
            <BioinformaticsServiceContent />
            <CommonWhoWeServe
                title="Who We Serve"
                description="Our bioinformatics services cater to academia, pharmaceutical companies, healthcare organizations, agriculture, and life science innovators by delivering tailored, data-driven solutions for research, innovation, and scientific discovery."
                data={bioinformaticsWhoWeServe}
            />
            <TherapeuticAreasAndTools />
            <BioinformaticsServices />
            <GetFreeQuoteButton />
            <CommonTestimonial
                title="Testimonials"
                description="Learn how Pubrica’s bioinformatics service has empowered researchers to transform complex biological data into publication-ready insights that drive scientific discovery and enhance academic and clinical visibility. Here is what our clients say:"
                testimonials={bioinformaticsTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions – Bioinformatics Services"
                faqs={bioinformaticsFaqs}
            />
            <InsightsSection/>  
        </>
    )
}

export default page