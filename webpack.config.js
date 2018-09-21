module.exports = {
    entry: __dirname + '/index.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
      ]
    }
  };
  