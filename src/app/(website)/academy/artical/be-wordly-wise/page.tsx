"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa6";

const Page = () => {
    const prevUrl = "/academy/artical/written-content/";
    const nextUrl = "/academy/manuscript-guidelines/collaborative-process/";

    const interestingTopics = [
        { title: "Manuscript Editing", href: "/services/editing-and-translation/manuscript-editing" },
        { title: "Manuscript Guidelines", href: "/academy/manuscript-guidelines" },
        { title: "Manuscript Writing", href: "/insights/medical-journey/manuscript-writing-journey" },
        { title: "Manuscript Preparation guidelines", href: "/academy/manuscript-guidelines/strobe-guidelines-entail" },
        { title: "Manuscript Submission Guidelines", href: "/academy/manuscript-guidelines/scientific-writing" },
        { title: "Manuscript Editing Services", href: "/services/editing-and-translation/manuscript-editing" },
        { title: "Study Guides", href: "/insights/study-guide" },
        { title: "Scientific Writing", href: "/academy/manuscript-guidelines/scientific-writing" },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-700">
            {/* Page Content */}
            <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

                {/* Page Header */}
                <div className="mx-auto mb-8 w-full max-w-5xl rounded-sm bg-[#0e3b32] px-5 py-8 text-center text-white shadow-md sm:mb-10 sm:px-8 sm:py-10">
                    <h1 className="text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl">
                        Be Word(ly) Wise
                    </h1>
                </div>

                {/* Main Content Layout */}
                <main className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">

                    {/* Left Sidebar */}
                    <aside className="lg:col-span-3">
                        <div className="space-y-7 lg:sticky lg:top-8">

                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your search"
                                    aria-label="Search"
                                    className="w-full rounded-md border border-gray-200 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#0e3b32] focus:ring-2 focus:ring-[#0e3b32]/10"
                                />

                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            </div>

                            {/* Interesting Topics */}
                            <div>
                                <h3 className="mb-3 border-b border-gray-200 pb-2 text-lg font-bold text-gray-900">
                                    Interesting topics
                                </h3>

                                <ul className="space-y-2.5 text-sm text-gray-600">
                                    {interestingTopics.map((topic) => (
                                        <li key={topic.title}>
                                            <Link
                                                href={topic.href}
                                                className="block leading-relaxed transition-colors hover:text-[#0e3b32] hover:underline"
                                            >
                                                {topic.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="min-w-0 lg:col-span-9">
                        <div className="space-y-6 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-7">

                            {/* Article Title */}
                            <h2 className="text-2xl font-extrabold leading-tight text-[#0e3b32] sm:text-3xl">
                                Be Word(ly) Wise
                            </h2>

                            {/* Introduction */}
                            <div className="space-y-5">
                                <p>
                                    Choosing the most appropriate words to convey your
                                    message is a very important aspect of communication.
                                    This is irrespective of whether you are engaged in the
                                    process of writing a corporate report or political
                                    speech. The fact of the matter is that you select words
                                    that are most apt and relevant to the subject in hand
                                    which can help you to pitch the key message that you are
                                    keen to convey, at the right level for your intended
                                    audience. These are words that would convey your
                                    message with much clarity and does not have any scope
                                    for confusion or distortion.
                                </p>

                                <p>
                                    While preparing your written communication you have to
                                    be careful of the words you choose to convey your
                                    message. You need to ensure that you not only consider
                                    words that sounds best and makes sense to you but, it
                                    should also sound best and make sense for your intended
                                    audience. Keeping your audience and their expectations
                                    in mind will allow you to choose words that are most
                                    appropriate.
                                </p>
                            </div>

                            {/* Common Mistake */}
                            <section className="space-y-5 pt-2">
                                <h3 className="text-xl font-bold leading-snug text-[#0e3b32] sm:text-2xl">
                                    Common Mistake in Choosing Words
                                </h3>

                                <div className="space-y-5">
                                    <p>
                                        Many writers, either professional or academic,
                                        harbor the wrong notion that their audiences expect
                                        them to sound smart. As an outcome, these writers
                                        opt to choose words that are heavy and a bit too
                                        technical in relation to the context. However,
                                        this notion should be dispelled because the
                                        objective is not about sounding smart. Rather, it
                                        is about conveying the information in a convincing
                                        and clear manner.
                                    </p>

                                    <p>
                                        It is correct to assume that when writing academic
                                        papers, writers need to follow a preset academic
                                        style and as students, you are only commencing
                                        lessons on ascribing to that particular academic
                                        writing style. Many a time, you might find that
                                        while writing academic papers you are using words
                                        and grammatical constructions that you never used
                                        during your high school years.
                                    </p>

                                    <p>
                                        The hazard it brings is that if you knowingly
                                        venture to sound smart with your writing by using
                                        heavy words and structures that are not common to
                                        you, you might end up writing sentences that your
                                        audience cannot comprehend.
                                    </p>

                                    <p>
                                        With this article we present you with valuable
                                        tips to choose the right words.
                                    </p>
                                </div>
                            </section>

                            {/* Common Words */}
                            <section className="space-y-4 pt-2">
                                <h4 className="text-lg font-bold leading-snug text-[#0e3b32] sm:text-xl">
                                    Choose Common Words:
                                </h4>

                                <p>
                                    While it is a fact that the English language comprises
                                    of a large and diverse vocabulary, only a minor
                                    fraction of that vocabulary is used in daily life. A
                                    measly 3000 words are what is being commonly used in
                                    75% of communication. These words are basic words that
                                    are used day-to-day and would include words such as;
                                    bad, remember, drink, short.
                                </p>

                                <p>
                                    These are some examples of commonly used words with
                                    which people are very used to. The trick is to use such
                                    common words instead of using heavy, ornamental words
                                    which your audience can easily understand.
                                </p>
                            </section>

                            {/* Formal / Informal / Neutral */}
                            <section className="space-y-4 pt-2">
                                <h4 className="text-lg font-bold leading-snug text-[#0e3b32] sm:text-xl">
                                    Choose Formal, Informal and Neutral Words:
                                </h4>

                                <p>
                                    The English language is also included with rich
                                    synonyms for several words. Nonetheless, more often
                                    than not, synonyms may not necessarily have the same
                                    meaning. Such synonyms are used within diverse writing
                                    styles where some are colloquial, while others formal.
                                </p>

                                <p>
                                    For instance, there are several dozens of words to
                                    convey the idea{" "}
                                    <em>'to steal'</em>, but there are several variations
                                    to it. To purview three of them; while{" "}
                                    <em>'steal'</em> happens to be a neutral word which is
                                    neither formal nor informal. At the same time,{" "}
                                    <em>'purloin'</em> is certainly formal whereas,{" "}
                                    <em>'to nick'</em> is informal for sure.
                                </p>

                                <p>
                                    You will not find sentences formed using informal
                                    words like <em>'nick'</em> within newspapers. On the
                                    other hand, it is recommended that when you are
                                    engaged in informative writing which is straightforward,
                                    it would be wise to strictly use neutral words.
                                </p>
                            </section>

                            {/* Clichés / Buzzwords */}
                            <section className="space-y-4 pt-2">
                                <h4 className="text-lg font-bold leading-snug text-[#0e3b32] sm:text-xl">
                                    Refrain from using Clichés or Buzzwords:
                                </h4>

                                <p>
                                    Clichés are words and phrases that are so vaguely and
                                    frequently used that it tends to lose its original
                                    impact. For instance, phrases like{" "}
                                    <em>'as simple as that'</em>,{" "}
                                    <em>'population explosion'</em>,{" "}
                                    <em>'matter of fact'</em>,{" "}
                                    <em>'global warming'</em>.
                                </p>

                                <p>
                                    Buzzwords on the other hand are considered as those
                                    phrase or words which usually involve jargons that are
                                    deemed to be fashionable within certain specific
                                    settings and as an outcome is abused and might also
                                    sound pointless.
                                </p>

                                <p>
                                    For instance; what do you actually mean when you say
                                    that you have adopted a{" "}
                                    <em>'holistic approach'</em>? Buzzwords and clichés
                                    have the propensity to not only distract readers but
                                    it can also be irritating in the sense that it would
                                    make reader question its validity.
                                </p>
                            </section>
                        </div>
                    </article>
                </main>

                {/* Call to Action */}
                <section className="mx-auto mt-12 w-full max-w-6xl rounded-lg bg-[#0e3b32] px-5 py-8 text-center text-white shadow-md sm:mt-16 sm:px-8 sm:py-10 md:px-12 md:py-12">
                    <h3 className="mx-auto max-w-3xl text-xl font-bold leading-snug sm:text-2xl md:text-3xl">
                        Connect with us to explore how we can support you in
                        maintaining academic integrity and enhancing the
                        visibility of your research across the world!
                    </h3>

                    <Link
                        href="/contact"
                        className="mt-5 inline-block rounded-md bg-white px-6 py-2.5 font-semibold text-[#0e3b32] transition-colors hover:bg-gray-100"
                    >
                        Contact Us
                    </Link>
                </section>

                {/* Social Share */}
                <div className="mx-auto mt-8 flex w-full max-w-6xl flex-wrap items-center gap-4 border-t border-gray-200 pt-5 text-sm text-gray-500 sm:mt-10">
                    <span>Share</span>

                    <div className="flex items-center gap-4 text-lg text-gray-700">
                        <button
                            type="button"
                            aria-label="Share on Facebook"
                            className="transition-colors hover:text-blue-600"
                        >
                            <FaFacebookF />
                        </button>

                        <button
                            type="button"
                            aria-label="Share on X"
                            className="transition-colors hover:text-blue-400"
                        >
                            <FaXTwitter />
                        </button>

                        <button
                            type="button"
                            aria-label="Share on LinkedIn"
                            className="transition-colors hover:text-blue-700"
                        >
                            <FaLinkedinIn />
                        </button>

                        <button
                            type="button"
                            aria-label="Share on Pinterest"
                            className="transition-colors hover:text-red-600"
                        >
                            <FaPinterestP />
                        </button>
                    </div>
                </div>
            </div>

            {/* Previous Article */}
            <Link
                href={prevUrl}
                aria-label="Previous Article"
                className="fixed bottom-0 left-0 z-40 flex h-12 items-center overflow-hidden rounded-tr-md bg-gray-900 text-white shadow-lg transition-all duration-300 hover:pr-1 sm:h-14"
            >
                <div className="flex h-full items-center justify-center bg-blue-600 px-2">
                    <ChevronLeft className="h-5 w-5" />
                </div>

                <div className="relative hidden h-full w-12 overflow-hidden sm:block sm:w-14">
                    <Image
                        src="/images/grammar/written-content.jpg"
                        alt="Previous Article"
                        fill
                        sizes="56px"
                        className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </Link>

            {/* Next Article */}
            <Link
                href={nextUrl}
                aria-label="Next Article"
                className="fixed bottom-0 right-0 z-40 flex h-12 items-center overflow-hidden rounded-tl-md bg-gray-900 text-white shadow-lg transition-all duration-300 hover:pl-1 sm:h-14"
            >
                <div className="relative hidden h-full w-12 overflow-hidden sm:block sm:w-14">
                    <Image
                        src="/images/grammar/collaborative-process.jpg"
                        alt="Next Article"
                        fill
                        sizes="56px"
                        className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <div className="flex h-full items-center justify-center bg-blue-600 px-2">
                    <ChevronRight className="h-5 w-5" />
                </div>
            </Link>
        </div>
    );
};

export default Page;