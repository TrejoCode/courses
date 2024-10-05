module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // Relación entre babel y tsconfig.json
          '@app': './app',
          '@assets': './assets',
        },
      },
    ],
  ],
};
