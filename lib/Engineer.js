const inquirer = require('inquirer');
class Engineer  {
  constructor(name, id,Office,email,Github) {
    this.name=name;
    this.employee_id = id;
    this.office_num=Office;
    this.email=email;    
    this.Github=Github;
  }
}

module.exports = Engineer;
