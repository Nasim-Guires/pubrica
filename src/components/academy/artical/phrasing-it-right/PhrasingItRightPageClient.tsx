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
    const prevUrl = "/academy/artical/tense/";
    const nextUrl = "/academy/artical/written-content/";

    return (
        <div className="relative min-h-screen bg-white text-gray-700 py-6 px-4 sm:px-6 lg:px-8">
            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
                <article className="space-y-6 text-gray-600">
                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Avoiding plagiarism is one of the biggest challenges that students and research scholars face when they have to use information and facts that have been stated by someone else. Students and research scholars refer to a wide variety of literature sources to write their academic articles, thesis or manuscripts. The thing here is that they cannot directly copy / paste from a source. The key to effectively do that is to paraphrase previously published content or literature.
                        </p>

                        <p>
                            Paraphrasing is one of the techniques that can be used to effectively circumvent the issue of plagiarism. However, it is necessary that you cite the source from where you derived the information. Avoiding plagiarism is not the only reason why you should paraphrase. You can paraphrase a piece of text to ensure that the language is simple and easy for the reader to understand. University instructors and guides generally require students to paraphrase texts as it allows students to present the piece of information in their own words which showcases their understanding of the subject. These are just some of the reasons why paraphrasing can be a significant tool. Paraphrasing is a skill that can be learnt and with practice it can be improved.
                        </p>
                    </div>

                    {/* Tips for Paraphrasing */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e3b32] mb-5">
                        Tips for Paraphrasing:
                    </h2>

                    <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            With the advent of internet and technological developments, several free paraphrasing tools are available online today. However, the drawback here is that the paraphrasing tool works on algorithms and is not designed to understand the text and most of the time the meaning of the paraphrased text is lost or the text is replaced with synonyms. It simply means that you would still require revisions in order for you to use it. Whether you use a paraphrasing tool or not we have outlined some steps which you can use to improve your paraphrasing skills.
                        </p>

                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong>
                                    Understand the Text you are Paraphrasing:
                                </strong>{" "}
                                This is the most significant facet of the paraphrasing procedure. Do not focus on the words that have been used by the original author. Rather your focus should be on understanding the idea. Once you understand the idea, writing the text in your own words is easy.
                            </li>

                            <li>
                                <strong>
                                    Ignore the Original Text when you Paraphrase:
                                </strong>{" "}
                                If you refer to the original text when you paraphrase, there is a possibility that you would use similar words from the original text to frame your sentences. Instead, read the text, understand it and then write. Does not matter if it is not perfect, you can always edit it later.
                            </li>

                            <li>
                                <strong>
                                    Use Thesaurus Sparsely:
                                </strong>{" "}
                                When you are paraphrasing a text, make sure you restrict the use of a thesaurus in your enthusiasm to use heavy words to make an impression on the reader. Keep it simple. Use words that you are familiar with.
                            </li>

                            <li>
                                <strong>
                                    Paraphrase the Entire Text:
                                </strong>{" "}
                                Simply altering specific words within the original text by using synonyms might help you to reduce plagiarism but it is essential to alter the structure of the original sentence, for better results.
                            </li>
                        </ol>
                    </div>

                    {/* Most Important Rule */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e3b32] mb-5 pt-4">
                        Most Important Rule
                    </h2>

                    <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            <strong>Do Not Alter the Meaning: </strong> Whenever you paraphrase a piece of text you need to ensure that the original idea or meaning is not altered, which can be disastrous.

                        </p>

                        <p>
                            Mastering the art of paraphrasing can be a time-consuming aspect and for the uninitiated, it might be taxing too. But as mentioned earlier, with practice you can improve your paraphrasing skills and you can also keep visiting our page to get more information and tips and tricks on paraphrasing. However, the key lies in practicing the tips that are we recommend. These are not the only tips on paraphrasing but we will be updating our articles periodically, do visit us for more inputs.
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
                        sizes="56px"
                        src="https://pubrica-blog.vercel.app/api/media/file/tenses-01.png"
                    />
                </div>
            </Link>

            {/* Next Article Button */}
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
                        sizes="56px"
                        src="https://pubrica-blog.vercel.app/api/media/file/Manuscript-preparation-guidelines-01-01.png"
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