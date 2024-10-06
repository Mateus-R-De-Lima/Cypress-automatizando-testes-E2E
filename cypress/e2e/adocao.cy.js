/// <reference types="cypress"/>



describe('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”', () => {
    it('Visitar a Pagina', () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.get('.button').click()
    })

    it("Visita a página de principal do AdoPet e testa os botão de home", () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click()

    })

    it('Visite a página de /login do Adopet', () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")

    })


    it('Visite a página de /home do Adopet', () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")

    })

    it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”', () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")
        cy.get('.header__message').click()
    })





})