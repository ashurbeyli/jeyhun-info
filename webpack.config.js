const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  name: 'client',
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'lib/assets/'),
    }
  },
  entry: ['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        include: path.resolve(__dirname, 'lib/assets/images')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ]
};

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'lib/assets/'),
    }
  },
  entry: ['./lib/renderers/server.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        include: path.resolve(__dirname, 'lib/assets/images')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ]
};

module.exports = [config, serverConfig];