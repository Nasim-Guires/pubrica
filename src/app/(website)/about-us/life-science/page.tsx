import LifeSciencesPage from '@/components/about/life-sciences/LifeSciencesPage'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

// This route renders the exact same LifeSciencesPage component as the plural
// `/about-us/life-sciences` route (which already has its own metadata export).
// The live pubrica.com page at this singular URL actually shows unrelated
// content (manuscript formatting), so rather than copy a mismatched title, we
// canonicalize this duplicate-content page to the plural route, matching the
// primary/duplicate pairing already established between these two routes.
export const metadata = constructMetadata({
  title: 'Life Sciences Research & Writing Services',
  description: 'Life sciences research and writing services from Pubrica — publication support across therapeutic areas and subject-matter expertise.',
  slug: '/about-us/life-sciences',
})

const page = () => {
    return (
        <>
            <LifeSciencesPage />
        </>
    )
}

export default page