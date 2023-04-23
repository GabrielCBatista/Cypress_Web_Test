const produtoJson = require('../../fixtures/produto.json');
class ProdutoPage {

	clickProdutopage() {
	  cy.get('[data-testid=cadastrar-produtos]').click();
	}
	verifyProdutoPage() {
	  cy.get('h1').should('be.visible');
	}
  preencherNome(nome) {
    cy.get('[data-testid=nome]').type(nome);
  }

  preencherPreco(preco) {
    cy.get('[data-testid=preco]').type(preco);
  }

  preencherDescricao(descricao) {
    cy.get('[data-testid=descricao]').type(descricao);
  }

  preencherQuantidade(quantidade) {
    cy.get('[data-testid=quantity]').type(quantidade);
  }
  clicarEmCadastrar() {
    cy.get('[data-testid=cadastarProdutos]').click();
  }
  verifyPaginaListaProdutos() {
    cy.wait(1000); // Espera 1 segundo para a tabela carregar
    cy.get('[data-testid=listar-produtos]').click();
  }
  verifyListProdutoPage() {
    cy.get('[data-testid=listarProdutos]').click();
    cy.get('h1').should('be.visible');
  }
  deletarProdutoDaLista(){
    cy.contains('tbody tr', produtoJson.nome)
    .invoke('index')
    .then((index) => {
      const linha = index + 1; 
      cy.get(`:nth-child(${linha}) > :nth-child(6) > .row > .btn-danger`).click();
    });
  }
  verifyDeletarProduto() {
    cy.contains('tbody tr', produtoJson.nome).should('not.exist');
  }
}
export default ProdutoPage;