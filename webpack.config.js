'use strict';
let path = require('path')
let webpack = require('webpack')
var rucksack = require("rucksack-css")({
  autoprefixer: true
});

//let ExtractTextPlugin = require("extract-text-webpack-plugin");
//let cssExtract = new ExtractTextPlugin("[name].css");

module.exports = {
  entry: {
    bundle: './src/js/index.jsx',
    styles: './src/sass/index.scss'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        //loader: cssExtract.extract('style-loader', 'css-loader', 'postcss-loader', 'sass-loader')

      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  postcss: webpack => [ rucksack ],
  plugins: [
      //cssExtract
  ]
}
