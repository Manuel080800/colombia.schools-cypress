import LoginPage from '../pages/LoginPage.js';

Cypress.Commands.add('login', (username, password) => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
  });
