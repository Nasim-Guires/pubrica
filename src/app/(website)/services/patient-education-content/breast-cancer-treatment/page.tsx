import React from 'react'
import Image from 'next/image'
import { CheckCircle2, Phone, MessageSquare, Mail } from 'lucide-react'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata';



export const metadata = constructMetadata({
    title: "Breast Cancer Treatment Early Diagnosis and Success",
    description: "Discover effective breast cancer treatments, early diagnosis, and reducing risk factors for better outcomes.",
    keywords: ["Breast Cancer Treatment"],
    slug: "/services/patient-education-content/breast-cancer-treatment/",
});

export default function Page() {
    // Path matching your Next.js public directory structure: public/upload/V1-PATIENT-EDUCATION-CONTENT-Breast-cancer.pdf
    const pdfUrl = '/upload/V1-PATIENT-EDUCATION-CONTENT-Breast-cancer.pdf'

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
            {/* Top Hero Banner */}
            <section className="bg-[#0f2420] text-white py-10 px-4 text-center">
                <div className="max-w-4xl mx-auto border border-gray-600/60 py-6 px-4 rounded-sm">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                        Breast Cancer
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200">
                        Patient Education Content Sample Work
                    </p>
                </div>
            </section>

            {/* Floating Action Buttons (Right Side) */}
            <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
                <button
                    aria-label="Call"
                    className="w-10 h-10 bg-[#3b1239] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity shadow-md"
                >
                    <Phone size={18} />
                </button>
                <button
                    aria-label="WhatsApp"
                    className="w-10 h-10 bg-[#25d366] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity shadow-md"
                >
                    <MessageSquare size={18} />
                </button>
                <button
                    aria-label="Email"
                    className="w-10 h-10 bg-[#8e24aa] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity shadow-md"
                >
                    <Mail size={18} />
                </button>
            </div>

            {/* Main Body Content */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Intro Paragraph */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
                    Cells in your breast grow and divide in an uncontrolled way, creating
                    a mass of tissue called a tumor. Signs of breast cancer can include
                    feeling a lump in your breast, experiencing a change in the size of
                    your breast and seeing changes to the skin on your breasts.
                </p>

                {/* Two-Column Grid: PDF Viewer + Right Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Left Column: PDF Embed Container */}
                    <div className="lg:col-span-2 border border-emerald-600 p-1 bg-white shadow-sm rounded-sm">
                        <div className="w-full h-[650px] bg-neutral-800 rounded overflow-hidden">
                            <iframe
                                src={`${pdfUrl}#toolbar=1`}
                                className="w-full h-full border-0"
                                title="Breast Cancer Patient Education Content PDF"
                            />
                        </div>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="space-y-6">
                        {/* Card 1: Research Services */}
                        <div className="bg-white border border-gray-200 rounded p-4 shadow-sm text-center">
                            <div className="relative w-full h-40 mb-4 overflow-hidden rounded bg-gray-100">
                                <Image
                                    src="/images/pubrica-service-and-sample-work-1536x965.webp" // Update image path if needed
                                    alt="Research Services"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">
                                Research your Services with our experts
                            </h3>
                            <Link
                                href="/order-now/"
                                className="block w-full bg-[#52ce74] hover:bg-[#46b765] text-white font-medium py-2 rounded text-sm text-center transition-colors mb-2"
                            >
                                Order Now
                            </Link>
                            <p className="text-xs text-gray-500 font-medium">
                                Delivered on-time or your money back
                            </p>
                        </div>

                        {/* Card 2: Academic Edge & Checklist */}
                        <div className="bg-white border border-gray-200 rounded p-5 shadow-sm">
                            <h3 className="font-bold text-gray-900 text-base mb-1">
                                Give yourself the academic edge today
                            </h3>
                            <p className="text-xs text-gray-500 font-medium mb-4">
                                Each order includes
                            </p>

                            <ul className="space-y-3 text-xs text-gray-700 mb-5">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>On-time delivery or your money back</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>A fully qualified writer in your subject</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>In-depth proofreading by our Quality Control Team</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>
                                        100% confidentiality, the work is never re-sold or published
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>Standard 7-day amendment period</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>A paper written to the standard ordered</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>A detailed plagiarism report</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900 shrink-0 mt-0.5"
                                    />
                                    <span>A comprehensive quality report</span>
                                </li>
                            </ul>

                            <Link
                                href="/services"
                                className="block w-full bg-[#52ce74] hover:bg-[#46b765] text-white font-medium py-2 rounded text-xs text-center transition-colors"
                            >
                                Find More About Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}