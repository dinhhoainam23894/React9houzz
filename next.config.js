const webpack = require('webpack')
const path = require("path");
const glob = require("glob");
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    webpack: (config) => {
      // config.module.rules.push(
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       {
      //         loader: 'emit-file-loader',
      //         options: {
      //           name: 'dist/[path][name].[ext]',
      //         },
      //       },
      //       'babel-loader',
      //       'styled-jsx-css-loader',
      //     ],
      //   }
      // )
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});
  
      config.plugins.push(new webpack.DefinePlugin(env));
      return config
    }
  })
