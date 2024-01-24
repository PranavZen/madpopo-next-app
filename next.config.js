const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['madpopo.com'],
    unoptimized: true,
  },
  output: "export",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimizing JavaScript
      
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        })
      );

      // Optimizing CSS
      config.optimization.minimizer.push(
        new OptimizeCSSAssetsPlugin({})
      );
    }

    return config;
  },
};

module.exports = nextConfig;
