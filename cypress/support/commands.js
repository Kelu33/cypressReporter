// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// -- TasteDive request command --
Cypress.Commands.add('TasteDive', (query) => {
    cy.request(
        `https://tastedive.com/api/similar?q=${query.type}:${query.name}`
    )
})
//
// -- Google Books API request command --
Cypress.Commands.add("GetBook", (id) => {
    cy.request({
      url: `https://www.googleapis.com/books/v1/volumes/${id}`,
      failOnStatusCode: false
    })
});
