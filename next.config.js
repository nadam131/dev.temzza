/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/matches",
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,
};
