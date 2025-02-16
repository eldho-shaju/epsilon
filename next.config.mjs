/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    eslint: {
      ignoreDuringBuilds: true,
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
