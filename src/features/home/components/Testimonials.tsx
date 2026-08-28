import React from 'react';
import Container from '@/components/common/Container';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I thank Pubrica for making my work highly professional through validated methods of editing.",
      name: "Dr. Emily Howard",
      title: "University of Canada",
      avatar: "/images/Home/Emily-Howard.png", // Replace with your actual asset path
    },
    {
      quote: "Pubrica made my research article recognised. Their quality amplified in the impact of my paper. Thank you, Pubrica.",
      name: "Dr. Bryan R. Nicholas",
      title: "University of Cambridge",
      avatar: "/images/Home/Dr. Bryan R. Nicholas.png", // Replace with your actual asset path
    },
    {
      quote: "As a senior researcher, I was looking out for a reliable publication service. I stumbled upon Pubrica. Now, here I am with my second doctorate. Thanks, Pubrica!",
      name: "Prof. Ursula Martin",
      title: "GenTech Labs",
      avatar: "/images/Home/Prof-Ursula-Martin.webp", // Replace with your actual asset path
    },
  ];

  return (
    <section id="testimonials" className="w-full py-7 bg-[#f0f4f8] select-none font-sans">
      <Container className="flex flex-col items-center">
        
        {/* Centered Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-950 font-display mb-12">
          Customers&apos; Experience
        </h2>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {testimonials.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start w-full">
              
              {/* Speech Bubble Box */}
              <div className="relative w-full bg-[#e6e6e6]/60 rounded-md p-6 min-h-[140px] flex items-center mb-6 border border-gray-200/40 after:content-[''] after:absolute after:bottom-[-8px] after:left-8 after:w-0 after:h-0 after:border-l-[8px] after:border-l-transparent after:border-r-[8px] after:border-r-transparent after:border-t-[8px] after:border-t-[#e6e6e6]/60">
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed font-medium">
                  {item.quote}
                </p>
              </div>

              {/* Identity Footer */}
              <div className="flex items-center gap-3 pl-2">
                {/* User Avatar */}
                <div className="h-12 w-12 rounded-full overflow-hidden border border-gray-300 shadow-sm flex-shrink-0 bg-gray-200">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Meta details */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-gray-950 font-display">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-normal">
                    {item.title}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}