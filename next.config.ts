import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
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