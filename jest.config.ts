import { createDefaultEsmPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultEsmPreset();
const config: JestConfigWithTsJest = {
  ...presetConfig,
  verbose: true,
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.ts?$": ["ts-jest", { useESM: true }],
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },
};

export default config;
