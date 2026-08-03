import type { NextConfig } from "next";

/** Project Pages live at /landing; leave empty for local/custom-domain root. */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "_static",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
