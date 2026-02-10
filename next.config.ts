import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const devConfig = {
  images: {
    unoptimized: false,
  },
};

const prodConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "",
  assetPrefix: "./",
  trailingSlash: true,
};

const nextConfig: NextConfig = {
  ...(isProd ? prodConfig : devConfig),
};

export default nextConfig;
