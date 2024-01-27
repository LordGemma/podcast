const path = require("path");

module.exports = {
  entry: "./index.jsx", // your main JS file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // the output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // using regex to match the js and jsx files
        exclude: /node_modules/, // excluding the node_modules directory
        use: {
          loader: "babel-loader", // use this loader
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // file types to handle
  },
};
