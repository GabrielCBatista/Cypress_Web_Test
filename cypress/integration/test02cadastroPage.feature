Feature: Cadastro

Background:
Given que estou na página de cadastro

Scenario: Campos obrigatórios não preenchidos
    When eu não preencho nenhum campo
    And eu clico no botão de cadastrar
    Then devo ver uma mensagem de campo obrigatório

Scenario: E-mail inválido
    When eu preencho um e-mail inválido
    And eu preencho os demais campos corretamente
    And eu clico no botão de cadastrar
    Then devo ver uma mensagem de e-mail inválido

Scenario: Senhas não inválida
    When eu preencho os campos corretamente, exceto o campo senha
    And eu clico no botão de cadastrar
    Then devo ver uma mensagem de senhas obrigatória

Scenario: Cadastro como administrador
    When eu preencho todos os campos corretamente, como administrador"
    And eu clico no botão de cadastrar
    Then devo ver uma mensagem de cadastro realizado com sucesso

Scenario: Exclusão de usuário
    Given que estou na página de lista de usuários
    When eu clico em excluir o usuário mais recente
    Then o usuário não deve mais estar visível na lista de usuários
