const loginJson = require('../../fixtures/login.json');
class CadastroPage {
  
  acessarPaginaCadastro() {
    cy.acessarServerest();
    cy.get('[data-testid=cadastrar]').click();
    cy.get('.font-robot').should('have.text', 'Cadastro');
  }
  clicarBotaoCadastrar() {
    cy.get('[data-testid=cadastrar]').click();
  }
  verMensagemCampoObrigatorio() {
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(2)').should('be.visible');
    cy.get('[data-testid=password]').should('be.visible');
  }
  preencherEmail(email) {
    cy.get('[data-testid=email]').clear().type(email);
  }
  preencherNome(nome) {
    cy.get('[data-testid=nome]').clear().type(nome);
  }
  preencherPassword(password) {
    cy.get('[data-testid=password]').clear().type(password);
  }
  preencherCheckbox() {
    cy.get('[data-testid=checkbox]').click();
  }
  clicarBotaoCadastrar() {
    cy.get('[data-testid=cadastrar]').click();
  }
  verMensagemEmailInvalido() {
    cy.wait(1000);
    cy.get('.alert > :nth-child(2)').should('be.visible');
  }
  verMensagemSenhaObrigatoria() {
    cy.get('.alert > :nth-child(2)').should('be.visible');
  }
  verMensagemCadastroSucesso() {
    cy.get('.alert-link').should('be.visible');
  }
  verMensagemCadastroSucesso() {
    cy.get('.alert-link').should('be.visible');
  }
  listUserpages(){
    cy.get('[data-testid=listarUsuarios]').click();
  }
  deletarUserDaLista(){
    cy.wait(1000); // Espera 1 segundo para a tabela carregar
    cy.contains('tbody tr', loginJson.nomedois)
    .invoke('index')
    .then((index) => {
      const linha = index + 1; 
      cy.get(`:nth-child(${linha}) > :nth-child(5) > .row > .btn-danger`).click();
    });
  }
  verifyDeletarUser() {
    cy.contains('tbody tr', loginJson.nomedois).should('not.exist');
  }
  entrar(){
    cy.get('[data-testid=entrar]').click();
  }
}
module.exports = CadastroPage;
