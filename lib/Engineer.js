// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github){
        super(name, id, email, "Engineer");
        this.github = github;
    }

    getGithub(){
        console.log(`${this.name}'s github username is ${this.github}`)
        return this.github;
    }

    getRole(){
        console.log(`${this.name}'s role is ${this.role}`);
        return this.role;
    }
}

module.exports = Engineer;