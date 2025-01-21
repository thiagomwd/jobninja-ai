import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  env: {
    GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    APP_PORT: process.env.APP_PORT,
  },
  output: "standalone",
};

export default nextConfig;
