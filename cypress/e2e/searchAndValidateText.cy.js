import HomePage from '../pages/HomePage';

describe('Busca e valida o texto "+ 28 anos de experiência" no site Dot Group', () => {
  const homePage = new HomePage();  // Instancia a página de busca

  it('Deve validar que a página contém o texto "+ 28 anos de experiência"', () => {
    homePage.visit();  // Acessa a página inicial

    // Verifica se a página contém o texto esperado
    homePage.validateText('+ 28 anos de experiência');

    // Cria uma captura de tela da página atual
    cy.screenshot();  // Isso vai gerar um screenshot na pasta cypress/screenshots/
  });
});
