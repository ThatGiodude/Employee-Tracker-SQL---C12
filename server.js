const connection = require('./connection/connection');
const inquirer = require("inquirer");
const mysql = require("mysql");
// set up connection to database

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
            
        };
    });
};


connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
    startApp();
});