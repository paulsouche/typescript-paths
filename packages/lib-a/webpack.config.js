const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  externals: ['@typescript-paths/lib-b'],
  mode: 'production',
  module: {
    rules: [
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader', options: { onlyCompileBundledFiles: true } }] },
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
