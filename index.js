const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/index')
let teamArray = [] //empty. We'll push each new employee in here.
function questions() {
inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee is this?",
            choices: ['manager', 'engineer', 'intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is the employee's employee ID?"
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is the employee's email address?"
        }
        // {
        //     type: 'input',
        //     name: 'officeNumber',
        //     message: "What is the employee's office number?"
        // },
        // {
        //     type: 'list',
        //     name: 'menu',
        //     message: "What would you like to do next?",
        //     choices: ['add an engineer', 'add an intern', 'finish building my team']
        // }   
    ])
    .then((initialAnswers) => {
        if (initialAnswers.employeeType === 'manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the employee's office number?"
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: "What would you like to do next?",
                    choices: ['add another employee', 'finish building my team']
                }
            ])
            .then((managerAnswers) => {
                let manager1 = new Manager(initialAnswers.employeeName, initialAnswers.employeeID, initialAnswers.employeeEmail, managerAnswers.officeNumber);
                console.log(manager1);
                teamArray.push(manager1);
                if(managerAnswers.menu === 'add another employee') {
                    questions();
                } else {
                    generatePage();
                }
            })


        }
        else if(initialAnswers.employeeType === 'engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'What is your Github username?'
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: "What would you like to do next?",
                    choices: ['add another employee', 'finish building my team']
                }
            ])
            .then((engineerAnswers) => {
                let engineer1 = new Engineer(initialAnswers.employeeName, initialAnswers.employeeID, initialAnswers.employeeEmail, engineerAnswers.gitHub);
                console.log(engineer1);
                teamArray.push(engineer1)
                if(engineerAnswers.menu === 'add another employee') {
                    questions();
                } else {
                    generatePage();
                }
            })
        }
        else if(initialAnswers.employeeType === 'intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school are you attending?'
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: "What would you like to do next?",
                    choices: ['add another employee', 'finish building my team']
                }
            ])
            .then((internAnswers) => {
                let intern1 = new Intern(initialAnswers.employeeName, initialAnswers.employeeID, initialAnswers.employeeEmail, internAnswers.school);
                console.log(intern1);
                teamArray.push(intern1);
                if(internAnswers.menu === 'add another employee') {
                    questions();
                } else {
                    generatePage();
                }
            })
        }
    })
}
questions();