/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["mui-chips-input"],
  reactStrictMode: true,
  images: {
    domains: [
      "aaah0mnbncqtinas.public.blob.vercel-storage.com",
      "i3.ytimg.com",
    ],
  },
};

export default nextConfig;
