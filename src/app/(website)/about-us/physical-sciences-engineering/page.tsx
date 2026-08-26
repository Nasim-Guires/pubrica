import PhysicalSciencesPage from '@/components/about/physical-sciences-engineering/PhysicalSciencesPage'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Physical Sciences Engineering - Pubrica',
  description: 'All domains',
  slug: '/about-us/physical-sciences-engineering',
})

const page = () => {
    return (
        <>
            <PhysicalSciencesPage />
        </>
    )
}

export default page