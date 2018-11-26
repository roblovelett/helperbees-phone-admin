const path = require('path');

const config = {
  entry: './index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, './client/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './client/build'
  }
}

module.exports = config;