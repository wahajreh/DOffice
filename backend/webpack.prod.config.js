const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/lambda.js',
  target: 'node',
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    nodeEnv: 'production',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: false,
    port: 9000,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // library: 'serverlessExpressEdge',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new Dotenv()
  ]
}