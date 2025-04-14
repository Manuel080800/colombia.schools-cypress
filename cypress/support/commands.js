import  {LoginPage } from '../pages/LoginPage.js';

Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
  }, {
    cacheAcrossSpecs: true
  });

});

Cypress.Commands.add('logout', () => {
  cy.session('logout', () => {
    cy.visit('/logout');
  }, {
    cacheAcrossSpecs: false
  });
});

Cypress.Commands.add('goTo', (menu) => {
  cy.contains('.menu-title', menu).click();
});

Cypress.Commands.add('goToSubmenu', (menu, subMenu) => {
  cy.contains('.menu-title', menu).click();
  cy.contains('.menu-sub .menu-title', subMenu).click();
});
