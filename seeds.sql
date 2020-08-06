USE employeesDB;


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mike", "Chan", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kevin", "Tupik", 4, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Malia", "Brown", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 6, NULL );

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tom", "Allen", 7, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tammer", "Galal", 8, 3 );


INSERT INTO roles (title, salary, department_id) 
VALUES ("Sales Lead", 10 , 7);

INSERT INTO roles (title, salary, department_id) 
VALUES ("Salesperson", 80 , 7);

INSERT INTO roles (title, salary, department_id) 
VALUES ("Lead Engineer", 150 , 2);

INSERT INTO roles (title, salary, department_id) 
VALUES ("Software Engineer",120 , 2);

INSERT INTO roles (title, salary, department_id) 
VALUES ("Accountant", 125 , 1);

INSERT INTO roles (title, salary, department_id)
 VALUES ("Legal Team Lead", 250 , 5);

INSERT INTO roles (title, salary, department_id) 
VALUES ("Lawyer", 190 , 5);

INSERT INTO roles (title, salary, department_id) 
VALUES ("Software Engineer", 120 , 2);


INSERT INTO departments(department_name) values ("Acounting");
INSERT INTO departments(department_name) values ("Engineering");
INSERT INTO departments(department_name) values ("Finances");
INSERT INTO departments(department_name) values ("Human Resources");
INSERT INTO departments(department_name) values ("Legal");
INSERT INTO departments(department_name) values ("Marketing");
INSERT INTO departments(department_name) values ("Sales");









