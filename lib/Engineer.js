const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, Id, email, gitHub) {
        super(name, Id, email);
        this.gitHub = gitHub
    }
  
    printStats() {
     
    }
  }
  module.exports = Engineer
  