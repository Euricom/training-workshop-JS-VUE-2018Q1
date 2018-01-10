const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          // presets: [
          //   ['env', {
          //     targets: {
          //       // https://github.com/ai/browserslist
          //       "browsers": ["last 2 versions", "not ie <= 9"]
          //     }
          //   }]
          // ]
        },
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
};
