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
    const prevUrl = "/academy/artical/phrasing-it-right/";
    const nextUrl = "/academy/artical/be-wordly-wise/";

    return (
        <div className="relative min-h-screen bg-white text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
            {/* Main Content Container */}
            <main className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
                <article className="space-y-6 text-gray-600">
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0e3b32] mb-6">
                        Can You Hear Voices in Written Content?
                    </h1>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            Essentially, voice draws reference to the link between the subject and the object within a sentence which is connected with a verb. A sentence is said to be of ‘active voice’ as the subject within the sentence happens to be the doer of an action which in turn makes an impact on the object of the sentence. For example;
                        </p>


                        {/* <p>
                            Essentially, voice draws reference to the link
                            between the subject and the object within a sentence
                            which is connected with a verb. A sentence is said
                            to be of &apos;active voice&apos; as the subject
                            within the sentence happens to be the doer of an
                            action which in turn makes an impact on the object
                            of the sentence. For example;
                        </p> */}

                        <p className="italic font-medium text-gray-900">
                            &apos;Rachel baked a cookie&apos;.
                        </p>

                        <p>
                            In the example above mentioned, the subject within the sentence (Rachel) executed an action (baked) on a specific object (cookie).
                        </p>

                        <p>
                            On the other hand, a sentence is said to be of ‘passive voice’ when the object is acted upon by the subject within the sentence. For example;
                        </p>
                        <p>
                            ‘The cookie was baked by Rachel’.                        </p>

                        <p className="italic font-medium text-gray-900">
                            &apos;The cookie was baked by Rachel&apos;.
                        </p>

                        <p>
                            In the above example, the object (cookie) of the
                            sentence was in receipt of an action (baked), which
                            was executed by the subject (Rachel).
                        </p>

                        <p>
                            A simple indicator of a sentence framed in a passive voice is that it is linked with a ‘be’ verb which succeeds a past participle. Nonetheless, it is still possible that the sentence is in active voice even though it includes the verb ‘be’. For example; ‘I am eating a cookie’ happens to be in the active voice irrespective of the presence of the ‘be’ verb ‘am’. Another useful hint would be when the sentence is devoid of an object. This would imply that the sentence was constructed in passive voice even though there is a possibility to have a sentence with active voice that is devoid of any object.
                        </p>
                    </div>

                    {/* When to use Active or Passive Voice */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e3b32] pt-4 mb-4">
                        When to use Active or Passive Voice?
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                        <p>
                            It is commonly believed by some people that sentences need to be constructed using active voice, whenever there is scope. This could be true as constructing sentences in active voice can render your writing to be succinct. As is observed in the examples above mentioned, passive voice requires more words. When it is not written right, the written content can appear vague and awkward. This is particularly true when the subject within the sentence is just implied and not purposely mentioned.
                        </p>

                        <p>
                            Nonetheless, it does not in any way imply that we should always avoid using passive voice. Passive voice has its own utility too. For example; several authors use passive voice as vital tool when writing fiction. Mystery writers specifically are known to extensively use passive voice as it enables them to hide secrets within their narratives.
                        </p>

                        <p>
                            The absence of emphasis on the actor has also rendered passive voice to be widely used when writing academic or scientific papers. Though there has been a transition with regards to enabling scientists to talk about actions they have initiated within their experiments, the domain of science is biased towards passive voice with a view to maintain a semblance of objectivity. This is mainly due to the fact that it does not lay specific focus on the perspective of the individual but rather focuses on the actions that have been initiated as well as the outcomes.
                        </p>

                        <p>
                            While undertaking writing tasks, you should take into account whether you want to use active or passive voice. It mainly depends on what you intend to communicate. If you intend to attract attention to the doer, passive voice is recommended. If you intend to highlight the action, active voice is recommended.
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
                        src="https://pubrica-blog.vercel.app/api/media/file/paraphrashing-01.png"
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
                        src="https://pubrica-blog.vercel.app/api/media/file/point-of-view-01.png"
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