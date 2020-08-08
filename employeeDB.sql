DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER ,
    FOREIGN KEY(role_id) REFERENCES roles(role_id) ON DELETE CASCADE,
    FOREIGN KEY(manager_id) REFERENCES employee(employee_id) ON DELETE CASCADE

);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,4) NOT NULL,
    department_id INTEGER ,
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE CASCADE

); 

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_names VARCHAR (30) NOT NULL,
    PRIMARY KEY(id)
);



    
    
    