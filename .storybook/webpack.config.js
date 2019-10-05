const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader:'sass-resources-loader',
            options: {
              resources: ['./assets/scss/style.scss']
        }}],
        include: path.resolve(__dirname, '../'),
      }
    ]
  }
}