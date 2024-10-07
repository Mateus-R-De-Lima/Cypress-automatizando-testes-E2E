describe('Api Adopet', {
    retries: {
        runMode: 2,
        openMode: 1,
    },
}, () => {
    const tempoEsperado = Math.random() * 1000
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: Cypress.env("authorization")
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})