const webpack = require('webpack')
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
const withSass = require('@zeit/next-sass')
// const path = require("path");
// const glob = require("glob");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack');
   
module.exports = withSass({
  sassLoaderOptions: {
    outputStyle: 'compressed'
  },
  webpack: (config) => {
    
    config.module.rules.push(
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader',
      }
    )
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    return config
  }
})
