import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { constructMetadata } from '@/lib/metadata'

// No live pubrica.com page corresponds to this exact URL: /academy/response-to-reviewer/
// 301-redirects to /insights/sample-work/response-to-reviewer/, an unrelated sample
// (a nurses'-safety-culture case study) that shares no topical overlap with this page's
// actual sample reviewer-response-letter content. Metadata below is written from this
// page's own real content (matching the title/description already used in its legacy
// <Head> tag below) rather than copying that mismatched live page.
export const metadata = constructMetadata({
  title: 'Response to Reviewer | Pubrica',
  description: 'Sample letter and guidelines for responding to reviewer comments for publication in academic journals.',
  slug: '/academy/response-to-reviewer',
})

export default function ResponseToReviewerPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Response to Reviewers',
        description: 'Sample letter and guidelines for responding to reviewer comments for publication in academic journals.',
        publisher: {
            '@type': 'Organization',
            name: 'Pubrica',
        },
    }

    return (
        <>
            <Head>
                <title>Response to Reviewer | Pubrica</title>
                <meta
                    name="description"
                    content="Sample letter and guidelines for responding to reviewer comments for publication in academic journals."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <main className="min-h-screen bg-gray-100 text-gray-800 font-sans pb-12">
                {/* Header Hero Banner with Border Box */}
                <div className="bg-[#112222] text-white py-12 px-4 text-center">
                    <div className="max-w-xl mx-auto border border-gray-400 py-3 px-6">
                        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
                            Response to Reviewer
                        </h1>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Sample Response Content & PDF Viewer Frame */}
                        <article className="lg:col-span-8 space-y-6">
                            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1">
                                Response to Reviewers
                            </h2>

                            {/* Sample Response Letter Intro */}
                            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
                                <p>Dear Frank,</p>
                                <p>
                                    We appreciate the opportunity to submit a revised draft of the manuscript, &quot;Poetry and the Cognitive Psychology of Metrical Constructs&quot; for publication in the Journal of Poetry and Psychology. We appreciate the time and consideration you and the reviewers put into feedback on our manuscript, and we are grateful for the thoughtful comments on and contributions to this article. We incorporated most of the suggestions made by the reviewers; those changes are highlighted in the manuscript. Please see below in blue, for a point-by-point response to the reviewers&apos; comments and concerns. All page numbers refer to the revised manuscript file with tracked changes.
                                </p>
                            </div>

                            {/* PDF / Document Preview Box Mockup */}
                            <div className="border border-gray-300 rounded-none bg-white overflow-hidden shadow-sm">
                                {/* Document Viewer Toolbar */}
                                <div className="bg-neutral-800 text-white px-4 py-2 flex items-center justify-between text-xs">
                                    <div className="flex items-center space-x-3">
                                        <button className="hover:text-gray-300" title="Zoom/View">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="hover:text-gray-300" title="Download">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </button>
                                        <button className="hover:text-gray-300" title="Print">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className="hover:text-gray-300">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Document Viewer Frame Image */}
                                <div className="relative w-full h-[500px] sm:h-[600px] bg-gray-200">
                                    {/* Live PDF Viewer Container */}
                                    <object
                                        data="/images/Response-to-Reviewer-pdf.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                        type="application/pdf"
                                        className="w-full h-full border-none"
                                    >
                                        {/* Fallback IFRAME for browsers that block object embed */}
                                        <iframe
                                            src="/images/Response-to-Reviewer-pdf.pdf#toolbar=0&navpanes=0"
                                            title="Response to Reviewer PDF Preview"
                                            className="w-full h-full border-none"
                                        >
                                            <p className="p-4 text-xs text-gray-600">
                                                Your browser does not support PDF embedding.{' '}
                                                <a
                                                    href="/images/Response-to-Reviewer-pdf.pdf"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sky-600 underline"
                                                >
                                                    Download PDF
                                                </a>
                                            </p>
                                        </iframe>
                                    </object>

                                    {/* Watermark overlay effect */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-10">
                                        <span className="text-4xl font-bold text-gray-800 rotate-45 select-none">
                                            SAMPLE WORK
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Right Column: Promotional Widgets */}
                        <aside className="lg:col-span-4 space-y-6">

                            {/* Widget 1: Research your Services */}
                            <div className="bg-white border border-gray-300 p-4 text-center space-y-3 shadow-sm">
                                <div className="relative w-full h-36">
                                    <Image
                                        src="/images/sample-workimage-for-sidebar-300x163.png"
                                        alt="Research your Services with our experts"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-sm font-bold text-gray-800">
                                    Research your Services with our experts
                                </h3>
                                <Link
                                    href="/order-now"
                                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-1.5 text-xs rounded-none transition-colors"
                                >
                                    Order Now
                                </Link>
                                <p className="text-xs text-gray-500 italic">
                                    Delivered on-time or your money back
                                </p>
                            </div>

                            {/* Widget 2: Academic Edge Service Features List */}
                            <div className="bg-white border border-gray-300 p-5 space-y-4 shadow-sm text-xs text-gray-700">
                                <div className="space-y-1">
                                    <h4 className="font-bold text-gray-900 text-sm leading-tight">
                                        Give yourself the academic edge today
                                    </h4>
                                    <p className="text-gray-600">Each order includes:</p>
                                </div>

                                <ul className="space-y-2.5">
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>On-time delivery or your money back</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>A fully qualified writer in your subject</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>In-depth proofreading by our Quality Control Team</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>100% confidentiality, the work is never re-sold or published</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>Standard 7-day amendment period</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>A paper written to the standard ordered</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>A detailed plagiarism report</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-600 font-bold mr-2">✓</span>
                                        <span>A comprehensive quality report</span>
                                    </li>
                                </ul>

                                <Link
                                    href="/services"
                                    className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 text-xs rounded-none transition-colors"
                                >
                                    Find More About Our Services
                                </Link>
                            </div>

                        </aside>
                    </div>
                </div>
            </main>
        </>
    )
}