/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({
  // your existing Next.js config here
});

export default nextConfig;
