/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false
    }
  }
};
