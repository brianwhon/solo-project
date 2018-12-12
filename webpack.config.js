const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    rules: [
      {test: /\.js$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader',
                query: {
                  presets: ['react']
                }
              }]
        },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [HTMLWebpackPluginConfig]
};
