var mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "F1shB0wl2020!",
  database: "employeesDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runSearch();
});

function runSearch() {
  inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees by Department",
      "View All Employees by Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "Exit"
    ]
  })
  .then(function(answer) {
    switch (answer.action){
    case "View All Employees":
      employeeSearch();
      break;

    case "View All Employees by Department":
      departmentSearch();
      break;

    case "View All Employees by Manager":
      managerSearch();
      break;

    case "Add Employee":
      newEmployee();
      break;

    case "Remove Employee":
      break;

    case "Update Employee Role":
      break;

    case "Update Employee Manager":
      break;

    case "Exit":
      connection.end();
      break;

    }
  });
}

function employeeSearch() {
  var query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    
    console.table(res);
    runSearch();
  });
}

function departmentSearch() {
  inquirer
    .prompt({
      name: "department",
      type: "list",
      message: "What department would you like to search for?",
      choices:[
        "Engineering",
        "Finances",
        "Legal",
        "Sales"
      ]
    })
    .then(function(department_name){
      // console.log(answer.department);
      connection.query("SELECT employee.id, emloyee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ",  function(err, res) {
        if (err) throw err;

        console.table(res);
        runSearch();
      });
    })
}

function managerSearch() {
  inquirer
    .prompt({
      name: "manager",
      type: "list",
      message: "What manager would you like to search for?",
      choices:[
        "Ashley Rodriguez",
        "John Doe",
        "Sarah Lourd",
        "Kevin Tupik"
      ]
    })
    .then(function(answer) {
      // console.log(answer.manager_id);
      connection.query("SELECT manager_id FROM employee",  function(err, res) {
        if (err) throw err;

        console.table(res);
        runSearch();
      });
    })

    // Add employee
    function newEmployee() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?",
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?",
          },
          {
            type: "input",
            name: "role_id",
            message: "What is the id for this employee's role?",
          },
          {
            type: "input",
            name: "manager_id",
            message: "What is the id for this employee's manager",
          },
        ])
        .then(function (answer) {
          connection.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.first_name}", "${answer.last_name}", "${answer.role_id}", "${answer.manager_id}");`,
            function (err, res) {
              if (err) throw err;
            }
          );
          console.log("Employee successfully added");
          prompt();
        });
      }
}