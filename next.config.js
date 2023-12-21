/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withImages({
    images: {
      unoptimized: true,
    },
    output: 'export',
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // JavaScript minification
        config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Remove console.log statements
              },
            },
          })
        );
  
        // CSS minification
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      }
  
      return config;
    },
  });
