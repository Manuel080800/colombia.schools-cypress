import 'cypress-plugin-steps';

import { ViewPage } from '../../pages/ViewPage.js';
import { LoginAssertion } from '../../assertions/LoginAssertion.js';

const user = Cypress.env('username');
const password = Cypress.env('password');

describe('View Union/Section/Association', () => {
  const viewPage = new ViewPage();
  const loginAssertion = new LoginAssertion();

  beforeEach(() => {
    cy.login(user, password);
    cy.visit('/');
    loginAssertion.loginSuccess();
  });

  it('Change node successful', () => {
    cy.step('Change node');
    viewPage.visit();
    cy.wait(2000);
    cy.fillAutocomplete('#nodoJerarquiaInput', 'Instituto Adventista del Carare - Cimitarra');
    viewPage.changeNode();
    cy.wait(2000);
  });
});