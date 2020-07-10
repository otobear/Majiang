module.exports = {
  entry:  {
    majiang: [ 'babel-polyfill', './src/js/entry.js' ],
    game: './src/js/game.js',
    paipu: './src/js/paipu.js',
    paipu_edit: './src/js/paipu_edit.js',
  },
  output: {
    path: __dirname + '/www/js/',
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
};
