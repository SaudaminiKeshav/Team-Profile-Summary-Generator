// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Employee constructors are name, id, email
        super(name, id, email);

        // unique to Manager
        this.officeNumber = officeNumber;

        // Override "Employee" role from Employee class
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;