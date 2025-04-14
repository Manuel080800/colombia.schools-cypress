import { Select2Component } from './specs/select2.js';

Cypress.Commands.add('fillAutocomplete', (selector, text) => {
    cy.get(selector)
        .clear()
        .type(text)
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        .blur();
});

Cypress.Commands.add('fillSelect2', (selector, text) => {
    cy.get(Select2Component.component(selector))
        .click({ force: true });

    cy.get(Select2Component.search)
        .type(text, { force: true });

    cy.contains(Select2Component.result, text)
        .click({ force: true });
});
