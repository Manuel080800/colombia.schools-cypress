export class LoginAssertion {
    loginSuccess() {
        cy.url().should('include', '/');
    }
}