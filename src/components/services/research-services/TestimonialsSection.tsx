import React from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  journalCoverUrl: string;
  flagUrl: string;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title = "Testimonials",
  description = "Researchers across domains rely on Pubrica's research services to transform intricate scientific ideas into well-structured, insightful deliverables that drive impact and advance scholarly communication. Here's what they experienced.",
  testimonials = [
    {
      quote:
        "Thanks to Pubrica's comprehensive research support, my paper on epidemiological modelling was accepted in BMC Public Health. Their team ensured the manuscript met every editorial requirement, from statistical analysis to structured presentation.",
      author: "PROF. MICHAEL T",
      role: "Academic Scholar, UK",
      journalCoverUrl: "/images/jama-oncology-cover.jpg", // Replace with actual path
      flagUrl: "/images/flags/uk.svg", // Replace with actual path or icon component
    },
    {
      quote:
        "Pubrica supported me with research documentation and statistical review for my oncology study, which was later published in the International Journal of Cancer Research and Treatment. Their domain expertise was key to the success of my submission.",
      author: "DR. RAVI K",
      role: "Biomedical Scientist, Singapore",
      journalCoverUrl: "/images/intl-surgery-cover.jpg", // Replace with actual path
      flagUrl: "/images/flags/singapore.svg", // Replace with actual path or icon component
    },
  ],
}) => {
  return (
    <section className="w-full bg-[#f4f9fc] py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="mb-10">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">
            {description.split("research services")[0]}
            <a href="#" className="text-[#3b82f6] hover:underline">
              research services
            </a>
            {description.split("research services")[1]}
          </p>
        </div>

        {/* Testimonials Grid / Track */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#083c4c]/20 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-sm min-h-[340px]"
            >
              {/* Inner Gray Quote Block */}
              <div className="bg-[#cccccc]/40 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 flex-1 mb-5">
                {/* Journal Cover Graphic */}
                <div className="w-full sm:w-[160px] max-h-[140px] flex-shrink-0 bg-white shadow-md border border-gray-200 overflow-hidden rounded flex items-center justify-center">
                  <img
                    src={item.journalCoverUrl}
                    alt="Journal Publication Cover"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback placeholder formatting if image fails to load
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="text-xs text-center font-bold text-gray-400 p-2 sm:block hidden">
                    JOURNAL GRAPHIC
                  </span>
                </div>

                {/* Quote Text */}
                <div className="flex-1 flex items-center">
                  <p className="text-gray-800 text-sm leading-relaxed font-normal text-justify">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Footer Meta Details Row */}
              <div className="flex items-end justify-between w-full px-1">
                <div className="space-y-0.5">
                  <h4 className="text-[#083c4c] font-extrabold text-sm tracking-wide">
                    &mdash; {item.author}
                  </h4>
                  <p className="text-gray-500 text-xs italic font-medium">
                    {item.role}
                  </p>
                </div>

                {/* Country Flag Circle */}
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
                  <img
                    src={item.flagUrl}
                    alt="Country Indicator"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            aria-label="Go to slide 1"
            className="w-3 h-3 border border-[#083c4c] bg-white transition-all focus:outline-none"
          />
          <button
            aria-label="Go to slide 2"
            className="w-3 h-3 bg-[#083c4c] transition-all focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};
