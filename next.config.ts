import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: "_static",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
