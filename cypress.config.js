const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dotgroup.com.br', 
    setupNodeEvents(on, config) {
    },
  },
});
