/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "192.168.1.120:3000",
        "calvin-bochynski-ng-portfolio.netlify.app",
        "calvin.bochynski-ng.com",
      ],
    },
  },
};

module.exports = nextConfig;
