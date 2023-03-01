/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
    ]
  },
  
  
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

};
