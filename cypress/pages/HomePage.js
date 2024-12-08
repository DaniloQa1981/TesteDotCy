class HomePage {
    
    visit() {
      cy.visit('/');  
    }
  search(query) {
      cy.get('input[type="search"]')  
        .type(`${query}{enter}`);
    }
  
     validateText(expectedText) {
      cy.contains(expectedText) 
        .should('exist'); 
      
    }
    
  }
  
  export default HomePage;
  