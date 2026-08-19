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
  // Routes for previous and next articles
  const prevUrl = "/academy/artical/phrasing-it-right/";
  const nextUrl = "/academy/artical/tense/";

  return (
    <div className="relative min-h-screen bg-white text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Parallel Construction Simplified
        </h1>

        {/* Main Article Content */}
        <article className="text-gray-700 leading-relaxed space-y-6">
          <p>
            Whew! Ain&apos;t the English language a tough nut to crack? There
            are so many different aspects that need to be kept in mind when
            writing in English. With this article, we introduce another
            intriguing concept of the language which is parallel construction.
            So, what does it mean when we say parallel construction? It
            essentially means connecting words, phrases, sentences or
            dependent clauses which execute the same function with the help of
            the same grammatical structure.
          </p>

          <p>
            Mastering English grammar involves understanding key concepts like
            parallel construction. Parallel structure means linking words,
            phrases, or clauses using the same grammatical form to create flow,
            emphasis, and clarity. Using parallel phrasing makes sentences
            easier to read and remember, such as the famous quote:
            <em> &quot;I came, I saw, I conquered.&quot;</em>
          </p>

          <p>
            Beyond simply knowing the rule, it is crucial to spot when a
            sentence lacks balance so you can correct faulty phrasing.
          </p>

          {/* False Parallelism */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">
            False Parallelism
          </h2>

          <p>
            False parallelism occurs when items listed together in a sentence
            do not share the same grammatical form. The first element sets the
            pattern, and subsequent items must match it.
          </p>

          {/* Example 1 */}
          <div className="bg-gray-50 border-l-4 border-gray-300 p-4 my-4 space-y-2">
            <p className="text-sm font-semibold text-gray-600">
              Incorrect Example:
            </p>

            <p className="italic text-gray-800">
              &quot;That cat is fat, evil, and doesn&apos;t smell very
              good.&quot;
            </p>

            <p className="text-sm text-gray-500">
              (Mixes two adjectives with an independent clause)
            </p>

            <p className="text-sm font-semibold text-gray-600 pt-2">
              Corrected Example:
            </p>

            <p className="italic text-gray-800">
              &quot;That cat is fat, evil, and smelly.&quot;
            </p>

            <p className="text-sm text-gray-500">
              (Uses three consistent adjectives)
            </p>
          </div>

          <p>
            The old, run-down school brought back memories of climbing the jungle gym sliding through the halls on jello-covered sneakers and grossly sugar infested snacks.
          </p>

          <p>
            In the above sentence, although all the items are nouns, it is an example of false parallelism.
          </p>

          <p>
            The correct sentence would be;
          </p>

          <p className="italic text-gray-800">
            &quot;The old, run-down school brought back memories of climbing the jungle gym, sliding through the halls on jello-covered sneakers and eating grossly sugar-infused snacks&quot;
          </p>

          {/* Things to Watch Out For */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">
            Things to Watch Out for in Parallel Construction
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">
            Mixing Tenses
          </h3>

          <p>
            It is necessary that you use the same tense throughout in a parallel sentence structure. You could either opt to rewrite the entire sentence to utilize the same tense or you could even separate the sentence as per the tense.
          </p>

          <p>
            For instance;
          </p>

          <p className="italic text-gray-800">
            &quot;The new chocolate factory would <strong>save</strong> money on shipping, <strong>increase</strong> nut production in the area and <strong>has proved</strong> its worthiness through its candy-coated business plan&quot;
          </p>

          <p>
            The above sentence uses a mixture of tenses. The correct parallel structure would be;
          </p>

          <p className="italic text-gray-800">
            &quot;The new chocolate factory would <strong>save</strong> money on shipping and <strong>increase</strong> nut production in the area. The factory has also proved its worthiness through its candy-coated business plan&quot;
          </p>

          <p>
            In the corrected version the tenses have been matched by splitting the sentence into two parts.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
            Mixing Voices
          </h3>

          <p>
            Always ensure that you do not mix voices within parallel construction. You should either use active or passive voice within a series.
          </p>

          <p>
            For instance;
          </p>

          <p className="italic text-gray-800">
            &quot;Millions were shocked by Pauline&apos;s discovery of the gate to the Land of Imagine That, and the discovery was the first of its kind&quot;.
          </p>

          <p>
            The above sentence mixes both active and passive voices. This is rectified in the following sentence.
          </p>

          <p className="italic text-gray-800">
            &quot;Pauline&apos;s discovery of the new gate to the Land of Imagine That was the first of its kind and shocked millions&quot;.
          </p>

          <p>
            There is much more to parallel construction and it will be covered in our forthcoming article.
          </p>
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
            src="/images/grammar/phrasing-it-right.jpg"
            sizes="56px"
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
            src="/images/grammar/tense.jpg"
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