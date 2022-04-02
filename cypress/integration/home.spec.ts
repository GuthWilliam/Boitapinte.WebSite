describe('Boitapinte', () => {
  it('should display title on home page', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome');
  });
});
