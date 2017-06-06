module.exports = {
  entry: [
    './src/index.js',
     'webpack-dev-server/client?http://localhost:449',
    'webpack/hot/only-dev-server'
  ],
    module: {
   rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },{
         test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.(woff|woff2)$/,
      use: [{
        loader: 'file-loader?prefix=font/&limit=5000'
      }]
    }, {
      test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
      use: [{
        loader: 'file-loader?limit=10000&mimetype=application/octet-stream'
      }]
    }, {
      test: /\.svg(\?v=\d+.\d+.\d+)?$/,
      use: [{
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
      }]
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      use: [{
        loader: 'file-loader'
      }]
    }
      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 449
  }
};