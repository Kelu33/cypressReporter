/// <reference types="cypress" />

describe("Passing test for access to a book", () => {
    it("should return a book with corresponding ID", () => {
        cy.GetBook('TWKQPwAACAAJ').as('response')
        
        cy.get('@response').should( resp => {
            expect(resp.status).to.eql(200);
            expect(resp.body).to.not.be.null;
            expect(resp.body.id).to.eql("TWKQPwAACAAJ");
            expect(resp.body.volumeInfo.title).to.eql("Fondation");
            expect(resp.body.volumeInfo.authors[0]).to.eql("Isaac Asimov");
        })              
    });
});
