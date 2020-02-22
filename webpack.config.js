const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@a': path.resolve(__dirname, 'src/app'),
      '@c': path.resolve(__dirname, 'src/common'),
      '@st': path.resolve(__dirname, 'src/styles/'),
      '@search': path.resolve(__dirname, 'src/search'),
      '@fsearch': path.resolve(__dirname, 'src/flickrsearch'),
      '@fsearchD': path.resolve(__dirname, 'src/flickrsearch/duck'),
      '@u': path.resolve(__dirname, 'src/utils')
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
