class Engineer extends Employee {
    constructor (github) {
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