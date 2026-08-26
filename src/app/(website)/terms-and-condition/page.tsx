import React from 'react'
import { constructMetadata } from '@/lib/metadata'

// This route is an unbuilt stub (renders literally no content yet), even though the
// site Footer links to it as "Terms & Condition". The real Terms & Conditions content
// lives at /terms and /terms-and-conditions, so copying either of those pages' live
// metadata onto this content-less placeholder would be misleading. Kept out of the
// index until real content is built here.
export const metadata = constructMetadata({
  title: 'Terms & Condition | Pubrica',
  description: 'This page is being updated. See our Terms & Conditions for the rules and regulations governing use of the Pubrica website and services.',
  slug: '/terms-and-condition',
  noIndex: true,
})

const page = () => {
  return (
    <div>page</div>
  )
}

export default page