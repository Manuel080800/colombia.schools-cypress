export default class AttendantGenerator {
    constructor(faker) {
        this.faker = faker;
    }

    getDocumentType() {
        return this.faker.helpers.arrayElement(['CC', 'TI', 'CE', 'RC']);
    }

    getDocumentNumber() {
        return this.faker.string.numeric(10);
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

    getRelationship() {
        return this.faker.helpers.arrayElement(['Father', 'Mother', 'Sibling', 'Guardian', 'Other']);
    }

    getReligion() {
        return this.faker.helpers.arrayElement(['Christian', 'Catholic', 'Muslim', 'Jewish', 'Atheist']);
    }

    getProfession() {
        return this.faker.name.jobTitle();
    }

    getOccupation() {
        return this.faker.name.jobType();
    }

    getEmploymentStatus() {
        return this.faker.helpers.arrayElement(['Employed', 'Unemployed', 'Self-employed', 'Retired']);
    }

    getLivesWithStudent() {
        return this.faker.helpers.arrayElement(['Yes', 'No']);
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

    generateAttendants(count) {
        const attendants = [];

        for (let i = 0; i < count; i++) {
            attendants.push({
                documentType: this.getDocumentType(),
                documentNumber: this.getDocumentNumber(),
                firstName: this.getFirstName(),
                middleName: this.getMiddleName(),
                lastName: this.getLastName(),
                secondLastName: this.getSecondLastName(),
                relationship: this.getRelationship(),
                religion: this.getReligion(),
                profession: this.getProfession(),
                occupation: this.getOccupation(),
                employmentStatus: this.getEmploymentStatus(),
                livesWithStudent: this.getLivesWithStudent(),
                cellphone: this.getCellphone(),
                landline: this.getLandline(),
                email: this.getEmail(),
                address: this.getAddress(),
                state: this.getState(),
                city: this.getCity()
            });
        }

        return attendants;
    }
}
