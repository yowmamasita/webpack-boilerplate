var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.html$/,
      loaders: ['html'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file']
    }]
  }
};
