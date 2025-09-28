import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react-hook-form", "@dnd-kit/core"],
  },
};

export default nextConfig;
