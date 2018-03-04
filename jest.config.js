module.exports = {
  setupFiles: ['./jest/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './jest/fileTransformer.js'
  },
  resolver: 'jest-webpack-resolver',
  testPathIgnorePatterns : ['../node_modules/']
};