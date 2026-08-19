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
    // Routes configured as requested
    const prevUrl = "/academy/artical/parallel-construction/";
    const nextUrl = "/academy/artical/phrasing-it-right/";

    return (
        <div className="relative min-h-screen bg-white text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
                <article className="space-y-4 text-gray-600">
                    <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Whew! Ain’t the English language a tough nut to crack? There are so many
                            different aspects that need to be kept in mind when writing in English.
                            With this article, we introduce another intriguing concept of the language
                            which is parallel construction. So, what does it mean when we say parallel
                            construction? It essentially means connecting words, phrases, sentences or
                            dependent clauses which execute the same function with the help of the same
                            grammatical form. Parallel construction is of much benefit as it offers
                            rhythm, emphasis and clarity. When sentences built on parallel construction,
                            it becomes easier for people to remember sentences thus constructed or
                            quotes that are known to have a parallel structure for instance, ‘I came, I
                            saw, I conquered’.
                        </p>

                        <p>
                            The key issue here is not only about being aware of parallel construction but
                            it is also about known how to use it appropriately and identify it in case
                            it has not been done in the right manner. If you write a sentence or read a
                            sentence that is an exemplification of false or faulty parallel
                            construction, you are bound to get that
                            something-does-not-seem-to-be-right-in-this-sentence-but-i-cannot-place-my-finger-on-it,
                            kind of feeling.
                        </p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e3b32] mb-5">
                        False Parallelism:
                    </h2>
                    <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>For example.</p>

                        <p>
                            <em>‘That cat is fat, evil and doesn’t smell very good’.</em>
                        </p>

                        <p>
                            The above sentence projects false parallelism. In the said sentence, the
                            first two items are adjectives but the last is an independent clause.
                        </p>

                        <p>
                            The correct parallel construction for the above sentence would be:
                        </p>

                        <p>
                            <em>‘That cat is fat, evil and smelly’.</em>
                        </p>

                        <p>
                            Many a time, it might not be easy to identify false parallelism. For
                            instance,
                        </p>

                        <p>
                            <em>
                                ‘The old, run-down school brought back memories of climbing the jungle
                                gym sliding through the halls on jello-covered sneakers and grossly sugar
                                infested snacks.’
                            </em>
                        </p>

                        <p>
                            In the above sentence, although all the items are nouns, it is an example
                            of false parallelism.
                        </p>

                        <p>The correct sentence would be:</p>

                        <p>
                            <em>
                                ‘The old, run-down school brought back memories of climbing the jungle
                                gym, sliding through the halls on jello-covered sneakers and eating
                                grossly sugar-infused snacks’.
                            </em>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-4 pb-2">
                        Things to Watch Out for in Parallel Construction:                    </h2>

                    <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e3b32]">
                            Mixing Tenses
                        </h2>

                        <p>
                            It is necessary that you use the same tense throughout in a parallel
                            sentence structure. You could either opt to rewrite the entire sentence
                            to utilize the same tense or you could even separate the sentence as per
                            the tense.
                        </p>

                        <p>For instance;</p>

                        <p>
                            <em>
                                ‘The new chocolate factory would <strong>save</strong> money on shipping,
                                <strong>increase</strong> nut production in the area and <strong>has proved</strong>
                                its worthiness through its candy-coated business plan’.
                            </em>
                        </p>

                        <p>
                            The above sentence uses a mixture of tenses. The correct parallel structure
                            would be;
                        </p>

                        <p>
                            <em>
                                ‘The new chocolate factory would <strong>save</strong> money on shipping
                                and <strong>increase</strong> nut production in the area. The factory has
                                also proved its worthiness through its candy-coated business plan’.
                            </em>
                        </p>

                        <p>
                            In the corrected version the tenses have been matched by splitting the
                            sentence into two parts.
                        </p>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e3b32] pt-4">
                            Mixing Voices
                        </h2>

                        <p>
                            Always ensure that you do not mix voices within parallel construction. You
                            should either use active or passive voice within a series.
                        </p>

                        <p>For instance;</p>

                        <p>
                            <em>
                                ‘Millions were shocked by Pauline’s discovery of the gate to the Land of
                                Imagine That, and the discovery was the first of its kind’.
                            </em>
                        </p>

                        <p>
                            The above sentence mixes both active and passive voices. This is rectified
                            in the following sentence.
                        </p>

                        <p>
                            <em>
                                ‘Pauline’s discovery of the new gate to the Land of Imagine That was the
                                first of its kind and shocked millions’.
                            </em>
                        </p>

                        <p>
                            There is much more to parallel construction and it will be covered in our
                            forthcoming article.
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

            {/* Side Navigation Buttons */}
            {/* Previous Article Button (Bottom Left) */}
            <Link
                aria-label="Previous Article"
                href={prevUrl}
                className="fixed bottom-0 left-0 z-40 flex items-center bg-gray-900 text-white group hover:pr-2 transition-all duration-300 shadow-lg overflow-hidden h-14"
            >
                <div className="bg-blue-600 h-full px-2 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white" />
                </div>

                <div className="relative w-14 h-full hidden sm:block overflow-hidden">
                    <Image
                        alt="Previous Article"
                        className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                        fill
                        src="/images/grammar/parallel-construction.jpg"
                        sizes="56px"
                    />
                </div>
            </Link>

            {/* Next Article Button (Bottom Right) */}
            <Link
                aria-label="Next Article"
                href={nextUrl}
                className="fixed bottom-0 right-0 z-40 flex items-center bg-gray-900 text-white group hover:pl-2 transition-all duration-300 shadow-lg overflow-hidden h-14"
            >
                <div className="relative w-14 h-full hidden sm:block overflow-hidden">
                    <Image
                        alt="Next Article"
                        className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                        fill
                        src="/images/grammar/phrasing-it-right.jpg"
                        sizes="56px"
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