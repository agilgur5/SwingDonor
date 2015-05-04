// webpack.config.js

var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: './build', // This is where images AND js will go
    publicPath: 'http://0.0.0.0:8080', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};