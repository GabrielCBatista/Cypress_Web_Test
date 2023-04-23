Feature: Login

  Background:
  Given que estou na página de login

  Scenario: Campos obrigatórios não preenchidos
  Given que estou na página de login
  When eu não preencho nenhum campo
  And eu clico no botão de login
  Then mostra ver uma mensagem de campo obrigatório

  Scenario: Login com senha incorreta
  Given que estou na página de login
  When eu preencho meu email incorreto
  And eu preencho uma senha incorreta
  And eu clico no botão de login
  Then devo ver uma mensagem de erro de login

  Scenario: Login com senha correta
  Given que estou na página de login
  When eu preencho meu email
  And eu preencho a senha correta
  And eu clico no botão de login
  Then mostra ser redirecionado para a página de perfil