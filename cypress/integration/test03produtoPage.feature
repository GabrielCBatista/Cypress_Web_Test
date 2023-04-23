Feature: Cadastro e exclusão de produtos e usuários

  Background:
    Given que estou na página de Cadastro de produto

  Scenario: Cadastro de produto
    When eu preencho os campos de cadastro de produto corretamente
    And eu clico em cadastrar
    Then devo ser redirecionado para a página de lista de produtos

  Scenario: Exclusão de produto
    Given que estou na página de lista de produtos
    When eu clico em excluir o produto cadastrado
    Then o produto não deve mais estar visível na lista de produtos
