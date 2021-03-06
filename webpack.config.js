const path = require('path')
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    library: 'objectConvert',
    libraryTarget: 'umd',
    filename: 'objectConvert.js',
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map'
}
