
/// <reference types="cypress"/>

describe('Página de cadastro', () => {
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400,
        }).as('stubPost')
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('falha@email.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
})