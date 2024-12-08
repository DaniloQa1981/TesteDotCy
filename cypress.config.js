const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dotgroup.com.br',  // URL do site
    setupNodeEvents(on, config) {
      // Configurações adicionais, se necessário
    },
  },
});
