const path = require('path');
const webpack = require('webpack');

const fs = require('fs');

module.exports = (options) => ({
  entry: options.entry,

  // TODO use ... notation
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings

  module: {
    rules: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      // Transform our own .css files with PostCSS and CSS-modules
      test: /\.css$/,
      exclude: /node_modules/,
      loader: options.cssLoaders,
    }, {
      // Avoid transforming vendor CSS with CSS-modules
      // They should remain in global CSS scope.
      test: /\.css$/,
      include: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.png$/,
      loader: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      }],
    }, {
      test: /\.svg$/,
      loader: [{
        loader: 'url-loader',
        options: {
          limit: 0,
        },
      }],
    }],
  },

  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    new webpack.DefinePlugin({
      'process.env.STAGE': JSON.stringify(process.env.STAGE) || JSON.stringify('local'),
      'process.env.API_URL': JSON.stringify(options.url)
    }),
  ]),

  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
    ],
    mainFields: [
      'main',
    ],
  },

  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
});
