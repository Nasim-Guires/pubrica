import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top 6 Tips to Create a Perfect Video Abstract for Your Research Paper",
    description:
        "Learn the top 6 tips to create an engaging video abstract for your research paper, explore different types of video abstracts, and understand best practices.",
    keywords: [
        "Video Abstract",
        "Research Paper Video",
        "Academic Video Abstract",
        "Science Communication",
        "Video Abstract Tips",
    ],
};

export default function VideoAbstractGuidePage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* Top Hero / Banner */}
            <div className="relative w-full h-44 md:h-56 bg-slate-900 text-white flex items-center justify-center">
                <Image
                    src="/images/video-abstract-banner.jpg"
                    alt="Video Abstract Banner"
                    fill
                    priority
                    className="object-cover opacity-30"
                />
                <h1 className="relative z-10 text-xl md:text-3xl font-bold text-center px-4 max-w-5xl">
                    Top 6 Tips to Create a Perfect Video Abstract for Your Research Paper
                </h1>
            </div>

            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 text-xs text-gray-500 border-b border-gray-100 flex items-center space-x-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>&gt;</span>
                <Link href="#" className="hover:underline">Publication Support</Link>
                <span>&gt;</span>
                <Link href="#" className="hover:underline">Journal Selection</Link>
                <span>&gt;</span>
                <span className="text-gray-700 font-medium truncate">
                    Top 6 Tips to Create a Perfect Video Abstract for Your Research Paper
                </span>
            </div>

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Section Navigation */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">
                            An Academy Guide
                        </h3>
                        <ul className="space-y-3 text-xs md:text-sm font-semibold text-gray-800">
                            <li>
                                <a href="#what-is-a-video-abstract" className="hover:text-blue-600 flex items-start space-x-2">
                                    <span className="text-blue-500">»</span>
                                    <span>What is a Video Abstract?</span>
                                </a>
                            </li>
                            <li>
                                <a href="#what-is-a-written-abstract" className="hover:text-blue-600 flex items-start space-x-2">
                                    <span className="text-blue-500">»</span>
                                    <span>What is a Written Abstract?</span>
                                </a>
                            </li>
                            <li>
                                <a href="#different-types-of-video-abstracts" className="hover:text-blue-600 flex items-start space-x-2">
                                    <span className="text-blue-500">»</span>
                                    <span>Different Types of Video Abstracts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#how-to-create-a-powerful-video-abstract" className="hover:text-blue-600 flex items-start space-x-2">
                                    <span className="text-blue-500">»</span>
                                    <span>How to Create a Powerful Video Abstract</span>
                                </a>
                            </li>
                            <li>
                                <a href="#dos-and-donts" className="hover:text-blue-600 flex items-start space-x-2">
                                    <span className="text-blue-500">»</span>
                                    <span>Do’s and Don’ts While Creating a Video Abstract</span>
                                </a>
                            </li>
                            <li>
                                <a href="#conclusion" className="hover:text-blue-600 flex items-start space-x-2">
                                    <span className="text-blue-500">»</span>
                                    <span>Conclusion</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Interesting Topics */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">
                            Interesting topics
                        </h3>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-600 font-medium">
                            <li><Link href="#" className="hover:underline">Medical Writing</Link></li>
                            <li><Link href="#" className="hover:underline">Scientific Writing</Link></li>
                            <li><Link href="#" className="hover:underline">Systematic Review Writing</Link></li>
                            <li><Link href="#" className="hover:underline">Meta-Analysis</Link></li>
                            <li><Link href="#" className="hover:underline">Original Research Article Writing Service</Link></li>
                            <li><Link href="#" className="hover:underline">Literature Review</Link></li>
                            <li><Link href="#" className="hover:underline">Grant Writing Services</Link></li>
                            <li><Link href="#" className="hover:underline">Biostatistical Programming</Link></li>
                            <li><Link href="#" className="hover:underline">Experimental Design</Link></li>
                        </ul>
                    </div>

                    {/* Sidebar Image Banner */}
                    <div className="relative w-full h-48 rounded overflow-hidden shadow-sm">
                        <Image
                            src="/images/sidebar-card.jpg"
                            alt="Research Consulting"
                            fill
                            className="object-cover"
                        />
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:col-span-8 space-y-8 text-sm md:text-base leading-relaxed text-gray-700">

                    <section>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Top 6 Tips to Create a Perfect Video Abstract for Your Research Paper
                        </h1>
                    </section>

                    {/* Section 1 */}
                    <section id="what-is-a-video-abstract">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                            1. What is Video abstract?
                        </h2>
                        <p className="mb-4">
                            A video abstract is a short, engaging summary of your research article. It’s usually 2 – 3 minutes long and summarizes the essential findings, methodology, and importance of your research. A video abstract differs from a written abstract because it uses more than just text. A video abstract contains a spoken voice-over explanation, images, videos, and possibly music within a digital video file format to help the audience easily engage with your research topic.
                        </p>
                        <p>
                            Video abstracts are still not as commonly used as they could or should be by many journals and researchers alike, but in terms of improved visibility, accessibility, and interaction with academic work, they are being increasingly incorporated. A video abstract can be an excellent method for science communication when you want to connect with wider or interdisciplinary audiences. [1]
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section id="what-is-a-written-abstract">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                            2. What is a Written Abstract?
                        </h2>
                        <h3 className="text-base font-bold text-gray-900 mb-2">2.1. Impact Factor (IF)</h3>
                        <p className="mb-3">
                            A written abstract is a short summary (usually 150–300 words) placed at the front of a research article. The written abstract includes: [2]
                        </p>
                        <p className="font-semibold text-gray-800 mb-2">The research purpose</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Methods</li>
                            <li>Main results</li>
                            <li>Conclusion and implications</li>
                        </ul>
                        <p>
                            The purpose of a written abstract is to provide readers a quick sense of the core content of the paper. Overall, while a good written abstract is valuable for indexing in databases and appearing in search engine results, a written abstract lacks the visuals and emotional reactions from readers found in a video abstract.
                        </p>
                    </section>

                    {/* Section 3 Table */}
                    <section id="different-types-of-video-abstracts">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                            3. What are the Different Types of Video Abstracts?
                        </h2>
                        <p className="mb-4">
                            There are several styles of video abstracts depending on your goals, resources, and journal requirements:
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 font-bold text-gray-800 text-center">
                                        <th className="p-3 border-r border-gray-200 w-1/3">Types</th>
                                        <th className="p-3">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-center align-middle">
                                            Broadcast Interview Video
                                        </td>
                                        <td className="p-3">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>A researcher engaged in an interview-style conversation with a host and just enough narration needed to research.</li>
                                                <li>Not a great fit for quantitative studies.</li>
                                                <li>Provides assurance and credibility.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-center align-middle">
                                            Voiceover with PowerPoints/Animations
                                        </td>
                                        <td className="p-3">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>Voiceover of the researcher describes the research while visuals are shown on the screen.</li>
                                                <li>Produces a professional appearance and is accessible to non-native speakers.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-center align-middle">
                                            Whiteboard or Hand-drawn Animation
                                        </td>
                                        <td className="p-3">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>Concepts are drawn out in real-time or pre-recorded animations.</li>
                                                <li>Can be a very engaging and compelling format for explaining more complex ideas.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-center align-middle">
                                            Interview or Panel Style
                                        </td>
                                        <td className="p-3">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>Multiple authors or experts discussing the study.</li>
                                                <li>Good for collaborative work or large-scale scientific studies.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium text-center align-middle">
                                            Narrated Screen Recording
                                        </td>
                                        <td className="p-3">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>Great for computational or software-based research.</li>
                                                <li>Best for demonstrating software, tools, or digital products.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section id="how-to-create-a-powerful-video-abstract">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                            4. How to Create a Powerful Video Abstract
                        </h2>
                        <p className="mb-4">Following are the Top 6 Tips for creating an engaging video abstract:</p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-900">4.1 Use Time Wisely</h3>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>Number of words (less than 300)</li>
                                    <li>Potential organization, what the study was about, why it&apos;s social or academic importance, and the significant findings.</li>
                                    <li>Use normal language; avoid jargon.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">4.2 Use Useful Imagery</h3>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>Support the narration with relevant charts or diagrams or perhaps simple animations</li>
                                    <li>Branding (university logos, colours, etc.) lends credence to your video and keeps the production linked to your institution.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">4.3 Limit the Length</h3>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>The ideal length is 2–3 minutes.</li>
                                    <li>Do not try to reverse engineer the thesis-based approach to presenting; think about the most significant things to share and only share that.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">4.4 Minimum Audio and Video Quality</h3>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>Use a high-quality microphone, in a quiet location.</li>
                                    <li>When filming a video, make sure to record in a well-lit environment. For more specific production options, programs like OBS, iMovie, or Canva Video are excellent resources and easy to use.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">4.5 Consider Subtitles or Captions</h3>
                                <p className="mt-1">
                                    This makes the videos more accessible to those who do not speak English or to individuals with hearing impairments.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">4.6 Share Your Video Abstract</h3>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>Share your video on a variety of platforms; social media, your academic institution&apos;s website, ResearchGate, YouTube, and professional profiles on an academic site.</li>
                                    <li>Some also provide an embed link to distribute via email. You can also embed the link in your CV or portfolio. An impressive way to share your work with the world.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 Do's & Don'ts Table */}
                    <section id="dos-and-donts">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                            5. Do’s and Don’ts While Creating a Video Abstract
                        </h2>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 font-bold text-gray-800 text-center">
                                        <th className="p-3 border-r border-gray-200 w-1/2">Do’s</th>
                                        <th className="p-3 w-1/2">Don’ts</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 align-top">
                                    <tr>
                                        <td className="p-3 border-r border-gray-200">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>Keep your tone confident, clear, and enthusiastic</li>
                                                <li>Practice your script multiple times</li>
                                                <li>Look into the camera if you’re presenting directly</li>
                                                <li>Use licensed or royalty-free visuals and music</li>
                                                <li>Check journal guidelines (some require specific formats)</li>
                                            </ul>
                                        </td>
                                        <td className="p-3">
                                            <ul className="list-disc pl-4 space-y-2">
                                                <li>Don’t read your script word-for-word</li>
                                                <li>Avoid complex, cluttered slides or animations</li>
                                                <li>Don’t use technical jargon or acronyms without explanation</li>
                                                <li>Don’t exceed the recommended time limit</li>
                                                <li>Don’t publish without reviewing for clarity and accuracy</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section id="conclusion">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                            Conclusion
                        </h2>
                        <p className="mb-4">
                            A well-produced video abstract can effectively increase the visibility, engagement, and accessibility of your research. With the right scripting, visuals, and communication strategies, you can create a video that is seen by a wider audience (both academic and non-academic). A video abstract can serve to complement your written work and will also increase your discoverability on digital platforms. If you spend time planning and follow what is discussed in the previous few sections, a video abstract could be valuable to the success and reach of your research.
                        </p>
                        <p className="italic text-gray-800">
                            Top 6 Tips to Create a Perfect Video Abstract for Your Research Paper? Our Pubrica medical consultants are here to guide you. [Get Expert Publishing Support] or [Schedule a Free Consultation]
                        </p>
                    </section>

                    {/* References */}
                    <section className="pt-6 border-t border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">
                            References
                        </h2>
                        <ol className="list-decimal pl-5 space-y-2 text-xs md:text-sm text-gray-700">
                            <li>
                                <em>What is a video abstract?</em> (2017, January 15). BMJ Author Hub.{" "}
                                <a
                                    href="https://authors.bmj.com/writing-and-formatting/video-abstracts/what-is-a-video-abstract/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline break-all"
                                >
                                    https://authors.bmj.com/writing-and-formatting/video-abstracts/what-is-a-video-abstract/
                                </a>
                            </li>
                            <li>
                                <em>Writing an abstract for your research paper.</em> (n.d.). The Writing Center. Retrieved August 11, 2025, from{" "}
                                <a
                                    href="https://writing.wisc.edu/handbook/assignments/writing-an-abstract-for-your-research-paper/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline break-all"
                                >
                                    https://writing.wisc.edu/handbook/assignments/writing-an-abstract-for-your-research-paper/
                                </a>
                            </li>
                        </ol>
                    </section>

                </main>
            </div>
        </div>
    );
}