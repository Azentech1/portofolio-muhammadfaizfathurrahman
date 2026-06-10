import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portofolio-muhammadfaizfathurrahman',
  assetPrefix: '/portofolio-muhammadfaizfathurrahman', // <-- Tambahin ini biar Tailwind lu kepanggil
  images: {
    unoptimized: true,
  },
};

export default nextConfig;