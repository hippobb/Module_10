const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');
const generatePage = require('../src/page-template');

class My_Team {
  constructor() {
    this.manager = [];
    this.engineer = [];
    this.intern = [];
    }

  initialize() {
    inquirer
      .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?',
      })
      .then(({ name }) => {
        inquirer
          .prompt({
            type: 'text',
            name: 'id',
            message: 'What is your id?',
          })
          .then(({ id }) => {
            inquirer
              .prompt({
                type: 'text',
                name: 'Office',
                message: 'What is your Office_number?',
              })
              .then(({ Office }) => {
                inquirer
                  .prompt({
                    type: 'text',
                    name: 'email',
                    message: 'What is your email?',
                  })
                  .then(({ email }) => {                  
                    this.manager.push(new Manager(name, id,Office,email));
                    this.submenu();
                  })
              })
          })
      })
  }

  html_page (){
    let pageHTML = generatePage(this);
    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw err;
      console.log('Portfolio complete! Check out index.html to see the output!');
    });
  }

  submenu(){
    inquirer
      .prompt({
      type: 'list',
      message: 'Add an engineer or an intern or finish',
      name: 'select',
      choices: ['Engineer','Intern','Finish']
      })
      .then(({ select }) => {
        switch (select) {
          case 'Engineer':
            this.addEngineer();
          break;
          case 'Intern':
            this.addIntern();
          break;
          case 'Finish':
            this.finish();
          break;
        }
      }) 
  }
finish(){           
  this.html_page();       
}

addEngineer(){
  inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?',
  })
  .then(({ name }) => {
    inquirer
      .prompt({
        type: 'text',
        name: 'id',
        message: 'What is your id?',
      })
      .then(({ id }) => {
        inquirer
          .prompt({
            type: 'text',
            name: 'Office',
            message: 'What is your Office_number?',
          })
          .then(({ Office }) => {
            inquirer
              .prompt({
                type: 'text',
                name: 'email',
                message: 'What is your email?',
              })
              .then(({ email }) => { 
                  inquirer
                  .prompt({
                    type: 'text',
                    name: 'Github',
                    message: 'What is your GitHub?',
                  })
                  .then(({ Github }) => {                        
                  this.engineer.push(new Engineer(name, id,Office,email,Github));
                  this.submenu();
                })
              })
          })
      })
  })
}


addIntern(){
  inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?',
  })
  .then(({ name }) => {
    inquirer
      .prompt({
        type: 'text',
        name: 'id',
        message: 'What is your id?',
      })
      .then(({ id }) => {
        inquirer
          .prompt({
            type: 'text',
            name: 'Office',
            message: 'What is your Office_number?',
          })
          .then(({ Office }) => {
            inquirer
              .prompt({
                type: 'text',
                name: 'email',
                message: 'What is your email?',
              })
              .then(({ email }) => { 
                  inquirer
                  .prompt({
                    type: 'text',
                    name: 'school',
                    message: 'What is your school?',
                  })
                  .then(({ school }) => {                        
                  this.intern.push(new Intern(name, id,Office,email,school));
                  this.submenu();
                })
              })
          })
      })
  })
}

}
module.exports = My_Team;
