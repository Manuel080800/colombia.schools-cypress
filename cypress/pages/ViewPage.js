export class ViewPage {
    visit() {
        cy.visit('/utilities/change-user-node');
    }

    changeNode() {
        cy.get('div.col-sm-4 button.btn-primary').click();
    }
}