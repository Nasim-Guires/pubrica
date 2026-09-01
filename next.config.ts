import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Matches pubrica.com's own URL convention (every real page there ends in "/").
  // Also makes Next.js redirect a no-slash request to the slashed version automatically.
  trailingSlash: true,
  images: {
    // Vercel's Image Optimization quota for this deployment has been exhausted
    // (returns 402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED for any uncached
    // size), which was breaking images site-wide, worse on mobile since it
    // requests different width variants than desktop. Serving images
    // unoptimized avoids that paid pipeline entirely.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google-hosted images (Drive, Photos, etc.)
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Google Images thumbnail CDN
      },
      {
        protocol: 'https',
        hostname: 'pubrica.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'pubrica-blog.vercel.app',
        pathname: '/api/media/**',
      },
    ],
  },
};

export default nextConfig;