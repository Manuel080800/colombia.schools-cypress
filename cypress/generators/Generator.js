import StudentGenerator from "./data/StudentGenerator.js";
import BillingGenerator from "./data/BillingGenerator.js";
import AttendantGenerator from "./data/AttendantGenerator.js";

export class Generator {
    constructor(faker) {
        this.studentGenerator = new StudentGenerator(faker);
        this.billingGenerator = new BillingGenerator(faker);
        this.attendantGenerator = new AttendantGenerator(faker);
    }

    setPeriodStudent(year, level, degree) {
        this.studentGenerator.setPeriodStudent(year, level, degree);
    }

    getAdmissionData(count) {
        const admissions = [];

        for (let i = 0; i < count; i++) {
            admissions.push({
                student: this.studentGenerator.generateStudents(1)[0],
                billing: this.billingGenerator.generateBilling(1)[0],
                attendant: this.attendantGenerator.generateAttendants(2),
            });
        }

        return admissions;
    }
}
