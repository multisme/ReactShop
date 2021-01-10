module.exports = {
        "roots": [
                "<rootDir>"
        ],
        "testMatch": [
                "**/tests/**/*.+(ts|tsx|js)",
                "**/?(*.)+(spec|test).+(ts|tsx|js)"
        ],
        "transform": {
                "^.+\\.(ts|tsx)$": ["ts-jest"]
        },
        // Setup Enzyme
        "snapshotSerializers": ["enzyme-to-json/serializer"],
        "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
          moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'tests/(.*)': '<rootDir>/tests/$1',
  },
         "moduleDirectories": [
  "node_modules",
  "src"
]
}

