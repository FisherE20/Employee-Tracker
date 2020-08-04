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
  database: "employeeDB"
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