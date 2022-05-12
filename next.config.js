/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.istockphoto.com", "thumbs.dreamstime.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // reactStrictMode: true,
};

module.exports = nextConfig;
