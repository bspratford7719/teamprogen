class Intern extends Employee {
    constructor (school) {
        this.school = school;
        this.role = 'Intern';
    }

    get getSchool() {
        return this.school;
    }
    
    get getRole() {
        return this.role;
    }
}