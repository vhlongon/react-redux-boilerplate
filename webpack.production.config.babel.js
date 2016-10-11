import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './dist/js',
    filename: 'bundle.js',
    publicPath: 'dist/js/'
  },
  // Step 1: Source Maps
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.jpg', '.png'],
    modulesDirectories: ['src', 'node_modules', 'scss', 'images']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // Step 2: Node environment
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
        // include: path.join(__dirname, 'scripts'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css?sourceMap', 'sass?sourceMap', 'postcss-loader'])
      },
      {
        test: /\.(png|jpg|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=81920' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/scss')]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
