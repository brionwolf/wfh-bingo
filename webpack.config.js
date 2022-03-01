const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const devMode = env && env.NODE_ENV ? env.NODE_ENV : 'none';
  const devtool = devMode === 'production' ? 'nosources-source-map' : 'eval';
  const isProduction = devMode === 'production';
  const optimization = {};

  const entry = { main: path.resolve(__dirname, 'src/index.js') };

  const stats = 'minimal';

  const module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src/styles')],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  };

  const plugins = [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './static', to: './' }],
    }),
  ];

  const output = {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  };

  if (isProduction) {
    optimization.minimize = true;
    optimization.minimizer = [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ];
  }

  return {
    mode: devMode,
    devtool: devtool,
    entry: entry,
    stats: stats,
    module: module,
    plugins: plugins,
    output: output,
  };
};
