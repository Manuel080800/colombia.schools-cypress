export default class StudentGenerator {
    constructor(faker) {
        this.periodStudent = {
            year: undefined,
            level: undefined,
            degree: undefined
        };

        this.faker = faker;
    }

    setPeriodStudent(year, level, degree) {
        this.periodStudent.year = year;
        this.periodStudent.level = level;
        this.periodStudent.degree = degree;
    }

    getPeriodStudent() {
        return this.periodStudent;
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

    getBirthDate() {
        return this.faker.date.birthdate({ min: 5, max: 18, mode: 'age' }).toISOString().split('T')[0];
    }

    getGender() {
        return this.faker.helpers.arrayElement(['M', 'F']);
    }

    getCountry() {
        return this.faker.location.country();
    }

    getState() {
        return this.faker.location.state();
    }

    getCity() {
        return this.faker.location.city();
    }

    getReligion() {
        return this.faker.helpers.arrayElement(['Christian', 'Catholic', 'Muslim', 'Jewish', 'Atheist']);
    }

    getDistrict() {
        return this.faker.helpers.arrayElement(['Christian', 'Catholic', 'Muslim', 'Jewish', 'Atheist']);
    }

    getChurch() {
        return this.faker.helpers.arrayElement(['Christian', 'Catholic', 'Muslim', 'Jewish', 'Atheist']);
    }

    getCellphone() {
        return this.faker.phone.number('300########');
    }

    getLandline() {
        return this.faker.phone.number('1#########');
    }

    getEmail(firstName, lastName) {
        return this.faker.internet.email(firstName, lastName, 'school.com');
    }

    getAddress() {
        return this.faker.location.streetAddress(true);
    }

    getRepeatedYear() {
        return this.faker.helpers.arrayElement(['Yes', 'No']);
    }

    getAdmissionReason() {
        return this.faker.helpers.arrayElement(['Transfer', 'Reentry', 'New enrollment']);
    }

    getPreviousSchoolName() {
        return this.faker.company.name();
    }

    getInstitutionType() {
        return this.faker.helpers.arrayElement(['Public', 'Private']);
    }

    getBloodType() {
        return this.faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
    }

    getMedicalCondition() {
        return this.faker.helpers.arrayElement(['None', 'Asthma', 'Diabetes', 'Epilepsy']);
    }

    getDisability() {
        return {
            visual: this.faker.helpers.arrayElement(['Yes', 'No']),
            motor: this.faker.helpers.arrayElement(['Yes', 'No']),
            hearing: this.faker.helpers.arrayElement(['Yes', 'No']),
            intellectual: this.faker.helpers.arrayElement(['Yes', 'No']),
            physical: this.faker.helpers.arrayElement(['Yes', 'No']),
            none: this.faker.helpers.arrayElement(['Yes', 'No'])
        };
    }

    getSupportElements() {
        return this.faker.helpers.arrayElement(['Yes', 'No']);
    }

    getSocioEconomicStratum() {
        return this.faker.helpers.arrayElement(['1', '2', '3', '4', '5']);
    }

    getHealthPromotingEntity() {
        return this.faker.helpers.arrayElement(['EPS', 'None']);
    }

    getFamilyIncome() {
        return this.faker.helpers.arrayElement(['Yes', 'No']);
    }

    generateStudents(count) {
        const students = [];
        for (let i = 0; i < count; i++) {
            students.push({
                period: this.periodStudent,
                documentType: this.getDocumentType(),
                documentNumber: this.getDocumentNumber(),
                firstName: this.getFirstName(),
                middleName: this.getMiddleName(),
                lastName: this.getLastName(),
                secondLastName: this.getSecondLastName(),
                birthDate: this.getBirthDate(),
                gender: this.getGender(),
                country: this.getCountry(),
                state: this.getState(),
                city: this.getCity(),
                religion: this.getReligion(),
                district: this.getDistrict(),
                church: this.getChurch(),
                cellphone: this.getCellphone(),
                landline: this.getLandline(),
                email: this.getEmail(this.getFirstName(), this.getLastName()),
                address: this.getAddress(),
                repeatedYear: this.getRepeatedYear(),
                admissionReason: this.getAdmissionReason(),
                previousSchoolName: this.getPreviousSchoolName(),
                institutionType: this.getInstitutionType(),
                bloodType: this.getBloodType(),
                medicalCondition: this.getMedicalCondition(),
                disability: this.getDisability(),
                supportElements: this.getSupportElements(),
                socioEconomicStratum: this.getSocioEconomicStratum(),
                healthPromotingEntity: this.getHealthPromotingEntity(),
                familyIncome: this.getFamilyIncome()
            });
        }
        return students;
    }
}
