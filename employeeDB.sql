DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED NOT NULL,
    manager_id INTEGER UNSIGNED,
    PRIMARY KEY (id)

);

CREATE TABLE roles (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(10,4) NOT NULL,
    department_id INTEGER UNSIGNED NOT NULL,
    PRIMARY KEY (id)

); 

CREATE TABLE departments (
    id INT UNSIGNED AUTO_INCREMENT,
    names VARCHAR (30) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);



    
    
    