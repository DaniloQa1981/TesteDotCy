import HomePage from '../pages/HomePage';

describe('Busca e valida o texto "+ 28 anos de experiência" no site Dot Group', () => {
  const homePage = new HomePage();  

  it('Deve validar que a página contém o texto "+ 28 anos de experiência"', () => {
    homePage.visit();  
    homePage.validateText('+ 28 anos de experiência');
    cy.screenshot();  
  });
});
