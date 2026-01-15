import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  swcMinify: false,
  experimental: {
    workerThreads: false,
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: "/", // The root route
        destination: "/home", // The route to redirect to
        permanent: true, // Use 301 for permanent redirect
      },
    ];
  },
};

export default nextConfig;
