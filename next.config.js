/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http:; " +
              "connect-src 'self' https: http:; " +
              "img-src 'self' data: https:; " +
              "style-src 'self' 'unsafe-inline' https:; " +
              "frame-src *;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;