export default {
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/.internal/",
  ],
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
