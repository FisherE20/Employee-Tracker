DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE employee (
    id INTEGER(20) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INTEGER (20) NOT NULL,
    manager_id INTEGER(20),
    PRIMARY KEY (id)

);

CREATE TABLE roles (
    id INTEGER(20) AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(10,4) NULL,
    department_id VARCHAR (100),
    PRIMARY KEY (id)

); 

CREATE TABLE departments (
    id INTEGER (100) NOT NULL,
    department_name VARCHAR (30) NOT NULL,
    PRIMARY KEY(id)
);



    
    
    