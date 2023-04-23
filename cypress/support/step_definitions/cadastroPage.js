const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
const loginJson = require('../../fixtures/login.json');

const CadastroPage = require('../pages/cadastroPage');
const cadastroPage = new CadastroPage();

Given(/^que estou na página de cadastro$/, () => {
    cadastroPage.acessarPaginaCadastro();
});

When(/^eu clico no botão de cadastrar$/, () => {
    cadastroPage.clicarBotaoCadastrar();
});  

Then(/^devo ver uma mensagem de campo obrigatório$/, () => {
    cadastroPage.verMensagemCampoObrigatorio();
});

When(/^eu preencho um e-mail inválido$/, () => {
    //
});

When(/^eu preencho os demais campos corretamente$/, () => {
    const { nomedois, passworddois } = loginJson;
    cadastroPage.preencherNome(nomedois);
    cadastroPage.preencherPassword(passworddois);
    cadastroPage.preencherCheckbox();
  });

When(/^eu clico no botão de cadastrar$/, () => {
    cadastroPage.clicarBotaoCadastrar();
});

Then(/^devo ver uma mensagem de e-mail inválido$/, () => {
    cadastroPage.verMensagemEmailInvalido();
});

When(/^eu preencho os campos corretamente, exceto o campo senha$/, () => {
    const { nomedois, emaildois } = loginJson;
    cadastroPage.preencherNome(nomedois);
    cadastroPage.preencherEmail(emaildois);
});

Then(/^devo ver uma mensagem de senhas obrigatória$/, () => {
    cadastroPage.verMensagemSenhaObrigatoria();
});


When(/^eu preencho todos os campos corretamente, como administrador"$/, () => {
	const { nomedois, emaildois, passworddois } = loginJson;
    cadastroPage.preencherNome(nomedois);
    cadastroPage.preencherEmail(emaildois);
    cadastroPage.preencherPassword(passworddois);
    cadastroPage.preencherCheckbox();
});

Then(/^devo ver uma mensagem de cadastro realizado com sucesso$/, () => {
    cadastroPage.verMensagemCadastroSucesso();
});

Given(/^que estou na página de lista de usuários$/, () => {
    cadastroPage.entrar();
	cy.loginWithCredentials(loginJson.emailum, loginJson.passwordum);
    cadastroPage.listUserpages();
});

When(/^eu clico em excluir o usuário mais recente$/, () => {
	cadastroPage.deletarUserDaLista();
});

Then(/^o usuário não deve mais estar visível na lista de usuários$/, () => {
	cadastroPage.verifyDeletarUser();
});