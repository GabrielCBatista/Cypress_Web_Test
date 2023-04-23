const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
const loginJson = require('../../fixtures/login.json');
const produtoJson = require('../../fixtures/produto.json');

const ProdutoPage = require('../pages/produtoPage');
const produtoPage = new ProdutoPage();

Given(/^que estou na página de Cadastro de produto$/, () => {
    cy.acessarServerest();
    cy.loginWithCredentials(loginJson.emailum, loginJson.passwordum);
});

When(/^eu preencho os campos de cadastro de produto corretamente$/, () => {
	produtoPage.clickProdutopage();
 	produtoPage.verifyProdutoPage();
	produtoPage.preencherNome(produtoJson.nome);
	produtoPage.preencherPreco(produtoJson.preco);
	produtoPage.preencherDescricao(produtoJson.descricao);
	produtoPage.preencherQuantidade(produtoJson.quantidade);
});

When(/^eu clico em cadastrar$/, () => {
	produtoPage.clicarEmCadastrar();
});

Then(/^devo ser redirecionado para a página de lista de produtos$/, () => {
	
	produtoPage.verifyPaginaListaProdutos();
});

Given(/^que estou na página de lista de produtos$/, () => {
	produtoPage.verifyListProdutoPage();
});

When(/^eu clico em excluir o produto cadastrado$/, () => {
	produtoPage.deletarProdutoDaLista();
});

Then(/^o produto não deve mais estar visível na lista de produtos$/, () => {
	produtoPage.verifyDeletarProduto();
});
