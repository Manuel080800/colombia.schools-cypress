export default class BillingGenerator {
    constructor(faker) {
        this.faker = faker;
    }

    getContributorType() {
        return this.faker.helpers.arrayElement(['Natural Person', 'Legal Entity']);
    }

    getDocumentType() {
        return this.faker.helpers.arrayElement(['CC', 'TI', 'CE', 'RC']);
    }

    getDocumentNumber() {
        return this.faker.string.numeric(10);
    }

    getNIT() {
        return this.faker.string.numeric(10);
    }

    getBusinessName() {
        return this.faker.company.name();
    }

    getTaxRegime() {
        return this.faker.helpers.arrayElement(['Simplified', 'Common']);
    }

    getEconomicActivity() {
        return this.faker.commerce.department();
    }

    getFirstName() {
        return this.faker.person.firstName();
    }

    getMiddleName() {
        return this.faker.person.middleName();
    }

    getLastName() {
        return this.faker.person.lastName();
    }

    getSecondLastName() {
        return this.faker.person.lastName();
    }

    getCellphone() {
        return this.faker.phone.number('3#########');
    }

    getLandline() {
        return this.faker.phone.number('3#########');
    }

    getEmail() {
        return this.faker.internet.email(undefined, undefined, 'example.com');
    }

    getAddress() {
        return this.faker.location.streetAddress();
    }

    getState() {
        return this.faker.location.state();
    }

    getCity() {
        return this.faker.location.city();
    }

    generateBilling(count) {
        const billings = [];

        for (let i = 0; i < count; i++) {
            billings.push({
                contributorType: this.getContributorType(),
                documentType: this.getDocumentType(),
                documentNumber: this.getDocumentNumber(),
                nit: this.getNIT(),
                businessName: this.getBusinessName(),
                taxRegime: this.getTaxRegime(),
                economicActivity: this.getEconomicActivity(),
                firstName: this.getFirstName(),
                middleName: this.getMiddleName(),
                lastName: this.getLastName(),
                secondLastName: this.getSecondLastName(),
                cellphone: this.getCellphone(),
                landline: this.getLandline(),
                email: this.getEmail(),
                address: this.getAddress(),
                state: this.getState(),
                city: this.getCity()
            });
        }

        return billings;
    }
}
