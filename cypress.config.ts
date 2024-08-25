const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://10.50.0.23:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
    },
  },
});
