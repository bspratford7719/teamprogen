const baseClass = require ("./employee");

class Engineer extends baseClass.Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'engineer';
    }

    get getGithub() {
        return this.github;
    }
    get getRole() {
        return this.role;
    }
}

module.exports = {Engineer: Engineer}
