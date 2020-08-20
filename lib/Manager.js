// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        console.log(`${this.name}'s office number is ${this.officeNumber}`)
        return this.officeNumber;
    }

    getRole(){
        console.log(`This employee's role is ${this.role}`);
        return this.role;
    }
}

module.exports = Manager;