const path = require('path'),
      webpack = require('webpack');

module.exports = {
  entry: './App.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
    }),
  ],
}
