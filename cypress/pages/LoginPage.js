export class LoginPage {
    visit() {
        cy.visit('/login');
    }

    fillUsername(username) {
        cy.get('#username').clear().type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}