module.exports = {
  entry:  {
    majiang: [ 'babel-polyfill', './src/js/entry.js' ],
    game: './src/js/game.js',
    paipu: './src/js/paipu.js',
    paipu_edit: './src/js/paipu_edit.js',
    paipu_edit_single: './src/js/paipu_edit_single.js',
    paipu_edit_test: './src/js/paipu_edit_test.js',
    paipu_editer: './src/js/paipu_editer.js',
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
