import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

interface BannerProps {
    title?: string;
    subtitle?: string;
    description?: string;
    /** HTML tag for the heading to maintain optimal SEO hierarchy (default: 'h1') */
    headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export const HeroBanner: React.FC<BannerProps> = ({
    title,
    subtitle,
    description,
    headingAs: HeadingElement = 'h1',
    className = '',
}) => {
    // Render nothing if title, subtitle, and description are all omitted
    if (!title && !subtitle && !description) return null;

    return (
        <section
            aria-label={title || subtitle || 'Section Banner'}
            className={`w-full bg-gradient-to-b from-[#113839]/75 to-[#113839] py-8 px-4 md:px-8 text-white ${poppins.className} ${className}`}
        >
            <div className="max-w-6xl mx-auto border border-white/60 p-4 md:p-6 text-center shadow-lg">
                {title && (
                    /* Heading: 24px on mobile, 30px on tablet, 36px on desktop (all > 16px) */
                    <HeadingElement className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-2 text-white">
                        {title}
                    </HeadingElement>
                )}
                {subtitle && (
                    /* Subtitle rendering when provided */
                    <p className="text-sm md:text-base font-semibold text-white/90 mb-2">
                        {subtitle}
                    </p>
                )}
                {description && (
                    /* Description: Exactly 16px across all screens */
                    <p className="text-base leading-relaxed text-gray-200 max-w-5xl mx-auto font-normal">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default HeroBanner;