export class AdmissionPage {
    visit() {
        cy.visit('/admission');
    }

    newAdmission() {
        cy.get('button.btn-primary').contains('Nuevo').click();
    }
}