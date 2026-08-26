import OurEditorsPage from '@/components/about/our-editors/OurEditorsPage'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Our Editors - Pubrica',
  description: 'MEET THE EXPERTS',
  slug: '/about-us/our-editors',
})

const page = () => {
    return (
        <>
            <OurEditorsPage />
        </>
    )
}

export default page
