import 'cypress-plugin-steps';
import { LoginPage } from '../../pages/LoginPage.js';

const validUser = Cypress.env('username');
const validPass = Cypress.env('password');
const invalidUser = 'usuario_invalido';
const invalidPass = '1234';

describe('Test Suite: Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Caso 1: Login exitoso con credenciales válidas', () => {
    loginPage.fillUsername(validUser);
    loginPage.fillPassword(validPass);
    loginPage.submit();

    // Verificaciones
    cy.url().should('include', '/');
  });

  it('Caso 2: Login fallido con credenciales inválidas', () => {
    loginPage.fillUsername(invalidUser);
    loginPage.fillPassword(invalidPass);
    loginPage.submit();

    // Verificaciones
    cy.url().should('eq', Cypress.config('baseUrl') + '/login?error=true');
  });
});