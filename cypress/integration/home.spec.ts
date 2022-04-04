describe('Boitapinte', () => {
  it('should display title on home page', () => {
    cy.visit('/');
    cy.contains('h1', 'Boitapinte');
    cy.contains('h2', 'Coming soon');
    cy.contains('p', 'Boitapinte : suivez la consomation des clients, detectez vos meilleurs ventes, prévoyez vos remplacement de futs......');
  });
});
