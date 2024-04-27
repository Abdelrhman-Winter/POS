/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // Modify webpack configuration
    config.optimization = {
      // splitChunks: {
      //   chunks: "all",
      //   cacheGroups: {
      //     default: false,//Disables the default cache group, which is typically used for splitting common modules shared across multiple entry points.
      //     vendors: false,//Disables the vendors cache group, which is typically used for splitting third-party library modules into separate chunks.
      //   },
      // },
    };

    return config;
  },
};

export default nextConfig;
