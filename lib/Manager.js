const inquirer = require('inquirer');
class Manager  {
  constructor(name, id,Office,email) {
    this.name=name;
    this.employee_id = id;
    this.office_num=Office;
    this.email=email;
  }
}



/*
class Manager  {
  constructor(name, id) {
    this.name=name;
    this.employee_id = id;
    this.office;
    this.abc();

  }
  abc(){
    inquirer
    .prompt({
      type: 'text',
      name: 'office',
      message: 'What is your office?',
    })
    .then(({ office }) => {
    this.office=123;
    })
  }


}*/

module.exports = Manager;
