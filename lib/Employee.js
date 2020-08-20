// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role = "Employee"){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        console.log(`Employee's name is ${this.name}`)
        return this.name;
    }

    getId(){
        console.log(`Employee ID is ${this.id}`)
        return this.id;
    }

    getEmail(){
        console.log(`Employee's email is ${this.email}`)
        return this.email;
    }
    
    getRole(){
        console.log(`Employee's Role is ${this.role}`)
        return this.role;
    }
}

module.exports = Employee;