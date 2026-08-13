import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

export default function ScientificGrantReviewExtendedPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Top Intro Section */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
              alt="Grant Review Services Research Lab"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Grant review services
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Grant funds play a key role in groundbreaking research initiatives. In the research community, there is a limited amount of funding and the number of scientists and universities who seek such grants are many. At Pubrica we help you from novel idea conceptualization to writing and securing a grant funding so that you can focus on your core research work. The Pubrica grant consulting offerings provides friendly advice that will help you secure the funds that you need.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our team of grant writers assist universities and scientists at institutions. We do our research, gather information from various sources and review complicated sections. We complete the proposals on time and submit the application before deadline. Our scientific researchers are aware of the grant review process and hence we can work closely with your team. We identify funding avenues, plan, train, evaluate aims, evaluate and develop proposals, submit and follow up.
            </p>
          </div>
        </section>

        {/* Sample Edits Section */}
        <section className="bg-gray-100 py-12 px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sample edits</h2>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                Download the provided samples of our editors&apos; process to see the benefits you get from our Grant Review Editing Services.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center space-x-2">
              <span className="bg-slate-900 text-white px-4 py-2 rounded text-sm font-semibold shadow">01. Standard Editing</span>
              <span className="bg-slate-800 text-gray-300 px-4 py-2 rounded text-sm font-semibold">02. Premium Editing</span>
              <span className="bg-slate-800 text-gray-300 px-4 py-2 rounded text-sm font-semibold">03. Advanced Editing</span>
            </div>

            {/* Sample Box */}
            <div className="border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-80 rounded border border-gray-200 overflow-hidden bg-slate-50">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                    alt="Standard Editing Sample Document"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">01. Standard Editing</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our integrated DX and CX solutions are focused on building human connections without ever losing sight of what matters most – the value of corporate culture and its impact on engagement and innovation. Our integrated DX and CX solutions are focused on building human connections without ever losing sight of what matters most.
                  </p>
                  <button className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2 px-4 rounded transition shadow">
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD SAMPLE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality, Security & Timely Cards */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm space-y-2 border-t-4 border-t-teal-600">
            <h4 className="font-bold text-slate-900 text-lg">Guaranteed Quality</h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              In the rare case our work fails to delight you, we&apos;ll re-work on it till you&apos;re 100% happy. <br /><br />
              Our commitment to excellence ensures reliable results and impactful outcomes in medical research.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm space-y-2 border-t-4 border-t-blue-600">
            <h4 className="font-bold text-slate-900 text-lg">On Time Always</h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              We always help you meet your deadlines, often, by turning around work in just 8 hours <br /><br />
              Pubrica&apos;s punctuality ensures your projects stay on track, meeting deadlines with efficiency and reliability.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm space-y-2 border-t-4 border-t-teal-600">
            <h4 className="font-bold text-slate-900 text-lg">Advanced security</h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              We work hard to protect your work and making all our experts and employees honour a strict NDA. <br /><br />
              Ensuring utmost data security through advanced encryption and strict protocols, offering peace of mind to all clients.
            </p>
          </div>
        </section>

        {/* Delivery & Pricing Table Section */}
        <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Delivery &amp; Pricing</h3>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Unlock unparalleled expertise with Pubrica&apos;s comprehensive research support services. Experience premium quality at competitive pricing tailored to meet your project needs.
            </p>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-teal-700 text-white font-semibold text-sm py-3 px-4 text-center">
              <div>Services</div>
              <div>Price</div>
              <div>Delivery Time</div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-200 py-3 px-4 text-sm text-center items-center bg-white">
              <div className="font-medium text-gray-800">lorem dummy</div>
              <div className="text-gray-700">$</div>
              <div className="text-gray-700">7 Days</div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-200 py-3 px-4 text-sm text-center items-center bg-gray-50">
              <div className="font-medium text-gray-800">+Add-Ons</div>
              <div className="text-gray-700"></div>
              <div className="text-gray-700"></div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-200 py-3 px-4 text-sm text-center items-center bg-white">
              <div className="font-medium text-gray-800">Bibliography Kit</div>
              <div className="text-gray-700">$</div>
              <div className="text-gray-700">Delivered along with original service</div>
            </div>
          </div>
        </section>

        {/* Guarantee Banner & Success Stories */}
        <section className="bg-slate-900 text-white py-12 px-6 mt-12">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-800/80 p-8 rounded-lg border border-slate-700 shadow-lg">
              <div className="relative w-28 h-28 flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop"
                  alt="100% Satisfaction Guarantee Seal"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-lg md:text-xl font-bold">Grant Review Editing Services</h4>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  &ldquo;Pubrica&apos;s Grant Review Editing Services refine your proposals for maximum impact. Our expert editors ensure clarity, coherence, and professionalism, enhancing your chances of success.&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-center tracking-wide">SCRIPTING SUCCESS STORIES</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-700 rounded-lg p-6 bg-slate-800/60 shadow-md flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-28 h-36 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=300&auto=format&fit=crop"
                      alt="Clinical Problem-Solving Journal Book Cover"
                      fill
                      className="object-cover rounded border border-gray-700"
                    />
                  </div>
                  <div className="space-y-2 text-xs md:text-sm">
                    <p className="italic text-gray-300">
                      &ldquo;You get the entire package at Scientific Writing &amp; Publishing. Regulatory writing, clinical report writing, journal writing, biostatistical reports, medical animation, and physician writing. They are easy to work with. What more do you want?&rdquo;
                    </p>
                    <div className="pt-2 flex justify-between font-semibold text-gray-200 border-t border-gray-700">
                      <span>Author Name</span>
                      <span className="text-teal-400">Impact Factor: 4.236</span>
                    </div>
                    <div className="text-xs text-gray-400">Jean-Claude Benaud</div>
                  </div>
                </div>

                <div className="border border-gray-700 rounded-lg p-6 bg-slate-800/60 shadow-md flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-28 h-36 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&auto=format&fit=crop"
                      alt="Clinical Practice Journal Book Cover"
                      fill
                      className="object-cover rounded border border-gray-700"
                    />
                  </div>
                  <div className="space-y-2 text-xs md:text-sm">
                    <p className="italic text-gray-300">
                      &ldquo;You get the entire package at Scientific Writing &amp; Publishing. Regulatory writing, clinical report writing, journal writing, biostatistical reports, medical animation, and physician writing. They are easy to work with. What more do you want?&rdquo;
                    </p>
                    <div className="pt-2 flex justify-between font-semibold text-gray-200 border-t border-gray-700">
                      <span>Author Name</span>
                      <span className="text-teal-400">Impact Factor: 4.236</span>
                    </div>
                    <div className="text-xs text-gray-400">Jean-Claude Benaud</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Bottom Footer Spacing */}
      <footer className="bg-slate-950 text-white py-8 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Pubrica. All rights reserved.</p>
      </footer>
    </div>
  );
}