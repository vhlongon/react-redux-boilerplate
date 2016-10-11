import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './dist/assets',
    filename: 'bundle.js',
    publicPath: '/dist/assets/'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 4242,
    open: true
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.jpg', '.png'],
    modulesDirectories: ['src', 'node_modules', 'js', 'scss', 'images']
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      // browse to http://localhost:3434/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 4240,
      proxy: 'http://localhost:4242/',
      files: ['dist/css/*.css', 'dist/images/*.*', '**/*.html', '!node_modules/**/*.html']
    }),
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
        // loaders: ['style', 'css?sourceMap', 'sass?sourceMap', 'postcss-loader']
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
