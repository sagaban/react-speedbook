// Initialization
const webpack = require('webpack');

// File ops
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Folder ops
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// PostCSS support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

// Constants
const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const STYLE = path.join(__dirname, 'app/style.css');
const PUBLIC = path.join(__dirname, 'app/public');
const TEMPLATE = path.join(__dirname, 'app/templates/index.html');
const NODE_MODULES = path.join(__dirname, 'node_modules');

const PACKAGE = Object.keys(
  require('./package.json').dependencies
);


module.exports = {
  // Paths and extensions
  entry: {
    app: APP,
    style: STYLE,
    vendor: PACKAGE
  },
  output: {
    path: BUILD,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  // Loaders for processing different file types
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        include: [APP, NODE_MODULES]
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: [APP, NODE_MODULES]
      }
    ]
  },
  // Configure PostCSS plugins
  postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },
  // Remove comment if you require sourcemaps for your production code
  // devtool: 'cheap-module-source-map',

  // Webpack plugins
  plugins: [
    // Required to inject NODE_ENV within React app.
    // Reduntant package.json script entry does not do that, but required for .babelrc
    // Optimizes React for use in production mode
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production') // eslint-disable-line quote-props
      }
    }),
    new CleanPlugin([BUILD]),
    new CopyWebpackPlugin([
      { from: PUBLIC, to: BUILD }
    ],
      {
        ignore: [
          // Doesn't copy Mac storage system files
          '.DS_Store'
        ]
      }
    ),
    // Auto generate index.html
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      // JS placed at the bottom of the body element
      inject: 'body',
      // Use html-minifier
      minify: {
        collapseWhitespace: true
      }
    }),
    // Extract CSS to a separate file
    new ExtractTextPlugin('[name].[chunkhash].css'),

    // Remove comment to dedupe duplicating dependencies for larger projects
    // new webpack.optimize.DedupePlugin(),

    // Separate vendor and manifest files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    // Minify JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
