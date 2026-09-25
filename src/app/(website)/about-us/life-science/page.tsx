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
  title: 'Life Sciences Research & Writing Services | Pubrica',
  description: 'Get expert life sciences research, writing, editing, and publication support from Pubrica’s experienced scientific professionals.',
  keywords: [],
  slug: '/about-us/life-science/',
})
const page = () => {
    return (
        <>
            <LifeSciencesPage />
        </>
    )
}

export default page