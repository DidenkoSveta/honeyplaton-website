const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // Если нужен корневой публичный путь, раскомментируйте следующую строку
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true, // Для красивой печати HTML, но в продакшене лучше без этого
              // В Webpack 5 root опция была убрана, используйте alias или require
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // Изменённое правило для обработки изображений
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            // Получаем путь к файлу относительно исходной папки 'src'
            const relativePath = path.relative(path.resolve(__dirname, 'src'), pathData.filename);
            // Заменяем обратные слэши на прямые и удаляем начальный 'images/' если он есть
            return `images/${relativePath.replace(/\\+/g, '/')}`.replace('images/images/', 'images/');
          },
        },
      },
      // Другие правила при необходимости
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    watchFiles: ['src/**/*.pug', 'src/**/*.scss', 'src/**/*.js'],
  },
  mode: 'development', // Используйте 'production' для минификации ресурсов
};
