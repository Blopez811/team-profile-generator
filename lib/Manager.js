const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, Id, email, number) {
        super(name, Id, email);
        this.number = number 
    }
  
    printStats() {
     
    }
  }
  module.exports = Manager
  