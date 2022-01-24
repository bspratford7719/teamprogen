
'use strict';
const inquirer = require('inquirer');
const managerClass = require('./lib/manager.js');
const engineerClass = require('./lib/engineer.js')
const internClass = require('./lib/intern.js')
const fs = require('fs')

console.log('Welcome to the team!');

const employeeTypes = ['Engineer', 'Intern'];
const createdEmployees = []

const employeeDetails = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter name of employee',
        default: '',
    },
    {
        type: 'input',
        name: 'employeeId',
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

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter name of manager',
        default: 'manager name',
    },
    {
        type: 'input',
        name: 'employeeId',
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
        name: 'officeNumber',
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


function enterEmployeeDetails(employeeType){
    inquirer.prompt(employeeDetails).then((answers) => {
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
        let newEngineer = new engineerClass.Engineer(
            employeeDetails.name,
            employeeDetails.employeeId,
            employeeDetails.email,
            engineerAnswers.github
        )

        createdEmployees.push(newEngineer);

        if(employeeTypes.includes(engineerAnswers.employeeAddition)) {
            enterEmployeeDetails(engineerAnswers.employeeAddition)
        }
        else {
            console.log(JSON.stringify(createdEmployees, null, '  '));
            generateHtmlOutput();
        }
    })
}

function enterInternDetails(employeeDetails) {
    inquirer.prompt(internDetails).then((internAnswers) => {
        //create that intern
        let newIntern = new internClass.Intern(
            employeeDetails.name,
            employeeDetails.employeeId,
            employeeDetails.email,
            internAnswers.school
        )
        createdEmployees.push(newIntern)

        if(employeeTypes.includes(internAnswers.employeeAddition)) {
            enterEmployeeDetails(internAnswers.employeeAddition)
        }
        else {
            console.log(JSON.stringify(createdEmployees, null, '  '));
            generateHtmlOutput();
        }
    })
}

function generateHtmlOutput(){
    let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Team Profile Generator</title><link rel="stylesheet" href="index.css" /></head><body>';

    let columns = [];

    createdEmployees.forEach(employee => {
        Object.keys(employee).forEach(key => {
            if(!columns.includes(key)){
                columns.push(key)
            }
        })
    })

    // columns.forEach(column => {
    //     html += '<th>' + column + '</th>'
    // })

    // html += '</tr></thead></tbody>';

    createdEmployees.forEach(employee => {
        html += '<div>';
        html += '<pre>' + JSON.stringify(employee, null, '  ') + '</pre>'
        // Object.keys(employee).forEach(key => {
        //     html += '<td>' + employee[key] + '</td>'
        // })
        html+= '</div>'
    })

    fs.writeFileSync('./dist/index.html', html)
}


inquirer.prompt(managerQuestions).then((answers) => {
    let manager = new managerClass.Manager(
        answers.managerName,
        answers.managerId,
        answers.email,
        answers.officeNumber
    )
    createdEmployees.push(manager);
    
    if(answers.employeeAddition == ('Engineer'|| 'Intern')) {
        enterEmployeeDetails(answers.employeeAddition)
    }
    else {
        console.log(JSON.stringify(createdEmployees, null, '  '));
        generateHtmlOutput();
    }
});

