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
    const prevUrl = "/academy/artical/be-wordly-wise/";
    const nextUrl = "/academy/referencing-style/my-tryst/";

    return (
        <div className="relative min-h-screen bg-white text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
                <article className="space-y-6 text-gray-600">
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0e3b32] mb-6">
                        Overleaf’s Collaborative process
                    </h1>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Collaboration in scientific academia is the norm. Overleaf makes writing and publishing tasks quicker. So let’s discuss about harnessing the power of this popular authoring tool.
                        </p>

                        <p>
                            Free, cloud-based authoring tool, Overleaf, enables sharing and publishing documents in an international scientific community quicker, easier, and more effective. Today’s publications comprise authors across multifarious research disciplines and locations; the work is truly global and interdisciplinary.
                        </p>

                        <p>
                            Overleaf allows real-time file sharing among different authors and generates an output that is structured and fully typeset—yes, as they type. This implies that authors can preview projects in progress and Overleaf LaTeX creates an array of documents such as journal articles and slides and books and conference posters and CVs.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        Collaboration in writing
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Collaborate in Rich Text or LaTeX anywhere 24/7; moreover, share and request peers to co-author, review, edit, or query documents (and their versions). The streamlined process cuts down errors and prevents long chain of emails.
                        </p>

                        <p>
                            Overleaf’s basic version offers 1GB storage space; permits 60 files for a project. And higher end versions of the application offer additional features.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        Authoring using Overleaf
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Publishers partner with Overleaf to ease the submission process while many institutions offer the pro-version to their members. Existing templates also make the task easier for multiple journals; you can submit to the publisher/editor using such templates.
                        </p>

                        <p>
                            Chief features of the tool support authors to do this: Write, edit, and submit documents quickly yet efficiently. The online tool offers these key features.
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                            <li>Skip installation as you work on a real-time basis.</li>
                            <li>Review and edit projects, check revisions, see changes of peers. Any location.</li>
                            <li>Authorize specific authors’ permission to file and teamwork is easy as you share encrypted link to peers.</li>
                            <li>Synchronize files on-the-go. Quickly review others’ updates quickly.</li>
                            <li>Jot notes, comment, etc.</li>
                            <li>Jump between LaTeX and Rich Text; edit as you will.</li>
                            <li>Correct errors and alert your team.</li>
                            <li>View templates with built-in features (tables, presentations, bibliographies, and more.)</li>
                            <li>Safeguard critical projects via advanced versions; edit, add, remove members.</li>
                            <li>Submit directly to publisher/editor thru existing templates.</li>
                            <li>Use referencing tools such as Mendeley or other tools.</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        What’s your experience like?
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Do you opine that Overleaf streamlines communication? To know more about Pubrica and Overleaf contact us. In the next part article Pubrica experts talk about using different templates. Refer other articles to learn about referencing styles, manuscript guidelines, advice to author, etc.
                        </p>

                        <p>
                            If you use Overleaf or any other tool then share your scientific writing experiences with us. Tell us how you worked as a team on a critical project. Which prompted you to use such tools?
                        </p>

                        <p>
                            Talk to us about your experiences in using Overleaf. Comment in the box below.
                        </p>
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
                        src="/images/grammar/be-wordly-wise.jpg"
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
                        src="/images/grammar/my-tryst.jpg"
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