// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const {
  wrapWithReanimatedMetroConfig
} = require('react-native-reanimated/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const expoConfig = getDefaultConfig(__dirname);

// expoConfig.resolver.unstable_enablePackageExports = true;

// Metro will resolve the `.wasm` file so Skia can render on Web
expoConfig.resolver.assetExts.push('wasm');

// Export the expoConfig wrapped with the ReanimatedMetroConfig for Reanimated Logging
module.exports = wrapWithReanimatedMetroConfig(expoConfig);
