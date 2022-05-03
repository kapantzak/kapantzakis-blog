const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      crypto: false,
      stream: false,
      process: false,
      http: false,
      net: false,
      zlib: false,
      util: false,
      events: false,
      dns: false,
      tls: false,
      path: false,
      querystring: false,
      os: false,
      kerberos: false,
      snappy: false,
      aws4: false,
      "bson-ext": false,
      "mongodb-client-encryption": false,
      "snappy/package.json": false,
    };

    return config;
  },
};

module.exports = nextConfig;
