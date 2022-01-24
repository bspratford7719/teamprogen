const baseClass = require ("./employee");

class Manager extends baseClass.Employee {
    constructor (officeNumber) {
        super();
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

module.exports = {Manager: Manager}
