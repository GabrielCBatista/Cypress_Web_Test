class LoginPage {
  verifyLoginPage() {
    cy.get('.imagem');
  }

  fillEmail(email) {
    cy.get('[data-testid=email]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('[data-testid=senha]').clear().type(password);
  }

  clickSubmitButton() {
    cy.get('[data-testid=entrar]').click();
  }

  alertErrorShouldBeVisible() {
    cy.wait(1000); // Espera 1 segundo
    cy.get('.alert > :nth-child(2)').should('be.visible');
  }

  verifyProfilePage() {
    cy.wait(1000); // Espera 1 segundo
    cy.get('h1').should('be.visible');
  }
  
  submitButtonShouldBeDisabledperfilx() {
    cy.wait(1000); // Espera 1 segundo
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(2)').should('be.visible');
  }
}

export default LoginPage;
