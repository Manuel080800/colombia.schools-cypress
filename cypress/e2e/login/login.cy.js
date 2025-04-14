import 'cypress-plugin-steps';
import { LoginPage } from '../../pages/LoginPage.js';
import { LoginAssertion } from '../../assertions/LoginAssertion.js';
import { Generator } from '../../generators/generator.js';

import { fakerES as faker } from '@faker-js/faker';


const user = Cypress.env('username');
const password = Cypress.env('password');

describe('Test Login', () => {
  const loginPage = new LoginPage();
  const loginAssertion = new LoginAssertion();

  const generate = new Generator(faker);
  generate.setPeriodStudent(2023, '1', '1');
  const admissions = generate.getAdmissionData(1);

  console.log('Admissions:', admissions);

  beforeEach(() => {
    loginPage.visit();
  });

  it('Login successful', () => {
    cy.step('Login in platform');
    loginPage.fillUsername(user);
    loginPage.fillPassword(password);
    loginPage.submit();

    cy.step('Validate successful login');
    loginAssertion.loginSuccess();
    cy.wait(5000);
  });
});