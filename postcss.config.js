module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'custom-properties': false
      }
    }),
    require('autoprefixer')
  ]
};
