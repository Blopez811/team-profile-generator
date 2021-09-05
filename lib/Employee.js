class Employee {
    constructor(name, Id, email) {
      this.name = name;
      this.Id = Id;
      this.email = email;
    }
  
    getName() {
    console.log(name);
    };

    getId() {
        console.log(id);
    };

    getEmail() {
        console.log(email);
    };

    getRole() {
        return `Employee`
    }
  }



  
 module.exports = Employee