import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/Biet-Va-Biet-On",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
