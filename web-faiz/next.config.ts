import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portofolio-muhammadfaizfathurrahman', // <-- Ini yang bikin CSS lu balik
  images: {
    unoptimized: true,
  },
};

export default nextConfig;