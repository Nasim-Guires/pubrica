"use client";

import { useEffect, useState } from "react";

interface Platform {
  name: string;
  path: string;
  shareUrl: (pageUrl: string) => string;
}

const PLATFORMS: Platform[] = [
  {
    name: "Facebook",
    path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
    shareUrl: (pageUrl) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    shareUrl: (pageUrl) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z",
    shareUrl: (pageUrl) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: "Pinterest",
    path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.364-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.345 2.317.535 3.554.535 6.624 0 11.99-5.367 11.99-11.988C23.988 5.367 18.624 0 12.017 0z",
    shareUrl: (pageUrl) => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}`,
  },
];

/** Reads the page URL on mount — share links need the real browser URL, which isn't available during server render. */
export function ShareButtons() {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  return (
    <div className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-xs">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Share</h3>
      <div className="flex items-center gap-3">
        {PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={pageUrl ? platform.shareUrl(pageUrl) : "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${platform.name}`}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0d3b36] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d={platform.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
