const baseClass = require ("./employee");

class Intern extends baseClass.Employee {
    constructor (school) {
        super();
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

module.exports = {Intern: Intern}
