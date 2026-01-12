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
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:; " +
              "connect-src 'self' https: http: wss:; " +
              "img-src 'self' data: https:; " +
              "style-src 'self' 'unsafe-inline' https:; " +
              "font-src 'self' data: https:; " +
              "frame-src *;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
