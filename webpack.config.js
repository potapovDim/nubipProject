const path = require('path')
const webpack = require('webpack')

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: {
    mainReact:'./appReactPart/main.js',
    mainNg2: './appNg2Part/main.ts',
    vendor: './appNg2Part/vendor.ts',
    polyfills: './appNg2Part/polyfills.ts',
  },
  output: {
    path: path.join(__dirname,''),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },
  devServer: {
    port: 3333,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      },
      {test: /\.ts$/, loader: 'awesome-typescript-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  }
}