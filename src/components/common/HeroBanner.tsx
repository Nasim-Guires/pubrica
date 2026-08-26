import React from 'react';

interface BannerProps {
    title?: string;
    description?: string;
    /** HTML tag for the heading to maintain optimal SEO hierarchy (default: 'h1') */
    headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export const HeroBanner: React.FC<BannerProps> = ({
    title,
    description,
    headingAs: HeadingElement = 'h1',
    className = '',
}) => {
    // Render nothing if both title and description are omitted
    if (!title && !description) return null;

    return (
        <section
            aria-label={title || 'Section Banner'}
            className={`w-full bg-gradient-to-r from-[#1b2526] via-[#2c3d3e] to-[#1b2526] py-16 px-4 md:px-8 text-white ${className}`}
        >
            <div className="max-w-6xl mx-auto border border-white/60 p-8 md:p-12 text-center shadow-lg">
                {title && (
                    <HeadingElement className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-4 text-white">
                        {title}
                    </HeadingElement>
                )}
                {description && (
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-200 max-w-5xl mx-auto">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default HeroBanner;