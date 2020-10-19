module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    // ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: false}],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties'],
    'babel-plugin-transform-typescript-metadata',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@config': './src/config',
          '@connection': './src/connection',
          '@utils': './src/utils',
          '@routes': './src/routes',
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
}
