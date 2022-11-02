// https://docs.cypress.io/api/introduction/api.html

describe('Basic header check', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Lorem ipsum')
  })
})
