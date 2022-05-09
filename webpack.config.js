const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js','.d.ts'],
  },
  output: {
    filename: 'cozy.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
