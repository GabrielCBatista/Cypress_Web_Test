Cypress.Commands.add('acessarServerest', () => {
  cy.visit('https://front.serverest.dev/login');
});
Cypress.Commands.add('loginWithCredentials', () => {
  cy.fixture('login').then((login) => {
    cy.get('[data-testid=email]').type(login.emailum);
    cy.get('[data-testid=senha]').type(login.passwordum);
    cy.get('[data-testid=entrar]').click();
    cy.wait(1000);
  });
});