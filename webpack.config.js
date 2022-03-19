const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./assets/src/js/app.js"),
  watch: true,
  devtool: "source-map",
  output: {
    filename: "index_bundle.js",
    path: path.resolve(__dirname, "./assets/public/js"),
    library: "$",
    libraryTarget: "umd",
    sourceMapFilename: "./index_budle.js.map",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
