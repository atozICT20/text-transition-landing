import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      dynamic: 0, // No cache for dynamic routes
      static: 0,  // No cache for static routes
    },
  },
};

export default nextConfig;
