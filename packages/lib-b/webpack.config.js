const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  module: {
    rules: [
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] },
    ],
  },
  name: 'build',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
