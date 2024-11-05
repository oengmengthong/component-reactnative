const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const config = {
    transformer: {
      getTransformOptions: async () => ({
        transform: { experimentalImportSupport: false, inlineRequires: false },
      }),
    },
  };

  return mergeConfig(defaultConfig, config);
})();