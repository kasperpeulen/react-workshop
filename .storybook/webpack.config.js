const path = require('path');

// load the default config generator.
// const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env, config) => {
  // const config = genDefaultConfig(baseConfig, env);

  // // extend config
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   loaders: ['style-loader', 'css-loader', 'sass-loader'],
  //   include: path.resolve(__dirname, '../'),
  // });
  // config.resolve.extensions.push('.scss');

  return config;
};
