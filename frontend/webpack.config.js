//  Dependencies
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sharp = require('responsive-loader/sharp');

//  Environment
const isDevelopment = process.env.NODE_ENV === 'development';

const miniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: path.resolve(__dirname, './build'),
    hmr: isDevelopment,
  },
};
const styleLoader = {loader: 'style-loader'};
const cssLoader = {// CSS
  loader: 'css-loader',
  options: {
    import: true,
    importLoaders: 1,
    modules: {
      context: path.resolve(__dirname, ''),
      localIdentName: '[name]__[local]'
    },
    sourceMap: isDevelopment,
    url: true
  }
};
const postCssLoader = {// POST CSS
  loader: 'postcss-loader',
  options: {
    sourceMap: isDevelopment,
    plugins: () => [
      require('postcss-import')(),
      require('postcss-cssnext')(),
      require('cssnano')()
    ]
  }
};
const sassLoader = {// SASS
  loader: 'sass-loader',
  options: {sourceMap: isDevelopment}
};
const lessLoader = {// LESS
  loader: 'less-loader',
  options: {
    sourceMap: isDevelopment,
    strictMath: true,
    noIeCompat: true
  }
};

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false
  })
];

let rules = [
  {// HTML
    test: /\.(html)$/,
    use: {
      loader: 'html-loader',
      options: {
        attrs: [':data-src']
      }
    }
  },
  {// CSS
    test: /\.css$/,
    use: [
      styleLoader,
      miniCssExtractLoader,
      cssLoader,
      postCssLoader
    ]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      query: {
        plugins: ['transform-class-properties'],
        presets: [
          '@babel/preset-react',
          "@babel/preset-env"
        ]
      }
    }
  },
  {// JSON
    test: /\.json$/,
    use: 'json-loader'
  },
  {//-- GZIP
    test: /\.gzip?$/,
    enforce: 'pre',
    use: [
      {//-- GZIP-LOADER
        loader: 'gzip-loader'
      }
    ]
  },
  {// FONTS
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts'
        }
      }
    ]
  },
  {//-- (PNG || JPG)
    test: /\.(png|jpg|gif)$/i,
    use: [
      {loader: 'babel-loader'},
      {//-- RESPONSIVE-LOADER
        loader: 'responsive-loader',
        options: {adapter: sharp}
      },
      {//-- FILE-LOADER
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          //  publicPath: path.resolve(__dirname, 'src/assets'),
          outputPath: 'assets/images',
          context: 'project',
          emitFile: false,
          postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
        }
      }
    ]
  },
  {//-- SVG
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {loader: 'babel-loader'},
      {
        loader: 'svg-url-loader',
        options: {
          //  limit: 10485760,
          //  mimetype: 'images/svg+xml',
          fallback: {
            loader: 'responsive-loader',
            options: {adapter: sharp}
          }
        }
      }
    ]
  }
];

if (isDevelopment) rules.push(
  {// SASS
    test: /\.(sass|scss)$/,
    use: [
      styleLoader,
      cssLoader,
      //  postCssLoader,
      sassLoader
    ]
  },
  {// LESS
    test: /\.less$/,
    use: [
      cssLoader,
      //  postCssLoader,
      lessLoader
    ]
  }
);

else rules.push(
  {// SASS
    test: /\.(sass|scss)$/,
    use: [
      miniCssExtractLoader,
      cssLoader,
      //  postCssLoader,
      sassLoader
    ]
  },
  {// LESS
    test: /\.less$/,
    use: [
      miniCssExtractLoader,
      cssLoader,
      //  postCssLoader,
      lessLoader
    ]
  }
);

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {extensions: [".js", ".jsx"]},
  plugins,
  module: {rules},
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.resolve(__dirname, "../build"),
    port: 9000
  }
};