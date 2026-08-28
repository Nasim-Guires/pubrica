"use client";

import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export default function ReferAFriendPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-7 px-4 text-center">
        <Gift className="h-10 w-10 mx-auto mb-4 text-emerald-300" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Refer a Friend</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">Unlock your referral rewards now!</p>
      </section>

      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-7 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Refer your friends &amp; earn exciting rewards</h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-2">
          Refer a fellow researcher to Pubrica. They will receive a 10% discount on Pubrica services. You will receive coupons worth $30 to use for Pubrica services.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          Pubrica gives you access to 3,000+ of the industry&rsquo;s best editors, translators, peer reviewers, managing editors, and academic publication experts who help thousands of researchers get published every year.
        </p>

        {submitted ? (
          <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-sm text-emerald-700 font-semibold text-sm">
            Thanks! Check your inbox for your referral link and exclusive offers.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email ID to view offers exclusively for you"
              className="flex-grow border border-slate-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004d40]"
            />
            <button
              type="submit"
              className="bg-[#004d40] text-white font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-[#00332a] transition-colors whitespace-nowrap"
            >
              Unlock Rewards
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
