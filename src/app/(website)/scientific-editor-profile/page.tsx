import ScientificEditorProfile from '@/components/scientific-editor-profile/ScientificEditorProfile'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Scientific Editor Profile - Pubrica',
  description: 'Portfolio of various Pubrica experts',
  slug: '/scientific-editor-profile',
})

const page = () => {
    return (
        <>
            <ScientificEditorProfile />
        </>
    )
}

export default page
