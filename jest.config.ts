import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^components(.*)$": "<rootDir>/src/components$1",
    // Add aliases here ---> "^alias(.*)$": "<rootDir>/src/alias-path$1", <---
  },
};

module.exports = config;
