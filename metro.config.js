/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const extraNodeModules = {
	'~': path.resolve(__dirname + '/srcs/'),
};

const watchFolders = [
	path.resolve(__dirname + '/srcs/')
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules
  },
  watchFolders
};
