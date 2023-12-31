module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.(tsx|ts)",
    "!<rootDir>/**/*.test.(tsx|ts)",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageReporters: ["lcov", "text-summary"],
  testEnvironment: "jest-environment-jsdom",
};
