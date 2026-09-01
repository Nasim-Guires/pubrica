"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa6";

const Page = () => {
    const prevUrl = "/academy/manuscript-guidelines/collaborative-process/";
    const nextUrl = "/academy/referencing-style/business-sources/";

    return (
        <div className="relative min-h-screen bg-white text-gray-700 py-6 px-4 sm:px-6 lg:px-8">
            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
                <article className="space-y-6 text-gray-600">
                    <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <li>
                            <strong className="text-gray-900">My Experience with Mendeley:</strong> In my role at Pubrica, working on numerous scientific and academic projects, Mendeley has been a game-changer. The ease of managing citations and references has significantly streamlined my workflow. Especially, when I edit my client’s{" "}
                            <a href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 no-underline hover:no-underline">
                                manuscripts
                            </a>
                            . As part of Pubrica’s{" "}
                            <a href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 no-underline hover:no-underline">
                                Manuscript Editing Services
                            </a>
                            , I frequently encounter documents that require substantial editing. Upon reviewing these manuscripts, I often consider the benefits of revising from the ground up, as reediting these documents can be as challenging as navigating through a complex, suspenseful thriller.
                        </li>
                        <li>
                            <strong className="text-gray-900">The Necessity of Citation Tools in Research:</strong> In research writing, accurately citing others’ work is crucial. Tools like Mendeley not only make referencing easier but also guide readers to relevant works, enhancing the scholarly value of your research.
                        </li>
                    </ul>

                    {/* Section 1 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        Mendeley: A Standout Among Citation Tools
                    </h2>

                    <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <li>
                            <strong className="text-gray-900">Comparing Reference Management Tools:</strong> While there are several tools available, such as{" "}
                            <a href="https://endnote.com/?language=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Endnote
                            </a>{" "}
                            and{" "}
                            <a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Zotero
                            </a>
                            ,{" "}
                            <a href="https://www.mendeley.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Mendeley
                            </a>{" "}
                            stands out for its unique functionalities like offline access and multi-device synchronization (Refer Table 1 below).
                        </li>
                    </ul>

                    {/* Table 1 */}
                    <div className="pt-4 space-y-3">
                        <p className="text-center font-medium text-gray-700 text-sm sm:text-base">
                            Table 1. Comparison of various reference tools available in the market (2023)
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-left text-sm text-gray-700 border-collapse">
                                <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-200">
                                    <tr>
                                        <th className="p-3 border-r border-gray-200">Reference Tool</th>
                                        <th className="p-3 border-r border-gray-200">What it Looks Like</th>
                                        <th className="p-3 border-r border-gray-200">Cost</th>
                                        <th className="p-3 border-r border-gray-200">How to Get It</th>
                                        <th className="p-3">Additional Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">RefWorks</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Video Tutorials</td>
                                        <td className="p-3 border-r border-gray-200">Free at UofT</td>
                                        <td className="p-3 border-r border-gray-200">Group code for off-campus access; Downloads available upon logging in, under Tools menu</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">Zotero</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Video Tour</td>
                                        <td className="p-3 border-r border-gray-200">Free and open source</td>
                                        <td className="p-3 border-r border-gray-200">Create account; Download</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">Mendeley</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Video Tutorials</td>
                                        <td className="p-3 border-r border-gray-200">Free for everyone</td>
                                        <td className="p-3 border-r border-gray-200">Create account; Download desktop client; Install Web Importer; Install Word plugin: Windows or Mac</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">EndNote Web</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Overview Video</td>
                                        <td className="p-3 border-r border-gray-200">Free</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600 underline">https://www.myendnoteweb.com</td>
                                        <td className="p-3">Purchase from UofT Bookstore</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">EndNote Desktop</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Video Training</td>
                                        <td className="p-3 border-r border-gray-200">$90 for UofT community</td>
                                        <td className="p-3 border-r border-gray-200">Purchase from UofT Bookstore</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">Reference Manager</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Training Videos</td>
                                        <td className="p-3 border-r border-gray-200">$90 for UofT community</td>
                                        <td className="p-3 border-r border-gray-200">Purchase from UofT Bookstore</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">WizFolio</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Quick Start Video</td>
                                        <td className="p-3 border-r border-gray-200">Free for everyone (limited version with ads, more features for UofT community)</td>
                                        <td className="p-3 border-r border-gray-200">Create account (use your utoronto.ca email for full features); Install WizAdd; Download WizCite</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">Papers</td>
                                        <td className="p-3 border-r border-gray-200 text-blue-600">Welcome Video</td>
                                        <td className="p-3 border-r border-gray-200">$79 USD (+40% student discount)</td>
                                        <td className="p-3 border-r border-gray-200">How to get Papers with student discount; How to enable Manuscripts feature; How to set up UofT proxy</td>
                                        <td className="p-3 text-center">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <li>
                            <strong className="text-gray-900">Unique Features of Mendeley:</strong> Owned by Elsevier, Mendeley offers features beyond just referencing, including file management, document sharing, and annotating capabilities, making it a comprehensive tool for researchers.
                        </li>
                    </ul>

                    {/* Image Banner */}
                    <div className="pt-2 pb-4">
                        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                            <Image
                                src="/images/academy/menly.png"
                                alt="Mendeley Discovery"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            Source: <a href="https://www.mendeley.com/" target="_blank" rel="noopener noreferrer" className="underline">https://www.mendeley.com/</a>
                        </p>
                    </div>

                    {/* Section 2 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        Getting Started with Mendeley
                    </h2>

                    <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <li>
                            <strong className="text-gray-900">Initial Steps with Mendeley:</strong> Beginning with Mendeley is straightforward. Watch tutorial videos and read instructions to download and familiarize yourself with the software.
                        </li>
                        <li>
                            <strong className="text-gray-900">Building Your Reference Library:</strong> Import papers from various sources or directly from your PC into Mendeley. Use the drag-and-drop feature for ease of building your library.
                        </li>
                        <li>
                            <strong className="text-gray-900">Literature Search and Library Management:</strong> Mendeley’s literature search feature helps find online materials related to your work, automatically adding them to your library. Organize your library by author, keywords, and tags for efficient management.
                        </li>
                    </ul>

                    {/* Section 3 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        Advanced Features of Mendeley
                    </h2>

                    <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <li>
                            <strong className="text-gray-900">Mendeley’s Smart Traits:</strong> The software allows adding notes, full-text reading, and tracking favorites, making it a versatile tool for researchers. Its device compatibility ensures you can work from anywhere.
                        </li>
                        <li>
                            <strong className="text-gray-900">Simplifying Documentation:</strong> Mendeley integrates seamlessly with word processors like MS Word, allowing you to insert citations and bibliographies easily with just a few clicks.
                        </li>
                    </ul>

                    {/* Section 4 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        Mendeley for Collaboration and Networking
                    </h2>

                    <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <li>
                            <strong className="text-gray-900">Mendeley’s Social Collaboration Aspect:</strong> Mendeley is not just a reference tool; it’s a platform for social collaboration. Create a profile, connect with publishers, and share papers with peers.
                        </li>
                        <li>
                            <strong className="text-gray-900">Exploring Funding Opportunities and Group Features:</strong> The software provides a database of funding sources and the ability to create private groups, enhancing your research network and opportunities.
                        </li>
                    </ul>

                    <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        Although the installation process for Mendeley can be cumbersome, once you become familiar with it, you’ll likely find it indispensable (Refer Table 2).
                    </p>

                    {/* Table 2 */}
                    <div className="pt-2 space-y-3">
                        <p className="text-center font-medium text-gray-700 text-sm sm:text-base">
                            Table 2. Common Challenges faced while using Mendeley Software
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-left text-sm text-gray-700 border-collapse">
                                <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-200">
                                    <tr>
                                        <th className="p-3 border-r border-gray-200 w-1/3">Issue</th>
                                        <th className="p-3 w-2/3">Solution</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">
                                            References not syncing between Mendeley Web and Desktop
                                        </td>
                                        <td className="p-3">
                                            – Initiate Mendeley Desktop.<br />– Utilize the “Sync” function found in the toolbar.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">
                                            Incomplete reference details in the library
                                        </td>
                                        <td className="p-3">
                                            – Identify the concerned reference in the library.<br />– Use the “Update Details” option by right-clicking on the reference to automatically fill in the missing data.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">
                                            PDF not attaching when importing via RIS or XML
                                        </td>
                                        <td className="p-3">
                                            – Direct PDF attachment isn’t supported through RIS or XML imports. Instead, employ the Web Importer for importing or attach the PDF manually post-import to the library entry.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">
                                            Complications with the Microsoft Word plugin
                                        </td>
                                        <td className="p-3">
                                            – Confirm Word is up to date via “Help” and “Check for updates.”<br />– Remove and then reinstall the Mendeley Word plugin, ensuring to restart the computer in between these steps.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold border-r border-gray-200">
                                            References missing in Mendeley Cite
                                        </td>
                                        <td className="p-3">
                                            – Press the Sync button in Mendeley Desktop.<br />– In Word, access Mendeley Cite, opt for “More,” and choose “Refresh References.”
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table 3 / Error Messages */}
                    <div className="pt-4 overflow-x-auto border border-gray-200 rounded-lg">
                        <table className="w-full text-left text-sm text-gray-700 border-collapse">
                            <thead className="bg-gray-50 text-gray-900 font-bold border-b border-gray-200">
                                <tr>
                                    <th className="p-3 border-r border-gray-200 w-1/2 text-center">Error Message</th>
                                    <th className="p-3 w-1/2 text-center">Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 italic border-r border-gray-200">
                                        “Citation/Bibliography is wrongly placed in index area, please delete the placed citation/bibliography in index area”
                                    </td>
                                    <td className="p-3">
                                        – Acknowledge the error prompt and remove the highlighted text by deleting it, which may be the incorrectly placed citation.<br />– Reinsert the correct reference from your Mendeley library.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 5 - Conclusion */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-2">
                        Conclusion:
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Based on my experiences, Mendeley is a robust and user-friendly tool. Its range of features caters to diverse research needs, making it a top choice for anyone in the academic and scientific community.
                        </p>
                        <p>
                            <Link href="/" className="text-blue-600 font-medium no-underline hover:no-underline">
                                Pubrica
                            </Link>{" "}
                            boasts extensive expertise in editing a wide array of scientific and technical manuscripts authored by a diverse, global clientele. By choosing Pubrica, you are assured of a service that consistently meets the stringent standards of academic publication.
                        </p>
                    </div>

                    {/* References Section */}
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">
                            References:
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                            <li>
                                EndNote. (n.d.). Retrieved December 22, 2023, from{" "}
                                <a href="https://endnote.com/?language=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    https://endnote.com/?language=en
                                </a>
                            </li>
                            <li>
                                Zotero. (n.d.). Retrieved December 22, 2023, from{" "}
                                <a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    https://www.zotero.org/
                                </a>
                            </li>
                            <li>
                                Mendeley. (n.d.). Retrieved December 22, 2023, from{" "}
                                <a href="https://www.mendeley.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    https://www.mendeley.com/
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>

                {/* Social Share Bar */}
                <div className="border-t border-gray-200 mt-10 pt-4 flex items-center gap-4 text-sm text-gray-500">
                    <span>Share</span>

                    <div className="flex gap-3 text-gray-700">
                        <button
                            type="button"
                            aria-label="Share on Facebook"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <FaFacebookF />
                        </button>

                        <button
                            type="button"
                            aria-label="Share on X"
                            className="hover:text-blue-400 transition-colors"
                        >
                            <FaXTwitter />
                        </button>

                        <button
                            type="button"
                            aria-label="Share on LinkedIn"
                            className="hover:text-blue-700 transition-colors"
                        >
                            <FaLinkedinIn />
                        </button>

                        <button
                            type="button"
                            aria-label="Share on Pinterest"
                            className="hover:text-red-600 transition-colors"
                        >
                            <FaPinterestP />
                        </button>
                    </div>
                </div>
            </main>

            {/* Previous Article Button */}
            <Link
                href={prevUrl}
                aria-label="Previous Article"
                className="fixed bottom-0 left-0 z-40 flex items-center bg-gray-900 text-white group hover:pr-2 transition-all duration-300 shadow-lg overflow-hidden h-14"
            >
                <div className="bg-blue-600 h-full px-2 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white" />
                </div>

                <div className="relative w-14 h-full hidden sm:block overflow-hidden">
                    <Image
                        src="https://pubrica-blog.vercel.app/api/media/file/template-01.png"
                        alt="Previous Article"
                        fill
                        sizes="56px"
                        className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                    />
                </div>
            </Link>

            {/* Next Article Button */}
            <Link
                href={nextUrl}
                aria-label="Next Article"
                className="fixed bottom-0 right-0 z-40 flex items-center bg-gray-900 text-white group hover:pl-2 transition-all duration-300 shadow-lg overflow-hidden h-14"
            >
                <div className="relative w-14 h-full hidden sm:block overflow-hidden">
                    <Image
                        src="https://pubrica-blog.vercel.app/api/media/file/citation-and-referencingpng-01-01.png"
                        alt="Next Article"
                        fill
                        sizes="56px"
                        className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                    />
                </div>

                <div className="bg-blue-600 h-full px-2 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-white" />
                </div>
            </Link>
        </div>
    );
};

export default Page;