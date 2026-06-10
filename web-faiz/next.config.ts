import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portofolio-muhammadfaizfathurrahman',
  assetPrefix: '/portofolio-muhammadfaizfathurrahman',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;