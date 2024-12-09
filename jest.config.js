export default {
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
