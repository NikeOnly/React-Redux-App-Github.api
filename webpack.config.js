module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback:
    // true,
    {
      rewrites: [{
        from: /\/(\d\.)?bundle\.js(\.map)?/,
        to: context => context.match[0]
      }]
    },
    contentBase: './'
  }
};
