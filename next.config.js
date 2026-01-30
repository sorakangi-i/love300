/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 240, // 120초로 타임아웃 시간 증가
  reactStrictMode: true,
  env: {},
};

module.exports = nextConfig;
