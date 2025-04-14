const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
    experimentalStudio: true
  },

  pageLoadTimeout: 30000,
  requestTimeout: 15000,
  defaultCommandTimeout: 10000,
  responseTimeout: 30000,

  viewportWidth: 1440,
  viewportHeight: 900,

  downloadsFolder: 'cypress/downloads',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',

  video: true,
  videoUploadOnPasses: false,
  videoCompression: 32,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,

  env: {
    username: 'admin',
    password: '123456',
  },

  numTestsKeptInMemory: 5,
  experimentalMemoryManagement: true 
});
