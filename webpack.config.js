const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = (env) => {
  
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

  const plugins = [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './static', to: './' }
      ]
    })
  ]

  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './build')
    },
    module: { rules },
    stats: 'minimal',
    plugins: plugins,
  }
}
