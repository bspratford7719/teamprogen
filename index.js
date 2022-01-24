
'use strict';
const inquirer = require('inquirer');

console.log('Welcome to the team!');

const employeeTypes = ['Engineer', 'Intern'];

const employeeDetails = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter name of employee',
        default: '',
    },
    {
        type: 'input',
        name: 'employee id',
        message: 'Please enter employee ID number:',
        default: 'id number',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'email address',
    },
];

const engineerDetails = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:',
    }, 
    {
        type: 'list',
        name: 'employeeAddition',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'Finished Building My Team'],
    }, 
]

const internDetails = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter School Name:',
    },
    {
        type: 'list',
        name: 'employeeAddition',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'Finished Building My Team'],
    }, 
]

function enterEmployeeDetails(employeeType){
    inquirer.prompt(employeeDetails).then((answers) => {
        //create that employee
        if(employeeType == 'Engineer') {
            enterEngineerDetails(answers)
        }
        if(employeeType == 'Intern') {
            enterInternDetails(answers);
        }
    })
}

function enterEngineerDetails(employeeDetails) {
    inquirer.prompt(engineerDetails).then((engineerAnswers) => {
        //create that engineer

        if(employeeTypes.includes(engineerAnswers.employeeAddition)) {
            enterEmployeeDetails(engineerAnswers.employeeAddition)
        }
    })
}

function enterInternDetails(employeeDetails) {
    inquirer.prompt(internDetails).then((internAnswers) => {
        //create that intern

        if(employeeTypes.includes(internAnswers.employeeAddition)) {
            enterEmployeeDetails(internAnswers.employeeAddition)
        }
    })
}

const managerQuestions = [
    {
        type: 'input',
        name: 'managername',
        message: 'Please enter name of manager',
        default: 'manager name',
    },
    {
        type: 'input',
        name: 'employee id',
        message: 'Please enter employee ID number:',
        default: 'id number',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'email address',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'Please provide office number',
        default: 'office number',
    },
    {
        type: 'list',
        name: 'employeeAddition',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'Finished Building My Team'],
    },   
];

inquirer.prompt(managerQuestions).then((answers) => {
    if(answers.employeeAddition == ('Engineer'|| 'Intern')) {
        enterEmployeeDetails(answers.employeeAddition)
    }


   //  console.log(JSON.stringify(answers, null, '  '));
});
