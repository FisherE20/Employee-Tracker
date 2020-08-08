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
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add Employees",
      "View All Employees",
      "View All Employees by Role",
      "View All Employees by Department",
      "View All Roles",
      "View All Departments",
      "Update An Employee",
      "Add Roll",
      "Add Department",
      "Exit"
    ]

  })

  .then(function(response) {
    switch (response.list){
    case "Add Employees":
      employee();
      break;

    case "Add Roll":
      role();
      break;

    case "Add Department":
      department();
      break;

    case "View All Employees":
      allEmployees();
      break;

    case "View All Employees by Role":
      roleSearch();
      break;

    case "View All Employees by Department":
      departmentSearch();
      break;

    case "View All Roles":
      viewRoles();
      break;
    
    case "View All Departments":
        viewDepartments();
        break;
    case "View All Managers":
          viewManagers();
          break;
    
    case "Update An Employee":
        updateEmployee();
        break;

    case "Exit":
      connection.end();
      break;
    }
  });
}

// Add Employee
  function employee() {
    inquirer. propmt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?"
      },
      {
        type: "list",
        name: "roleName",
        message: "What is this employee's role?",
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engingeer",
          "Software Engingeer",
          "Accountaant",
          "Legal Team Lead",
          "Lawyer"
        ]
      },
      {
        type: "list",
        name: "managerName",
        message: "What is the id for employee's manager?",
        choices: [
          "John Doe",
          "Ashley Rodrigez",
          "Sarah Lourd"
        ]

      },
    
    ])
    .then(function (answer){
      let managerName = manager_id;
      connection.query("INSERT INTO employee SET ?",
       {
         first_name: answer.first_name, 
         last_name: answer.last_name, 
         role_title: answer.title, 
         managerName: answer.managerName
        },
      function (err){
        if (err) throw err;
      });
      runSearch();
    })
  }
// Add role
  function role() {
    connection.query("SELECT * FROM departments", function (err, res){
      if (err) throw err;
      inquirer. prompt([
        {
          name: "title",
          type: "input",
          message: "What is your role title?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary for this role?",
          deault: 0.00
        },
        {
          name: "departmentName",
          type: "list",
          message: "What departemnt is your role in ?",
          choices: deptArr,
        }
      ])
      .then (function (answer) {
        let deptId;
        for (let d=0; d < res.length; d++){
          if(res[d].departments_name == answer.departmentName) {
            deptID = res[d].departments_id;
          }
        }
        connection.query("INSERT INTO roles SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          departments_id: deptId
        },
        function (err){
          if (err) throw err;
        });
        runSearch();
      });
    });
  }  

// Add department
  function department() {
    inquirer.prompt([
      {
        name: "department",
        type: "input",
        message: "What is your departments name?"
      }
    ])
    .then(function (answer) {
      connection.query("INSERT INTO departments SET ?",
      {
        department_names: answer. departments,
      },
      function (err) {
        if (err) throw err;
      });
      runSearch();
    })
  }

// View all employees by department
  function departmentSearch() {
    connection.query(
      `SELECT employee.employee_id, employee.first_name, employee.last_name, departments.department_names FROM employee 
    LEFT JOIN roles ON employee.role_id = roles.role_id
    LEFT JOIN departments ON roles.department_id = departments.department_id 
    ORDER BY departments.department_name`,
      function (err, data) {
        if (err) throw err;
        console.table(data);
        runSearch();
      });
  }

// view all employees by roles
  function roleSearch() {
    connection.query(
      `SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, roles.salary, departments.department_names FROM employee 
      LEFT JOIN roles ON employee.role_id = roles.role_id
      LEFT JOIN departments ON roles.department_id = departments.department_id 
      ORDER BY roles.title`,
      function (err, data) {
        if (err) throw err;
        console.table(data);
        runSearch();
      });
  }

// view all roles
function viewRoles() {
  connection.query(`SELECT * FROM roles`, function (err, data) {
    if (err) throw err;
    console.table(data);
    runSearch();
  });
}

// view all departments
function viewDepartments() {
  connection.query(`SELECT * FROM departments`, function (err, data) {
    if (err) throw err;
    console.table(data);
    runSearch();
  });
}

// view all managers
function viewManagers() {
  connection.query(`SELECT * FROM employee WHERE ? = manager_id`, function (err, data) {
    if (err) throw err;
    console.table(data);
    runSearch();
  });
}

//view all employees
function allEmployees() {
  connection.query(
    `SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title,
  departments.names AS departments,roles.salary,CONCAT(a.first_name, " ", a.last_name) AS manager
  FROM employee
  LEFT JOIN roles ON employee.role_id = roles.role_id
  LEFT JOIN departments ON roles.department_id = departments.department_id
  LEFT JOIN employee a ON a.employee_id = employee.manager_id`,
    function (err, data) {
      if (err) throw err;
      console.table(data);
      runSearch();
    });
}