/// <reference types="cypress" />

describe("Failed book access test", () => {
    it("should return a 503 error", () => {
        cy.GetBook('badID').as('response')
        
        cy.get('@response').should( resp => {
            expect(resp.status).to.eql(503);
        })      
    });
});
