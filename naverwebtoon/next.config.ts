import type { NextConfig } from "next";

const NextConfig = {
  images: {
    domains: ['image-comic.pstatic.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-comic.pstatic.net',
        pathname: '/webtoon/**',
      },
    ],
  },
};

module.exports = NextConfig;
