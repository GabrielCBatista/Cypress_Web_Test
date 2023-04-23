const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
const loginJson = require('../../fixtures/login.json');

const LoginPage = require('../pages/loginPage');
const loginPage = new LoginPage();

Given('que estou na página de login', () => {
  cy.acessarServerest();
});

Given('que estou na página de login', () => {
  loginPage.verifyLoginPage();
});

When('eu preencho meu email', () => {
  loginPage.fillEmail(loginJson.emailum);
});

When('eu preencho meu email incorreto', () => {
  loginPage.fillEmail(loginJson.emaildois);
});

When('eu preencho uma senha incorreta', () => {
  loginPage.fillPassword(loginJson.passworddois);
});

When('eu preencho a senha correta', () => {
  loginPage.fillPassword(loginJson.passwordum);
});

When('eu não preencho nenhum campo', () => {
  // Nothing to do here, as we're testing if the login button is disabled
});

When('eu clico no botão de login', () => {
  loginPage.clickSubmitButton();
});

Then('devo ver uma mensagem de erro de login', () => {
  loginPage.alertErrorShouldBeVisible();
});

Then('mostra ser redirecionado para a página de perfil', () => {
  loginPage.verifyProfilePage();
});

Then('mostra ver uma mensagem de campo obrigatório', () => {
  loginPage.submitButtonShouldBeDisabledperfilx();
});
