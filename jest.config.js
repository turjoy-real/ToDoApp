module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleFileExtensions: ['js', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};
