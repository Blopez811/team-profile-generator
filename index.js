const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'employee ID',
            message: "What is the team manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email address',
            message: "What is the team manager's email address?"
        },
        {
            type: 'input',
            name: 'office number',
            message: "What is the team manager's office number?"
        },
        {
            type: 'list',
            name: 'menu',
            message: "What would you like to do next?",
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }   
    ])
    