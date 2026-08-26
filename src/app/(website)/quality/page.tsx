import QualityPage from '@/components/quality/QualityPage'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Quality - Pubrica',
  description: '100% quality assurance at every stageQuality Assurance100% quality assuredWe are ISO 9001:2015 certified organization. | Quality assurance in every phase of',
  slug: '/quality',
})

const page = () => {
  return (
   <>
   <QualityPage/>
   </>
  )
}

export default page
