'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email.');
      return;
    }

    // Success simulation
    setIsSubmitted(true);
    setEmail('');
    setError('');
  };

  return (
    <div className="bg-primary-900 border-b border-primary-950/45 py-6 relative overflow-hidden">
      {/* Decorative radial blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-xl text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
            Stay Updated on Academic Research Trends
          </h3>
          <p className="text-sm text-primary-200 leading-relaxed font-sans mt-1.5">
            Subscribe to our newsletter for free guides, writing checklists, and publication resources.
          </p>
        </div>

        <div className="w-full max-w-md">
          {isSubmitted ? (
            <div className="flex items-center gap-3 bg-secondary-700/30 border border-secondary-500/30 p-4 rounded-lg text-secondary-200">
              <CheckCircle2 className="text-secondary-500 h-6 w-6 flex-shrink-0" />
              <div className="text-sm font-sans">
                <p className="font-semibold text-white">Subscription Successful!</p>
                <p className="text-xs text-secondary-200/80 mt-0.5">Thank you for subscribing. We will send you resources soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full">
              <div className="flex-grow relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your professional email"
                  className="w-full bg-primary-950 text-white placeholder-gray-500 rounded-md border border-primary-800 px-4 py-3 text-sm focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none"
                  required
                />
                {error && <span className="absolute left-0 top-full mt-1 text-xs text-red-400">{error}</span>}
              </div>
              <Button
                type="submit"
                variant="accent"
                rightIcon={<Send className="h-4 w-4" />}
                className="font-semibold px-6 cursor-pointer"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
}
