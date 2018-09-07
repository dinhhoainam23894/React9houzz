const webpack = require('webpack');
const TargetsPlugin = require("targets-webpack-plugin");
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
const withSass = require('@zeit/next-sass');
   
module.exports = withSass({
  sassLoaderOptions: {
    outputStyle: 'compressed'
  },
  webpack: (config ,{ dev }) => {
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
    if (dev) {
      config.plugins.push(new TargetsPlugin({
        browsers: ["last 2 versions", "chrome >= 41"]
      }))
    }
    return config;
  }
})
