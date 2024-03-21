const connection = require('./connection');
const inquirer = require("inquirer");
const mysql = require("mysql");
// set up connection to database
db.connection(function (err) {
    if (err) throw err;
    console.log("******************************");
    console.log("       EMPLOYEE TRACKER       ");
    console.log("******************************");
    startingQuestion();
});

function startingQuestion() {
    inquirer.questions([
        {
            type: 'list',
            name: 'intro',
            message: 'What would you like to do?',
            choices:[
                'View Employees',
                'Add New Employee',
                'Update Employee Roles',
                'View All Roles',
                'Add New Roles',
                'View All Departments',
                'Add New Departments',
                'Return'
            ]
        }
    ]).then((answer) => {
        switch(answer.intro) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add New Employee':
                addNewEmployee();
                break;
            case
        }
    })
}