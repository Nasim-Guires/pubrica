import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'How it Works - Pubrica',
  description: 'ASSIGNING',
  slug: '/how-it-works',
});

const steps = [
  {
    title: "ASSIGNING",
    description: "Our team reviews your paper first. You have the option to choose an expert from our list; moreover, we can assign an author through our proprietary algorithms that match your paper with an editor and select the apt publication channel. We take care of the aims, scope and guidelines of target journals.",
    imagePosition: "right"
  },
  {
    title: "COPYEDITING",
    description: "Leave the editing and formatting worries to our experts. Scientific Writing & Publication does all levels of editing and formatting. Style adherence, proofreading, and structure—everything is taken care. We check the title and abstract in detail.",
    imagePosition: "left"
  },
  {
    title: "VETTING",
    description: "Your paper is now under the scrutiny of a senior editor from your field of study. Editor will review your content and art work through a fine toothed comb. The results are astounding. We provide you a copy of the feedback from the expert. References, tables, figures, and main text—all are taken care of.",
    imagePosition: "right"
  },
  {
    title: "REVISING",
    description: "Our editors will give your paper an extra edge. Experts will line edit and then it's ready to go to the next phase. We address reviewers' comments and enforce version control. All levels of editing and formatting are done; you will receive a copy of the versions.",
    imagePosition: "left"
  },
  {
    title: "DIGITALIZING",
    description: "We work with numerous publishers. Now that the print version of your paper is ready, our editors work on online publication. Scientific Writing & Publication recommends the best places to park your digital paper on the internet; we prepare the cover letter for the manuscript.",
    imagePosition: "right"
  },
  {
    title: "PUBLISHING",
    description: "We author your work for the publication phase. Before we let go, we give it a final touch. We re-edit the paper again to make it foolproof and peer-review it. Changes are incorporated and your paper is now accepted to be published online and in print; you will get the final copy of the manuscript.",
    imagePosition: "left"
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works - Pubrica</title>
        <meta name="description" content="Scientific journal editing phases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        {/* Top Banner Section */}
        <section className="bg-[#1b2e2b] text-white py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto border border-gray-600 p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">How It Works</h1>
            <p className="text-sm md:text-base text-gray-300">Scientific journal editing phases</p>
          </div>
        </section>

        {/* Main Title */}
        <section className="max-w-6xl mx-auto pt-16 pb-12 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How to publish in a scientific journal?</h2>
        </section>

        {/* Timeline Section */}
        <section className="max-w-6xl mx-auto pb-24 px-4 relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1b2e2b] -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center relative">
                {step.imagePosition === "right" ? (
                  <>
                    {/* Content Box (Left) */}
                    <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                      <div className="bg-[#f2f4f3] p-8 relative rounded-sm shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Timeline Icon Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1b2e2b] text-white flex items-center justify-center z-10 hidden md:flex shadow-md">
                      <span className="text-sm font-bold">📄</span>
                    </div>

                    {/* Image (Right) */}
                    <div className="w-full md:w-1/2 md:pl-12 flex justify-center">
                      <div className="relative w-72 h-64">
                        <Image
                          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400"
                          alt={step.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image (Left) */}
                    <div className="w-full md:w-1/2 md:pr-12 flex justify-center order-2 md:order-1 mb-8 md:mb-0">
                      <div className="relative w-72 h-64">
                        <Image
                          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400"
                          alt={step.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Timeline Icon Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1b2e2b] text-white flex items-center justify-center z-10 hidden md:flex shadow-md order-none">
                      <span className="text-sm font-bold">📄</span>
                    </div>

                    {/* Content Box (Right) */}
                    <div className="w-full md:w-1/2 md:pl-12 order-1 md:order-2 mb-8 md:mb-0">
                      <div className="bg-[#f2f4f3] p-8 relative rounded-sm shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}