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
            case 'Update Employee Roles,':
                updateEmployeeRoles();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add New Roles':
                addNewRoles();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add New Departments':
                addNewDepartments();
                break;
            case 'Return':
                console.log("Goodbye!");
                db.end();
                break;
        }
    });
};

function viewEmployees() {
    const sql = 
    `SELECT employee.id,
    employee.first_name,
    employee.last_name,
    role.title AS role,
    department.name AS department,
    role.salary,
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON (role.id = employee.role_id) INNER JOIN department ON (department.id = role.department_id) ORDER BY employee.id;`
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startingQuestion();
    });
};

function addNewEmployee() {
    const sq12 =`SELECT * FROM employee`;
    db.query(sql2, (error, response) => {
        employeeList = response.map(employees => ({
            name: employeees.first_name.concat("", employees.last_name),
            value: employees.id
        }));
    const sql13 = `SELECT * FROM role`;
    dbquery(sq13, error, response) => {
        roleList = response.map(role => ({
            name:role.title,
            value: role.id
        }));
        return inquirer.createPromptModule([
            {
                type: 'input',
                name: 'first',
                message: "What is the employee's first name?",
            }, {
                type: 'input',
                name: 'last',
                message: "What is the employee's last name?",
            }, 
        ])
    }
    })
}


connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
    startApp();
});