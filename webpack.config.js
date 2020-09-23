const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    include: [
      path.resolve(__dirname, 'src/styles')
    ],
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
]

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: { rules },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './static', to: './' }
      ]
    })
  ]
}
