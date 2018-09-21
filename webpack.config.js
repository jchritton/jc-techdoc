module.exports = {
    entry: __dirname + '/index.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
      ]
    }
  };
  