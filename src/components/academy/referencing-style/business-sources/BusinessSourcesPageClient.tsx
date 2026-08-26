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
    const prevUrl = "/academy/artical/parallel-construction/";
    const nextUrl = "/academy/artical/tense/";

    return (
        <div className="relative min-h-screen bg-white text-[#666666]">
            {/* Main Content Container */}
            <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
                <article className="space-y-6 text-[15px] leading-relaxed">

                    {/* Paragraph 1 */}
                    <p>
                        Whew! Ain't the English language a tough nut to crack? There are so many different aspects that need to be kept in mind when writing in English. With this article, we introduce another intriguing concept of the language which is parallel construction. So, what does it mean when we say parallel construction? It essentially means connecting words, phrases, sentences or dependent clauses which execute the same function with the help of the same grammatical form. Parallel construction is of much benefit as it offers rhythm, emphasis and clarity. When sentences built on parallel construction, it becomes easier for people to remember sentences thus constructed or quotes that are known to have a parallel structure for instance, 'I came, I saw, I conquered'.
                    </p>

                    {/* Paragraph 2 */}
                    <p>
                        The key issue here is not only about being aware of parallel construction but it is also about known how to use it appropriately and identify it in case it has not been done in the right manner. If you write a sentence or read a sentence that is an exemplification of false or faulty parallel construction, you are bound to get that something-does-not-seem-to-be-right-in-this-sentence-but-i-cannot-place-my-finger-on-it, kind of feeling.
                    </p>

                    {/* False Parallelism Section */}
                    <div className="pt-2">
                        <h2 className="mb-4 text-2xl font-bold text-[#111111]">
                            False Parallelism:
                        </h2>

                        <p className="mb-4">
                            False parallelism occurs when ideas that execute a similar grammatical function are not similar in terms of grammatical form. The first item within a parallel construction lays the groundwork for the grammatical structure for the rest, which makes it imperative that the subsequent items are in congruence. In case one or more are not matching, it is considered to be a sentence with false parallelism. This is particularly true and quite common within a series but there is scope that it might emerge in almost any type of sentence construction. To correct false parallelism, you need to ensure that all associated ideas have a common grammatical form.
                        </p>

                        <p className="mb-4">For example.</p>

                        <p className="mb-4 italic">
                            'That cat is fat, evil and doesn't smell very good'.
                        </p>

                        <p className="mb-4">
                            The above sentence projects false parallelism. In the said sentence, the first two items are adjectives but the last is an independent clause.
                        </p>

                        <p className="mb-4">
                            The correct parallel construction for the above sentence would be:
                        </p>

                        <p className="mb-4 italic">
                            'That cat is fat, evil and smelly'.
                        </p>

                        <p className="mb-4">
                            Many a time, it might not be easy to identify false parallelism. For instance,
                        </p>

                        <p className="mb-4 italic">
                            'The old, run-down school brought back memories of climbing the jungle gym sliding through the halls on jello-covered sneakers and grossly sugar infested snacks.
                        </p>

                        <p className="mb-4">
                            In the above sentence, although all the items are nouns, it is an example of false parallelism.
                        </p>

                        <p className="mb-4">
                            The correct sentence would be;
                        </p>

                        <p className="mb-4 italic">
                            'The old, run-down school brought back memories of climbing the jungle gym, sliding through the halls on jello-covered sneakers and eating grossly sugar-infused snacks'.
                        </p>
                    </div>

                    {/* Things to Watch Out For Section */}
                    <div className="pt-2">
                        <h2 className="mb-4 text-2xl font-bold text-[#111111]">
                            Things to Watch Out for in Parallel Construction:
                        </h2>

                        {/* Mixing Tenses */}
                        <div className="mb-4">
                            <p className="mb-3 font-semibold text-[#444444]">
                                Mixing Tenses
                            </p>

                            <p className="mb-4">
                                It is necessary that you use the same tense throughout in a parallel sentence structure. You could either opt to rewrite the entire sentence to utilize the same tense or you could even separate the sentence as per the tense.
                            </p>

                            <p className="mb-4">
                                For instance;
                            </p>

                            <p className="mb-4 italic">
                                'The new chocolate factor would <strong className="font-bold text-[#333333] not-italic">save</strong> money on shipping, <strong className="font-bold text-[#333333] not-italic">increase</strong> nut production in the area and <strong className="font-bold text-[#333333] not-italic">has proved</strong> its worthiness through its candy-coated business plan'.
                            </p>

                            <p className="mb-4">
                                The above sentence uses a mixture of tenses. The correct parallel structure would be;
                            </p>

                            <p className="mb-4 italic">
                                'The new chocolate factory would <strong className="font-bold text-[#333333] not-italic">save</strong> money on shipping and <strong className="font-bold text-[#333333] not-italic">increase</strong> nut production in the area. The factory has also proved its worthiness through its candy-coated business plan'.
                            </p>

                            <p className="mb-4">
                                In the corrected version the tenses have been matched by splitting the sentence into two parts.
                            </p>
                        </div>

                        {/* Mixing Voices */}
                        <div className="mb-4">
                            <p className="mb-3 font-semibold text-[#444444]">
                                Mixing Voices
                            </p>

                            <p className="mb-4">
                                Always ensure that you do not mix voices within parallel construction. You should either use active or passive voice within a series.
                            </p>

                            <p className="mb-4">
                                For instance;
                            </p>

                            <p className="mb-4 italic">
                                'Millions were shocked by Pauline's discovery of the gate to the Land of Imagine That, and the discovery was the first of its kind'.
                            </p>

                            <p className="mb-4">
                                The above sentence mixes both active and passive voices. This is rectified in the following sentence.
                            </p>

                            <p className="mb-4 italic">
                                'Pauline's discovery of the new gate to the Land of Imagine That was the first of its kind and shocked millions'.
                            </p>

                            <p className="mb-4">
                                There is much more to parallel construction and it will be covered in our forthcoming article.
                            </p>
                        </div>
                    </div>

                    {/* Social Share Bar */}
                    <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-4 text-xs text-gray-500">
                        <span>Share</span>
                        <div className="flex items-center gap-3 text-gray-600">
                            <button type="button" aria-label="Share on Facebook" className="hover:text-black">
                                <FaFacebookF className="h-3 w-3" />
                            </button>
                            <button type="button" aria-label="Share on X" className="hover:text-black">
                                <FaXTwitter className="h-3 w-3" />
                            </button>
                            <button type="button" aria-label="Share on LinkedIn" className="hover:text-black">
                                <FaLinkedinIn className="h-3 w-3" />
                            </button>
                            <button type="button" aria-label="Share on Pinterest" className="hover:text-black">
                                <FaPinterestP className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </article>
            </main>

            {/* Previous Article Button */}
            <Link
                href={prevUrl}
                aria-label="Previous Article"
                className="fixed bottom-0 left-0 z-40 flex h-10 items-center overflow-hidden bg-[#0088cc] text-white shadow-md transition-all hover:opacity-90"
            >
                <div className="flex h-full w-10 items-center justify-center">
                    <ChevronLeft className="h-5 w-5" />
                </div>
            </Link>

            {/* Next Article Button */}
            <Link
                href={nextUrl}
                aria-label="Next Article"
                className="fixed bottom-0 right-0 z-40 flex h-10 items-center overflow-hidden bg-[#0088cc] text-white shadow-md transition-all hover:opacity-90"
            >
                <div className="flex h-full w-10 items-center justify-center">
                    <ChevronRight className="h-5 w-5" />
                </div>
            </Link>
        </div>
    );
};

export default Page;