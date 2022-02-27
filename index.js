// PACKAGES REQUIRED TO RUN APP 
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// CREATE CONNECTION TO DATABASE
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Joaq1964',
    database: 'employees_db'
})

connection.connect(function(err){
    if (err) {
        console.log("There was an error! Please try again!")
    } else {
        return menuOptions();
    }
});

// BEGIN PROMPT WITH OPTIONS
function menuOptions(){
    inquirer.prompt ([
        {
            name: "action",
            type: "list",
            message: "what would you like to do today?",
            choices: 
            [   
                "View all Departments",
                "View all Employees",
                "View all Roles",
                "Add a Department",
                "Add an Employee",
                "Exit"
            ]
        }
    ]).then(function(answer) {
        switch(answer.action){
            case "View all Departments":
                viewDepartments();
                break;

            case "View all Employees":
                viewEmployees();
                break;
            
            case "View all Roles":
                viewRoles();
                break;

            case "Add a Department":
                addDepartment();
                break;

            case "Add an Employee":
                addEmployee();
                break;
        }
    })

}

// VIEW DEPARTMENTS
function viewDepartments(){
    connection.query("SELECT * FROM departments", function(err, data){
        console.table(data);
        menuOptions()
    })

}

// VIEW EMPLOYEES
function viewEmployees(){
    connection.query("SELECT * FROM employee_data", function(err, data){
        console.table(data);
        menuOptions()

    })
}

// VIEW ROLES
function viewRoles(){
    connection.query("SELECT * FROM roles", function(err, data){
        console.table(data);
        menuOptions()

    })
}

// ADD DEPARTMENT
function addDepartment(){
    inquirer.prompt([
        {
            name: "departmentName",
            message: "What is the Department name?",
            type: "input",
            validate: nameInput => {
                if(nameInput) {
                     return true;
                 }   else {
                     console.log("Please enter the DEPARTMENT name!");
                     return false;
                 }
            }
            
        }

    ]).then(function(answer){
        connection.query("INSERT INTO departments SET ?", {
            department_name: answer.departmentName
        })
            const query = "SELECT * FROM departments";
                connection.query(query, function(err, res){
                    if (err){
                        console.log("There was an error adding department")
                    } else {
                        console.log("New department has been added to the database!")
                    }
                })

            })
        }    

// ADD EMPLOYEE
function addEmployee(){
    inquirer.prompt([
        {
            // Employee's First Name
            name: "firstName",
            message: "What is the Employee's FIRST name?",
            type: "input",
            validate: nameInput => {
                if(nameInput) {
                     return true;
                 }   else {
                     console.log("Please enter the employees FIRST name!");
                     return false;
                 }
             }
            
        }, 
        
        {
            // Employee's Last Name
            name: "lastName",
            message: "What is the Employee's LAST name?",
            type: "input",
            validate: nameInput => {
                if(nameInput) {
                     return true;
                 }   else {
                     console.log("Please enter the employees LAST name !");
                     return false;
                 }
             }

        },
            
        {   
            // Employee's Role / Role ID
            name: "newRole",
            message: "What is the Role of the Employee?",
            type: "input",
            validate: nameInput => {
                if(nameInput) {
                     return true;
                 }   else {
                     console.log("Please enter the employees ROLE!");
                     return false;
                 }
             }

        },
        
        {
            // Employee's Manager / Manager ID
            name: "empManager",
            message: "Who is the Manager of this Employee? (Enter Manager ID Number) --- Norman Osborn - 1, Otto Octavius - 2, Eddie Brock - 4, Wanda Maximoff - 7, Gwen Stacy - 9",
            type: "input",
            validate: nameInput => {
                if(nameInput) {
                     return true;
                 }   else {
                     console.log("Please enter the Managers name!");
                     return false;
                 }
             }
        }

    ]).then(function(answer){
            connection.query("INSERT INTO employee_data SET ?",
            {
                first_name: answer.firstName, last_name: answer.lastName,role_id: answer.newRole, manager_id: answer.empManager,
                function(err) {
                    if (err) {
                        console.log("There was an error adding the employees info!")
                    } else {
                        console.log("Employee has been added to database!")
                        menuOptions()
                    }
                }

            })
    })
}


