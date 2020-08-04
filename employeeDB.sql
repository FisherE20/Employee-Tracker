DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    title VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary INTEGER(100000) NULL,
    manager VARCHAR(100) NULL,
    PRIMARY KEY (id)

);

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("John", "Doe", "Sales Lead", "Sales", 100000, "Ashley Rodriguez");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, "null");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Kevin", "Tupik", "Software Engineer", "Engineering", 150000, "Ashley Rodriguez");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Malia", "Brown", "Accountant", "Finance", 125000, "null");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, "null");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd");

INSERT INTO employee (first_name, last_name, title, department,salary,manager)
VALUES("Tammer", "Galal", "Software Engineer", "Engineering", 120000, "Kevin Tupik");


