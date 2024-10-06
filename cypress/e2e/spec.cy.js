
/// <reference types="cypress"/>

describe('Visitar um Site', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Cadastrar').click(); // Contains serve para verificar se existe um elemento e o .click() é para executar a ação de clicar
    cy.get('input[name="nome"]').type('Mateus Lima'); // Get serve para pegar , nesse caso estou pegando o input e definindo um valor com type
    cy.get('input[name="email"]').type('Mateus@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();

  })
})