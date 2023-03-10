const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.amazon.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    defaultCommandTimeout: 10000
  },
});
