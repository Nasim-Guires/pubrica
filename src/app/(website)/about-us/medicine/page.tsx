import MedicinePage from '@/components/about/medecine/MedicinePage'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Medicine - Pubrica',
  description: 'All branches',
  slug: '/about-us/medicine',
})

const page = () => {
    return (
        <>
            <MedicinePage />
        </>
    )
}

export default page