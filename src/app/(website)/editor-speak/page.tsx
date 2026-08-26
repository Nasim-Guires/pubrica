import EditorSpeakPage from '@/components/editor-speak/EditorSpeakPage'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Editor Speak - Pubrica',
  description: 'MEET THE EXPERTS',
  slug: '/editor-speak',
})

const page = () => {
    return (
        <>
            <EditorSpeakPage />
        </>
    )
}

export default page