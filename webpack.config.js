const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const devMode = env && env.NODE_ENV ? env.NODE_ENV : 'none';

  const entryPoints = path.join(__dirname, 'src', 'index.js');

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

  return {
    mode: devMode,
    entry: entryPoints,
    stats: stats,
    module: module,
    plugins: plugins,
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
    },
  };
};
