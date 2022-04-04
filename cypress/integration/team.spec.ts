describe('Boitapinte', () => {
  it('should display the title', () => {
    cy.visit('/team');
    cy.contains('h2', 'L\'Equipe');
  });

  it('should display the full team', () => {
    cy.visit('/team');
    cy.get('bap-team-member').should('have.length', 4);
    cy.contains('h3', 'Alexandre');
    cy.contains('h3', 'Damien');
    cy.contains('h3', 'Nicolas');
    cy.contains('h3', 'William');
  });

  it('should display all the img', () => {
    cy.visit('/team');
    cy.get('img').should('have.length', 4);
  });
  
  it('should display all job', () => {
    cy.visit('/team');
    cy.contains('#job','Responsable du développement Marketing et Commercial.');
    cy.contains('#job','Ingénieur mécanique.');
    cy.contains('#job','Docteur en génie industriel.');
    cy.contains('#job','Ingénieur informatique.');
  });

  
  it('should display alex mail', () => {
    cy.visit('/team');
    cy.contains('a','Alex@boitapinte.fr');
  });
});
