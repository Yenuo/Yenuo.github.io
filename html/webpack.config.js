var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: './main.js',

  output: {
    path: path.join(__dirname, 'view'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      {test:/\.css$/,exclude: /node_modules/, loader: 'style-loader!css-loader'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {test: /.(png|woff|woff2|eot|svg|ttf)$/, loader: 'url-loader?limit=100000'}
    ]
  }
}
