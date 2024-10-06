
/// <reference types="cypress"/>

describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Cadastrar').click(); // Contains serve para verificar se existe um elemento e o .click() é para executar a ação de clicar
    cy.get('[data-test="input-name"]').type('Mateus Lima'); // Get serve para pegar , nesse caso estou pegando o input e definindo um valor com type
    cy.get('[data-test="input-email"]').type('Mateus@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();

  })
})