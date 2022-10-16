/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com"]
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }
}
