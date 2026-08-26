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
    // Configured navigation routes
    const prevUrl = "/academy/artical/parallel-construction/";
    const nextUrl = "/academy/artical/phrasing-it-right/";

    return (
        <div className="relative min-h-screen bg-white text-[#666666]">
            {/* Main Content Container */}
            <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
                <article className="space-y-5 text-[15px] leading-relaxed">
                    {/* Article Title */}
                    <h1 className="mb-6 text-3xl font-bold text-[#111111] sm:text-4xl">
                        Deriving Sense from your Tense
                    </h1>

                    <p>
                        The tenses 'past, present and future', might sound very easy but making sense out of tense in writing can prove to be a challenge. Can you blend all three tenses within a written text while ensuring that the reader is not confused? What are the subtle variations between 'simple' and 'perfect tense'? This article intends to shed light on how to effectively use tenses without giving rise to ambiguity or confusion.
                    </p>

                    <p>
                        Let us first brush up on tenses with its definitions.
                    </p>

                    <p>
                        Within English language, there is the so-called 'simple' and 'perfect' tenses in the past, present as well as the future. A simple tense would simply communicate an action in the time it is being narrated. For instance;
                    </p>

                    {/* Simple Tense Examples */}
                    <div className="space-y-3 pt-1">
                        <p>
                            <strong className="font-bold text-[#111111]">Past (simple) tense:</strong>{" "}
                            <span className="italic">Rachel ran to the car.</span>
                        </p>
                        <p>
                            <strong className="font-bold text-[#111111]">Present (simple) tense:</strong>{" "}
                            <span className="italic">Rachel runs to the car.</span>
                        </p>
                        <p>
                            <strong className="font-bold text-[#111111]">Future (simple) tense:</strong>{" "}
                            <span className="italic">Rachel will run to the car.</span>
                        </p>
                    </div>

                    <p className="pt-2">
                        The perfect tense on the other hand uses diverse types of auxiliary verb 'has' in addition to the main verb to indicate actions that have already occurred or will / might still occur. The same example as above is used to present each tense in its perfect form.
                    </p>

                    {/* Perfect Tense Examples */}
                    <div className="space-y-3 pt-1">
                        <p>
                            <strong className="font-bold text-[#111111]">Past perfect:</strong>{" "}
                            <span className="italic">Rachel had run to the car.</span>
                        </p>
                        <p>
                            <strong className="font-bold text-[#111111]">Present perfect:</strong>{" "}
                            <span className="italic">Rachel has run to the car.</span>
                        </p>
                        <p>
                            <strong className="font-bold text-[#111111]">Future perfect:</strong>{" "}
                            <span className="italic">Rachel will have to run to the car.</span>
                        </p>
                    </div>

                    <p className="pt-2">
                        In the above example pertaining to past perfect, Rachel's run is an event that had occurred earlier in a narrative past.
                    </p>

                    <p className="italic">
                        Rachel had run to the car several times uneventfully so she wasn't at all prepared for what she saw that morning.
                    </p>

                    <p>
                        It is possible to use future perfect tense to indicate that Rachel's plans will not make an impact on another event that could occur even further in the future. For instance;
                    </p>

                    <p className="italic">
                        Rachel will have to run to the car before it starts raining so that we can get the groceries inside the house.
                    </p>

                    <p>
                        You can also phrase it as <span className="italic">'Rachel will be back from the car before it starts raining so our groceries would be safely inside the house'</span>. This is a convenient option with the use of future tense with the infinitive <span className="italic">'to be'</span>.
                    </p>

                    <p>
                        Some tips on how to use tenses when writing a book.
                    </p>

                    {/* Tip Section */}
                    <div className="pt-4">
                        <h2 className="mb-4 text-2xl font-bold text-[#111111] sm:text-3xl">
                            Tip #1: Decide which tense would work best for your book
                        </h2>

                        <p className="mb-4">
                            The use of simple past tense and third person account is used in a large number of books.
                        </p>

                        <p className="mb-4 italic">
                            'She ran to the car with amazing speed, but the sight that met her was gory'.
                        </p>

                        <p className="mb-4">
                            At the time of writing your book or a scene within a book, it would be wise to ponder about the advantages of every tense. The present tense, for instance has the benefit of;
                        </p>

                        <ul className="mb-4 list-disc space-y-3 pl-6">
                            <li>
                                <strong className="font-bold text-[#111111]">Immediacy:</strong>{" "}
                                The action occurs in the same narrative moment as it is experienced by the reader: (Every action occurs now, there is no temporal distance)
                            </li>
                            <li>
                                <strong className="font-bold text-[#111111]">Simplicity:</strong>{" "}
                                It cannot be denied that it is comparatively easy to write <span className="italic">'She ran to the car with amazing speed'</span> then to manipulate all kinds of remote times with the use of auxiliary verbs.
                            </li>
                        </ul>

                        <p>
                            This is not all that is there to tenses. Be patient and wait for the next article to know more about tenses and its finer intricacies.
                        </p>
                    </div>

                    {/* Social Share Bar */}
                    <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-4 text-xs text-gray-500">
                        <span>Share</span>
                        <div className="flex items-center gap-3 text-gray-600">
                            <button
                                type="button"
                                aria-label="Share on Facebook"
                                className="hover:text-black transition-colors"
                            >
                                <FaFacebookF className="h-3 w-3" />
                            </button>
                            <button
                                type="button"
                                aria-label="Share on X"
                                className="hover:text-black transition-colors"
                            >
                                <FaXTwitter className="h-3 w-3" />
                            </button>
                            <button
                                type="button"
                                aria-label="Share on LinkedIn"
                                className="hover:text-black transition-colors"
                            >
                                <FaLinkedinIn className="h-3 w-3" />
                            </button>
                            <button
                                type="button"
                                aria-label="Share on Pinterest"
                                className="hover:text-black transition-colors"
                            >
                                <FaPinterestP className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </article>
            </main>

            {/* Side Navigation Controls */}
            {/* Previous Article Button */}
            <Link
                href={prevUrl}
                aria-label="Previous Article"
                className="group fixed bottom-0 left-0 z-40 flex h-14 items-center overflow-hidden bg-gray-900 text-white shadow-lg transition-all duration-300 hover:pr-2"
            >
                <div className="flex h-full px-2.5 items-center justify-center bg-blue-600 text-white">
                    <ChevronLeft className="h-5 w-5" />
                </div>
                <div className="relative hidden h-full w-14 overflow-hidden sm:block">
                    <Image
                        src="https://pubrica-blog.vercel.app/api/media/file/parrallel-construction-01.png"
                        alt="Previous Article"
                        fill
                        sizes="56px"
                        className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </Link>

            {/* Next Article Button */}
            <Link
                href={nextUrl}
                aria-label="Next Article"
                className="group fixed bottom-0 right-0 z-40 flex h-14 items-center overflow-hidden bg-gray-900 text-white shadow-lg transition-all duration-300 hover:pl-2"
            >
                <div className="relative hidden h-full w-14 overflow-hidden sm:block">
                    <Image
                        src="https://pubrica-blog.vercel.app/api/media/file/paraphrashing-01.png"
                        alt="Next Article"
                        fill
                        sizes="56px"
                        className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <div className="flex h-full px-2.5 items-center justify-center bg-blue-600 text-white">
                    <ChevronRight className="h-5 w-5" />
                </div>
            </Link>
        </div>
    );
};

export default Page;