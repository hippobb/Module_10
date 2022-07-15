const inquirer = require('inquirer');

class Intern  {
  constructor(name, id,Office,email,school) {
    this.name=name;
    this.employee_id = id;
    this.office_num=Office;
    this.email=email;    
    this.school=school;
  }
}

module.exports = Intern;
