class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    get getRole(){
        return this.role;
    }

    get getofficeNumber() {
        return this.officeNumber;
    }
}
