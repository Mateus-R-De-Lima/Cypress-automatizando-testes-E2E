

describe('Página de login', () => {
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="input-loginEmail"]').type('mateus@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})

describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verifica mensagem de texto', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();

    })

});