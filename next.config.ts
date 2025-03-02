import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.unsplash.com",
            },
            {
                protocol: "http",
                hostname: "*.unsplash.com",
            },
        ],
    },
};

export default nextConfig;
