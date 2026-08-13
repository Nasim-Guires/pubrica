import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import CaseReportSectionsPage from '@/components/services/physician-writing-services/case-report-writing/CaseReportSectionsPage'
import CaseReportWritingPage from '@/components/services/physician-writing-services/case-report-writing/CaseReportWritingPage'
import { caseReportFAQData, editorialWorkflowData } from '@/lib/services/case-report-writing'
import React from 'react'

const page = () => {
    return (
        <>
            <CaseReportWritingPage />
            <EditorialWorkflowSection
                heading={editorialWorkflowData.heading}
                subheading={editorialWorkflowData.subheading}
                description={editorialWorkflowData.description}
                steps={editorialWorkflowData.steps}
            />
            <CaseReportSectionsPage />
            <CommonFAQ
                title={caseReportFAQData.title}
                faqs={caseReportFAQData.faqs}
            />
        </>
    )
}

export default page