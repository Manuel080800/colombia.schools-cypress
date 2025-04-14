import 'cypress-plugin-steps';

import { AdmissionPage } from '../../pages/AdmissionPage.js';
import { LoginAssertion } from '../../assertions/LoginAssertion.js';
import { Generator } from '../../generators/generator.js';

import { fakerES as faker } from '@faker-js/faker';

const user = Cypress.env('username');
const password = Cypress.env('password');

describe('Create admission', () => {
  const admissionPage = new AdmissionPage();
  const loginAssertion = new LoginAssertion();
  const generate = new Generator(faker);
  generate.setPeriodStudent(2023, '1', '1');

  const admissions = generate.getAdmissionData(1);

  beforeEach(() => {
    cy.login(user, password);
    cy.visit('/');
    loginAssertion.loginSuccess();
  });

  it('Access the admission', () => {
    cy.step('Access admission');
    admissionPage.visit();
    cy.wait(2000);
    admissionPage.newAdmission();
    cy.wait(2000);
  });
});