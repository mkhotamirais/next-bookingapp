import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "b1d8i92a2tqm4xtg.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
