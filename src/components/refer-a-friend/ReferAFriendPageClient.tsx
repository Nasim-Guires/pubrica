"use client";

import React, { useState } from 'react';
import { Gift, Phone, MessageSquare, Mail } from 'lucide-react';

export default function ReferAFriendPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16 relative">
      {/* Top Banner */}
      <section className="bg-[#122b27] text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600/60 py-6 px-4 rounded-sm">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Refer a Friend
          </h1>
          <p className="text-sm sm:text-base text-gray-200">
            Unlock your referral rewards now!
          </p>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        <button
          aria-label="Call"
          className="w-10 h-10 bg-[#3b1239] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity shadow-md"
        >
          <Phone size={18} />
        </button>
        <button
          aria-label="WhatsApp"
          className="w-10 h-10 bg-[#25d366] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity shadow-md"
        >
          <MessageSquare size={18} />
        </button>
        <button
          aria-label="Email"
          className="w-10 h-10 bg-[#8e24aa] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity shadow-md"
        >
          <Mail size={18} />
        </button>
      </div>

      {/* Main Referral Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#122b27] mb-8">
          Refer your friends &amp; Earn exciting rewards.
        </h2>

        {/* Two-Column Card Box */}
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-sm shadow-sm flex flex-col md:flex-row text-left overflow-hidden bg-white mb-12">
          {/* Left Form Side */}
          <div className="flex-1 p-6 sm:p-8 flex items-center">
            {submitted ? (
              <div className="w-full text-emerald-700 font-medium text-sm">
                Thanks! Check your inbox for your referral link and exclusive offers.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="w-full"
              >
                <label className="block text-sm text-gray-800 font-medium mb-3">
                  Enter your email ID below to view offers exclusively for you and start referring.
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email ID"
                    className="flex-grow border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#122b27]"
                  />
                  <button
                    type="submit"
                    className="bg-[#122b27] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#0b1b18] transition-colors whitespace-nowrap"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Box Side */}
          <div className="w-full md:w-72 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-6 flex flex-col items-center justify-center text-center">
            <Gift className="h-10 w-10 text-[#122b27] mb-3 stroke-[1.5]" />
            <h3 className="text-sm font-bold text-[#122b27] leading-snug mb-3">
              Unlock your referral<br />rewards now!
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Refer a fellow researcher to Pubrica. They will receive a 10% discount on Pubrica services. You will receive coupons worth $30 to use for Pubrica services.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="bg-[#fdf3df] py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm sm:text-base font-bold text-[#122b27] leading-relaxed">
            Pubrica gives you access to 3,000+ of the industry’s best editors, translators, peer reviewers, managing editors, and academic publication experts who help thousands of researchers get published every year
          </p>
        </div>
      </section>

      {/* Human Resource Section */}
      <section className="max-w-4xl mx-auto px-4 pt-12 text-center">
        <span className="text-xs font-semibold tracking-wider text-[#122b27] uppercase underline underline-offset-4 mb-2 block">
          Making What’s
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-[#122b27] mb-8">
          Possible in Human Resource
        </h2>

        <div className="text-left max-w-2xl mx-auto space-y-3">
          <h3 className="font-bold text-gray-900 text-sm">
            Guaranteed Quality
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Clinical monitoring is critical to ensuring that accurate clinical data, or clinical evidence,
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 hover:text-emerald-700 transition-colors pt-1"
          >
            READ MORE &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}