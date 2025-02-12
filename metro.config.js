/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const {withSentryConfig} = require('@sentry/react-native/metro');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {};

module.exports = withSentryConfig(
  withSentryConfig(mergeConfig(getDefaultConfig(__dirname), config)),
);
