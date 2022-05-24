const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {port: 3000},
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname, "src"),
      template: "./index.html",
    }),
    new CleanWebpackPlugin()
  ],

  module: {

    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

};
