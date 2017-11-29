const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('dest'),
    // filename: 'bundle.[hash].js',
    filename: 'bundle.js',
  },
  // ソースマップを有効にする
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve('node_modules'),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env', {
              'targets': {
                'node': 'current',
                'browsers': [
                  'last 2 and_chr major versions',
                  'iOS >= 10'],
              },
            }],
          ],
        },
      },
      {
        test:/\.html$/,
        loader: 'html-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new RollbarSourceMapPlugin({
    //   accessToken: '5b4a79f82f5441a8927d522eabe174a4',
    //   version: '0.0.3',
    //   publicPath: 'http://localhost:7000',
    // }),
    // new SentryPlugin({
    //   organization: 'testcom',
    //   project: 'javascript',
    //   apiKey: '7c58b0fe8858457384345b5d07bf0cda0630995345be4772bac00b9fcf8096ab',
    //   release: '0.0.1'
    // }),
    // new SentryPlugin({
    //   organization: 'sentry',
    //   project: 'testapps',
    //   apiKey: '50dd9fcc588f4d8b9c9ff7f977251c61',
    //   release: '0.0.2'
    // })
    // new BugsnagSourceMapPlugin({
    //   apiKey: '5cee41dd3e9b5a05916d49144930d1eb',
    //   publicPath: 'http*://yuushionozawa.github.io/tooltest/',
    //   appVersion: '0.0.1',
    // })
    //   new HoneybadgerSourceMapPlugin({
    //     api_key: 'c13f42e2',
    //     assets_url: 'http*://yuushionozawa.github.io/tooltest/',
    //     revision: 'master'
    //   })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    watchContentBase: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 7000,
  },
};